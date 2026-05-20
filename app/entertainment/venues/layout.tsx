import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Venues',
  description: 'Venue operations, cultural space development and venue consultation in Istanbul. Opening in 2027. Licensing, design and operational support available now.',
  alternates: {
    canonical: 'https://kollektiv26.com/entertainment/venues',
  },
  openGraph: {
    title: 'Venues — Kollektiv26',
    description: 'Venue operations, cultural space development and venue consultation in Istanbul. Opening in 2027.',
    url: 'https://kollektiv26.com/entertainment/venues',
  },
}

export default function VenuesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
