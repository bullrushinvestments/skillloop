import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SkillLoop',
  description: 'SkillLoop is an AI-driven SaaS platform that connects small businesses and e-commerce entrepreneurs with niche experts via on-demand micro-consulting sessions. It aims to bridge the gap between business needs and expert knowledge in a sustainable, remote-friendly way.',
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
