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

const SIGNAL  = [4, 8, 5, 10, 6, 3, 9, 5, 12, 4, 7, 6]
const BARCODE = [6, 10, 4, 14, 8, 5, 12, 7, 10, 4, 8, 6, 12]

const PROCESS = [
  {
    title: 'Contracts as starting points',
    body: 'Distribution, live performance, publishing — we set up separate structures for each. An artist\'s rights aren\'t a single package. They\'re individual assets with different values.',
  },
  {
    title: 'Visibility begins during production',
    body: 'Identity gets built before the music is finished. Cover art, photography, video, digital presence — these aren\'t post-production tasks. They\'re planned while the work is being created.',
  },
  {
    title: 'MESAM, MSG, royalties — we track it',
    body: 'The artist should focus on one thing: making work. We handle the rest because we know how.',
  },
]

export default function LabelPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow selection:text-black">

      {/* ── 01 HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-[#0A0A0A] overflow-hidden flex flex-col"
        style={{ minHeight: 'calc(100vh + 108px)', marginTop: '-108px' }}
      >
        <img
          src="/images/09-entertainment-black-system-panel.jpg.png"
          alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35, filter: 'grayscale(80%) contrast(1.2)' }}
        />
        {/* No glow on Label — keep it cooler / more focused */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.70) 0%, rgba(10,10,10,0.15) 28%, rgba(10,10,10,0.15) 52%, rgba(10,10,10,0.98) 93%, rgba(10,10,10,1.0) 100%)' }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Yellow accent — thin left edge */}
        <div className="absolute left-0 top-[108px] bottom-0 w-[3px] bg-yellow/20 z-[3]" />

        <div className="flex-1 min-h-[220px] lg:min-h-[280px]" />

        <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-8 lg:px-16 pb-28 lg:pb-40">
          <div className="lg:max-w-[65%]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-[10px] text-white/40 tracking-[0.28em] uppercase mb-8">
                02 — Label
              </p>
              <h1
                className="font-sans font-bold text-white leading-[0.88] tracking-tighter mb-8"
                style={{ fontSize: 'clamp(3rem, 7vw, 7.5rem)' }}
              >
                WE DON'T<br />
                DISCOVER<br />
                ARTISTS.<br />
                WE RECOGNIZE<br />
                THEM.
              </h1>
              <p className="font-sans text-white/45 text-base leading-relaxed mb-12 max-w-[36ch]">
                When we decide to work with an artist, the question is always the same:<br />
                what does this person need to exist at their best?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-white border border-white/30 px-7 py-3.5 hover:bg-white hover:text-black transition-colors duration-300"
              >
                LET'S TALK <ArrowRight />
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
              <span className="font-mono text-[9px] text-white/25 tracking-[0.28em] uppercase">Artist — Release — Rights</span>
            </div>
            <div className="hidden sm:flex items-center gap-2.5">
              <K26Mark size={12} className="text-white/15" />
              <span className="font-mono text-[9px] text-white/20 tracking-[0.22em] uppercase">Label</span>
            </div>
          </div>
          <div className="flex border-t border-white/[0.05]">
            {([
              { n: '01', label: 'ARTIST' },
              { n: '02', label: 'RELEASE' },
              { n: '03', label: 'RIGHTS' },
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
              <pattern id="dots-lb" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1" fill="#0A0A0A" opacity="0.07" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-lb)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-16 py-24 lg:py-36 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-[1.5px] bg-yellow" />
                <span className="font-mono text-[10px] text-[#8C8C8C] tracking-[0.28em] uppercase">Our System</span>
              </div>
              <h2
                className="font-sans font-bold text-[#0A0A0A] leading-[0.88] tracking-tighter"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)' }}
              >
                FROM<br />
                RECOGNITION<br />
                TO RELEASE.
              </h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col lg:flex-row gap-10 items-start lg:items-end"
          >
            <div className="flex-1">
              <p className="font-sans text-[#0A0A0A]/55 text-base leading-relaxed mb-8">
                We focus on one thing: what does this artist need to exist at their best? Sometimes it's production. Sometimes it's legal structure. Sometimes it's visibility. Sometimes it's just being in the right room with the right people. We build that room.
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
                <span className="font-mono text-[8px] text-yellow/70 tracking-[0.22em] uppercase">Signal</span>
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
            <span className="font-mono text-[10px] text-[#8C8C8C] tracking-[0.28em] uppercase">What We Do</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-[#D8D4CC]">

            {/* A&R — light 5 cols */}
            <div className="lg:col-span-5 border-r border-b border-[#D8D4CC] p-10 lg:p-14 flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
              <div className="absolute bottom-6 right-6 pointer-events-none" aria-hidden="true">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" opacity="0.06">
                  <circle cx="50" cy="50" r="46" stroke="#0A0A0A" strokeWidth="1" />
                  <circle cx="50" cy="50" r="30" stroke="#0A0A0A" strokeWidth="1" />
                  <circle cx="50" cy="50" r="14" stroke="#0A0A0A" strokeWidth="1" />
                  <circle cx="50" cy="50" r="3" fill="#0A0A0A" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-[#8C8C8C] tracking-[0.24em] uppercase mb-6">01</p>
                <h3 className="font-sans font-bold text-[#0A0A0A] text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  A&amp;R
                </h3>
                <p className="font-sans text-[#0A0A0A]/55 text-[15px] leading-relaxed max-w-[30ch]">
                  We don't search for talent. We see what's already there and put it in the right frame. Before the first conversation, we listen to the music. Then we listen to the person.
                </p>
              </div>
              <div className="mt-10 font-mono text-[9px] text-[#8C8C8C] tracking-[0.12em] uppercase">
                Recognition before negotiation.
              </div>
            </div>

            {/* Production — dark 4 cols */}
            <div className="lg:col-span-4 border-r border-b border-[#0A0A0A]/20 p-10 lg:p-12 bg-[#0A0A0A] flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
              <div className="absolute bottom-6 right-6 pointer-events-none" aria-hidden="true">
                <Bars heights={[3,5,8,4,10,6,7,3,9,5,8,4,6,3,7,5,9,4,6,8]} className="text-white/[0.06]" />
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-yellow/60 tracking-[0.24em] uppercase mb-6">02</p>
                <h3 className="font-sans font-bold text-white text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  PRODUCTION
                </h3>
                <p className="font-sans text-white/50 text-[15px] leading-relaxed max-w-[30ch]">
                  From studio to mastering, every stage moves alongside strategy. Producer selection, release timing, visual identity — these aren't separate decisions. They're parts of one decision.
                </p>
              </div>
              <div className="mt-10 font-mono text-[9px] text-yellow/40 tracking-[0.12em] uppercase">
                Strategy in parallel with sound.
              </div>
            </div>

            {/* Release — light 3 cols */}
            <div className="lg:col-span-3 border-r border-b border-[#D8D4CC] p-10 bg-[#F8F5EF] flex flex-col min-h-[440px] lg:min-h-[520px] relative overflow-hidden">
              <div className="absolute bottom-6 right-4 pointer-events-none opacity-[0.05]" aria-hidden="true">
                <svg width="64" height="80" viewBox="0 0 64 80" fill="none">
                  <rect x="8" y="8" width="48" height="64" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="8" y1="28" x2="56" y2="28" stroke="#0A0A0A" strokeWidth="0.5" />
                  <line x1="8" y1="48" x2="56" y2="48" stroke="#0A0A0A" strokeWidth="0.5" />
                  <line x1="28" y1="8" x2="28" y2="72" stroke="#0A0A0A" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="w-10 h-[2px] bg-yellow mb-6" />
                <p className="font-mono text-[9px] text-[#8C8C8C] tracking-[0.24em] uppercase mb-6">03</p>
                <h3 className="font-sans font-bold text-[#0A0A0A] text-2xl lg:text-[2rem] tracking-tight leading-[1.0] mb-5">
                  RELEASE
                </h3>
                <p className="font-sans text-[#0A0A0A]/55 text-[15px] leading-relaxed">
                  Distribution, live performance rights, publishing — we build separate structures for each because every right has its own value.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 05 DARK PROCESS SECTION ──────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] relative overflow-hidden border-y border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative z-10 grid lg:grid-cols-12 lg:min-h-[560px]">

          {/* Left — image */}
          <div className="lg:col-span-5 relative min-h-[280px] overflow-hidden">
            <img
              src="/images/03-entertainment-label-artist-card.jpg.png"
              alt="" aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'grayscale(70%) contrast(1.15)', opacity: 0.6 }}
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/40 pointer-events-none" />
            {/* Bottom identity bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 border-t border-white/[0.06]">
              <div className="flex items-center gap-3">
                <Bars heights={BARCODE} className="text-yellow/30" />
              </div>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-8 h-[1.5px] bg-yellow" />
              <span className="font-mono text-[10px] text-yellow/60 tracking-[0.28em] uppercase">Working With Artists</span>
            </div>
            <h2
              className="font-sans font-bold text-white leading-[0.88] tracking-tighter mb-14"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)' }}
            >
              FROM CONTRACT<br />TO RELEASE.
            </h2>

            <div className="space-y-0">
              {PROCESS.map((item) => (
                <details
                  key={item.title}
                  className="group border-b border-white/[0.07] last:border-b-0"
                >
                  <summary className="flex items-start justify-between cursor-pointer list-none py-6 gap-6">
                    <h3 className="font-sans font-bold text-white text-base leading-snug">{item.title}</h3>
                    <svg
                      className="w-4 h-4 text-white/30 shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-sans text-white/45 text-[14px] leading-relaxed pb-6 max-w-2xl">
                    {item.body}
                  </p>
                </details>
              ))}
            </div>
          </div>

        </div>
      </section>

      <div
        aria-hidden="true"
        className="h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none"
      />

      {/* ── 06 FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F8F5EF] px-8 lg:px-16 py-24 lg:py-40 border-t border-[#D8D4CC]">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="w-8 h-[1.5px] bg-yellow mb-10" />
            <h2
              className="font-sans font-bold leading-[0.88] tracking-tighter"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 5.5rem)' }}
            >
              <span className="text-[#0A0A0A] block">IF YOU'RE BUILDING</span>
              <span className="text-[#0A0A0A] block">SOMETHING,</span>
              <span className="text-[#8C8C8C] block">LET'S TALK.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-[#D8D4CC] lg:pl-10"
          >
            <p className="font-sans text-[#8C8C8C] text-sm mb-8">Start with a conversation.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-black bg-yellow px-6 py-4 border border-yellow hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-colors duration-300 w-full"
            >
              GET IN TOUCH <ArrowRight size={14} />
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
            Label — Artist Development
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
