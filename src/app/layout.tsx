import { SidebarLayout } from '@/components/Layouts/layout-sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Just Finished',
  description: 'List yours finished games!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  )
}
