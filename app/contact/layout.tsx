import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Start here. Whether you're planning a journey, commissioning an experience, or simply exploring what's possible — we respond to every inquiry personally.",
  alternates: {
    canonical: 'https://kollektiv26.com/contact',
  },
  openGraph: {
    title: 'Contact Kollektiv26 — Begin a Conversation',
    description: "Start here. Whether you're planning a journey, commissioning an experience, or simply exploring what's possible.",
    url: 'https://kollektiv26.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
