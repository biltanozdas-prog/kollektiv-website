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
        className="relative bg-[#0A0A0A] overflow-hidden flex flex-col"
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
              transition={{ duration: 0.9, ease: "easeOut" }}
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

      {/* ── 02 DARK BRIDGE ───────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-16 pt-10 lg:pt-14">
          <div className="flex items-center justify-between pb-10 lg:pb-14">
            <div className="flex items-center gap-4">
              <Bars heights={SIGNAL} className="text-yellow/35" />
              <span className="font-mono text-[9px] text-white/25 tracking-[0.28em] uppercase">Concept — Format — Execution</span>
            </div>
            <div className="hidden sm:flex items-center gap-2.5">
              <K26Mark size={12} className="text-white/15" />
              <span className="font-mono text-[9px] text-white/20 tracking-[0.22em] uppercase">Events</span>
            </div>
          </div>
          <div className="flex border-t border-white/[0.05]">
            {([
              { n: '01', label: 'CONCEPT' },
              { n: '02', label: 'FORMAT' },
              { n: '03', label: 'EXECUTION' },
            ] as { n: string; label: string }[]).map((item, i) => (
              <div
                key={item.n}
                className={`flex-1 flex items-center gap-2 lg:gap-3 py-4 ${i > 0 ? 'border-l border-white/[0.05] pl-4 lg:pl-8' : ''}`}
              >
                <span className="font-mono text-[8px] text-yellow/30 tracking-[0.2em]">{item.n}</span>
                <span className="font-mono text-[11px] text-white/20 tracking-[0.26em] uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-16 lg:h-28" />
      </section>

      <div
        aria-hidden="true"
        className="h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none"
      />

      {/* ── 03 INTRO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#F8F5EF] relative overflow-hidden">
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
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-[1.5px] bg-yellow" />
                <span className="font-mono text-[10px] text-[#8C8C8C] tracking-[0.28em] uppercase">The Format</span>
              </div>
              <h2
                className="font-sans font-bold text-[#0A0A0A] leading-[0.88] tracking-tighter"
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
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col lg:flex-row gap-10 items-start lg:items-end"
          >
            <div className="flex-1">
              <p className="font-sans text-[#0A0A0A]/55 text-base leading-relaxed mb-8">
                A concert, a launch, a night — these are frames. Kollektiv 26 focuses on what fills that frame: atmosphere, timing, flow and how people feel when they are there. We handle the system from concept to close. Our real work isn't coordination — it's curation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-[#0A0A0A] hover:opacity-50 transition-opacity"
              >
                GET IN TOUCH <ArrowRight size={13} />
              </Link>
            </div>
            <div className="flex items-stretch shrink-0">
              <div className="bg-[#0A0A0A] px-5 py-4 flex flex-col justify-between w-32 h-20">
                <span className="font-mono text-[8px] text-yellow/70 tracking-[0.22em] uppercase">Format</span>
                <Bars heights={SIGNAL.slice(0, 9)} className="text-yellow/60" />
              </div>
              <div className="bg-yellow w-12 h-20 flex items-end justify-end p-1.5">
                <span className="font-mono text-[7px] text-black/30 tracking-widest" style={{ writingMode: 'vertical-rl' }}>K26</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 04 THREE PILLARS ─────────────────────────────────────────────────── */}
      <section className="bg-[#F8F5EF] border-t border-[#D8D4CC] px-8 lg:px-16 pt-14 lg:pt-16 pb-24 lg:pb-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-[1.5px] bg-yellow" />
            <span className="font-mono text-[10px] text-[#8C8C8C] tracking-[0.28em] uppercase">What We Do</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-[#D8D4CC]">

            <div className="lg:col-span-5 border-r border-b border-[#D8D4CC] p-10 lg:p-14 flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
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
                <p className="font-mono text-[9px] text-[#8C8C8C] tracking-[0.24em] uppercase mb-6">01</p>
                <h3 className="font-sans font-bold text-[#0A0A0A] text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  CONCEPT →<br />EXECUTION
                </h3>
                <p className="font-sans text-[#0A0A0A]/55 text-[15px] leading-relaxed max-w-[30ch]">
                  We define why an event exists, who it's for, and what it should leave behind. From there: budget, then stage.
                </p>
              </div>
              <div className="mt-10 font-mono text-[9px] text-[#8C8C8C] tracking-[0.12em] uppercase">
                Format first. Logistics follow.
              </div>
            </div>

            <div className="lg:col-span-4 border-r border-b border-[#0A0A0A]/20 p-10 lg:p-12 bg-[#0A0A0A] flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
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

            <div className="lg:col-span-3 border-r border-b border-[#D8D4CC] p-10 bg-[#F8F5EF] flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
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
                <p className="font-mono text-[9px] text-[#8C8C8C] tracking-[0.24em] uppercase mb-6">03</p>
                <h3 className="font-sans font-bold text-[#0A0A0A] text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  PROMOTION<br />FOLLOWS<br />FORM
                </h3>
                <p className="font-sans text-[#0A0A0A]/55 text-[15px] leading-relaxed">
                  We don't promote events. We create them. The promotional process starts with concept, not after it's finalized.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 05 VISUAL COMPOSITION ────────────────────────────────────────────── */}
      <section className="bg-[#F2EFE8] relative">
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

          <div className="lg:col-span-5 bg-[#0A0A0A] flex flex-col p-10 lg:p-14 justify-between">
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-black bg-yellow px-6 py-3.5 hover:bg-white transition-colors duration-300 w-fit"
              >
                PLAN A NIGHT <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>

        <div className="bg-[#0A0A0A] px-8 lg:px-16 py-10 lg:py-12">
          <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-14">
            {[
              { title: 'CONCEPT', body: 'Every event starts with a clear reason to exist.' },
              { title: 'FLOW',    body: 'The sequence and rhythm that shapes the experience.' },
              { title: 'TRACE',   body: 'What people carry out after the night ends.' },
            ].map(col => (
              <div key={col.title} className="flex-1 min-w-0">
                <span className="font-mono text-[8px] text-yellow/70 tracking-[0.22em] uppercase block mb-2">{col.title}</span>
                <p className="font-sans text-white/40 text-[12px] leading-relaxed">{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F8F5EF] px-8 lg:px-16 py-24 lg:py-40 border-t border-[#D8D4CC]">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="w-8 h-[1.5px] bg-yellow mb-10" />
            <h2
              className="font-sans font-bold leading-[0.88] tracking-tighter"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6rem)' }}
            >
              <span className="text-[#0A0A0A] block">PLAN YOUR EVENT.</span>
              <span className="text-[#8C8C8C] block">GET IN TOUCH.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-[#D8D4CC] lg:pl-10"
          >
            <p className="font-sans text-[#8C8C8C] text-sm mb-8">Tell us what you're building.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-black bg-yellow px-6 py-4 border border-yellow hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-colors duration-300 w-full"
            >
              START A CONVERSATION <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 07 FOOTER STRIP ──────────────────────────────────────────────────── */}
      <div className="bg-[#0A0A0A] border-t border-white/[0.06] px-8 lg:px-16 py-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <K26Mark size={14} className="text-yellow/60" />
            <span className="font-mono text-[9px] text-white/40 tracking-[0.22em] uppercase">Kollektiv 26 Entertainment</span>
          </div>
          <span className="font-mono text-[9px] text-white/20 tracking-[0.22em] uppercase hidden sm:block">
            Events — Sound-Led Gatherings
          </span>
          <a
            href="mailto:info@kollektiv26.com"
            className="font-mono text-[9px] text-white/35 tracking-[0.1em] hover:text-white/60 transition-colors lowercase"
          >
            info@kollektiv26.com
          </a>
        </div>
      </div>

    </main>
  )
}
