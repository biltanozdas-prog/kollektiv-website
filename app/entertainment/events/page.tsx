'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import K26Mark from '../../components/K26Mark'

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Bars({ heights, className = '' }: { heights: number[]; className?: string }) {
  return (
    <div className={`flex items-end gap-[2px] ${className}`}>
      {heights.map((h, i) => (
        <div key={i} className="w-[1.5px] bg-current" style={{ height: `${h}px` }} />
      ))}
    </div>
  )
}

const SIGNAL = [4, 8, 5, 10, 6, 3, 9, 5, 12, 4, 7, 6]

export default function EventsPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow selection:text-black">

      {/* ── 01 HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-black overflow-hidden flex flex-col"
        style={{ minHeight: 'calc(100vh + 108px)', marginTop: '-108px' }}
      >
        <img
          src="/images/01-entertainment-venue-hero-wide.jpg.png"
          alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.50, filter: 'grayscale(50%) contrast(1.15)' }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(232,200,50,0.20) 0%, transparent 60%)' }}
        />
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.05) 25%, rgba(10,10,10,0.05) 50%, rgba(10,10,10,0.98) 93%, rgba(10,10,10,1.0) 100%)' }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="flex-1 min-h-[220px] lg:min-h-[280px]" />
        <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-8 lg:px-16 pb-28 lg:pb-40">
          <div className="lg:max-w-[60%]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" as const }}
            >
              <p className="font-mono text-[10px] text-white/40 tracking-[0.28em] uppercase mb-8">
                01 — Events
              </p>
              <h1
                className="font-sans font-bold text-white leading-[0.88] tracking-tighter mb-8"
                style={{ fontSize: 'clamp(3rem, 7vw, 7.5rem)' }}
              >
                AN EVENT IS<br />
                A CONTAINER.<br />
                WE BUILD<br />
                WHAT GOES INSIDE.
              </h1>
              <p className="font-sans text-white/50 text-base leading-relaxed mb-12 max-w-[36ch]">
                A concert, a launch, a night — these are frames.<br />
                We focus on what fills them.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-white border border-white/30 px-7 py-3.5 hover:bg-white hover:text-black transition-colors duration-300"
              >
                PLAN A NIGHT <ArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02 INTRO ─────────────────────────────────────────────────────────── */}
      <section className="bg-offwhite relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dots-ev" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1" fill="#0A0A0A" opacity="0.07" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-ev)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-16 py-24 lg:py-36 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-[1.5px] bg-yellow" />
                <span className="font-mono text-[10px] text-mg tracking-[0.28em] uppercase">The Format</span>
              </div>
              <h2
                className="font-sans font-bold text-black leading-[0.88] tracking-tighter"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)' }}
              >
                FROM<br />
                CONCEPT<br />
                TO CLOSE.
              </h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" as const }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col lg:flex-row gap-10 items-start lg:items-end"
          >
            <div className="flex-1">
              <p className="font-sans text-black/55 text-base leading-relaxed mb-8">
                A concert, a launch, a night — these are frames. Kollektiv 26 focuses on what fills that frame: atmosphere, timing, flow and how people feel when they are there. We handle the system from concept to close. Our real work isn't coordination — it's curation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 03 WHAT WE DO ────────────────────────────────────────────────────── */}
      <section className="bg-offwhite border-t border-lg px-8 lg:px-16 pt-14 lg:pt-16 pb-24 lg:pb-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-[1.5px] bg-yellow" />
            <span className="font-mono text-[10px] text-mg tracking-[0.28em] uppercase">What We Do</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-lg">

            <div className="lg:col-span-4 border-r border-b border-lg p-10 lg:p-14 flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
              <div className="absolute bottom-6 right-6 pointer-events-none" aria-hidden="true">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" opacity="0.06">
                  <circle cx="50" cy="50" r="46" stroke="#0A0A0A" strokeWidth="1" />
                  <circle cx="50" cy="50" r="30" stroke="#0A0A0A" strokeWidth="1" />
                  <circle cx="50" cy="50" r="14" stroke="#0A0A0A" strokeWidth="1" />
                  <circle cx="50" cy="50" r="3" fill="#0A0A0A" />
                  <line x1="50" y1="4" x2="50" y2="96" stroke="#0A0A0A" strokeWidth="0.5" />
                  <line x1="4" y1="50" x2="96" y2="50" stroke="#0A0A0A" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-mg tracking-[0.24em] uppercase mb-6">01</p>
                <h3 className="font-sans font-bold text-black text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  CONCEPT →<br />EXECUTION
                </h3>
                <p className="font-sans text-black/55 text-[15px] leading-relaxed max-w-[30ch]">
                  We define why an event exists, who it's for, and what it should leave behind. From there: budget, then stage.
                </p>
              </div>
              <div className="mt-10 font-mono text-[9px] text-mg tracking-[0.12em] uppercase">
                Format first. Logistics follow.
              </div>
            </div>

            <div className="lg:col-span-4 border-r border-b border-[#0A0A0A]/20 p-10 lg:p-12 bg-black flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
              <div className="absolute bottom-6 right-6 pointer-events-none" aria-hidden="true">
                <Bars heights={[3,5,8,4,10,6,7,3,9,5,8,4,6,3,7,5,9,4,6,8]} className="text-white/[0.06]" />
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-yellow/60 tracking-[0.24em] uppercase mb-6">02</p>
                <h3 className="font-sans font-bold text-white text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  LOGISTICS,<br />INVISIBLE
                </h3>
                <p className="font-sans text-white/50 text-[15px] leading-relaxed max-w-[30ch]">
                  Venue, technical infrastructure, suppliers, transport — we manage all of it. In a good event, logistics goes unnoticed. That's the point.
                </p>
              </div>
              <div className="mt-10 font-mono text-[9px] text-yellow/40 tracking-[0.12em] uppercase">
                Invisible when it works.
              </div>
            </div>

            <div className="lg:col-span-4 border-r border-b border-lg p-10 bg-offwhite flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
              <div className="absolute bottom-6 right-4 pointer-events-none opacity-[0.05]" aria-hidden="true">
                <svg width="64" height="80" viewBox="0 0 64 80" fill="none">
                  <line x1="0" y1="20" x2="64" y2="20" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="0" y1="40" x2="64" y2="40" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="0" y1="60" x2="64" y2="60" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="16" y1="0" x2="16" y2="80" stroke="#0A0A0A" strokeWidth="0.5" />
                  <line x1="48" y1="0" x2="48" y2="80" stroke="#0A0A0A" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-mg tracking-[0.24em] uppercase mb-6">03</p>
                <h3 className="font-sans font-bold text-black text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  PROMOTION<br />FOLLOWS<br />FORM
                </h3>
                <p className="font-sans text-black/55 text-[15px] leading-relaxed">
                  We don't promote events. We create them. The promotional process starts with concept, not after it's finalized.
                </p>
              </div>
              <span className="font-mono text-[9px] text-mg tracking-[0.12em] uppercase mt-10 block">
                Concept shapes the audience.
              </span>
            </div>

            <Link
              href="/contact"
              className="group block lg:col-span-12 border-r border-b border-lg p-10 lg:p-14 bg-offwhite hover:bg-white transition-colors duration-300 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 relative overflow-hidden"
            >
              <svg
                className="absolute bottom-6 right-6 opacity-[0.05]"
                width="80" height="80"
                viewBox="0 0 80 80" fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="34" height="34" stroke="#0A0A0A" strokeWidth="1" />
                <rect x="44" y="2" width="34" height="34" stroke="#0A0A0A" strokeWidth="1" />
                <rect x="2" y="44" width="34" height="34" stroke="#0A0A0A" strokeWidth="1" />
                <rect x="44" y="44" width="34" height="34" stroke="#0A0A0A" strokeWidth="1" />
              </svg>

              <div>
                <div className="w-8 h-[1.5px] bg-yellow mb-5" />
                <span className="font-mono text-[9px] text-mg tracking-[0.24em] uppercase block mb-5">
                  04
                </span>
                <h3 className="font-sans font-bold text-black text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  CORPORATE &<br />CULTURAL
                </h3>
                <p className="font-sans text-black/55 text-[15px] leading-relaxed max-w-[48ch]">
                  Launches, conferences, galas and cultural activations — the same design discipline, applied to different rooms and different audiences.
                </p>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-6 shrink-0">
                <span className="font-mono text-[9px] text-mg tracking-[0.12em] uppercase">
                  Every room has a different logic.
                </span>
                <div className="flex items-center gap-2 font-mono text-[10px] text-black tracking-[0.1em] uppercase group-hover:gap-4 transition-all duration-300">
                  GET IN TOUCH
                  <ArrowRight size={13} />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── 04 VISUAL COMPOSITION ────────────────────────────────────────────── */}
      <section className="bg-nw relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[580px]">

          <div className="lg:col-span-7 relative min-h-[300px] overflow-hidden">
            <img
              src="/images/12-entertainment-venue-hero-vertical.jpg.png"
              alt="" aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'grayscale(55%) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            <div className="absolute bottom-8 left-8 z-10">
              <span className="font-mono text-[9px] text-white/35 tracking-[0.22em] uppercase">
                Events — K26 Entertainment
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-black flex flex-col p-10 lg:p-14 justify-between">
            <div>
              <span className="font-mono text-[8px] text-yellow tracking-[0.22em] uppercase block mb-1">Active Format</span>
              <span className="font-mono text-[8px] text-white/40 tracking-[0.18em] uppercase block mb-10">Sound-Led Gatherings</span>
              <h3
                className="font-sans font-bold text-white leading-[0.9] tracking-tighter mb-8"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
              >
                THE NIGHT IS<br />THE WORK.
              </h3>
              <p className="font-sans text-white/45 text-[15px] leading-relaxed mb-10 max-w-xs">
                Atmosphere, timing, flow and how people feel when they are there. Every variable is a design decision.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 border-t border-white/[0.08] pt-6">
                <Bars heights={SIGNAL} className="text-yellow/40" />
                <span className="font-mono text-[9px] text-white/25 tracking-[0.2em] uppercase">Format Active</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 05 FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-offwhite px-8 lg:px-16 py-24 lg:py-40 border-t border-lg">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="lg:col-span-7"
          >
            <div className="w-8 h-[1.5px] bg-yellow mb-10" />
            <h2
              className="font-sans font-bold leading-[0.88] tracking-tighter"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6rem)' }}
            >
              <span className="text-black block">PLAN YOUR EVENT.</span>
              <span className="text-mg block">GET IN TOUCH.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" as const }}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-lg lg:pl-10"
          >
            <p className="font-sans text-mg text-sm mb-8">Tell us what you're building.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-black bg-yellow px-6 py-4 border border-yellow hover:bg-black hover:text-white hover:border-black transition-colors duration-300 w-full"
            >
              START A CONVERSATION <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 06 FOOTER STRIP ──────────────────────────────────────────────────── */}
      <div className="bg-black border-t border-white/[0.06] px-8 lg:px-16 py-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <K26Mark size={14} className="text-yellow/60" />
            <span className="font-mono text-[9px] text-white/40 tracking-[0.22em] uppercase">Kollektiv 26 Entertainment</span>
          </div>
          <span className="font-mono text-[9px] text-white/20 tracking-[0.22em] uppercase hidden sm:block">
            Events — Sound-Led Gatherings
          </span>
          <a
            href="mailto:entertainment@kollektiv26.com"
            className="font-mono text-[9px] text-white/35 tracking-[0.1em] hover:text-white/60 transition-colors lowercase"
          >
            entertainment@kollektiv26.com
          </a>
        </div>
      </div>

    </main>
  )
}
