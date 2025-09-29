import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import { ContentProvider } from '@/contexts/ContentContext'
import { ExtendedContentProvider } from '@/contexts/ExtendedContentContext'

export const metadata: Metadata = {
  title: 'MFR — Détections, tournois & stages de football jeunes (U13–U19)',
  description: 'Montpellier Football Racing : révélateur de talents. Détections officielles, tournois élite et stages de perfectionnement pour jeunes joueurs. Inscriptions en ligne.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AuthProvider>
          <ContentProvider>
            <ExtendedContentProvider>
              {children}
            </ExtendedContentProvider>
          </ContentProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
