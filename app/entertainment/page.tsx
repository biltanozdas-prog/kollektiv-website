'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import K26Mark from '../components/K26Mark'

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

const SIGNAL  = [4, 8, 5, 10, 6, 3, 9, 5, 12, 4, 7, 6]
const BARCODE = [6, 10, 4, 14, 8, 5, 12, 7, 10, 4, 8, 6, 12]

export default function EntertainmentPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow selection:text-black">

      {/* ── 01 HERO ──────────────────────────────────────────────────────────── */}
      {/*
        min-height = 100vh + 108px so that with -mt-[108px] the section fills
        exactly one full viewport height in document flow — the next section
        starts at the viewport bottom, not 108px early.
      */}
      <section
        className="relative bg-black overflow-hidden flex flex-col"
        style={{ minHeight: 'calc(100vh + 108px)', marginTop: '-108px' }}
      >

        {/* Video — always rendered; autoPlay + muted satisfies browser autoplay policy */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.65 }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/entertainment%20background.jpg"
          aria-hidden="true"
        >
          <source src="/images/entertainment-video.mp4" type="video/mp4" />
        </video>

        {/* Yellow radial glow — upper right */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(232,200,50,0.28) 0%, transparent 60%)' }}
        />

        {/* Dark gradient — top fade + full black at bottom for seamless bridge */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.60) 0%, rgba(10,10,10,0.0) 22%, rgba(10,10,10,0.0) 48%, rgba(10,10,10,0.98) 93%, rgba(10,10,10,1.0) 100%)' }}
        />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Spacer pushes content to bottom — min-h ensures text clears the fixed nav on short viewports */}
        <div className="flex-1 min-h-[220px] lg:min-h-[280px]" />

        {/* Content */}
        <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-8 lg:px-16 pb-28 lg:pb-40">
          <div className="lg:max-w-[60%]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" as const }}
            >
              <p className="font-mono text-[10px] text-white/40 tracking-[0.28em] uppercase mb-8">
                Entertainment
              </p>
              <h1
                className="font-sans font-bold text-white leading-[0.88] tracking-tighter mb-8 2xl:text-8xl"
                style={{ fontSize: 'clamp(2.8rem, 8vw, 8.5rem)' }}
              >
                SOUND-LED<br />
                CULTURAL<br />
                SYSTEMS.
              </h1>
              <p className="font-sans text-white/55 text-lg leading-relaxed mb-12 max-w-sm">
                We build the conditions around a night:<br />
                the sound, the flow, the image and the trace.
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
      <section className="bg-black relative overflow-hidden">

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-16 pt-10 lg:pt-14">

          {/* Top signal row */}
          <div className="flex items-center justify-between pb-10 lg:pb-14">
            <div className="flex items-center gap-4">
              <Bars heights={SIGNAL} className="text-yellow/35" />
              <span className="font-mono text-[9px] text-white/25 tracking-[0.28em] uppercase">Sound — Space — Trace</span>
            </div>
            <div className="hidden sm:flex items-center gap-2.5">
              <K26Mark size={12} className="text-white/15" />
              <span className="font-mono text-[9px] text-white/20 tracking-[0.22em] uppercase">Entertainment</span>
            </div>
          </div>

          {/* Three system dimension labels */}
          <div className="flex border-t border-white/[0.05]">
            {([
              { n: '01', label: 'SOUND' },
              { n: '02', label: 'SPACE' },
              { n: '03', label: 'TRACE' },
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

        {/* Atmospheric breathing space */}
        <div className="h-16 lg:h-28" />

      </section>

      <div
        aria-hidden="true"
        className="h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent -mt-24 relative z-10 pointer-events-none"
      />

      {/* ── 03 SYSTEM + PILLARS — UNIFIED ──────────────────────────────────── */}
      <section className="bg-offwhite relative overflow-hidden">

        {/* Dot texture */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="dots-unified" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="#0A0A0A" opacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-unified)" />
        </svg>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-16 py-24 lg:py-36">

          {/* ÜST BAŞLIK — tam genişlik */}
          <div className="border-b border-lg pb-10 lg:pb-14 mb-14 lg:mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1.5px] bg-yellow" />
              <span className="font-mono text-[10px] text-mg tracking-[0.28em] uppercase">
                Our System
              </span>
            </div>
            <motion.h2
              className="font-sans font-bold text-black leading-[0.88] tracking-tighter"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' as const }}
            >
              FROM SOUND<br />TO SCENE<br />TO ARCHIVE.
            </motion.h2>
          </div>

          {/* ANA GRID — sol metin, sağ kartlar */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* SOL KOLON — col-span-4 */}
            <motion.div
              className="lg:col-span-4 flex flex-col justify-between gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' as const }}
            >
              <div>
                <p className="font-sans text-black/55 text-base leading-relaxed mb-10">
                  We operate between sound, culture and contemporary gathering. Built around
                  atmosphere, spatial rhythm and the people that shape a night — from concept
                  to close, from the room to what remains after.
                </p>

                <div className="space-y-4 mb-10">
                  {['Sound', 'Space', 'Trace'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-[2px] h-4 bg-yellow shrink-0" />
                      <span className="font-sans text-black/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/entertainment/events"
                  className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-black hover:opacity-50 transition-opacity"
                >
                  VIEW THE SYSTEM <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>

            {/* SAĞ KOLON — col-span-8 */}
            <div className="lg:col-span-8">

              {/* ÜST SATIR — Events + Label yan yana */}
              <div className="grid grid-cols-12 border-t border-l border-lg">

                {/* EVENTS — col-span-7, açık */}
                <Link
                  href="/entertainment/events"
                  className="group block col-span-7 border-r border-b border-lg p-8 lg:p-10 bg-offwhite hover:bg-white transition-colors duration-300 flex flex-col min-h-[320px] relative overflow-hidden"
                >
                  <svg
                    className="absolute bottom-4 right-4 opacity-[0.06]"
                    width="100" height="100"
                    viewBox="0 0 120 120" fill="none"
                  >
                    <circle cx="60" cy="60" r="56" stroke="#0A0A0A" strokeWidth="1" />
                    <circle cx="60" cy="60" r="38" stroke="#0A0A0A" strokeWidth="1" />
                    <circle cx="60" cy="60" r="20" stroke="#0A0A0A" strokeWidth="1" />
                    <circle cx="60" cy="60" r="4" fill="#0A0A0A" />
                    <line x1="60" y1="4" x2="60" y2="116" stroke="#0A0A0A" strokeWidth="1" />
                    <line x1="4" y1="60" x2="116" y2="60" stroke="#0A0A0A" strokeWidth="1" />
                  </svg>
                  <div className="w-8 h-[1.5px] bg-yellow mb-5" />
                  <span className="font-mono text-[9px] text-mg tracking-[0.24em] uppercase mb-5">01</span>
                  <h3 className="font-sans font-bold text-black text-xl lg:text-2xl tracking-tight leading-[1.0] mb-4">
                    EVENTS
                  </h3>
                  <p className="font-sans text-black/55 text-[14px] leading-relaxed max-w-[28ch] flex-1">
                    Sound-led gatherings shaped by concept, flow and atmosphere.
                  </p>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-black tracking-[0.1em] uppercase group-hover:gap-4 transition-all duration-300 mt-8">
                    EXPLORE EVENTS <ArrowRight size={13} />
                  </div>
                </Link>

                {/* LABEL — col-span-5, siyah */}
                <Link
                  href="/entertainment/label"
                  className="group block col-span-5 border-r border-b border-black/20 p-8 lg:p-10 bg-black hover:bg-[#111] transition-colors duration-300 flex flex-col min-h-[320px] relative overflow-hidden"
                >
                  <div className="absolute bottom-4 right-4 opacity-[0.06]">
                    <Bars heights={[3,5,8,4,10,6,7,3,9,5,8,4,6,3,7,5,9,4,6,8]} className="text-white" />
                  </div>
                  <div className="w-8 h-[1.5px] bg-yellow mb-5" />
                  <span className="font-mono text-[9px] text-yellow/60 tracking-[0.24em] uppercase mb-5">02</span>
                  <h3 className="font-sans font-bold text-white text-xl lg:text-2xl tracking-tight leading-[1.0] mb-4">
                    LABEL
                  </h3>
                  <p className="font-sans text-white/50 text-[14px] leading-relaxed max-w-[24ch] flex-1">
                    Artist development, releases and the context around the work.
                  </p>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-yellow tracking-[0.1em] uppercase group-hover:gap-4 transition-all duration-300 mt-8">
                    EXPLORE LABEL <ArrowRight size={13} />
                  </div>
                </Link>

              </div>

              {/* ALT SATIR — Venues tam genişlik */}
              <Link
                href="/entertainment/venues"
                className="group block border-t-0 border border-lg bg-offwhite hover:bg-white transition-colors duration-300 grid grid-cols-12 overflow-hidden"
                style={{ minHeight: '260px' }}
              >
                <div className="col-span-7 p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
                  <svg
                    className="absolute bottom-4 right-4 opacity-[0.06]"
                    width="80" height="64"
                    viewBox="0 0 80 64" fill="none"
                  >
                    <rect x="6" y="20" width="68" height="38" stroke="#0A0A0A" strokeWidth="1" />
                    <line x1="6" y1="20" x2="40" y2="4" stroke="#0A0A0A" strokeWidth="1" />
                    <line x1="74" y1="20" x2="40" y2="4" stroke="#0A0A0A" strokeWidth="1" />
                    <line x1="34" y1="58" x2="34" y2="38" stroke="#0A0A0A" strokeWidth="1" />
                    <line x1="46" y1="58" x2="46" y2="38" stroke="#0A0A0A" strokeWidth="1" />
                    <rect x="14" y="30" width="18" height="14" stroke="#0A0A0A" strokeWidth="0.75" />
                    <rect x="48" y="30" width="18" height="14" stroke="#0A0A0A" strokeWidth="0.75" />
                  </svg>
                  <div>
                    <div className="w-8 h-[1.5px] bg-yellow mb-5" />
                    <span className="font-mono text-[9px] text-mg tracking-[0.24em] uppercase block mb-5">03</span>
                    <h3 className="font-sans font-bold text-black text-xl lg:text-2xl tracking-tight leading-[1.0] mb-4">
                      VENUES
                    </h3>
                    <p className="font-sans text-black/55 text-[14px] leading-relaxed max-w-[30ch]">
                      Spaces, operations and cultural settings built with intention.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-black tracking-[0.1em] uppercase group-hover:gap-4 transition-all duration-300 mt-6">
                    EXPLORE VENUES <ArrowRight size={13} />
                  </div>
                </div>

                <div className="col-span-5 relative overflow-hidden">
                  <img
                    src="/images/13-entertainment-venue-flow-corridor.jpg.png"
                    alt="Venues"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* ── 05 ENTERTAINMENT IN MOTION ───────────────────────────────────────── */}
      <section className="bg-nw relative">

        {/* Main collage grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[700px]">

          {/* Left — headline + ticket */}
          <div className="lg:col-span-4 flex flex-col lg:border-r border-b lg:border-b-0 border-lg">

            <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" as const }}
              >
                <h2
                  className="font-sans font-bold text-black leading-[0.88] tracking-tighter mb-6"
                  style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}
                >
                  ENTERTAINMENT<br />IN MOTION.
                </h2>
                <p className="font-sans text-black/50 text-base leading-relaxed">
                  Music, space and cultural rhythm.<br />
                  Built for the night — and for<br />what remains after.
                </p>
              </motion.div>
            </div>

            <div className="border-t border-[#0A0A0A]/10">
              {[
                { label: 'Events', body: 'Sound-led gatherings', href: '/entertainment/events' },
                { label: 'Label', body: 'Artist development', href: '/entertainment/label' },
                { label: 'Venues', body: 'Spaces with intention', href: '/entertainment/venues' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-8 lg:px-10 py-5 border-b border-[#0A0A0A]/10 hover:bg-yellow/20 transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[9px] text-black tracking-[0.22em] uppercase font-medium">
                      {item.label}
                    </span>
                    <span className="font-sans text-[13px] text-black/45">
                      {item.body}
                    </span>
                  </div>
                  <span className="text-black/30 group-hover:text-black transition-colors">
                    <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Center — atmosphere image */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-0 overflow-hidden">
            <img
              src="/images/01-entertainment-venue-hero-wide.jpg.png"
              alt="" aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'grayscale(80%) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </div>

          {/* Right — identity panel + DJ image */}
          <div className="lg:col-span-3 flex flex-col border-t lg:border-t-0 lg:border-l border-lg">

            {/* Identity panel — K26 mark + mode label */}
            <div className="flex min-h-[160px] lg:flex-1">
              <div className="flex-1 bg-black p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[8px] text-yellow tracking-[0.22em] uppercase block mb-1">Mode 02</span>
                  <span className="font-mono text-[8px] text-white/40 tracking-[0.18em] uppercase block">Entertainment</span>
                </div>
                <div className="flex flex-col gap-3">
                  <K26Mark size={28} className="text-white/20" />
                  <Bars heights={SIGNAL} className="text-yellow/25" />
                </div>
              </div>
              {/* Yellow identity accent */}
              <div className="w-14 bg-yellow flex flex-col items-center justify-between py-4 shrink-0">
                <span className="font-mono text-[7px] text-black/40 tracking-[0.18em] uppercase">K26</span>
                <div className="flex-1 flex items-center justify-center py-2">
                  <K26Mark size={22} className="text-black/20" />
                </div>
                <Bars heights={[4,6,3,7,4]} className="text-black/20" />
              </div>
            </div>

            {/* DJ / console image */}
            <div className="relative overflow-hidden flex-1 min-h-[220px]">
              <img
                src="/images/05-entertainment-dj-console-fragment-01.jpg.png"
                alt="" aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            </div>

          </div>
        </div>



      </section>

      {/* ── 06 FINAL CTA ─────────────────────────────────────────────────────── */}
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
              <span className="text-black block">A NIGHT IS TEMPORARY.</span>
              <span className="text-mg block">THE TRACE IS DESIGNED.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" as const }}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-lg lg:pl-10"
          >
            <p className="font-sans text-mg text-sm mb-8">Start with a signal.</p>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-black bg-yellow px-6 py-4 border border-yellow hover:bg-black hover:text-white hover:border-[#0A0A0A] transition-colors duration-300"
              >
                START A CONVERSATION <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 07 FOOTER STRIP ──────────────────────────────────────────────────── */}
      <div className="bg-black border-t border-white/[0.06] px-8 lg:px-16 py-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <K26Mark size={14} className="text-yellow/60" />
            <span className="font-mono text-[9px] text-white/40 tracking-[0.22em] uppercase">Kollektiv 26 Entertainment</span>
          </div>
          <span className="font-mono text-[9px] text-white/20 tracking-[0.22em] uppercase hidden sm:block">
            Sound • Culture • Experience
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
