import type { Metadata } from 'next'
import './globals.css'
import { SearchProvider } from './search-context'


export const metadata: Metadata = {
  title: 'RecomendAI - Recomendador de Restaurantes',
  description: 'Encuentra tu próximo restaurante favorito con ayuda de la IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  )
}
