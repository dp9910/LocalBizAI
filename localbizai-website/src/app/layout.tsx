import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LocalBizAI - AI for Small Business That Actually Works',
  description: 'Stop drowning in AI tool chaos. Get enterprise-level AI with small business pricing and guidance that actually works.',
  keywords: ['AI for small business', 'local business AI', 'small business automation', 'AI implementation'],
  authors: [{ name: 'LocalBizAI' }],
  openGraph: {
    title: 'LocalBizAI - AI for Small Business That Actually Works',
    description: 'Stop drowning in AI tool chaos. Get enterprise-level AI with small business pricing and guidance that actually works.',
    type: 'website',
  },
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