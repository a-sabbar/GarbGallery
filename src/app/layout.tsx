import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Garb Gallery',
  description: 'Clothing for the modern era',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo-w.svg',
        href: '/logo-w.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-b.svg',
        href: '/logo-b.svg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
