'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const principles = [
  {
    num: '01',
    title: 'We don\'t start with destinations',
    body: 'Most travel planning begins with "where do you want to go?" We start with why. What are you trying to experience? What pace feels right? What moments are you hoping to create? The geography follows from there.',
  },
  {
    num: '02',
    title: 'Space for the unplanned',
    body: 'Over-scheduling kills spontaneity. We build in breathing room — mornings without an agenda, afternoons left open for whatever emerges. The best travel stories come from moments you didn\'t plan for.',
  },
  {
    num: '03',
    title: 'Local knowledge, not tourist circuits',
    body: 'We work with people who live in the places we send you. Guides, drivers, hosts who know the rhythms of their cities and can introduce you to them on human terms — not tour operators running the same loops.',
  },
  {
    num: '04',
    title: 'Transport as experience',
    body: 'Getting there shouldn\'t feel like dead time. We treat transfers as opportunities — scenic routes, driver-guides who can contextualize what you\'re seeing, vehicles that suit the landscape and the occasion.',
  },
  {
    num: '05',
    title: 'Adaptable, not rigid',
    body: 'Plans change. Weather shifts, energy levels fluctuate, you discover something unexpected and want to stay longer. We build itineraries that can flex without falling apart.',
  },
]

export default function ApproachPage() {
  return (
    <main className="min-h-screen bg-offwhite pt-[108px]">

      {/* Hero */}
      <section className="py-24 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-mono text-[9px] text-mg tracking-[0.24em] uppercase block mb-8"
            >
              Our Approach
            </motion.span>
            <div className="w-8 h-[2px] bg-yellow mb-10" />
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-black leading-[1.05] mb-10"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}
            >
              How we design travel.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans font-light text-dark/55 text-xl leading-relaxed max-w-2xl"
            >
              Not a checklist. Not a template. A way of thinking about travel that puts you — not logistics — at the center.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-black/[0.06] py-24 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto space-y-0">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-12 gap-8 py-12 border-b border-black/[0.06]"
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-[9px] text-mg tracking-[0.2em] uppercase">{p.num}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-sans font-semibold text-black text-xl leading-snug">{p.title}</h3>
              </div>
              <div className="lg:col-span-7">
                <p className="font-sans font-light text-dark/55 text-base leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy block */}
      <section className="bg-black py-24 lg:py-32 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] text-yellow/60 tracking-[0.22em] uppercase block mb-8"
          >
            Why it matters
          </motion.span>
          <div className="w-8 h-[2px] bg-yellow mb-10" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-light text-white/70 text-xl lg:text-2xl leading-relaxed"
          >
            Travel that lingers is travel that made room for the unexpected. We design for that — building structure that gives you security without removing the possibility of surprise.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-4">Ready to start?</span>
            <h2 className="font-sans font-bold text-black text-3xl lg:text-4xl" style={{ letterSpacing: '-0.02em' }}>
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
