'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const stages = [
  {
    num: '01',
    title: <>We don&apos;t start with<br />destinations.</>,
    body: 'We start with why — what you want to feel, what pace suits you, what moments matter. The geography follows from there.',
    image: '/images/approach-stage-01-intent.png',
    imageAlt: 'Stage 01 — Intent',
    textLeft: true,
  },
  {
    num: '02',
    title: <>Space for the<br />unplanned.</>,
    body: "We build in breathing room — mornings without an agenda, afternoons left open. The best travel stories come from moments you didn't plan for.",
    image: '/images/approach-stage-02-unplanned.png',
    imageAlt: 'Stage 02 — Unplanned',
    textLeft: false,
  },
  {
    num: '03',
    title: <>Local knowledge, not<br />tourist circuits.</>,
    body: 'We work with people who live in the places we send you. Guides, drivers, hosts who know the rhythms of their cities and can introduce you to them on human terms — not tour operators running the same loops.',
    image: '/images/approach-stage-03-local-knowledge.png',
    imageAlt: 'Stage 03 — Local Knowledge',
    textLeft: true,
  },
  {
    num: '04',
    title: <>Transport as<br />experience.</>,
    body: "Getting there shouldn't feel like dead time. We treat transfers as opportunities — scenic routes, driver-guides who can contextualize what you're seeing, vehicles that suit the landscape and the occasion.",
    image: '/images/approach-stage-04-movement.png',
    imageAlt: 'Stage 04 — Movement',
    textLeft: false,
  },
  {
    num: '05',
    title: <>Adaptable, not rigid.</>,
    body: "Plans change. Weather shifts, energy levels fluctuate, you discover something unexpected and want to stay longer. We build itineraries that can flex without falling apart.",
    image: '/images/approach-stage-05-adaptable.png',
    imageAlt: 'Stage 05 — Adaptable',
    textLeft: true,
  },
]

const steps = [
  {
    num: '01',
    title: 'Tell us what you need',
    body: "Rough dates, general shape of the trip, must-haves. We don't need a detailed brief — just enough to start the conversation.",
  },
  {
    num: '02',
    title: 'We build the framework',
    body: 'Transport, accommodation, access arrangements. A structure that holds everything together without feeling rigid.',
  },
  {
    num: '03',
    title: 'You approve, we execute',
    body: 'Once you sign off: bookings, confirmations, coordination, and on-ground support. You travel — we handle.',
  },
]

export default function ApproachPage() {
  return (
    <main className="min-h-screen bg-offwhite pt-[108px]">

      {/* ── HERO ── */}
      <section className="py-20 lg:py-28 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-mono text-[9px] text-black/35 tracking-[0.24em] uppercase block mb-8"
            >
              Approach
            </motion.span>
            <div className="w-8 h-[2px] bg-yellow mb-10" />
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" as const }}
              className="font-serif text-black leading-[1.05] mb-10"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}
            >
              How we design travel.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans font-light text-dg text-xl leading-relaxed max-w-2xl"
            >
              Not a checklist. Not a template. A way of thinking about travel that puts you — not logistics — at the center.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── BRIDGE ── */}
      <div className="px-8 lg:px-16 pb-16 lg:pb-20">
        <div className="max-w-screen-2xl mx-auto">
          <motion.p
            className="font-sans font-light text-dg text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
          >
            Most people come to us with a rough idea and a feeling they want. We take it from there.
          </motion.p>
        </div>
      </div>

      {/* ── OPERATIONAL PROCESS ── */}
      <section className="bg-black px-8 lg:px-16 py-24 lg:py-32">
        <div className="max-w-screen-2xl mx-auto">

          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 lg:mb-20">
            <p className="font-mono text-[9px] text-white/35 tracking-[0.24em] uppercase">
              Operational Process
            </p>
            <h2
              className="font-serif text-white lg:text-right leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3.2rem)' }}
            >
              How we move from intention<br />
              to execution.
            </h2>
          </div>

          {/* 3 Adım — dikey liste */}
          <div className="border-t border-white/10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="grid grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-14 border-b border-white/10 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const }}
              >
                {/* Numara — col 1 */}
                <div className="col-span-1">
                  <span className="font-mono text-[9px] text-white/30 tracking-[0.2em]">
                    {step.num}
                  </span>
                </div>

                {/* İkon — col 1 */}
                <div className="col-span-1 flex items-start pt-[2px]">
                  {i === 0 && (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="2" fill="#E8C832"/>
                      <line x1="10" y1="1" x2="10" y2="5" stroke="#E8C832" strokeWidth="1.2" strokeLinecap="square"/>
                      <line x1="10" y1="15" x2="10" y2="19" stroke="white" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="square"/>
                      <line x1="1" y1="10" x2="5" y2="10" stroke="white" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="square"/>
                      <line x1="15" y1="10" x2="19" y2="10" stroke="white" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="square"/>
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="4" height="4" stroke="white" strokeOpacity="0.3" strokeWidth="1.2"/>
                      <rect x="8" y="1" width="4" height="4" stroke="#E8C832" strokeWidth="1.2"/>
                      <rect x="15" y="1" width="4" height="4" stroke="white" strokeOpacity="0.3" strokeWidth="1.2"/>
                      <rect x="1" y="8" width="4" height="4" stroke="#E8C832" strokeWidth="1.2"/>
                      <rect x="8" y="8" width="4" height="4" stroke="white" strokeOpacity="0.3" strokeWidth="1.2"/>
                      <rect x="15" y="8" width="4" height="4" stroke="#E8C832" strokeWidth="1.2"/>
                      <rect x="1" y="15" width="4" height="4" stroke="white" strokeOpacity="0.3" strokeWidth="1.2"/>
                      <rect x="8" y="15" width="4" height="4" stroke="white" strokeOpacity="0.3" strokeWidth="1.2"/>
                      <rect x="15" y="15" width="4" height="4" stroke="#E8C832" strokeWidth="1.2"/>
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 18 C2 10 10 2 18 2" stroke="#E8C832" strokeWidth="1.2" strokeLinecap="square" fill="none"/>
                      <path d="M2 18 C2 13 8 7 18 7" stroke="white" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="square" fill="none"/>
                      <path d="M2 18 C2 16 7 11 18 12" stroke="white" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="square" fill="none"/>
                    </svg>
                  )}
                </div>

                {/* Başlık — col 4 */}
                <div className="col-span-4">
                  <h3 className="font-sans font-medium text-white text-base lg:text-lg leading-snug">
                    {step.title}
                  </h3>
                </div>

                {/* Body — col 6 */}
                <div className="col-span-6">
                  <p className="font-sans font-light text-white/50 text-sm lg:text-base leading-relaxed">
                    {step.body}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5 STAGES — zig-zag ── */}
      <section className="border-t border-lg py-4 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          {stages.map((stage, i) => (
            <div
              key={stage.num}
              className="py-16 lg:py-20 border-b border-lg last:border-b-0"
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Text block */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" as const }}
                  className={stage.textLeft ? 'order-1' : 'order-1 lg:order-2'}
                >
                  <span className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-6">
                    Stage {stage.num}
                  </span>
                  <h2
                    className="font-serif text-black leading-[1.1] mb-6"
                    style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3rem)' }}
                  >
                    {stage.title}
                  </h2>
                  <p className="font-sans font-light text-dg leading-relaxed text-base">
                    {stage.body}
                  </p>
                </motion.div>

                {/* Image box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
                  className={stage.textLeft ? 'order-2' : 'order-2 lg:order-1'}
                >
                  <div
                    className="border border-lg bg-[#F2EFE8] p-8 lg:p-10 flex items-center justify-center max-h-[260px] lg:max-h-none"
                    style={{ aspectRatio: '4/3' }}
                  >
                    <img
                      src={stage.image}
                      alt={stage.imageAlt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="border-t border-lg py-20 lg:py-24 px-8 lg:px-16 bg-offwhite">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] text-black/35 tracking-[0.22em] uppercase block mb-4">Ready to start?</span>
            <h2 className="font-serif text-black leading-tight" style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)' }}>
              Plan your journey.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-white bg-black rounded-full px-8 py-4 hover:bg-black/80 transition-colors"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}
