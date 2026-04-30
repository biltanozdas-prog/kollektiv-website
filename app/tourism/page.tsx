'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function TourismPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -40])

  return (
    <main className="min-h-screen bg-offwhite pt-[108px]">

      {/* ── HERO: full-viewport image with scroll fade ── */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-108px)] flex flex-col justify-between overflow-hidden"
      >
        {/* Background image with scroll-driven fade */}
        <motion.div
          style={{ opacity: imageOpacity }}
          className="absolute inset-0"
        >
          <img
            src="/images/tourism%20i%C3%A7in%20overview%20sayfas%C4%B1%20g%C3%B6rseli.jpg"
            alt="Curated journeys"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 flex-1 flex flex-col justify-center px-8 lg:px-16 py-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-[9px] text-white/70 tracking-[0.3em] uppercase block mb-6"
          >
            Mode 01 — Tourism &amp; Concierge
          </motion.span>

          <div className="w-8 h-[2px] bg-yellow mb-10" />

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-white leading-[1.05] mb-8 max-w-4xl"
            style={{ fontSize: 'clamp(3.2rem, 6vw, 6.5rem)' }}
          >
            Curated journeys.<br />Timeless places.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-sans font-light text-white/75 text-lg leading-relaxed max-w-md mb-12"
          >
            Meaningful travel. Thoughtfully curated. From iconic destinations to hidden escapes, we design experiences that stay with you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-white border border-white/30 rounded-full px-7 py-3 backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black hover:border-white transition-all group"
            >
              Start Planning
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                <path d="M5 7h4M7.5 5.5l1.5 1.5-1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="relative z-10 pb-10 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M5 11l5 5 5-5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ── WHAT WE OFFER — 3 columns ── */}
      <section className="border-t border-black/[0.06] py-24 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-16"
          >
            What we offer
          </motion.span>

          <div className="grid lg:grid-cols-3 divide-x divide-black/[0.06]">
            {[
              {
                title: 'Bespoke Itineraries',
                body: 'Custom-built journeys shaped around your rhythm, your interests, and the places that matter. No template trips.',
                href: '/tourism/itineraries',
                cta: 'Explore itineraries',
              },
              {
                title: 'Private Transfers',
                body: 'Professional drivers, curated routes, and vehicles that fit the occasion. Getting there becomes part of the experience.',
                href: '/tourism/concierge',
                cta: 'Learn more',
              },
              {
                title: 'Cultural Concierge',
                body: "Introductions to local makers, access to private collections, reservations at places that don't advertise. The details that define a journey.",
                href: '/tourism/concierge',
                cta: 'See how it works',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="px-10 lg:px-14 py-12 first:pl-0 last:pr-0"
              >
                <h3 className="font-sans font-semibold text-black text-xl leading-snug mb-5">{item.title}</h3>
                <p className="font-sans font-light text-dark/55 text-base leading-relaxed mb-8">{item.body}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 font-sans text-[13px] text-black hover:opacity-50 transition-opacity"
                >
                  {item.cta}
                  <ArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="border-t border-black/[0.06] py-24 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-8"
              >
                Our approach
              </motion.span>
              <div className="w-8 h-[2px] bg-yellow mb-10" />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif italic text-black leading-tight mb-8"
                style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.6rem)' }}
              >
                Every detail<br />intentionally considered.
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans font-light text-black text-lg leading-relaxed"
            >
              We don&apos;t believe in checklists. A great journey isn&apos;t measured by landmarks visited — it&apos;s defined by moments you didn&apos;t know you needed. Our work is about creating space for discovery, building in room to breathe, and connecting you with places on terms that feel genuine rather than transactional.
            </motion.p>
          </div>
        </div>
      </section>

    </main>
  )
}
