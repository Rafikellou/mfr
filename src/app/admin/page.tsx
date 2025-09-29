'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/contexts/AuthContext'
import { useContent, Section, ContentItem } from '@/contexts/ContentContext'
import { useExtendedContent, Page, Component, ComponentField } from '@/contexts/ExtendedContentContext'
import { supabase } from '@/lib/supabase'
import { Eye, EyeOff, Save, LogOut, Settings, UserPlus, Search, FileText, Layers, Globe, Filter } from 'lucide-react'
import Link from 'next/link'

interface LoginForm {
  email: string
  password: string
}

export default function CMSInterface() {
  const { user, isAdmin, signIn, signOut } = useAuth()
  const { sections, contentItems, updateSection, updateContentItem, toggleSectionVisibility, getContentBySection } = useContent()
  const { 
    pages, 
    components, 
    componentFields, 
    updatePage, 
    updateComponent, 
    updateComponentField, 
    togglePageVisibility, 
    toggleComponentVisibility,
    getComponentsByPage,
    getFieldsByComponent,
    getContentByComponent,
    searchContent
  } = useExtendedContent()
  
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activePage, setActivePage] = useState<string | null>(null)
  const [activeComponent, setActiveComponent] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentView, setCurrentView] = useState<'pages' | 'sections' | 'search'>('pages')

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>()

  const onLogin = async (data: LoginForm) => {
    try {
      setLoginError('')
      await signIn(data.email, data.password)
    } catch (error: any) {
      setLoginError(error.message)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const handleContentUpdate = async (itemId: string, value: string) => {
    try {
      await updateContentItem(itemId, { field_value: value })
    } catch (error) {
      console.error('Error updating content:', error)
    }
  }

  const handleSectionUpdate = async (sectionId: string, field: string, value: string) => {
    try {
      await updateSection(sectionId, { [field]: value })
    } catch (error) {
      console.error('Error updating section:', error)
    }
  }

  const handlePageUpdate = async (pageId: string, field: string, value: string) => {
    try {
      await updatePage(pageId, { [field]: value })
    } catch (error) {
      console.error('Error updating page:', error)
    }
  }

  const handleComponentUpdate = async (componentId: string, field: string, value: string) => {
    try {
      await updateComponent(componentId, { [field]: value })
    } catch (error) {
      console.error('Error updating component:', error)
    }
  }

  const handleComponentFieldUpdate = async (fieldId: string, value: string) => {
    try {
      await updateComponentField(fieldId, { field_value: value })
    } catch (error) {
      console.error('Error updating component field:', error)
    }
  }

  // Fonction de recherche
  const searchResults = searchQuery ? searchContent(searchQuery) : null

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Connexion CMS</h2>
            <p className="text-gray-600">Accédez à l'interface d'administration</p>
          </div>

          <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                {...register('email', { required: 'Email requis' })}
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="admin@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <input
                {...register('password', { required: 'Mot de passe requis' })}
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {loginError && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-red-600 text-sm">{loginError}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Se connecter
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link 
              href="/admin/signup" 
              className="flex items-center justify-center text-blue-600 hover:text-blue-700"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Créer un compte
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-red-600 mb-4">
            <Settings className="w-12 h-12 mx-auto mb-2" />
            <h2 className="text-xl font-bold">Accès refusé</h2>
            <p className="text-gray-600">Vous n'avez pas les droits d'administration</p>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Settings className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">CMS Administration</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">{user.email}</span>
              <button
                onClick={handleSignOut}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-4 h-4 mr-1" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation et recherche */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Onglets de navigation */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setCurrentView('pages')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'pages' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Globe className="w-4 h-4 inline mr-2" />
                Pages
              </button>
              <button
                onClick={() => setCurrentView('sections')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'sections' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Layers className="w-4 h-4 inline mr-2" />
                Sections
              </button>
              <button
                onClick={() => setCurrentView('search')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'search' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Search className="w-4 h-4 inline mr-2" />
                Recherche
              </button>
            </div>

            {/* Barre de recherche */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher du contenu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {currentView === 'pages' && 'Pages du site'}
                {currentView === 'sections' && 'Sections'}
                {currentView === 'search' && 'Résultats de recherche'}
              </h2>

              {currentView === 'pages' && (
                <div className="space-y-2">
                  {pages.map((page) => (
                    <div
                      key={page.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        activePage === page.id
                          ? 'bg-blue-50 border border-blue-200'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setActivePage(page.id)
                        setActiveSection(null)
                        setActiveComponent(null)
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{page.title}</h3>
                          <p className="text-sm text-gray-600">{page.route}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            togglePageVisibility(page.id)
                          }}
                          className={`p-1 rounded ${
                            page.is_visible ? 'text-green-600' : 'text-gray-400'
                          }`}
                        >
                          {page.is_visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {currentView === 'sections' && (
                <div className="space-y-2">
                  {sections.map((section) => (
                    <div
                      key={section.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-50 border border-blue-200'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setActiveSection(section.id)
                        setActivePage(null)
                        setActiveComponent(null)
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{section.name}</h3>
                          <p className="text-sm text-gray-600">{section.title || 'Sans titre'}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleSectionVisibility(section.id)
                          }}
                          className={`p-1 rounded ${
                            section.is_visible ? 'text-green-600' : 'text-gray-400'
                          }`}
                        >
                          {section.is_visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {currentView === 'search' && searchResults && (
                <div className="space-y-4">
                  {searchResults.pages.length > 0 && (
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Pages ({searchResults.pages.length})</h3>
                      <div className="space-y-1">
                        {searchResults.pages.map((page) => (
                          <div
                            key={page.id}
                            className="p-2 rounded cursor-pointer hover:bg-gray-100 text-sm"
                            onClick={() => {
                              setActivePage(page.id)
                              setActiveSection(null)
                              setActiveComponent(null)
                              setCurrentView('pages')
                            }}
                          >
                            <Globe className="w-3 h-3 inline mr-2" />
                            {page.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.components.length > 0 && (
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Composants ({searchResults.components.length})</h3>
                      <div className="space-y-1">
                        {searchResults.components.map((component) => (
                          <div
                            key={component.id}
                            className="p-2 rounded cursor-pointer hover:bg-gray-100 text-sm"
                            onClick={() => {
                              setActiveComponent(component.id)
                              setActivePage(null)
                              setActiveSection(null)
                            }}
                          >
                            <Layers className="w-3 h-3 inline mr-2" />
                            {component.title || component.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.fields.length > 0 && (
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Contenus ({searchResults.fields.length})</h3>
                      <div className="space-y-1">
                        {searchResults.fields.map((field) => (
                          <div
                            key={field.id}
                            className="p-2 rounded cursor-pointer hover:bg-gray-100 text-sm"
                            onClick={() => {
                              setActiveComponent(field.component_id)
                              setActivePage(null)
                              setActiveSection(null)
                            }}
                          >
                            <FileText className="w-3 h-3 inline mr-2" />
                            {field.field_label || field.field_name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.pages.length === 0 && searchResults.components.length === 0 && searchResults.fields.length === 0 && (
                    <p className="text-gray-500 text-sm">Aucun résultat trouvé</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Affichage selon la sélection */}
            {activePage && (
              <PageEditor 
                page={pages.find(p => p.id === activePage)!}
                components={components}
                componentFields={componentFields}
                onPageUpdate={handlePageUpdate}
                onComponentUpdate={handleComponentUpdate}
                onComponentFieldUpdate={handleComponentFieldUpdate}
                getComponentsByPage={getComponentsByPage}
                getFieldsByComponent={getFieldsByComponent}
                onComponentSelect={(componentId) => setActiveComponent(componentId)}
              />
            )}

            {activeSection && (
              <SectionEditor 
                section={sections.find(s => s.id === activeSection)!}
                contentItems={contentItems.filter(item => item.section_id === activeSection)}
                onSectionUpdate={handleSectionUpdate}
                onContentUpdate={handleContentUpdate}
              />
            )}

            {activeComponent && (
              <ComponentEditor 
                component={components.find(c => c.id === activeComponent)!}
                componentFields={componentFields.filter(cf => cf.component_id === activeComponent)}
                onComponentUpdate={handleComponentUpdate}
                onComponentFieldUpdate={handleComponentFieldUpdate}
              />
            )}

            {!activePage && !activeSection && !activeComponent && (
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-lg font-medium text-gray-900 mb-2">
                  {currentView === 'search' && searchQuery ? 'Aucun élément sélectionné' : 'Sélectionnez un élément'}
                </h2>
                <p className="text-gray-600">
                  {currentView === 'search' && searchQuery 
                    ? 'Cliquez sur un résultat de recherche pour l\'éditer'
                    : 'Choisissez une page, section ou composant dans le menu de gauche pour commencer l\'édition'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Composant pour éditer une page
function PageEditor({ 
  page, 
  components, 
  componentFields, 
  onPageUpdate, 
  onComponentUpdate, 
  onComponentFieldUpdate,
  getComponentsByPage,
  getFieldsByComponent,
  onComponentSelect 
}: {
  page: Page
  components: Component[]
  componentFields: ComponentField[]
  onPageUpdate: (pageId: string, field: string, value: string) => Promise<void>
  onComponentUpdate: (componentId: string, field: string, value: string) => Promise<void>
  onComponentFieldUpdate: (fieldId: string, value: string) => Promise<void>
  getComponentsByPage: (pageName: string) => Component[]
  getFieldsByComponent: (componentName: string) => ComponentField[]
  onComponentSelect: (componentId: string) => void
}) {
  const pageComponents = getComponentsByPage(page.name)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Édition: {page.title}
        </h2>

        {/* Informations de la page */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Titre
            </label>
            <input
              type="text"
              defaultValue={page.title}
              onChange={(e) => onPageUpdate(page.id, 'title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Route
            </label>
            <input
              type="text"
              defaultValue={page.route}
              onChange={(e) => onPageUpdate(page.id, 'route', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              defaultValue={page.description || ''}
              onChange={(e) => onPageUpdate(page.id, 'description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Composants de la page */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Composants</h3>
          <div className="space-y-4">
            {pageComponents.map((component) => {
              const fields = getFieldsByComponent(component.name)
              return (
                <div key={component.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{component.title || component.name}</h4>
                    <button
                      onClick={() => onComponentSelect(component.id)}
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      Éditer
                    </button>
                  </div>
                  
                  {fields.length > 0 && (
                    <div className="text-sm text-gray-600">
                      {fields.length} champ{fields.length > 1 ? 's' : ''} éditable{fields.length > 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// Composant pour éditer une section (ancien système)
function SectionEditor({ 
  section, 
  contentItems, 
  onSectionUpdate, 
  onContentUpdate 
}: {
  section: Section
  contentItems: ContentItem[]
  onSectionUpdate: (sectionId: string, field: string, value: string) => Promise<void>
  onContentUpdate: (itemId: string, value: string) => Promise<void>
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Édition: {section.name}
        </h2>
      </div>

      {/* Informations de la section */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Titre
          </label>
          <input
            type="text"
            defaultValue={section.title || ''}
            onChange={(e) => onSectionUpdate(section.id, 'title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sous-titre
          </label>
          <input
            type="text"
            defaultValue={section.subtitle || ''}
            onChange={(e) => onSectionUpdate(section.id, 'subtitle', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            defaultValue={section.description || ''}
            onChange={(e) => onSectionUpdate(section.id, 'description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Contenus dynamiques */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Contenus</h3>
        <div className="space-y-4">
          {contentItems.map((item) => (
            <div key={item.id}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {item.field_name}
              </label>
              {item.field_type === 'textarea' ? (
                <textarea
                  defaultValue={item.field_value || ''}
                  onChange={(e) => onContentUpdate(item.id, e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <input
                  type="text"
                  defaultValue={item.field_value || ''}
                  onChange={(e) => onContentUpdate(item.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Composant pour éditer un composant
function ComponentEditor({ 
  component, 
  componentFields, 
  onComponentUpdate, 
  onComponentFieldUpdate 
}: {
  component: Component
  componentFields: ComponentField[]
  onComponentUpdate: (componentId: string, field: string, value: string) => Promise<void>
  onComponentFieldUpdate: (fieldId: string, value: string) => Promise<void>
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Édition: {component.title || component.name}
        </h2>
      </div>

      {/* Informations du composant */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Titre
          </label>
          <input
            type="text"
            defaultValue={component.title || ''}
            onChange={(e) => onComponentUpdate(component.id, 'title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            defaultValue={component.description || ''}
            onChange={(e) => onComponentUpdate(component.id, 'description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Champs du composant */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Champs de contenu</h3>
        <div className="space-y-4">
          {componentFields.map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.field_label || field.field_name}
              </label>
              {field.field_type === 'textarea' ? (
                <textarea
                  defaultValue={field.field_value || ''}
                  onChange={(e) => onComponentFieldUpdate(field.id, e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <input
                  type="text"
                  defaultValue={field.field_value || ''}
                  onChange={(e) => onComponentFieldUpdate(field.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}