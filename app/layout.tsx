import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Muzads | AI Marketing Tool for Ads, Social Posts & Emails',
  description: 'Launch 10x more content. 75% faster. Muzads turns your website into ads, emails, and social posts. 100s of content pieces generated, while you sleep.',
  keywords: 'AI marketing, content creation, ads, social media, email marketing, automation',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
