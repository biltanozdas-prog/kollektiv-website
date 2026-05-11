'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Mode = 'tourism' | 'entertainment' | 'innovation'

const navItems: Record<Mode, { label: string; href: string }[]> = {
  tourism: [
    { label: 'Overview',   href: '/tourism' },
    { label: 'Concierge', href: '/tourism/concierge' },
    { label: 'Approach',  href: '/tourism/approach' },
    { label: 'Enquire',   href: '/contact' },
  ],
  entertainment: [
    { label: 'Overview', href: '/entertainment' },
    { label: 'Events',   href: '/entertainment/events' },
    { label: 'Label',    href: '/entertainment/label' },
    { label: 'Venues',   href: '/entertainment/venues' },
  ],
  innovation: [],
}

export default function SubNav({ currentMode, scrollProgress = 1 }: { currentMode: Mode; scrollProgress?: number }) {
  const pathname = usePathname()
  const items = navItems[currentMode]
  if (!items.length) return null
  const isEnt = currentMode === 'entertainment'
  const p = scrollProgress

  return (
    <div
      className={`border-t ${isEnt ? '' : (p >= 1 ? 'bg-offwhite/95 border-black/[0.05]' : '')}`}
      style={isEnt ? {
        backgroundColor: `rgba(10,10,10,${0.92 * p})`,
        borderTopColor: `rgba(255,255,255,${0.08 * p})`,
      } : p < 1 ? {
        backgroundColor: `rgba(248,245,239,${0.92 * p})`,
        borderTopColor: `rgba(0,0,0,${0.05 * p})`,
      } : undefined}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-14">
        <div className="flex items-center gap-8 h-10">
          {items.map((item) => {
            const isActive = pathname === item.href
            if (isEnt) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-sans text-[12px] tracking-[0.04em] transition-colors flex items-center gap-1.5 ${isActive ? 'font-medium' : ''}`}
                  style={{ color: isActive ? '#ffffff' : `rgba(255,255,255,${0.45 + 0.25 * p})` }}
                >
                  {isActive && <span className="w-1 h-1 rounded-full bg-yellow shrink-0" />}
                  {item.label}
                </Link>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-sans text-[12px] tracking-[0.04em] transition-colors flex items-center gap-1.5 ${isActive ? 'font-medium' : ''}`}
                style={{
                  color: p < 0.5
                    ? (isActive ? '#ffffff' : 'rgba(255,255,255,0.65)')
                    : (isActive ? '#0A0A0A' : 'rgba(0,0,0,0.55)'),
                }}
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
