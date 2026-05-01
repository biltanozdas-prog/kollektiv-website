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
        className="relative bg-[#0A0A0A] overflow-hidden flex flex-col"
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
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <p className="font-mono text-[10px] text-white/40 tracking-[0.28em] uppercase mb-8">
                Mode 02 — Entertainment
              </p>
              <h1
                className="font-sans font-bold text-white leading-[0.88] tracking-tighter mb-8"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 8.5rem)' }}
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
      <section className="bg-[#0A0A0A] relative overflow-hidden">

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
        className="h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none"
      />

      {/* ── 03 SYSTEM INTRO ──────────────────────────────────────────────────── */}
      <section className="bg-[#F8F5EF] relative overflow-hidden">

        {/* Dot texture */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dots-sys" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1" fill="#0A0A0A" opacity="0.08" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-sys)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-16 py-24 lg:py-36 grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">

          {/* Left — label + headline */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-[1.5px] bg-yellow" />
                <span className="font-mono text-[10px] text-[#8C8C8C] tracking-[0.28em] uppercase">Our System</span>
              </div>
              <h2
                className="font-sans font-bold text-[#0A0A0A] leading-[0.88] tracking-tighter"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)' }}
              >
                FROM<br />
                SOUND<br />
                TO SCENE<br />
                TO ARCHIVE.
              </h2>
            </motion.div>
          </div>

          {/* Right — body + CTA + signal module */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col lg:flex-row gap-10 lg:gap-12 items-start lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="flex-1"
            >
              <p className="font-sans text-[#0A0A0A]/55 text-base leading-relaxed mb-8">
                Entertainment is not a single event.<br />
                It is built as a system of people,<br />
                places and memory.
              </p>
              <Link
                href="/entertainment/events"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-[#0A0A0A] hover:opacity-50 transition-opacity"
              >
                VIEW THE SYSTEM <ArrowRight size={13} />
              </Link>
            </motion.div>

            {/* Signal module */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-stretch shrink-0"
            >
              <div className="bg-[#0A0A0A] px-5 py-4 flex flex-col justify-between w-32 h-20">
                <span className="font-mono text-[8px] text-yellow/70 tracking-[0.22em] uppercase">Signal</span>
                <Bars heights={SIGNAL.slice(0, 9)} className="text-yellow/60" />
              </div>
              <div className="bg-yellow w-12 h-20 flex items-end justify-end p-1.5">
                <span className="font-mono text-[7px] text-black/30 tracking-widest" style={{ writingMode: 'vertical-rl' }}>K26</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── 04 THREE PILLARS ─────────────────────────────────────────────────── */}
      <section id="pillars" className="bg-[#F8F5EF] border-t border-[#D8D4CC] px-8 lg:px-16 pt-14 lg:pt-16 pb-24 lg:pb-32">
        <div className="max-w-screen-2xl mx-auto">

          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-[1.5px] bg-yellow" />
            <span className="font-mono text-[10px] text-[#8C8C8C] tracking-[0.28em] uppercase">Three Pillars</span>
          </div>

          {/* Asymmetric grid: 5 + 4 + 3 columns on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-[#D8D4CC]">

            {/* Events — light, 5 cols */}
            <Link
              href="/entertainment/events"
              className="group block lg:col-span-5 border-r border-b border-[#D8D4CC] p-10 lg:p-14 bg-[#F8F5EF] hover:bg-white transition-colors duration-300 flex flex-col min-h-[440px] lg:min-h-[540px] relative overflow-hidden"
            >
              {/* Concentric circle decoration */}
              <div className="absolute bottom-6 right-6 pointer-events-none" aria-hidden="true">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" opacity="0.06">
                  <circle cx="60" cy="60" r="56" stroke="#0A0A0A" strokeWidth="1" />
                  <circle cx="60" cy="60" r="38" stroke="#0A0A0A" strokeWidth="1" />
                  <circle cx="60" cy="60" r="20" stroke="#0A0A0A" strokeWidth="1" />
                  <circle cx="60" cy="60" r="4" fill="#0A0A0A" />
                  <line x1="60" y1="4" x2="60" y2="116" stroke="#0A0A0A" strokeWidth="0.5" />
                  <line x1="4" y1="60" x2="116" y2="60" stroke="#0A0A0A" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-[#8C8C8C] tracking-[0.24em] uppercase mb-6">01</p>
                <h3 className="font-sans font-bold text-[#0A0A0A] text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  EVENTS
                </h3>
                <p className="font-sans text-[#0A0A0A]/55 text-[15px] leading-relaxed max-w-[30ch]">
                  Sound-led gatherings shaped by concept, flow and atmosphere.
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-[#0A0A0A] tracking-[0.1em] uppercase group-hover:gap-4 transition-all duration-300 mt-10">
                EXPLORE EVENTS <ArrowRight size={13} />
              </div>
            </Link>

            {/* Label — dark, 4 cols */}
            <Link
              href="/entertainment/label"
              className="group block lg:col-span-4 border-r border-b border-[#0A0A0A]/20 p-10 lg:p-12 bg-[#0A0A0A] hover:bg-[#111] transition-colors duration-300 flex flex-col min-h-[440px] lg:min-h-[540px] relative overflow-hidden"
            >
              {/* Waveform decoration */}
              <div className="absolute bottom-6 right-6 pointer-events-none" aria-hidden="true">
                <Bars heights={[3,5,8,4,10,6,7,3,9,5,8,4,6,3,7,5,9,4,6,8]} className="text-white/[0.06]" />
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-yellow/60 tracking-[0.24em] uppercase mb-6">02</p>
                <h3 className="font-sans font-bold text-white text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  LABEL
                </h3>
                <p className="font-sans text-white/50 text-[15px] leading-relaxed max-w-[30ch]">
                  Artist development, releases and the context around the work.
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-yellow tracking-[0.1em] uppercase group-hover:gap-4 transition-all duration-300 mt-10">
                EXPLORE LABEL <ArrowRight size={13} />
              </div>
            </Link>

            {/* Venues — light, 3 cols */}
            <Link
              href="/entertainment/venues"
              className="group block lg:col-span-3 border-r border-b border-[#D8D4CC] p-10 bg-[#F8F5EF] hover:bg-white transition-colors duration-300 flex flex-col min-h-[440px] lg:min-h-[540px] relative overflow-hidden"
            >
              {/* Architectural plan fragment */}
              <div className="absolute bottom-6 right-4 pointer-events-none opacity-[0.06]" aria-hidden="true">
                <svg width="80" height="64" viewBox="0 0 80 64" fill="none">
                  <rect x="6" y="20" width="68" height="38" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="6" y1="20" x2="40" y2="4" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="74" y1="20" x2="40" y2="4" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="34" y1="58" x2="34" y2="38" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="46" y1="58" x2="46" y2="38" stroke="#0A0A0A" strokeWidth="1" />
                  <rect x="14" y="30" width="18" height="14" stroke="#0A0A0A" strokeWidth="0.75" />
                  <rect x="48" y="30" width="18" height="14" stroke="#0A0A0A" strokeWidth="0.75" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-[#8C8C8C] tracking-[0.24em] uppercase mb-6">03</p>
                <h3 className="font-sans font-bold text-[#0A0A0A] text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  VENUES
                </h3>
                <p className="font-sans text-[#0A0A0A]/55 text-[15px] leading-relaxed">
                  Spaces, operations and cultural settings built with intention.
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-[#0A0A0A] tracking-[0.1em] uppercase group-hover:gap-4 transition-all duration-300 mt-10">
                EXPLORE VENUES <ArrowRight size={13} />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── 05 ENTERTAINMENT IN MOTION ───────────────────────────────────────── */}
      <section className="bg-[#F2EFE8] relative">

        {/* Main collage grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[700px]">

          {/* Left — headline + ticket */}
          <div className="lg:col-span-4 flex flex-col lg:border-r border-b lg:border-b-0 border-[#D8D4CC]">

            <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h2
                  className="font-sans font-bold text-[#0A0A0A] leading-[0.88] tracking-tighter mb-6"
                  style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}
                >
                  ENTERTAINMENT<br />IN MOTION.
                </h2>
                <p className="font-sans text-[#0A0A0A]/50 text-base leading-relaxed">
                  Music, space and cultural rhythm.<br />
                  Built for the night — and for<br />what remains after.
                </p>
              </motion.div>
            </div>

            {/* Yellow ticket card */}
            <div className="bg-yellow px-8 lg:px-10 py-8 border-t border-[#0A0A0A]/10">
              <div className="flex justify-between items-start mb-5">
                <span className="font-mono text-[9px] text-black/55 tracking-[0.22em] uppercase">Active Format</span>
                <span className="font-mono text-[9px] text-black/40 tracking-[0.14em] font-bold">001</span>
              </div>
              <p className="font-sans font-bold text-[#0A0A0A] text-xl leading-tight tracking-tight mb-5">
                SOUND-LED<br />GATHERINGS
              </p>
              <div className="border-t border-b border-black/10 py-3 mb-5">
                {['SOUND', 'FLOW', 'IMAGE', 'TRACE'].map(item => (
                  <div key={item} className="flex items-center gap-2 py-0.5">
                    <div className="w-1 h-1 bg-black/30 rounded-full shrink-0" />
                    <span className="font-mono text-[9px] text-black/55 tracking-[0.16em] uppercase">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <Link
                  href="/entertainment/events"
                  className="font-mono text-[10px] text-black tracking-[0.16em] uppercase inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
                >
                  VIEW FORMAT <ArrowRight size={12} />
                </Link>
                <Bars heights={BARCODE} className="text-black/25" />
              </div>
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
          <div className="lg:col-span-3 flex flex-col border-t lg:border-t-0 lg:border-l border-[#D8D4CC]">

            {/* Identity panel — K26 mark + mode label */}
            <div className="flex min-h-[160px] lg:flex-1">
              <div className="flex-1 bg-[#0A0A0A] p-6 flex flex-col justify-between">
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

        {/* 26 Identity card — absolute on desktop, inline on mobile */}
        <div className="px-8 py-6 lg:p-0 lg:absolute lg:bottom-[72px] lg:right-8 lg:z-10">
          <div className="bg-[#F8F5EF] border border-[#D8D4CC] p-6 lg:p-8 w-full lg:w-56 shadow-lg">
            <p className="font-mono text-[8px] text-[#8C8C8C] tracking-[0.22em] uppercase leading-relaxed mb-2">
              Kollektiv 26
            </p>
            <p className="font-mono text-[8px] text-[#8C8C8C] tracking-[0.22em] uppercase leading-relaxed mb-4">
              Entertainment
            </p>
            <p
              className="font-sans font-bold text-[#0A0A0A] leading-none mb-5"
              style={{ fontSize: 'clamp(4.5rem, 9vw, 6rem)' }}
            >
              26
            </p>
            <div className="flex items-end gap-[2px] mb-4">
              {BARCODE.map((h, i) => (
                <div key={i} className="w-[1.5px] bg-[#0A0A0A]/20" style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <p className="font-mono text-[8px] text-[#8C8C8C] tracking-[0.18em] uppercase">MMXXVI</p>
              <K26Mark size={14} className="text-[#0A0A0A]/20" />
            </div>
          </div>
        </div>

        {/* Black info strip */}
        <div className="bg-[#0A0A0A] px-8 lg:px-16 py-10 lg:py-12">
          <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-0 items-start sm:items-center">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 flex-1">
              {[
                { title: 'MUSIC',  body: 'Curated sound and live experiences that connect.' },
                { title: 'SPACE',  body: 'Movement, access and atmosphere inside the room.' },
                { title: 'TRACE',  body: 'Images, sound and fragments designed to remain.' },
              ].map(col => (
                <div key={col.title} className="flex-1 min-w-0">
                  <span className="font-mono text-[8px] text-yellow/70 tracking-[0.22em] uppercase block mb-2">{col.title}</span>
                  <p className="font-sans text-white/40 text-[12px] leading-relaxed">{col.body}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 text-yellow shrink-0 sm:ml-10 border-t sm:border-t-0 sm:border-l border-white/10 pt-6 sm:pt-0 sm:pl-10">
              <span className="font-mono text-[9px] tracking-[0.16em] uppercase">
                BUILT WHERE SOUND, SPACE AND CULTURE MEET.
              </span>
              <ArrowRight size={14} />
            </div>
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
              <span className="text-[#0A0A0A] block">A NIGHT IS TEMPORARY.</span>
              <span className="text-[#8C8C8C] block">THE TRACE IS DESIGNED.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-[#D8D4CC] lg:pl-10"
          >
            <p className="font-sans text-[#8C8C8C] text-sm mb-8">Start with a signal.</p>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-black bg-yellow px-6 py-4 border border-yellow hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-colors duration-300"
              >
                START A CONVERSATION <ArrowRight size={14} />
              </Link>
              <Link
                href="/entertainment/events"
                className="inline-flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-[#0A0A0A] px-6 py-4 border border-[#D8D4CC] hover:border-[#0A0A0A] transition-colors duration-300"
              >
                VIEW OUR WORK <ArrowRight size={14} />
              </Link>
            </div>
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
            Sound • Culture • Experience
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
