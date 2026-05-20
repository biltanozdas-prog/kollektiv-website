import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Approach to Travel',
  description: 'How we design journeys. Not a checklist, not a template — travel built around how you want to feel. From conversation to execution, we handle everything.',
  alternates: {
    canonical: 'https://kollektiv26.com/tourism/approach',
  },
  openGraph: {
    title: 'Our Approach to Travel — Kollektiv26',
    description: 'How we design journeys. Not a checklist, not a template — travel built around how you want to feel.',
    url: 'https://kollektiv26.com/tourism/approach',
  },
}

export default function ApproachLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
