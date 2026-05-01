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

export default function VenuesPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow selection:text-black">

      {/* ── 01 HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-[#0A0A0A] overflow-hidden flex flex-col"
        style={{ minHeight: 'calc(100vh + 108px)', marginTop: '-108px' }}
      >
        <img
          src="/images/13-entertainment-venue-flow-corridor.jpg.png"
          alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.45, filter: 'grayscale(60%) contrast(1.1)' }}
        />
        <div
          className="absolute top-0 left-0 w-[700px] h-[700px] pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(232,200,50,0.12) 0%, transparent 60%)' }}
        />
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.70) 0%, rgba(10,10,10,0.10) 28%, rgba(10,10,10,0.10) 52%, rgba(10,10,10,0.98) 93%, rgba(10,10,10,1.0) 100%)' }}
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
                03 — Venues
              </p>
              <h1
                className="font-sans font-bold text-white leading-[0.88] tracking-tighter mb-8"
                style={{ fontSize: 'clamp(3rem, 7vw, 7.5rem)' }}
              >
                WE DON'T<br />
                JUST BOOK<br />
                VENUES.<br />
                WE RUN THEM.
              </h1>
              <p className="font-sans text-white/45 text-base leading-relaxed mb-12 max-w-[36ch]">
                Infrastructure for spaces where culture happens.<br />
                This is what we're building toward.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-white border border-white/30 px-7 py-3.5 hover:bg-white hover:text-black transition-colors duration-300"
              >
                GET IN TOUCH <ArrowRight />
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
              <span className="font-mono text-[9px] text-white/25 tracking-[0.28em] uppercase">Space — System — Culture</span>
            </div>
            <div className="hidden sm:flex items-center gap-2.5">
              <K26Mark size={12} className="text-white/15" />
              <span className="font-mono text-[9px] text-white/20 tracking-[0.22em] uppercase">Venues</span>
            </div>
          </div>
          <div className="flex border-t border-white/[0.05]">
            {([
              { n: '01', label: 'SPACE' },
              { n: '02', label: 'SYSTEM' },
              { n: '03', label: 'CULTURE' },
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
        className="h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent -mt-24 relative z-10 pointer-events-none"
      />

      {/* ── 03 INTRO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#F8F5EF] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dots-vn" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1" fill="#0A0A0A" opacity="0.07" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-vn)" />
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
                <span className="font-mono text-[10px] text-[#8C8C8C] tracking-[0.28em] uppercase">Space as Infrastructure</span>
              </div>
              <h2
                className="font-sans font-bold text-[#0A0A0A] leading-[0.88] tracking-tighter"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)' }}
              >
                BUILT FOR<br />
                CULTURE TO<br />
                HAPPEN IN.
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
              <p className="font-sans text-[#0A0A0A]/55 text-base leading-relaxed mb-8">
                Infrastructure for spaces where culture happens. Kollektiv 26's own operated venues are in development. We're taking the time to build this properly — the right acoustics, the right operations, the right character.
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
                <span className="font-mono text-[8px] text-yellow/70 tracking-[0.22em] uppercase">System</span>
                <Bars heights={SIGNAL.slice(0, 9)} className="text-yellow/60" />
              </div>
              <div className="bg-yellow w-12 h-20 flex items-end justify-end p-1.5">
                <span className="font-mono text-[7px] text-black/30 tracking-widest" style={{ writingMode: 'vertical-rl' }}>K26</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 04 THREE CARDS ───────────────────────────────────────────────────── */}
      <section className="bg-[#F8F5EF] border-t border-[#D8D4CC] px-8 lg:px-16 pt-14 lg:pt-16 pb-24 lg:pb-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-[1.5px] bg-yellow" />
            <span className="font-mono text-[10px] text-[#8C8C8C] tracking-[0.28em] uppercase">What We're Building</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-[#D8D4CC]">

            {/* Venue Partnerships — light 5 cols */}
            <div className="lg:col-span-5 border-r border-b border-[#D8D4CC] p-10 lg:p-14 flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
              <div className="absolute bottom-6 right-6 pointer-events-none opacity-[0.06]" aria-hidden="true">
                <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
                  <rect x="8" y="24" width="84" height="48" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="8" y1="24" x2="50" y2="6" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="92" y1="24" x2="50" y2="6" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="40" y1="72" x2="40" y2="48" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="60" y1="72" x2="60" y2="48" stroke="#0A0A0A" strokeWidth="1" />
                  <rect x="16" y="36" width="22" height="16" stroke="#0A0A0A" strokeWidth="0.75" />
                  <rect x="62" y="36" width="22" height="16" stroke="#0A0A0A" strokeWidth="0.75" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-[#8C8C8C] tracking-[0.24em] uppercase mb-6">01</p>
                <h3 className="font-sans font-bold text-[#0A0A0A] text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  VENUE<br />PARTNERSHIPS
                </h3>
                <p className="font-sans text-[#0A0A0A]/55 text-[15px] leading-relaxed max-w-[30ch]">
                  In talks with spaces across Istanbul that prioritise acoustics and atmosphere. Clubs, galleries, unconventional locations that shape how an event feels.
                </p>
              </div>
              <div className="mt-10 font-mono text-[9px] text-[#8C8C8C] tracking-[0.12em] uppercase">
                Location as a design decision.
              </div>
            </div>

            {/* Technical Infrastructure — dark 4 cols */}
            <div className="lg:col-span-4 border-r border-b border-[#0A0A0A]/20 p-10 lg:p-12 bg-[#0A0A0A] flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
              <div className="absolute bottom-6 right-6 pointer-events-none" aria-hidden="true">
                <Bars heights={[3,5,8,4,10,6,7,3,9,5,8,4,6,3,7,5,9,4,6,8]} className="text-white/[0.06]" />
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-yellow/60 tracking-[0.24em] uppercase mb-6">02</p>
                <h3 className="font-sans font-bold text-white text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  TECHNICAL<br />INFRA&shy;STRUCTURE
                </h3>
                <p className="font-sans text-white/50 text-[15px] leading-relaxed max-w-[30ch]">
                  Sound systems, lighting design, flow management — the backbone that makes live culture work at the level we want. No shortcuts.
                </p>
              </div>
              <div className="mt-10 font-mono text-[9px] text-yellow/40 tracking-[0.12em] uppercase">
                The invisible backbone.
              </div>
            </div>

            {/* Operational Systems — light 3 cols */}
            <div className="lg:col-span-3 border-r border-b border-[#D8D4CC] p-10 bg-[#F8F5EF] flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
              <div className="absolute bottom-6 right-4 pointer-events-none opacity-[0.05]" aria-hidden="true">
                <svg width="64" height="80" viewBox="0 0 64 80" fill="none">
                  <rect x="6" y="6" width="52" height="68" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="6" y1="26" x2="58" y2="26" stroke="#0A0A0A" strokeWidth="0.5" />
                  <line x1="6" y1="46" x2="58" y2="46" stroke="#0A0A0A" strokeWidth="0.5" />
                  <line x1="6" y1="66" x2="58" y2="66" stroke="#0A0A0A" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-[#8C8C8C] tracking-[0.24em] uppercase mb-6">03</p>
                <h3 className="font-sans font-bold text-[#0A0A0A] text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  OPERATIONAL<br />SYSTEMS
                </h3>
                <p className="font-sans text-[#0A0A0A]/55 text-[15px] leading-relaxed">
                  Staffing models, programming calendars, membership structures. The scaffolding that lets a venue run consistently without losing its character.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 05 DARK SECTION — First Projects + Opening a Venue ───────────────── */}
      <section className="bg-[#0A0A0A] relative overflow-hidden border-y border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 grid lg:grid-cols-12 lg:min-h-[520px]">

          {/* Left — First projects 2027 */}
          <div className="lg:col-span-6 p-10 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            <div>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-[1.5px] bg-yellow" />
                <span className="font-mono text-[10px] text-yellow/60 tracking-[0.28em] uppercase">Timeline</span>
              </div>
              <h2
                className="font-sans font-bold text-white leading-[0.88] tracking-tighter mb-8"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)' }}
              >
                FIRST PROJECTS —<br />2027.
              </h2>
              <p className="font-sans text-white/45 text-base leading-relaxed max-w-[42ch]">
                We're taking the time to build this properly. Rushing doesn't serve anyone — not the artists, not the audience, not the culture.
              </p>
            </div>
            <div className="mt-14 flex items-center gap-4 border-t border-white/[0.06] pt-8">
              <Bars heights={SIGNAL} className="text-yellow/30" />
              <span className="font-mono text-[9px] text-white/20 tracking-[0.22em] uppercase">In Development</span>
            </div>
          </div>

          {/* Right — Opening a venue? */}
          <div className="lg:col-span-6 p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-[1.5px] bg-yellow/40" />
                <span className="font-mono text-[10px] text-white/40 tracking-[0.28em] uppercase">Consultation</span>
              </div>
              <h2
                className="font-sans font-bold text-white leading-[0.88] tracking-tighter mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)' }}
              >
                OPENING<br />A VENUE?
              </h2>
              <p className="font-sans text-white/45 text-base leading-relaxed mb-10 max-w-[38ch]">
                From licensing to concept, interior design to equipment, staffing to opening night. We know the process because we're in it. Not consultancy — partnership.
              </p>
              <div className="grid grid-cols-1 gap-6 border-t border-white/[0.06] pt-8">
                {[
                  { label: 'What we cover', text: 'Licensing & legal structure, concept development, space design, technical infrastructure, operational systems, launch strategy.' },
                  { label: 'Who it\'s for', text: 'Bars, clubs, cultural venues, hybrid spaces. Projects where experience matters as much as operations.' },
                ].map(item => (
                  <div key={item.label}>
                    <span className="font-mono text-[9px] text-yellow/50 tracking-[0.18em] uppercase block mb-2">{item.label}</span>
                    <p className="font-sans text-white/35 text-[13px] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-black bg-yellow px-6 py-3.5 hover:bg-white transition-colors duration-300"
              >
                LET'S TALK ABOUT SPACE <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <div
        aria-hidden="true"
        className="h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent -mt-24 relative z-10 pointer-events-none"
      />

      {/* ── 06 VISUAL COMPOSITION ────────────────────────────────────────────── */}
      <section className="bg-[#F2EFE8] relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[500px]">

          <div className="lg:col-span-8 relative min-h-[280px] overflow-hidden">
            <img
              src="/images/04-entertainment-venues-card.jpg.png"
              alt="" aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'grayscale(50%) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            <div className="absolute bottom-8 left-8 z-10">
              <span className="font-mono text-[9px] text-white/35 tracking-[0.22em] uppercase">
                Venues — K26 Entertainment
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#111] flex flex-col p-10 justify-between border-l border-white/[0.06]">
            <div>
              <K26Mark size={20} className="text-white/15 mb-8" />
              <h3
                className="font-sans font-bold text-white leading-[0.9] tracking-tighter mb-6"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
              >
                SPACE AS<br />INFRASTRUCTURE.
              </h3>
              <p className="font-sans text-white/40 text-[14px] leading-relaxed">
                Movement, access and atmosphere inside the room. These aren't afterthoughts. They're the design.
              </p>
            </div>
            <div className="mt-10 border-t border-white/[0.06] pt-8">
              <Bars heights={SIGNAL} className="text-yellow/25" />
            </div>
          </div>

        </div>

        <div className="bg-[#0A0A0A] px-8 lg:px-16 py-10 lg:py-12">
          <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-14">
            {[
              { title: 'SPACE',     body: 'Movement, access and atmosphere inside the room.' },
              { title: 'SYSTEM',    body: 'The operational structure that keeps the culture running.' },
              { title: 'CULTURE',   body: 'Spaces designed to let the programme define the identity.' },
            ].map(col => (
              <div key={col.title} className="flex-1 min-w-0">
                <span className="font-mono text-[8px] text-yellow/70 tracking-[0.22em] uppercase block mb-2">{col.title}</span>
                <p className="font-sans text-white/40 text-[12px] leading-relaxed">{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F8F5EF] px-8 lg:px-16 py-24 lg:py-40 border-t border-[#D8D4CC]">
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
              <span className="text-[#0A0A0A] block">GET NOTIFIED</span>
              <span className="text-[#8C8C8C] block">WHEN WE LAUNCH.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" as const }}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-[#D8D4CC] lg:pl-10"
          >
            <p className="font-sans text-[#8C8C8C] text-sm mb-8">Stay close to what we're building.</p>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-black bg-yellow px-6 py-4 border border-yellow hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-colors duration-300 w-full"
              >
                GET UPDATES <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-[#0A0A0A] px-6 py-4 border border-[#D8D4CC] hover:border-[#0A0A0A] transition-colors duration-300 w-full"
              >
                LET'S TALK ABOUT SPACE <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 08 FOOTER STRIP ──────────────────────────────────────────────────── */}
      <div className="bg-[#0A0A0A] border-t border-white/[0.06] px-8 lg:px-16 py-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <K26Mark size={14} className="text-yellow/60" />
            <span className="font-mono text-[9px] text-white/40 tracking-[0.22em] uppercase">Kollektiv 26 Entertainment</span>
          </div>
          <span className="font-mono text-[9px] text-white/20 tracking-[0.22em] uppercase hidden sm:block">
            Venues — Space & Infrastructure
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
