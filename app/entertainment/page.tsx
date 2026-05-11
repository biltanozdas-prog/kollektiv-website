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

      {/* ── 02 SYSTEM — bg-black unified ───────────────────────────────────── */}
      <section className="bg-black relative overflow-hidden">

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-16 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-0 items-stretch">

            {/* SOL KOLON — col-span-5 */}
            <motion.div
              className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-16 pb-12 lg:pb-0 border-b border-white/[0.06] lg:border-b-0 lg:border-r lg:border-white/[0.06]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' as const }}
            >
              <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-[1.5px] bg-yellow" />
                <span className="font-mono text-[10px] text-white/30 tracking-[0.28em] uppercase">
                  Our System
                </span>
              </div>

              <h2
                className="font-sans font-bold text-white leading-[0.88] tracking-tighter mb-12"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)' }}
              >
                FROM SOUND<br />
                TO SCENE<br />
                TO ARCHIVE.
              </h2>

              <p className="font-sans text-white/45 text-base leading-relaxed mb-10 max-w-sm">
                We operate between sound, culture and contemporary gathering. Built around
                atmosphere, spatial rhythm and the people that shape a night — from concept
                to close, from the room to what remains after.
              </p>

              <div className="space-y-4 mb-12">
                {['Sound', 'Space', 'Trace'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-[2px] h-4 bg-yellow shrink-0" />
                    <span className="font-sans text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* SAĞ KOLON — col-span-7 */}
            <div className="lg:col-span-7 grid grid-cols-12 grid-rows-3 border-t border-white/[0.06] lg:border-t-0">

              {/* EVENTS — col-span-7, row-1 */}
              <Link
                href="/entertainment/events"
                className="group col-span-7 row-span-1 border-b border-r border-white/[0.06] p-8 lg:p-10 flex flex-col bg-white/[0.03] hover:bg-white/[0.07] transition-colors duration-300 relative overflow-hidden min-h-[160px]"
              >
                <svg
                  className="absolute bottom-3 right-3 opacity-[0.08]"
                  width="80" height="80"
                  viewBox="0 0 120 120" fill="none"
                >
                  <circle cx="60" cy="60" r="56" stroke="white" strokeWidth="1" />
                  <circle cx="60" cy="60" r="38" stroke="white" strokeWidth="1" />
                  <circle cx="60" cy="60" r="20" stroke="white" strokeWidth="1" />
                  <circle cx="60" cy="60" r="4" fill="white" />
                  <line x1="60" y1="4" x2="60" y2="116" stroke="white" strokeWidth="1" />
                  <line x1="4" y1="60" x2="116" y2="60" stroke="white" strokeWidth="1" />
                </svg>
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[9px] text-yellow/50 tracking-[0.24em] uppercase">01</span>
                </div>
                <h3 className="font-sans font-bold text-white text-xl tracking-tight leading-[1.0] mb-3">
                  EVENTS
                </h3>
                <p className="font-sans text-white/40 text-[13px] leading-relaxed flex-1">
                  Sound-led gatherings shaped by concept, flow and atmosphere.
                </p>
                <div className="flex items-center gap-2 font-mono text-[10px] text-white/40 tracking-[0.1em] uppercase group-hover:text-white group-hover:gap-4 transition-all duration-300 mt-6">
                  EXPLORE EVENTS <ArrowRight size={12} />
                </div>
              </Link>

              {/* DETAY PANELİ — col-span-5, row-1+2 */}
              <div className="col-span-5 row-span-2 flex flex-col border-b border-white/[0.06]">

                <div className="flex flex-1">
                  {/* Koyu panel */}
                  <div className="flex-1 bg-black/60 p-6 flex flex-col justify-between border-r border-white/[0.06]">
                    <div>
                      <span className="font-mono text-[8px] text-yellow tracking-[0.22em] uppercase block mb-1">Mode 02</span>
                      <span className="font-mono text-[8px] text-white/30 tracking-[0.18em] uppercase">Entertainment</span>
                    </div>
                    <div className="space-y-3">
                      <K26Mark size={24} className="text-white/15" />
                      <Bars heights={SIGNAL} className="text-yellow/25" />
                    </div>
                  </div>
                  {/* Sarı aksan */}
                  <div className="w-10 bg-yellow flex flex-col items-center justify-between py-4 px-2">
                    <span
                      className="font-mono text-[7px] text-black/40 tracking-widest"
                      style={{ writingMode: 'vertical-rl' }}
                    >
                      K26
                    </span>
                    <K26Mark size={16} className="text-black/25" />
                    <Bars heights={[4,6,3,7,4]} className="text-black/20" />
                  </div>
                </div>

                {/* DJ konsol görseli */}
                <div className="relative overflow-hidden" style={{ minHeight: '180px' }}>
                  <img
                    src="/images/05-entertainment-dj-console-fragment-01.jpg.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%) contrast(1.1)' }}
                  />
                  <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                </div>

              </div>

              {/* LABEL — col-span-7, row-2 */}
              <Link
                href="/entertainment/label"
                className="group col-span-7 row-span-1 border-b border-r border-white/[0.06] p-8 lg:p-10 flex flex-col bg-yellow hover:bg-yellow/90 transition-colors duration-300 relative overflow-hidden min-h-[160px]"
              >
                <div className="absolute bottom-3 right-3 opacity-[0.12]">
                  <Bars heights={[3,5,8,4,10,6,7,3,9,5,8,4,6,3,7,5,9,4,6,8]} className="text-black" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[9px] text-black/40 tracking-[0.24em] uppercase">02</span>
                </div>
                <h3 className="font-sans font-bold text-black text-xl tracking-tight leading-[1.0] mb-3">
                  LABEL
                </h3>
                <p className="font-sans text-black/60 text-[13px] leading-relaxed flex-1">
                  Artist development, releases and the context around the work.
                </p>
                <div className="flex items-center gap-2 font-mono text-[10px] text-black/50 tracking-[0.1em] uppercase group-hover:text-black group-hover:gap-4 transition-all duration-300 mt-6">
                  EXPLORE LABEL <ArrowRight size={12} />
                </div>
              </Link>

              {/* VENUES — col-span-12, row-3 */}
              <Link
                href="/entertainment/venues"
                className="group col-span-12 row-span-1 border-r border-white/[0.06] grid grid-cols-12 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300 relative overflow-hidden min-h-[180px]"
              >
                <div className="col-span-8 p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
                  <svg
                    className="absolute bottom-3 right-3 opacity-[0.06]"
                    width="70" height="56"
                    viewBox="0 0 80 64" fill="none"
                  >
                    <rect x="6" y="20" width="68" height="38" stroke="white" strokeWidth="1" />
                    <line x1="6" y1="20" x2="40" y2="4" stroke="white" strokeWidth="1" />
                    <line x1="74" y1="20" x2="40" y2="4" stroke="white" strokeWidth="1" />
                    <line x1="34" y1="58" x2="34" y2="38" stroke="white" strokeWidth="1" />
                    <line x1="46" y1="58" x2="46" y2="38" stroke="white" strokeWidth="1" />
                    <rect x="14" y="30" width="18" height="14" stroke="white" strokeWidth="0.75" />
                    <rect x="48" y="30" width="18" height="14" stroke="white" strokeWidth="0.75" />
                  </svg>
                  <div>
                    <span className="font-mono text-[9px] text-yellow/50 tracking-[0.24em] uppercase block mb-4">03</span>
                    <h3 className="font-sans font-bold text-white text-xl tracking-tight leading-[1.0] mb-3">
                      VENUES
                    </h3>
                    <p className="font-sans text-white/40 text-[13px] leading-relaxed max-w-[32ch]">
                      Spaces, operations and cultural settings built with intention.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-white/40 tracking-[0.1em] uppercase group-hover:text-white group-hover:gap-4 transition-all duration-300 mt-6">
                    EXPLORE VENUES <ArrowRight size={12} />
                  </div>
                </div>

                <div className="col-span-4 relative overflow-hidden">
                  <img
                    src="/images/13-entertainment-venue-flow-corridor.jpg.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                </div>
              </Link>

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
