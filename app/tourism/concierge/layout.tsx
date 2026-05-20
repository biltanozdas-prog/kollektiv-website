import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Concierge Services',
  description: 'Helicopter transfers, private flights, yacht charters, villas and cultural access across Bodrum and the Aegean. Everything handled. Nothing overlooked.',
  alternates: {
    canonical: 'https://kollektiv26.com/tourism/concierge',
  },
  openGraph: {
    title: 'Concierge Services — Kollektiv26',
    description: 'Helicopter transfers, private flights, yacht charters, villas and cultural access across Bodrum and the Aegean.',
    url: 'https://kollektiv26.com/tourism/concierge',
  },
}

export default function ConciergeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
