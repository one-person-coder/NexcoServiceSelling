import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexco',
  description: 'Nexco',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
