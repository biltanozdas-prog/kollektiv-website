'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const stages = [
  {
    num: '01',
    title: <>We don&apos;t start with<br />destinations.</>,
    body: 'Most travel planning begins with "where do you want to go?" We start with why. What are you trying to experience? What pace feels right? What moments are you hoping to create? The geography follows from there.',
    image: '/images/approach-stage-01-intent.png',
    imageAlt: 'Stage 01 — Intent',
    textLeft: true,
  },
  {
    num: '02',
    title: <>Space for the<br />unplanned.</>,
    body: "Over-scheduling kills spontaneity. We build in breathing room — mornings without an agenda, afternoons left open for whatever emerges. The best travel stories come from moments you didn't plan for.",
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
    <main className="min-h-screen bg-[#F8F5EF] pt-[108px]">

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
              Our Approach
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
              className="font-sans font-light text-[#3A3A3A] text-xl leading-relaxed max-w-2xl"
            >
              Not a checklist. Not a template. A way of thinking about travel that puts you — not logistics — at the center.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 5 STAGES — zig-zag ── */}
      <section className="border-t border-[#D8D4CC] py-4 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          {stages.map((stage, i) => (
            <div
              key={stage.num}
              className="py-16 lg:py-20 border-b border-[#D8D4CC] last:border-b-0"
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
                  <span className="font-mono text-[9px] tracking-[0.22em] uppercase block mb-6" style={{ color: '#8C8C8C' }}>
                    Stage {stage.num}
                  </span>
                  <h2
                    className="font-serif text-[#0A0A0A] leading-[1.1] mb-6"
                    style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3rem)' }}
                  >
                    {stage.title}
                  </h2>
                  <p className="font-sans font-light leading-relaxed text-base" style={{ color: '#8C8C8C' }}>
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
                    className="border border-[#D8D4CC] bg-[#F2EFE8] p-8 lg:p-10 flex items-center justify-center max-h-[260px] lg:max-h-none"
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

      {/* ── OPERATIONAL PROCESS ── */}
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-[#EDE9E0]">
        <div className="max-w-screen-2xl mx-auto">

          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[9px] text-black/35 tracking-[0.24em] uppercase shrink-0"
            >
              Operational Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="font-serif text-[#0A0A0A] leading-tight lg:text-right"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3.2rem)' }}
            >
              How we move from intention<br />to execution.
            </motion.h2>
          </div>

          <div className="border-t border-[#C8C4BC] pt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="font-mono text-[9px] text-black/35 tracking-[0.2em] block mb-5">{step.num}</span>
                <h3 className="font-sans font-semibold text-[#1A1A1A] text-base leading-snug mb-4">{step.title}</h3>
                <p className="font-sans font-light text-[#3A3A3A] text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="border-t border-[#D8D4CC] py-20 lg:py-24 px-8 lg:px-16 bg-[#F8F5EF]">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] text-black/35 tracking-[0.22em] uppercase block mb-4">Ready to start?</span>
            <h2 className="font-serif text-[#0A0A0A] leading-tight" style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)' }}>
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
