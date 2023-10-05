import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@total-typescript/ts-reset'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FinBuddy',
  description: 'A playground of Django and Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}