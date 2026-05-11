'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ConciergePage() {
  const { t } = useLang()

  const services = [
    {
      num: '01',
      title: t.tourismConcierge.s1Title,
      body: t.tourismConcierge.s1Body,
      image: '/images/concierge-helicopter-transfers.png',
      tag: t.tourismConcierge.s1Tag,
    },
    {
      num: '02',
      title: t.tourismConcierge.s2Title,
      body: t.tourismConcierge.s2Body,
      image: '/images/Luxury%20Jet%20Interior.jpg',
      tag: t.tourismConcierge.s2Tag,
    },
    {
      num: '03',
      title: t.tourismConcierge.s3Title,
      body: t.tourismConcierge.s3Body,
      image: '/images/Aegean%20Boat%20Experience.png',
      tag: t.tourismConcierge.s3Tag,
    },
    {
      num: '04',
      title: t.tourismConcierge.s4Title,
      body: t.tourismConcierge.s4Body,
      image: '/images/Luxury%20Villa%20Image.png',
      tag: t.tourismConcierge.s4Tag,
    },
    {
      num: '05',
      title: t.tourismConcierge.s5Title,
      body: t.tourismConcierge.s5Body,
      image: '/images/concierge-ground-transportation.png',
      tag: t.tourismConcierge.s5Tag,
    },
    {
      num: '06',
      title: t.tourismConcierge.s6Title,
      body: t.tourismConcierge.s6Body,
      image: '/images/dining%20bodrum.png',
      tag: t.tourismConcierge.s6Tag,
    },
  ]

  const days = [
    {
      day: t.tourismConcierge.day1Day,
      title: t.tourismConcierge.day1Title,
      body: t.tourismConcierge.day1Body,
    },
    {
      day: t.tourismConcierge.day2Day,
      title: t.tourismConcierge.day2Title,
      body: t.tourismConcierge.day2Body,
    },
    {
      day: t.tourismConcierge.day3Day,
      title: t.tourismConcierge.day3Title,
      body: t.tourismConcierge.day3Body,
    },
  ]

  return (
    <main className="min-h-screen bg-offwhite pt-[108px]">

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
                {t.tourismConcierge.eyebrow}
              </span>
              <div className="w-8 h-[2px] bg-yellow mb-10" />
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" as const }}
                className="font-serif text-black leading-[1.05] mb-10"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)' }}
              >
                {t.tourismConcierge.headline.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-sans font-light text-dg text-xl leading-relaxed"
              >
                {t.tourismConcierge.desc}
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
                src="/images/concierge%201.png"
                alt="Concierge experience"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="border-t border-lg py-24 lg:py-32 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] text-black/35 tracking-[0.22em] uppercase block mb-14"
          >
            {t.tourismConcierge.servicesEyebrow}
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
                <h3 className="font-sans font-semibold text-dark text-xl leading-snug mb-3 group-hover:opacity-60 transition-opacity">
                  {s.title}
                </h3>
                <p className="font-sans font-light text-dg text-base leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── A SAMPLE FLOW ── */}
      <section className="border-t border-lg py-24 lg:py-32 px-8 lg:px-16">
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
                {t.tourismConcierge.sampleEyebrow}
              </span>
              <div className="w-8 h-[2px] bg-yellow mb-10" />
              <h2
                className="font-serif text-black leading-tight mb-7"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
              >
                {t.tourismConcierge.sampleH2}
              </h2>
              <p className="font-sans font-light text-dg text-base leading-relaxed mb-10">
                {t.tourismConcierge.sampleDesc}
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
                      <h3 className="font-sans font-medium text-dark text-base leading-snug mb-3">{d.title}</h3>
                      <p className="font-sans font-light text-dg text-sm leading-relaxed">{d.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 border-t border-lg">
                <p className="font-serif text-dg text-sm leading-relaxed mb-5">
                  {t.tourismConcierge.footerNote}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-black/45 hover:text-black transition-colors"
                >
                  {t.tourismConcierge.footerCta} <ArrowRight />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="border-t border-lg py-20 lg:py-24 px-8 lg:px-16 bg-black">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] text-white/35 tracking-[0.22em] uppercase block mb-4">{t.tourismConcierge.ctaEyebrow}</span>
            <h2 className="font-sans font-bold text-white text-3xl lg:text-4xl" style={{ letterSpacing: '-0.02em' }}>
              {t.tourismConcierge.ctaH2}
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-black bg-white rounded-full px-8 py-4 hover:bg-white/85 transition-colors"
          >
            {t.tourismConcierge.ctaButton}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}
