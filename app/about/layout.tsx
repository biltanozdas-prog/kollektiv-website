import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Founded in Istanbul. Operating globally. Travel, culture, music and experience as a continuous field defined by selection, atmosphere and intention.',
  alternates: {
    canonical: 'https://kollektiv26.com/about',
  },
  openGraph: {
    title: 'About Kollektiv26 — Contemporary Cultural System',
    description: 'Founded in Istanbul. Operating globally. Travel, culture, music and experience as a continuous field defined by selection, atmosphere and intention.',
    url: 'https://kollektiv26.com/about',
    images: [{
      url: '/og/about.jpg',
      width: 1200,
      height: 630,
      alt: 'Kollektiv26 — Contemporary cultural platform, Istanbul',
    }],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
