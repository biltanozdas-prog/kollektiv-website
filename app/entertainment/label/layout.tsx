import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Label & Artist Management',
  description: "A&R, production, release direction and artist management. We don't discover artists. We recognize them. Spotify, Apple Music distribution and rights management.",
  alternates: {
    canonical: 'https://kollektiv26.com/entertainment/label',
  },
  openGraph: {
    title: 'Label & Artist Management — Kollektiv26',
    description: "A&R, production, release direction and artist management. We don't discover artists. We recognize them.",
    url: 'https://kollektiv26.com/entertainment/label',
  },
}

export default function LabelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
