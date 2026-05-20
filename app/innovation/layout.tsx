import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Innovation',
  description: "Where culture meets what's next. Hybrid spaces, collaborative models and cultural tech. Building infrastructure for ventures that don't fit existing categories.",
  alternates: {
    canonical: 'https://kollektiv26.com/innovation',
  },
  openGraph: {
    title: 'Innovation — Kollektiv26',
    description: "Where culture meets what's next. Hybrid spaces, collaborative models and cultural tech.",
    url: 'https://kollektiv26.com/innovation',
  },
}

export default function InnovationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
