'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export interface Section {
  id: string
  name: string
  title: string | null
  subtitle: string | null
  description: string | null
  content: any
  is_visible: boolean
  order_index: number
  created_at: string
  updated_at: string
}

export interface ContentItem {
  id: string
  section_id: string
  field_name: string
  field_value: string | null
  field_type: string
  order_index: number
  created_at: string
  updated_at: string
}

interface ContentContextType {
  sections: Section[]
  contentItems: ContentItem[]
  loading: boolean
  updateSection: (sectionId: string, updates: Partial<Section>) => Promise<void>
  updateContentItem: (itemId: string, updates: Partial<ContentItem>) => Promise<void>
  toggleSectionVisibility: (sectionId: string) => Promise<void>
  getContentBySection: (sectionName: string) => Record<string, string>
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [sections, setSections] = useState<Section[]>([])
  const [contentItems, setContentItems] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Vérifier si Supabase est configuré
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
        setSections([])
        setContentItems([])
        setLoading(false)
        return
      }

      // Récupérer les sections
      const { data: sectionsData, error: sectionsError } = await supabase
        .from('sections')
        .select('*')
        .order('order_index')

      if (sectionsError) throw sectionsError

      // Récupérer les contenus
      const { data: contentData, error: contentError } = await supabase
        .from('content_items')
        .select('*')
        .order('order_index')

      if (contentError) throw contentError

      setSections(sectionsData || [])
      setContentItems(contentData || [])
    } catch (error) {
      console.error('Error fetching data:', error)
      setSections([])
      setContentItems([])
    } finally {
      setLoading(false)
    }
  }

  const updateSection = async (sectionId: string, updates: Partial<Section>) => {
    try {
      const { error } = await supabase
        .from('sections')
        .update(updates)
        .eq('id', sectionId)

      if (error) throw error

      // Mettre à jour l'état local
      setSections(prev => 
        prev.map(section => 
          section.id === sectionId 
            ? { ...section, ...updates }
            : section
        )
      )
    } catch (error) {
      console.error('Error updating section:', error)
      throw error
    }
  }

  const updateContentItem = async (itemId: string, updates: Partial<ContentItem>) => {
    try {
      const { error } = await supabase
        .from('content_items')
        .update(updates)
        .eq('id', itemId)

      if (error) throw error

      // Mettre à jour l'état local
      setContentItems(prev => 
        prev.map(item => 
          item.id === itemId 
            ? { ...item, ...updates }
            : item
        )
      )
    } catch (error) {
      console.error('Error updating content item:', error)
      throw error
    }
  }

  const toggleSectionVisibility = async (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId)
    if (!section) return

    await updateSection(sectionId, { is_visible: !section.is_visible })
  }

  const getContentBySection = (sectionName: string): Record<string, string> => {
    const section = sections.find(s => s.name === sectionName)
    if (!section) return {}

    const sectionContent = contentItems.filter(item => item.section_id === section.id)
    
    return sectionContent.reduce((acc, item) => {
      acc[item.field_name] = item.field_value || ''
      return acc
    }, {} as Record<string, string>)
  }

  return (
    <ContentContext.Provider value={{
      sections,
      contentItems,
      loading,
      updateSection,
      updateContentItem,
      toggleSectionVisibility,
      getContentBySection
    }}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const context = useContext(ContentContext)
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}
