'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/contexts/AuthContext'
import { useContent, Section, ContentItem } from '@/contexts/ContentContext'
import { supabase } from '@/lib/supabase'
import { Eye, EyeOff, Save, LogOut, Settings } from 'lucide-react'

interface LoginForm {
  email: string
  password: string
}

export default function CMSInterface() {
  const { user, isAdmin, signIn, signOut } = useAuth()
  const { sections, contentItems, updateSection, updateContentItem, toggleSectionVisibility, getContentBySection } = useContent()
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [loginError, setLoginError] = useState('')

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Liste des sections */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Sections</h2>
              <div className="space-y-2">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-50 border border-blue-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveSection(section.id)}
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
            </div>
          </div>

          {/* Main content - Édition */}
          <div className="lg:col-span-2">
            {activeSection ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                {(() => {
                  const section = sections.find(s => s.id === activeSection)
                  const sectionContent = contentItems.filter(item => item.section_id === activeSection)
                  
                  if (!section) return null

                  return (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">
                          Édition: {section.name}
                        </h2>
                        <button
                          onClick={() => setIsEditing(!isEditing)}
                          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          {isEditing ? 'Sauvegarder' : 'Modifier'}
                        </button>
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
                            onChange={(e) => handleSectionUpdate(section.id, 'title', e.target.value)}
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
                            onChange={(e) => handleSectionUpdate(section.id, 'subtitle', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                          </label>
                          <textarea
                            defaultValue={section.description || ''}
                            onChange={(e) => handleSectionUpdate(section.id, 'description', e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* Contenus dynamiques */}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Contenus</h3>
                        <div className="space-y-4">
                          {sectionContent.map((item) => (
                            <div key={item.id}>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                {item.field_name}
                              </label>
                              {item.field_type === 'textarea' ? (
                                <textarea
                                  defaultValue={item.field_value || ''}
                                  onChange={(e) => handleContentUpdate(item.id, e.target.value)}
                                  rows={3}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              ) : (
                                <input
                                  type="text"
                                  defaultValue={item.field_value || ''}
                                  onChange={(e) => handleContentUpdate(item.id, e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-lg font-medium text-gray-900 mb-2">
                  Sélectionnez une section
                </h2>
                <p className="text-gray-600">
                  Choisissez une section dans le menu de gauche pour commencer l'édition
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
