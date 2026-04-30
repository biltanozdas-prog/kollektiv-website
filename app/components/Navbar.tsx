'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import K26Mark from './K26Mark'
import SubNav from './SubNav'

type Mode = 'none' | 'tourism' | 'entertainment' | 'innovation'

function detectMode(pathname: string): Mode {
  if (pathname.startsWith('/tourism'))       return 'tourism'
  if (pathname.startsWith('/entertainment')) return 'entertainment'
  if (pathname.startsWith('/innovation'))    return 'innovation'
  return 'none'
}

const modeLabel: Record<Mode, string> = {
  none:          'WELCOME',
  tourism:       'TOURISM',
  entertainment: 'ENTERTAINMENT',
  innovation:    'INNOVATION',
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      href={href}
      className={`relative font-sans text-sm tracking-[0.05em] text-black transition-opacity hover:opacity-50 ${active ? 'font-medium' : ''}`}
    >
      {children}
      {active && (
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow" />
      )}
    </Link>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const router   = useRouter()
  const mode     = detectMode(pathname)
  const [open, setOpen] = useState(false)

  const handleModeSelect = (target: Exclude<Mode, 'none'>) => {
    setOpen(false)
    router.push(`/${target}`)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-offwhite/90 backdrop-blur-md border-b border-black/[0.06]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-14">
        <div className="flex items-center justify-between h-[68px]">

          {/* LEFT: Logo + inline mode selector */}
          <div className="flex items-center gap-2 relative">
            <Link href="/" className="group shrink-0">
              <K26Mark size={30} className="text-black transition-opacity group-hover:opacity-60" />
            </Link>

            <Link href="/" className="flex items-center gap-0.5 hover:opacity-60 transition-opacity shrink-0">
              <span className="font-sans font-bold text-[15px] tracking-[0.04em]">KOLLEKTIV</span>
              <span className="font-sans font-light text-[15px] tracking-[0.04em] ml-1">26</span>
            </Link>

            {/* Mode selector button */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Switch mode"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all focus:outline-none
                ${open ? 'bg-black/[0.06]' : 'hover:bg-black/[0.04]'}`}
            >
              <span className={`w-2.5 h-2.5 rounded-full bg-yellow transition-all shrink-0
                ${open ? 'scale-125 shadow-[0_0_10px_3px_rgba(232,200,50,0.6)]' : 'hover:scale-110'}`}
              />
              <span className="font-mono text-[11px] tracking-[0.16em] text-black/60 uppercase font-medium">
                {modeLabel[mode]}
              </span>
            </button>

            {/* Mode dropdown — bigger, more prominent */}
            <AnimatePresence>
              {open && (
                <>
                  <div className="fixed inset-0 z-[55]" onClick={() => setOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-[88px] mt-2 w-[230px] bg-white rounded-xl shadow-2xl border border-black/[0.07] overflow-hidden z-[60]"
                  >
                    {(['tourism', 'entertainment', 'innovation'] as const).map((m) => {
                      const isActive = mode === m
                      return (
                        <button
                          key={m}
                          onClick={() => handleModeSelect(m)}
                          className={`w-full px-5 py-4 text-left flex items-center gap-3 transition-colors
                            ${isActive
                              ? 'bg-yellow/[0.08]'
                              : 'hover:bg-black/[0.04]'
                            }`}
                        >
                          <span className={`w-2 h-2 rounded-full shrink-0 transition-colors ${isActive ? 'bg-yellow' : 'bg-black/20'}`} />
                          <span className={`font-sans text-[13px] tracking-[0.06em] uppercase ${isActive ? 'font-semibold text-black' : 'text-black/70'}`}>
                            {m === 'tourism' ? 'Tourism' : m === 'entertainment' ? 'Entertainment' : 'Innovation'}
                          </span>
                        </button>
                      )
                    })}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Global nav */}
          <div className="hidden lg:flex items-center gap-10">
            <NavLink href="/"        active={pathname === '/'}>Home</NavLink>
            <NavLink href="/about"   active={pathname === '/about'}>About</NavLink>
            <NavLink href="/contact" active={pathname === '/contact'}>Contact</NavLink>
          </div>

        </div>
      </div>

      {mode !== 'none' && <SubNav currentMode={mode} />}
    </nav>
  )
}
