'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const building = [
  {
    title: 'Venue Partnerships',
    body: 'In talks with spaces across Istanbul that prioritise acoustics and atmosphere. Clubs, galleries, and unconventional locations that shape how an event feels — not just where it happens.',
  },
  {
    title: 'Technical Infrastructure',
    body: 'Sound systems, lighting design, flow management — the backbone that makes live culture work at the level we want. No shortcuts.',
  },
  {
    title: 'Operational Systems',
    body: 'Staffing models, programming calendars, membership structures. The scaffolding that lets a venue run consistently without losing its character.',
  },
]

export default function VenuesPage() {
  return (
    <main className="min-h-screen pt-[108px] bg-offwhite">

      {/* Hero */}
      <section className="py-24 lg:py-40 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <p className="font-mono text-[9px] text-mg mb-8 tracking-[0.24em] uppercase">
              03 — Venues
            </p>
            <div className="w-12 h-[2px] bg-yellow mb-12" />
            <h1
              className="font-sans font-bold text-black mb-12 leading-[0.95]"
              style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6.5rem)', letterSpacing: '-0.025em' }}
            >
              We don&apos;t just book venues.<br />
              We run them.
            </h1>
            <p className="font-sans font-light text-dark/75 text-xl leading-relaxed max-w-3xl">
              Infrastructure for spaces where culture happens. Kollektiv 26&apos;s own operated venues are in development. This is what we&apos;re building toward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's being built — timeline */}
      <section className="border-t border-black/[0.06] py-24 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] text-mg mb-14 tracking-[0.24em] uppercase block"
          >
            What we&apos;re building
          </motion.span>

          <div className="space-y-12">
            {building.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-7"
              >
                <div className="shrink-0 pt-2">
                  <div className="w-2 h-2 rounded-full bg-yellow" />
                </div>
                <div>
                  <h3
                    className="font-sans font-bold text-black mb-4 leading-tight"
                    style={{ fontSize: 'clamp(1.4rem, 2vw, 1.75rem)', letterSpacing: '-0.015em' }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-sans font-light text-dark/65 text-base leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon badge */}
      <section className="py-24 lg:py-32 bg-yellow/[0.06] border-y border-yellow/[0.12] px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="font-sans font-bold text-black mb-8 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)', letterSpacing: '-0.025em' }}
            >
              First projects — 2027
            </h2>
            <p className="font-sans font-light text-dark/60 text-lg max-w-2xl mx-auto">
              We&apos;re taking the time to build this properly. Rushing doesn&apos;t serve anyone — not the artists, not the audience, not the culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/[0.06] py-20 lg:py-24 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-4">Stay in the loop</span>
            <h2 className="font-sans font-bold text-black text-3xl lg:text-4xl" style={{ letterSpacing: '-0.02em' }}>
              Get notified when we launch.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-white bg-black rounded-full px-8 py-4 hover:bg-black/80 transition-colors whitespace-nowrap"
          >
            Get updates
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}
