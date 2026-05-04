'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const services = [
  {
    num: '01',
    title: 'Helicopter Transfers',
    body: 'Point-to-point aerial transport across the Aegean and beyond. Skip the traffic. Arrive on your own terms.',
    image: '/images/concierge-helicopter-transfers.png',
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
    body: "Private site visits, studio tours with working artists, and reservations at the places that don't take reservations publicly.",
    image: '/images/dining%20bodrum.png',
    tag: 'Art · Heritage · Local',
  },
  {
    num: '06',
    title: '24/7 Concierge',
    body: 'On-call throughout your stay. Last-minute changes, special requests, anything that comes up. You travel — we handle.',
    image: '/images/concierge-24-7-support.png',
    tag: 'Always available',
  },
]

const days = [
  {
    day: 'DAY 01',
    title: 'Arrival & Grounding',
    body: 'Private transfer from the airport to a coastal villa. Late lunch at a family-run meyhane in the old quarter. Evening walk through the marina.',
  },
  {
    day: 'DAY 02',
    title: 'Art & Architecture',
    body: 'Private morning at the Museum of Underwater Archaeology. Studio visit with a local ceramicist. Afternoon left open. Dinner overlooking the castle.',
  },
  {
    day: 'DAY 03',
    title: 'Wind & Water',
    body: 'Morning departure via private car along the coast road. Optional windsurfing session. Sunset.',
  },
]

export default function ConciergePage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] pt-[108px]">

      {/* ── HERO ── */}
      <section className="py-20 lg:py-28 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-mono text-[9px] text-black/35 tracking-[0.24em] uppercase block mb-8">
                Bespoke Concierge Services
              </span>
              <div className="w-8 h-[2px] bg-yellow mb-10" />
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" as const }}
                className="font-serif text-black leading-[1.05] mb-10"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)' }}
              >
                Everything handled.<br />Nothing overlooked.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-sans font-light text-[#3A3A3A] text-xl leading-relaxed"
              >
                Logistics shouldn&apos;t be part of your mental load. We handle transport, accommodation, access, and coordination — so you show up and experience.
              </motion.p>
            </motion.div>

            {/* Right — editorial image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" as const }}
              className="overflow-hidden rounded-sm order-2"
              style={{ height: 'clamp(240px, 48vw, 560px)' }}
            >
              <img
                src="/images/Tourism%20Newsletter%20Banner%202.png"
                alt="Concierge experience"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="border-t border-[#D8D4CC] py-24 lg:py-32 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] text-black/35 tracking-[0.22em] uppercase block mb-14"
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
                transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: "easeOut" as const }}
                className="group"
              >
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
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[9px] text-white/70 tracking-[0.14em] uppercase">{s.tag}</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="font-mono text-[9px] text-white/50 tracking-[0.12em]">{s.num}</span>
                  </div>
                </div>
                <h3 className="font-sans font-semibold text-[#1A1A1A] text-xl leading-snug mb-3 group-hover:opacity-60 transition-opacity">
                  {s.title}
                </h3>
                <p className="font-sans font-light text-[#3A3A3A] text-base leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── A SAMPLE FLOW ── */}
      <section className="border-t border-[#D8D4CC] py-24 lg:py-32 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <span className="font-mono text-[9px] text-black/35 tracking-[0.24em] uppercase block mb-8">
                Itinerary Sketch
              </span>
              <div className="w-8 h-[2px] bg-yellow mb-10" />
              <h2
                className="font-serif text-[#0A0A0A] leading-tight mb-7"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
              >
                A Sample Flow.
              </h2>
              <p className="font-sans font-light text-[#3A3A3A] text-base leading-relaxed mb-10">
                This is what our planning looks like in practice. A balance of
                structure and breathing room, carefully paced.
              </p>
              <div className="overflow-hidden rounded-sm" style={{ height: 'clamp(220px, 22vw, 300px)' }}>
                <img
                  src="/images/gathering.png"
                  alt="A curated journey"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right column — timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="divide-y divide-[#D8D4CC]">
                {days.map((d, i) => (
                  <motion.div
                    key={d.day}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="py-8 grid grid-cols-12 gap-4 items-start"
                  >
                    <div className="col-span-1 pt-0.5">
                      <span className="block w-2 h-2 rounded-full border border-black/25 mt-1" />
                    </div>
                    <div className="col-span-11">
                      <span className="font-mono text-[9px] text-black/35 tracking-[0.22em] uppercase block mb-2">{d.day}</span>
                      <h3 className="font-sans font-medium text-[#1A1A1A] text-base leading-snug mb-3">{d.title}</h3>
                      <p className="font-sans font-light text-[#3A3A3A] text-sm leading-relaxed">{d.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 border-t border-[#D8D4CC]">
                <p className="font-serif text-[#3A3A3A] text-sm leading-relaxed mb-5">
                  Every journey is built individually. This is merely a starting point.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-black/45 hover:text-black transition-colors"
                >
                  Discuss a route <ArrowRight />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="border-t border-[#D8D4CC] py-20 lg:py-24 px-8 lg:px-16 bg-black">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] text-white/35 tracking-[0.22em] uppercase block mb-4">Ready to plan?</span>
            <h2 className="font-sans font-bold text-white text-3xl lg:text-4xl" style={{ letterSpacing: '-0.02em' }}>
              Let&apos;s talk logistics.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-black bg-white rounded-full px-8 py-4 hover:bg-white/85 transition-colors"
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
