import type { Metadata } from 'next'
import Hero from './components/Hero'
import TwoWorldsSplit from './components/TwoWorldsSplit'
import InquiryCTA from './components/InquiryCTA'

export const metadata: Metadata = {
  title: 'Kollektiv26 — Contemporary Cultural Platform',
  description: 'A platform for those who move between worlds. Travel, culture, music and experience in Istanbul, Bodrum and the Aegean. Begin a conversation.',
  alternates: {
    canonical: 'https://kollektiv26.com',
  },
  openGraph: {
    title: 'Kollektiv26 — Contemporary Cultural Platform',
    description: 'A platform for those who move between worlds. Travel, culture, music and experience in Istanbul, Bodrum and the Aegean.',
    url: 'https://kollektiv26.com',
    images: [{
      url: '/og/home.jpg',
      width: 1200,
      height: 630,
      alt: 'Kollektiv26 — Contemporary Cultural Platform',
    }],
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <TwoWorldsSplit />
      <InquiryCTA />
    </main>
  )
}
