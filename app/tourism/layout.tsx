import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tourism & Concierge',
  description: 'Private travel, curated stays and concierge services across the Aegean, Bodrum and Istanbul. We work from conversation, not catalogues. Begin an inquiry.',
  alternates: {
    canonical: 'https://kollektiv26.com/tourism',
  },
  openGraph: {
    title: 'Kollektiv26 Tourism & Concierge — Aegean, Bodrum, Istanbul',
    description: 'Private travel, curated stays and concierge services across the Aegean, Bodrum and Istanbul.',
    url: 'https://kollektiv26.com/tourism',
    images: [{
      url: '/og/tourism.jpg',
      width: 1200,
      height: 630,
      alt: 'Kollektiv26 Tourism & Concierge — Aegean coast',
    }],
  },
}

export default function TourismLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
