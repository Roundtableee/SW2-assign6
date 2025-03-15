import './globals.css'
import React from 'react'
import { Metadata } from 'next'
import TopMenu from '@/components/TopMenu'

export const metadata: Metadata = {
  title: 'My Venue Explorer',
  description: 'A simple venue booking site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TopMenu />
        <main>{children}</main>
      </body>
    </html>
  )
}