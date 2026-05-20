import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Sound-led gatherings, corporate events, launches and cultural activations in Istanbul and the Aegean. We build what goes inside the frame — from concept to close.',
  alternates: {
    canonical: 'https://kollektiv26.com/entertainment/events',
  },
  openGraph: {
    title: 'Events — Kollektiv26',
    description: 'Sound-led gatherings, corporate events, launches and cultural activations. From concept to close.',
    url: 'https://kollektiv26.com/entertainment/events',
  },
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
