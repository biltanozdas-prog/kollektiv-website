'use client'

import { useState, useEffect } from 'react'
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

function NavLink({
  href, children, active, textColor = '#0A0A0A',
}: {
  href: string; children: React.ReactNode; active: boolean; textColor?: string
}) {
  return (
    <Link
      href={href}
      className={`relative font-sans text-sm tracking-[0.05em] transition-opacity hover:opacity-50 ${active ? 'font-medium' : ''}`}
      style={{ color: textColor }}
    >
      {children}
      {active && (
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow" />
      )}
    </Link>
  )
}

export default function Navbar() {
  const pathname  = usePathname()
  const router    = useRouter()
  const mode      = detectMode(pathname)
  const [open, setOpen]               = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [scrollProgress, setProgress] = useState(0)

  // Transparent hero: Entertainment pages + Tourism overview only
  const isEnt = mode === 'entertainment'
  const isTourismOverview = pathname === '/tourism'
  const isHeroMode = isEnt || isTourismOverview

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    setProgress(0)
    if (!isHeroMode) return

    const update = () => setProgress(Math.min(window.scrollY / 280, 1))
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [pathname, isHeroMode])

  const p = isHeroMode ? scrollProgress : 1

  let navBg: string, borderCol: string, blur: string, textColor: string, textMuted: string
  if (isEnt) {
    navBg     = `rgba(10,10,10,${0.94 * p})`
    borderCol = `rgba(255,255,255,${0.10 * p})`
    blur      = `blur(${8 * p}px)`
    textColor = '#ffffff'
    textMuted = `rgba(255,255,255,${0.45 + 0.25 * p})`
  } else if (isTourismOverview) {
    navBg     = `rgba(248,245,239,${0.90 * p})`
    borderCol = `rgba(0,0,0,${0.06 * p})`
    blur      = `blur(${12 * p}px)`
    textColor = p < 0.5 ? '#ffffff' : '#0A0A0A'
    textMuted = p < 0.5 ? 'rgba(255,255,255,0.70)' : 'rgba(0,0,0,0.60)'
  } else {
    navBg     = 'rgba(248,245,239,0.90)'
    borderCol = 'rgba(0,0,0,0.06)'
    blur      = 'blur(12px)'
    textColor = '#0A0A0A'
    textMuted = 'rgba(0,0,0,0.60)'
  }

  const handleModeSelect = (target: Exclude<Mode, 'none'>) => {
    setOpen(false)
    router.push(`/${target}`)
  }

  const menuBg = isEnt ? '#0A0A0A' : '#FFFFFF'
  const menuText = isEnt ? '#ffffff' : '#0A0A0A'
  const menuBorder = isEnt ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'
  const menuMuted = isEnt ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-none"
        style={{
          backgroundColor: navBg,
          borderBottomColor: borderCol,
          borderBottomWidth: '1px',
          backdropFilter: blur,
          WebkitBackdropFilter: blur,
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-20">
          <div className="flex items-center justify-between h-[68px]">

            {/* LEFT: Logo + mode selector */}
            <div className="flex items-center gap-2 relative">
              <Link href="/" className="group shrink-0 transition-opacity hover:opacity-60" style={{ color: textColor }}>
                <K26Mark size={30} />
              </Link>

              <Link href="/" className="flex items-center gap-0.5 hover:opacity-60 transition-opacity shrink-0">
                <span className="font-sans font-bold text-[15px] tracking-[0.04em]" style={{ color: textColor }}>KOLLEKTIV</span>
                <span className="font-sans font-light text-[15px] tracking-[0.04em] ml-1" style={{ color: textColor }}>26</span>
              </Link>

              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Switch mode"
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all focus:outline-none
                  ${open
                    ? (isEnt ? 'bg-white/10' : 'bg-black/[0.06]')
                    : (isEnt ? 'hover:bg-white/10' : 'hover:bg-black/[0.04]')
                  }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full bg-yellow transition-all shrink-0
                  ${open ? 'scale-125 shadow-[0_0_10px_3px_rgba(232,200,50,0.6)]' : 'hover:scale-110'}`}
                />
                <span
                  className="font-mono text-[11px] tracking-[0.16em] uppercase font-medium"
                  style={{ color: textMuted }}
                >
                  {modeLabel[mode]}
                </span>
              </button>

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
                              ${isActive ? 'bg-yellow/[0.08]' : 'hover:bg-black/[0.04]'}`}
                          >
                            <span className={`w-2 h-2 rounded-full shrink-0 ${isActive ? 'bg-yellow' : 'bg-black/20'}`} />
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

            {/* RIGHT: Desktop nav + hamburger */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-10">
                <NavLink href="/"        active={pathname === '/'}       textColor={textColor}>Home</NavLink>
                <NavLink href="/about"   active={pathname === '/about'}  textColor={textColor}>About</NavLink>
                <NavLink href="/contact" active={pathname === '/contact'} textColor={textColor}>Contact</NavLink>
              </div>

              {/* Hamburger — mobile only */}
              <button
                className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Open menu"
              >
                <span className="w-6 h-0.5 block transition-all" style={{ backgroundColor: textColor }} />
                <span className="w-6 h-0.5 block transition-all" style={{ backgroundColor: textColor }} />
                <span className="w-6 h-0.5 block transition-all" style={{ backgroundColor: textColor }} />
              </button>
            </div>

          </div>
        </div>

        {mode !== 'none' && <SubNav currentMode={mode} scrollProgress={(isEnt || isTourismOverview) ? p : 1} />}
      </nav>

      {/* Mobile full-screen menu — rendered outside <nav> to escape stacking context */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 w-screen h-screen z-[9999] flex flex-col"
            style={{ backgroundColor: menuBg }}
          >
            {/* Top bar */}
            <div
              className="flex items-center justify-between px-6 h-[68px] border-b shrink-0"
              style={{ borderColor: menuBorder }}
            >
              <span
                className="font-sans font-bold text-[15px] tracking-[0.04em]"
                style={{ color: menuText }}
              >
                KOLLEKTIV 26
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 focus:outline-none"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6l-12 12" stroke={menuText} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col flex-1 justify-center px-8">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.07, duration: 0.3 }}
                  className={i < 2 ? 'border-b' : ''}
                  style={{ borderColor: menuBorder }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-sans font-light text-4xl leading-tight hover:opacity-40 transition-opacity block py-5"
                    style={{ color: menuText }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom bar */}
            <div className="px-8 pb-10 shrink-0">
              <span
                className="font-mono text-[9px] tracking-[0.18em] uppercase"
                style={{ color: menuMuted }}
              >
                Istanbul · Aegean · Global
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
