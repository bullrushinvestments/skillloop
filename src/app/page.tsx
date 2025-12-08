import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillLoop',
  description: 'SkillLoop is an AI-driven SaaS platform that connects small businesses and e-commerce entrepreneurs with niche experts via on-demand micro-consulting sessions. It aims to bridge the gap between business needs and expert knowledge in a sustainable, remote-friendly way.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillLoop</h1>
      <p className="mt-4 text-lg">SkillLoop is an AI-driven SaaS platform that connects small businesses and e-commerce entrepreneurs with niche experts via on-demand micro-consulting sessions. It aims to bridge the gap between business needs and expert knowledge in a sustainable, remote-friendly way.</p>
    </main>
  )
}
