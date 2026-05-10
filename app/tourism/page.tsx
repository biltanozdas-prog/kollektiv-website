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
    <main className="min-h-screen bg-offwhite">

      {/* ── 01 HERO — full viewport, extends behind transparent navbar ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col overflow-hidden"
      >
        <motion.div
          style={{ opacity: imageOpacity }}
          className="absolute inset-0"
        >
          <img
            src="/images/tourism-overview-hero.jpg"
            alt="Travel with intention"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70 md:from-black/45 md:via-black/20 md:to-black/65" />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="relative z-10 flex-1 flex flex-col justify-between px-8 lg:px-16 pt-[132px] pb-16 lg:pb-20"
        >
          {/* Breadcrumb — top left */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-[9px] text-white/60 tracking-[0.3em] uppercase"
          >
            Tourism &amp; Concierge
          </motion.span>

          {/* Main content — bottom */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" as const }}
              className="font-serif text-white leading-[1.05] mb-6 max-w-5xl"
              style={{ fontSize: 'clamp(2rem, 7vw, 7rem)' }}
            >
              Curated journeys.<br />Timeless places.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-sans font-light text-white/55 text-sm leading-relaxed max-w-md mb-10"
            >
              Meaningful travel. Thoughtfully curated. From iconic destinations
              to hidden escapes, we design experiences that stay with you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <Link
                href="/tourism/concierge"
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-white border border-white/30 rounded-full px-7 py-3 backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black hover:border-white transition-all"
              >
                Begin an inquiry
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── 02 SERVICES — left image + numbered list right ── */}
      <section className="border-t border-lg py-24 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">

          <div className="flex items-baseline justify-between mb-16 lg:mb-20 gap-8">
            <span className="font-mono text-[9px] text-black/35 tracking-[0.22em] uppercase shrink-0">Our core services</span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="font-serif text-black leading-tight text-right"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)' }}
            >
              Bespoke travel, managed.
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
              className="lg:col-span-5 overflow-hidden rounded-sm mb-8 lg:mb-0"
              style={{ height: 'clamp(280px, 52vw, 500px)' }}
            >
              <img
                src="/images/concierge-yacht-charters.png"
                alt="Curated travel"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="lg:col-span-7">
              {[
                {
                  num: '01',
                  title: 'Bespoke Itineraries',
                  body: 'Custom-built journeys shaped around your rhythm, your interests, and the places that matter. No template trips.',
                  cta: 'Explore Concierge',
                  href: '/tourism/concierge',
                },
                {
                  num: '02',
                  title: 'Private Transfers',
                  body: 'Professional drivers, curated routes, and vehicles that fit the occasion. Getting there becomes part of the experience.',
                  cta: 'Explore Concierge',
                  href: '/tourism/concierge',
                },
                {
                  num: '03',
                  title: 'Cultural Concierge',
                  body: "Introductions to local makers, access to private collections, reservations at places that don't advertise. The details that define a journey.",
                  cta: 'Explore Concierge',
                  href: '/tourism/concierge',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" as const }}
                  className="grid grid-cols-12 gap-4 py-10 border-b border-lg first:border-t first:border-lg"
                >
                  <div className="col-span-1 pt-1">
                    <span className="font-mono text-[9px] text-black/25 tracking-[0.18em]">{item.num}</span>
                  </div>
                  <div className="col-span-11">
                    <h3 className="font-sans font-semibold text-[#1A1A1A] text-xl leading-snug mb-3">{item.title}</h3>
                    <p className="font-sans font-light text-[#3A3A3A] text-base leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex justify-end">
            <Link
              href="/tourism/concierge"
              className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-black border border-black/20 rounded-full px-8 py-3 hover:bg-black hover:text-white hover:border-black transition-all"
            >
              Begin an inquiry <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 03 ACCESS / CONCIERGE FEATURE — text left + image right ── */}
      <section className="border-t border-lg py-24 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <span className="font-mono text-[9px] text-black/35 tracking-[0.24em] uppercase block mb-8">Our network</span>
              <div className="w-8 h-[2px] bg-yellow mb-10" />
              <h2
                className="font-serif text-black leading-[1.1] mb-7"
                style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)' }}
              >
                Access beyond<br />the ordinary.
              </h2>
              <p className="font-sans font-light text-[#3A3A3A] text-base leading-relaxed mb-10">
                Our concierge service is not a desk — it is a network. We bridge
                the gap between visiting a place and truly knowing it, providing
                the keys to spaces and experiences otherwise closed to the public.
              </p>
              <p className="font-sans font-light text-[#3A3A3A] text-base leading-relaxed mb-5">
                From the sapphire coastline of the Aegean to the layered
                culture of Istanbul — we move between places with the same
                deliberate eye.
              </p>
              <p className="font-sans font-light text-[#3A3A3A] text-base leading-relaxed mb-10">
                We work through an established network across major cultural
                capitals — with direct access to private galleries, ateliers
                and places that don&apos;t take public reservations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
              className="lg:col-span-7"
            >
              <div className="overflow-hidden rounded-sm" style={{ height: 'clamp(360px, 50vw, 620px)' }}>
                <img
                  src="/images/concierge-private-villas.png"
                  alt="Private concierge access"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 04 EVERY DETAIL INTENTIONALLY CONSIDERED ── */}
      <section className="border-t border-lg py-24 lg:py-36 px-8 lg:px-16 bg-offwhite">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-mono text-[9px] text-black/35 tracking-[0.22em] uppercase block mb-8">Our approach</span>
              <div className="w-8 h-[2px] bg-yellow mb-10" />
              <h2
                className="font-serif text-[#0A0A0A] leading-tight mb-7"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 5.5rem)' }}
              >
                Every detail<br />intentionally considered.
              </h2>
              <p className="font-sans font-light text-[#3A3A3A] text-base leading-relaxed mb-10">
                We don&apos;t believe in checklists. A great journey isn&apos;t measured
                by landmarks visited — it&apos;s defined by moments you didn&apos;t
                know you needed. Our work is about creating space for
                discovery, building in room to breathe, and connecting you
                with places on terms that feel genuine rather than
                transactional.
              </p>
              <Link
                href="/tourism/approach"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-black/45 hover:text-black transition-colors"
              >
                Read our approach <ArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
              className="overflow-hidden rounded-sm"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src="/images/tourism-approach-intent-editorial.png"
                alt="Intentional approach to travel"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  )
}
