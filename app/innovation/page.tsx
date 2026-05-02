'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const pillars = [
  {
    num: '01',
    title: 'Hybrid Spaces',
    body: 'Venues that shift function. Gallery by day, club by night, residency space in between. Architecture that serves culture, not the other way around.',
  },
  {
    num: '02',
    title: 'Collaborative Models',
    body: 'New funding and ownership structures for creative projects. Built for makers, not just investors. Sustained by communities, not just patrons.',
  },
  {
    num: '03',
    title: 'Cultural Tech',
    body: 'Tools that support artists, organizers, and audiences without extracting value. Technology in service of experience — not the reverse.',
  },
]

export default function InnovationPage() {
  return (
    <main className="min-h-screen bg-offwhite pt-[108px]">

      {/* Hero — large, centered, with animated concentric circles */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-8 lg:px-16">

        {/* Concentric rings — decorative background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          {[640, 480, 320, 200].map((size, i) => (
            <motion.div
              key={size}
              className="absolute rounded-full border border-black/[0.05]"
              style={{ width: size, height: size }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: "easeOut" as const }}
            />
          ))}
          {/* Rotating yellow dot on outermost ring */}
          <motion.div
            className="absolute"
            style={{ width: 640, height: 640, transformOrigin: 'center center' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            <span
              className="absolute rounded-full bg-yellow"
              style={{
                width: 10, height: 10,
                top: '50%', left: '50%',
                transform: 'translate(315px, -5px)',
                boxShadow: '0 0 12px 4px rgba(232,200,50,0.5)',
              }}
            />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-3xl text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-mono text-[10px] text-mg tracking-[0.22em] uppercase block mb-10"
          >
            Innovation &amp; Futures
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" as const }}
            className="font-sans font-bold text-black leading-[1.02] mb-10"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', letterSpacing: '-0.03em' }}
          >
            Where culture meets what&apos;s next.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-sans font-light text-dark/55 text-xl leading-relaxed max-w-xl mb-12"
          >
            We&apos;re building infrastructure for cultural ventures that don&apos;t fit existing categories. Projects that ask better questions rather than offering quick answers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-col items-start gap-5"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-black border border-black/15 rounded-full px-7 py-3 hover:bg-black hover:text-white hover:border-black transition-all group"
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-yellow group-hover:text-white transition-colors">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                <path d="M5 7h4M7.5 5.5l1.5 1.5-1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </Link>
            <span className="font-mono text-[10px] text-yellow tracking-[0.2em] uppercase">
              First projects — 2027
            </span>
          </motion.div>
        </div>
      </section>

      {/* What we&apos;re building */}
      <section className="bg-black py-28 lg:py-40 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] text-yellow/60 tracking-[0.22em] uppercase block mb-16"
          >
            What we&apos;re exploring
          </motion.span>

          <div className="grid lg:grid-cols-3 gap-0 border-l border-white/[0.07]">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" as const }}
                className="border-r border-white/[0.07] px-10 lg:px-14 py-12"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-[1.5px] bg-yellow" />
                  <span className="font-mono text-[9px] text-yellow/60 tracking-[0.22em] uppercase">{p.num}</span>
                </div>
                <h3 className="font-sans font-bold text-white text-2xl lg:text-3xl leading-snug mb-5">
                  {p.title}
                </h3>
                <p className="font-sans font-light text-white/45 text-base leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Position statement */}
      <section className="border-t border-black/[0.06] py-28 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-10"
            >
              Our position
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
              className="font-sans font-light text-dark/65 text-xl lg:text-2xl leading-relaxed mb-8"
            >
              Culture moves faster than institutions. We&apos;d rather operate at the edge — with practitioners, experimenters, and people building things that don&apos;t have names yet.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-sans font-light text-dark/40 text-base leading-relaxed"
            >
              If you&apos;re working on something that defies easy definition — we&apos;d like to hear about it.
            </motion.p>
          </div>
        </div>
      </section>

    </main>
  )
}
