import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Footer from '@/components/common/Footer'
import Navigation from '@/components/common/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zappipizza – Sabor Artesanal',
  description: 'Las mejores pizzas artesanales de Pudahuel Sur',
  icons: { icon: '/favicon.ico' }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <main className="flex flex-col min-h-screen w-full font-body">
          <Navigation />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
