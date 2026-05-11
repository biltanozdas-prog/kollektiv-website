'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import K26Mark from '../../components/K26Mark'
import { useLang } from '@/lib/LanguageContext'

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
  const { t } = useLang()

  return (
    <main className="min-h-screen font-sans selection:bg-yellow selection:text-black">

      {/* ── 01 HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-black overflow-hidden flex flex-col"
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

        <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-8 lg:px-16 pb-14 lg:pb-16">
          <div className="lg:max-w-[60%]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" as const }}
            >
              <p className="font-mono text-[10px] text-white/40 tracking-[0.28em] uppercase mb-8">
                {t.entertainmentVenues.eyebrow}
              </p>
              <h1
                className="font-sans font-bold text-white leading-[0.88] tracking-tighter mb-10"
                style={{ fontSize: 'clamp(3rem, 7vw, 7.5rem)' }}
              >
                {t.entertainmentVenues.h1.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h1>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-white border border-white/30 px-7 py-3.5 hover:bg-white hover:text-black transition-colors duration-300"
              >
                {t.entertainmentVenues.heroCta} <ArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-8 lg:px-16 pb-24 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
            className="border-t border-white/[0.08] pt-14 lg:pt-16 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end"
          >
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1.5px] bg-yellow" />
                <span className="font-mono text-[10px] text-white/35 tracking-[0.28em] uppercase">{t.entertainmentVenues.introEyebrow}</span>
              </div>
              <h2
                className="font-sans font-bold text-white leading-[0.88] tracking-tighter"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
              >
                {t.entertainmentVenues.introH2.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="font-sans text-white/40 text-base leading-relaxed">
                {t.entertainmentVenues.introDesc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 03 THREE CARDS ───────────────────────────────────────────────────── */}
      <section className="bg-offwhite border-t border-lg px-8 lg:px-16 pt-14 lg:pt-16 pb-24 lg:pb-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-[1.5px] bg-yellow" />
            <span className="font-mono text-[10px] text-mg tracking-[0.28em] uppercase">What We&apos;re Building</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-lg">

            {/* Venue Partnerships — light 5 cols */}
            <div className="lg:col-span-5 border-r border-b border-lg p-10 lg:p-14 flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
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
                <p className="font-mono text-[9px] text-mg tracking-[0.24em] uppercase mb-6">01</p>
                <h3 className="font-sans font-bold text-black text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  {t.entertainmentVenues.card1Title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h3>
                <p className="font-sans text-black/55 text-[15px] leading-relaxed max-w-[30ch]">
                  {t.entertainmentVenues.card1Desc}
                </p>
              </div>
              <div className="mt-10 font-mono text-[9px] text-mg tracking-[0.12em] uppercase">
                {t.entertainmentVenues.card1Footer}
              </div>
            </div>

            {/* Technical Infrastructure — dark 4 cols */}
            <div className="lg:col-span-4 border-r border-b border-black/20 p-10 lg:p-12 bg-black flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
              <div className="absolute bottom-6 right-6 pointer-events-none" aria-hidden="true">
                <Bars heights={[3,5,8,4,10,6,7,3,9,5,8,4,6,3,7,5,9,4,6,8]} className="text-white/[0.06]" />
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-yellow/60 tracking-[0.24em] uppercase mb-6">02</p>
                <h3 className="font-sans font-bold text-white text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  {t.entertainmentVenues.card2Title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h3>
                <p className="font-sans text-white/50 text-[15px] leading-relaxed max-w-[30ch]">
                  {t.entertainmentVenues.card2Desc}
                </p>
              </div>
              <div className="mt-10 font-mono text-[9px] text-yellow/40 tracking-[0.12em] uppercase">
                {t.entertainmentVenues.card2Footer}
              </div>
            </div>

            {/* Operational Systems — light 3 cols */}
            <div className="lg:col-span-3 border-r border-b border-lg p-10 bg-offwhite flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
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
                <p className="font-mono text-[9px] text-mg tracking-[0.24em] uppercase mb-6">03</p>
                <h3 className="font-sans font-bold text-black text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  {t.entertainmentVenues.card3Title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h3>
                <p className="font-sans text-black/55 text-[15px] leading-relaxed">
                  {t.entertainmentVenues.card3Desc}
                </p>
              </div>
              <span className="font-mono text-[9px] text-mg tracking-[0.12em] uppercase mt-10 block">
                {t.entertainmentVenues.card3Footer}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── 04 DARK SECTION — First Projects + Venue Consultation ───────────── */}
      <section className="bg-black relative overflow-hidden border-y border-white/[0.06]">
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
                <span className="font-mono text-[10px] text-yellow/60 tracking-[0.28em] uppercase">{t.entertainmentVenues.firstEyebrow}</span>
              </div>
              <h2
                className="font-sans font-bold text-white leading-[0.88] tracking-tighter mb-8"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)' }}
              >
                {t.entertainmentVenues.firstH2.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
              <p className="font-sans text-white/45 text-base leading-relaxed max-w-[42ch]">
                {t.entertainmentVenues.firstDesc}
              </p>
            </div>
            <p className="mt-14 font-sans font-light text-white/30 text-sm leading-relaxed border-t border-white/[0.06] pt-8 max-w-[32ch]">
              {t.entertainmentVenues.firstClosing}
            </p>
          </div>

          {/* Right — Venue Consultation */}
          <div className="lg:col-span-6 p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-[1.5px] bg-yellow/40" />
                <span className="font-mono text-[10px] text-white/40 tracking-[0.28em] uppercase">{t.entertainmentVenues.consultEyebrow}</span>
              </div>
              <h2
                className="font-sans font-bold text-white leading-[0.88] tracking-tighter mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)' }}
              >
                {t.entertainmentVenues.consultH2.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
              <p className="font-sans text-white/45 text-base leading-relaxed mb-10 max-w-[38ch]">
                {t.entertainmentVenues.consultDesc}
              </p>
              <div className="grid grid-cols-1 gap-6 border-t border-white/[0.06] pt-8">
                {[
                  { label: t.entertainmentVenues.consultHandleLabel, text: t.entertainmentVenues.consultHandleText },
                  { label: t.entertainmentVenues.consultWhoLabel, text: t.entertainmentVenues.consultWhoText },
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
                {t.entertainmentVenues.consultCta} <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 05 VISUAL COMPOSITION ────────────────────────────────────────────── */}
      <section className="bg-nw relative">
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

          <div className="lg:col-span-4 bg-black flex flex-col p-10 justify-between border-l border-white/[0.06]">
            <div>
              <K26Mark size={20} className="text-white/15 mb-8" />
              <h3
                className="font-sans font-bold text-white leading-[0.9] tracking-tighter mb-6"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
              >
                {t.entertainmentVenues.coverH3.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h3>
              <p className="font-sans text-white/40 text-[14px] leading-relaxed">
                {t.entertainmentVenues.coverDesc}
              </p>
            </div>
            <div className="mt-10 border-t border-white/[0.06] pt-8">
              <Bars heights={SIGNAL} className="text-yellow/25" />
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
              <span className="text-black block">{t.entertainmentVenues.ctaH1}</span>
              <span className="text-mg block">{t.entertainmentVenues.ctaH2}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" as const }}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-lg lg:pl-10"
          >
            <p className="font-sans text-mg text-sm mb-8">{t.entertainmentVenues.ctaSub}</p>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-black bg-yellow px-6 py-4 border border-yellow hover:bg-black hover:text-white hover:border-black transition-colors duration-300 w-full"
              >
                {t.entertainmentVenues.ctaButton} <ArrowRight size={14} />
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
            Venues — Space &amp; Infrastructure
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
