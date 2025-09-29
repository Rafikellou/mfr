'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export interface Page {
  id: string
  name: string
  title: string
  route: string
  description: string | null
  is_visible: boolean
  order_index: number
  created_at: string
  updated_at: string
}

export interface Component {
  id: string
  name: string
  title: string | null
  description: string | null
  component_type: string
  is_visible: boolean
  order_index: number
  created_at: string
  updated_at: string
}

export interface PageComponent {
  id: string
  page_id: string
  component_id: string
  order_index: number
  is_visible: boolean
  created_at: string
  updated_at: string
}

export interface ComponentField {
  id: string
  component_id: string
  field_name: string
  field_value: string | null
  field_type: string
  field_label: string | null
  field_description: string | null
  order_index: number
  is_required: boolean
  created_at: string
  updated_at: string
}

interface ExtendedContentContextType {
  pages: Page[]
  components: Component[]
  pageComponents: PageComponent[]
  componentFields: ComponentField[]
  loading: boolean
  updatePage: (pageId: string, updates: Partial<Page>) => Promise<void>
  updateComponent: (componentId: string, updates: Partial<Component>) => Promise<void>
  updatePageComponent: (pageComponentId: string, updates: Partial<PageComponent>) => Promise<void>
  updateComponentField: (fieldId: string, updates: Partial<ComponentField>) => Promise<void>
  togglePageVisibility: (pageId: string) => Promise<void>
  toggleComponentVisibility: (componentId: string) => Promise<void>
  getComponentsByPage: (pageName: string) => Component[]
  getFieldsByComponent: (componentName: string) => ComponentField[]
  getContentByComponent: (componentName: string) => Record<string, string>
  searchContent: (query: string) => {
    pages: Page[]
    components: Component[]
    fields: ComponentField[]
  }
}

const ExtendedContentContext = createContext<ExtendedContentContextType | undefined>(undefined)

export function ExtendedContentProvider({ children }: { children: React.ReactNode }) {
  const [pages, setPages] = useState<Page[]>([])
  const [components, setComponents] = useState<Component[]>([])
  const [pageComponents, setPageComponents] = useState<PageComponent[]>([])
  const [componentFields, setComponentFields] = useState<ComponentField[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Vérifier si Supabase est configuré
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
        setPages([])
        setComponents([])
        setPageComponents([])
        setComponentFields([])
        setLoading(false)
        return
      }

      // Récupérer toutes les données
      const [pagesResult, componentsResult, pageComponentsResult, componentFieldsResult] = await Promise.all([
        supabase.from('pages').select('*').order('order_index'),
        supabase.from('components').select('*').order('order_index'),
        supabase.from('page_components').select('*').order('order_index'),
        supabase.from('component_fields').select('*').order('order_index')
      ])

      if (pagesResult.error) throw pagesResult.error
      if (componentsResult.error) throw componentsResult.error
      if (pageComponentsResult.error) throw pageComponentsResult.error
      if (componentFieldsResult.error) throw componentFieldsResult.error

      setPages(pagesResult.data || [])
      setComponents(componentsResult.data || [])
      setPageComponents(pageComponentsResult.data || [])
      setComponentFields(componentFieldsResult.data || [])
    } catch (error) {
      console.error('Error fetching extended data:', error)
      setPages([])
      setComponents([])
      setPageComponents([])
      setComponentFields([])
    } finally {
      setLoading(false)
    }
  }

  const updatePage = async (pageId: string, updates: Partial<Page>) => {
    try {
      const { error } = await supabase
        .from('pages')
        .update(updates)
        .eq('id', pageId)

      if (error) throw error

      setPages(prev => 
        prev.map(page => 
          page.id === pageId 
            ? { ...page, ...updates }
            : page
        )
      )
    } catch (error) {
      console.error('Error updating page:', error)
      throw error
    }
  }

  const updateComponent = async (componentId: string, updates: Partial<Component>) => {
    try {
      const { error } = await supabase
        .from('components')
        .update(updates)
        .eq('id', componentId)

      if (error) throw error

      setComponents(prev => 
        prev.map(component => 
          component.id === componentId 
            ? { ...component, ...updates }
            : component
        )
      )
    } catch (error) {
      console.error('Error updating component:', error)
      throw error
    }
  }

  const updatePageComponent = async (pageComponentId: string, updates: Partial<PageComponent>) => {
    try {
      const { error } = await supabase
        .from('page_components')
        .update(updates)
        .eq('id', pageComponentId)

      if (error) throw error

      setPageComponents(prev => 
        prev.map(pc => 
          pc.id === pageComponentId 
            ? { ...pc, ...updates }
            : pc
        )
      )
    } catch (error) {
      console.error('Error updating page component:', error)
      throw error
    }
  }

  const updateComponentField = async (fieldId: string, updates: Partial<ComponentField>) => {
    try {
      const { error } = await supabase
        .from('component_fields')
        .update(updates)
        .eq('id', fieldId)

      if (error) throw error

      setComponentFields(prev => 
        prev.map(field => 
          field.id === fieldId 
            ? { ...field, ...updates }
            : field
        )
      )
    } catch (error) {
      console.error('Error updating component field:', error)
      throw error
    }
  }

  const togglePageVisibility = async (pageId: string) => {
    const page = pages.find(p => p.id === pageId)
    if (!page) return

    await updatePage(pageId, { is_visible: !page.is_visible })
  }

  const toggleComponentVisibility = async (componentId: string) => {
    const component = components.find(c => c.id === componentId)
    if (!component) return

    await updateComponent(componentId, { is_visible: !component.is_visible })
  }

  const getComponentsByPage = (pageName: string): Component[] => {
    const page = pages.find(p => p.name === pageName)
    if (!page) return []

    const pageComponentIds = pageComponents
      .filter(pc => pc.page_id === page.id && pc.is_visible)
      .sort((a, b) => a.order_index - b.order_index)
      .map(pc => pc.component_id)

    return components
      .filter(c => pageComponentIds.includes(c.id))
      .sort((a, b) => {
        const aIndex = pageComponents.find(pc => pc.component_id === a.id && pc.page_id === page.id)?.order_index || 0
        const bIndex = pageComponents.find(pc => pc.component_id === b.id && pc.page_id === page.id)?.order_index || 0
        return aIndex - bIndex
      })
  }

  const getFieldsByComponent = (componentName: string): ComponentField[] => {
    const component = components.find(c => c.name === componentName)
    if (!component) return []

    return componentFields
      .filter(cf => cf.component_id === component.id)
      .sort((a, b) => a.order_index - b.order_index)
  }

  const getContentByComponent = (componentName: string): Record<string, string> => {
    const component = components.find(c => c.name === componentName)
    if (!component) return {}

    const componentContent = componentFields.filter(field => field.component_id === component.id)
    
    return componentContent.reduce((acc, field) => {
      acc[field.field_name] = field.field_value || ''
      return acc
    }, {} as Record<string, string>)
  }

  const searchContent = (query: string) => {
    const lowercaseQuery = query.toLowerCase()
    
    const filteredPages = pages.filter(page => 
      page.title.toLowerCase().includes(lowercaseQuery) ||
      page.description?.toLowerCase().includes(lowercaseQuery) ||
      page.name.toLowerCase().includes(lowercaseQuery)
    )

    const filteredComponents = components.filter(component => 
      component.title?.toLowerCase().includes(lowercaseQuery) ||
      component.description?.toLowerCase().includes(lowercaseQuery) ||
      component.name.toLowerCase().includes(lowercaseQuery)
    )

    const filteredFields = componentFields.filter(field => 
      field.field_label?.toLowerCase().includes(lowercaseQuery) ||
      field.field_value?.toLowerCase().includes(lowercaseQuery) ||
      field.field_name.toLowerCase().includes(lowercaseQuery)
    )

    return {
      pages: filteredPages,
      components: filteredComponents,
      fields: filteredFields
    }
  }

  return (
    <ExtendedContentContext.Provider value={{
      pages,
      components,
      pageComponents,
      componentFields,
      loading,
      updatePage,
      updateComponent,
      updatePageComponent,
      updateComponentField,
      togglePageVisibility,
      toggleComponentVisibility,
      getComponentsByPage,
      getFieldsByComponent,
      getContentByComponent,
      searchContent
    }}>
      {children}
    </ExtendedContentContext.Provider>
  )
}

export function useExtendedContent() {
  const context = useContext(ExtendedContentContext)
  if (context === undefined) {
    throw new Error('useExtendedContent must be used within an ExtendedContentProvider')
  }
  return context
}
