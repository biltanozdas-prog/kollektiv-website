'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-[108px] bg-offwhite">

      {/* Hero — with dot pattern */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-events" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.4" fill="#0A0A0A" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-events)" opacity="0.07" />
          </svg>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <p className="font-mono text-[9px] text-mg mb-8 tracking-[0.24em] uppercase">
              01 — Events
            </p>
            <div className="w-12 h-[2px] bg-yellow mb-12" />
            <h1
              className="font-sans font-bold text-black mb-12 leading-[0.95]"
              style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6.5rem)', letterSpacing: '-0.025em' }}
            >
              An event is a container.<br />
              We build what goes inside.
            </h1>
            <p className="font-sans font-light text-dark/75 text-xl leading-relaxed max-w-3xl">
              A concert, a launch, a night — these are all frames. Kollektiv 26 focuses on what fills that frame: atmosphere, timing, how people feel when they&apos;re there. We handle every detail from concept to close. But our real work isn&apos;t coordination — it&apos;s curation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}

      <section className="border-t border-black/[0.06] py-24 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] text-mg mb-16 tracking-[0.24em] uppercase block"
          >
            What we do
          </motion.span>

          <div className="grid lg:grid-cols-3 gap-0 border-l border-black/[0.06]">
            {[
              {
                title: 'Concept → Execution',
                body: 'We define why an event exists, who it\'s for, and what it should leave behind. From there: budget, then stage.',
              },
              {
                title: 'Logistics, invisible',
                body: 'Venue, technical infrastructure, suppliers, transport — we manage all of it. In a good event, logistics goes unnoticed. That\'s the point.',
              },
              {
                title: 'Marketing from day one',
                body: 'We don\'t promote events. We create them. The promotional process starts with the concept, not after it\'s finalized.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-r border-black/[0.06] px-10 lg:px-14 py-12"
              >
                <h3 className="font-sans font-semibold text-black text-xl leading-snug mb-5">{item.title}</h3>
                <p className="font-sans font-light text-dark/60 text-base leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy — yellow accent */}
      <section className="py-24 lg:py-36 bg-yellow/[0.06] border-y border-yellow/[0.12] px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[9px] text-mg mb-10 tracking-[0.24em] uppercase block"
            >
              Consultancy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-bold text-black mb-10 leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', letterSpacing: '-0.025em' }}
            >
              Opening a venue?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans font-light text-dark/70 text-lg leading-relaxed mb-14"
            >
              From licensing to concept, interior design to equipment, staffing to opening night. We know the process because we&apos;re in it. Not consultancy — partnership.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12 border-t border-black/[0.06] pt-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="font-sans font-semibold text-black mb-4">What we cover</p>
                <p className="font-sans font-light text-dark/65 text-base leading-relaxed">
                  Licensing &amp; legal structure, concept development, space design, technical infrastructure, operational systems, launch strategy.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="font-sans font-semibold text-black mb-4">Who it&apos;s for</p>
                <p className="font-sans font-light text-dark/65 text-base leading-relaxed">
                  Bars, clubs, cultural venues, hybrid spaces. Projects where experience matters as much as operations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/[0.06] py-20 lg:py-24 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-4">Ready to start?</span>
            <h2 className="font-sans font-bold text-black text-3xl lg:text-4xl" style={{ letterSpacing: '-0.02em' }}>
              Plan your event.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-white bg-black rounded-full px-8 py-4 hover:bg-black/80 transition-colors whitespace-nowrap"
          >
            Get in touch
            <ArrowRight />
          </Link>
        </div>
      </section>

    </main>
  )
}
