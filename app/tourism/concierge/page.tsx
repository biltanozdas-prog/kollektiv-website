'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Helicopter Transfers',
    body: 'Point-to-point aerial transport across the Aegean and beyond. Skip the traffic. Arrive on your own terms.',
    image: '/images/VIP%20Hospitality%20Experience.png',
    tag: 'Aerial · On-demand',
  },
  {
    num: '02',
    title: 'Yacht Charters',
    body: 'Private vessels with full crew, curated routes, and catering that fits the occasion — from day sails to multi-night passages.',
    image: '/images/Aegean%20Boat%20Experience.png',
    tag: 'Aegean · Mediterranean',
  },
  {
    num: '03',
    title: 'Private Villas',
    body: 'Exclusive properties with staff, security, and the kind of privacy that lets you actually relax. Your space, your rules.',
    image: '/images/Luxury%20Villa%20Image.png',
    tag: 'Bodrum · Aegean Coast',
  },
  {
    num: '04',
    title: 'Ground Transportation',
    body: 'Professional drivers, premium vehicles, and routes planned around your schedule — not ours.',
    image: '/images/general%20photo.png',
    tag: 'City · Region · Coast',
  },
  {
    num: '05',
    title: 'Cultural Access',
    body: 'Private site visits, studio tours with working artists, and reservations at the places that don\'t take reservations publicly.',
    image: '/images/dining%20bodrum.png',
    tag: 'Art · Heritage · Local',
  },
  {
    num: '06',
    title: '24/7 Concierge',
    body: 'On-call throughout your stay. Last-minute changes, special requests, anything that comes up. You travel — we handle.',
    image: '/images/service.png',
    tag: 'Always available',
  },
]

const steps = [
  {
    num: '01',
    title: 'Tell us what you need',
    body: 'Rough dates, general shape of the trip, must-haves. We don\'t need a detailed brief — just enough to start the conversation.',
  },
  {
    num: '02',
    title: 'We build the framework',
    body: 'Transport, accommodation, access arrangements. A structure that holds everything together without feeling rigid.',
  },
  {
    num: '03',
    title: 'You approve, we execute',
    body: 'Once you sign off: bookings, confirmations, coordination, and on-ground support. You travel — we manage.',
  },
]

export default function ConciergePage() {
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
              Premium Concierge Services
            </motion.span>
            <div className="w-8 h-[2px] bg-yellow mb-10" />
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-black leading-[1.05] mb-10"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}
            >
              Everything handled.<br />Nothing overlooked.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans font-light text-dark/60 text-xl leading-relaxed max-w-2xl"
            >
              Logistics shouldn&apos;t be part of your mental load. We handle transport, accommodation, access, and coordination — so you show up and experience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid — image + text cards */}
      <section className="border-t border-black/[0.06] py-24 lg:py-32 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-14"
          >
            What we provide
          </motion.span>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                {/* Image area */}
                <div
                  className="relative mb-6 rounded-sm overflow-hidden"
                  style={{ height: 'clamp(220px, 24vw, 320px)' }}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-mono text-[9px] text-white/70 tracking-[0.14em] uppercase">{s.tag}</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="font-mono text-[9px] text-white/50 tracking-[0.12em]">{s.num}</span>
                  </div>
                </div>

                {/* Text */}
                <h3 className="font-sans font-semibold text-black text-xl leading-snug mb-3 group-hover:opacity-60 transition-opacity">
                  {s.title}
                </h3>
                <p className="font-sans font-light text-dark/55 text-base leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-black/[0.06] py-24 lg:py-32 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-14"
          >
            How it works
          </motion.span>
          <div className="grid lg:grid-cols-3 gap-0 border-l border-black/[0.06]">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-r border-black/[0.06] px-10 lg:px-14 py-12"
              >
                <span className="font-mono text-[10px] text-mg tracking-[0.2em] block mb-5">{step.num}</span>
                <h3 className="font-sans font-semibold text-black text-xl leading-snug mb-4">{step.title}</h3>
                <p className="font-sans font-light text-dark/55 text-base leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/[0.06] py-20 lg:py-24 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-4">Ready to plan?</span>
            <h2 className="font-sans font-bold text-black text-3xl lg:text-4xl" style={{ letterSpacing: '-0.02em' }}>
              Let&apos;s talk logistics.
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
