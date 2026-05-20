import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Entertainment',
  description: 'Sound-led cultural systems. Events, artist development and venue operations in Istanbul and the Aegean. From concept to close — a night is temporary, the trace is designed.',
  alternates: {
    canonical: 'https://kollektiv26.com/entertainment',
  },
  openGraph: {
    title: 'Kollektiv26 Entertainment — Sound-Led Cultural Systems',
    description: 'Sound-led cultural systems. Events, artist development and venue operations in Istanbul and the Aegean.',
    url: 'https://kollektiv26.com/entertainment',
    images: [{
      url: '/og/entertainment.jpg',
      width: 1200,
      height: 630,
      alt: 'Kollektiv26 Entertainment — Sound-led cultural events Istanbul',
    }],
  },
}

export default function EntertainmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
