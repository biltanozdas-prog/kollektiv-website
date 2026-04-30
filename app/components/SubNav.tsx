'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Mode = 'tourism' | 'entertainment' | 'innovation'

const navItems: Record<Mode, { label: string; href: string }[]> = {
  tourism: [
    { label: 'Overview',    href: '/tourism' },
    { label: 'Concierge',  href: '/tourism/concierge' },
    { label: 'Itineraries', href: '/tourism/itineraries' },
    { label: 'Approach',   href: '/tourism/approach' },
    { label: 'Enquire',    href: '/contact' },
  ],
  entertainment: [
    { label: 'Overview', href: '/entertainment' },
    { label: 'Events',   href: '/entertainment/events' },
    { label: 'Label',    href: '/entertainment/label' },
    { label: 'Venues',   href: '/entertainment/venues' },
  ],
  innovation: [
    { label: 'Overview', href: '/innovation' },
  ],
}

export default function SubNav({ currentMode }: { currentMode: Mode }) {
  const pathname = usePathname()
  const items = navItems[currentMode]
  return (
    <div className="border-t bg-offwhite/95 border-black/[0.05]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-14">
        <div className="flex items-center gap-8 h-10">
          {items.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-sans text-[12px] tracking-[0.04em] transition-colors flex items-center gap-1.5
                  ${isActive ? 'text-black font-medium' : 'text-mg hover:text-black'}`}
              >
                {isActive && <span className="w-1 h-1 rounded-full bg-yellow shrink-0" />}
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
