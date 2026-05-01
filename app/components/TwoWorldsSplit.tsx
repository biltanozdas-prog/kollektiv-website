'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

function Arrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const fadeScale = {
  hidden: { opacity: 0, scale: 1.04 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" as const } },
}

const tourismLinks = [
  { label: 'Bespoke Itineraries', href: '/tourism/concierge' },
  { label: 'Private Transfers', href: '/tourism/concierge' },
  { label: 'Cultural Concierge', href: '/tourism/concierge' },
  { label: 'Aegean & Istanbul', href: '/tourism' },
  { label: 'Cultural Access', href: '/tourism/concierge' },
]

export default function TwoWorldsSplit() {
  return (
    <section>

      {/* ── TOURISM — 3-column: text | image | nav ── */}
      <div
        className="grid lg:grid-cols-[1fr_1.4fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
        style={{ minHeight: '92vh' }}
      >
        {/* Col 1 — Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="bg-white flex flex-col justify-center px-8 lg:px-16 xl:px-16 py-20 lg:py-32"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-8"
          >
            Tourism &amp; Concierge
          </motion.span>
          <div className="w-10 h-[2px] bg-yellow mb-10" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" as const }}
            className="font-serif italic text-black leading-[1.08] mb-10"
            style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.8rem)' }}
          >
            Curated journeys.<br />Timeless places.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-sans font-light text-dg text-base leading-relaxed mb-12 max-w-[320px]"
          >
            Bespoke itineraries, private transfers, and cultural concierge — across Istanbul, the Aegean, and beyond.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
          >
            <Link href="/tourism" className="inline-flex items-center gap-3 font-sans text-sm tracking-[0.06em] text-black hover:opacity-50 transition-opacity group w-fit">
              Explore Tourism
              <motion.span whileHover={{ x: 4 }} className="inline-block"><Arrow /></motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Col 2 — Image */}
        <motion.div
          variants={fadeScale}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative overflow-hidden min-h-[300px] lg:min-h-0"
          style={{ minHeight: '92vh', background: 'linear-gradient(160deg, #ede4d8 0%, #d8ccbb 45%, #c8b8a2 100%)' }}
        >
          <img
            src="/images/VIP%20Hospitality%20Experience.png"
            alt="Aegean coast — Tourism & Concierge"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Col 3 — Navigation links */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="bg-white flex flex-col justify-center px-8 lg:px-14 xl:px-16 py-20 lg:py-32 border-t lg:border-t-0 border-l-0 lg:border-l border-lg/40"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-10"
          >
            What we offer
          </motion.span>

          <nav className="flex flex-col gap-0">
            {tourismLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.5, ease: "easeOut" as const }}
              >
                <Link
                  href={link.href}
                  className="group flex items-center justify-between py-4 border-b border-lg/50 hover:border-black/20 transition-colors"
                >
                  <span className="font-sans font-light text-black text-[15px] tracking-[0.01em] group-hover:opacity-50 transition-opacity">
                    {link.label}
                  </span>
                  <motion.span
                    whileHover={{ x: 3 }}
                    className="text-black/30 group-hover:text-black/60 transition-colors"
                  >
                    <Arrow />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="font-mono text-[9px] text-mg tracking-[0.14em] uppercase mt-10"
          >
            Istanbul · Aegean · Global
          </motion.p>
        </motion.div>
      </div>

      {/* ── WHAT CONNECTS CULTURE DIVIDER ── */}
      <div className="bg-black px-8 lg:px-24 py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          >
            <div>
              <span className="font-mono text-[9px] text-yellow/60 tracking-[0.2em] uppercase block mb-4">
                The Thread
              </span>
              <h3
                className="font-sans font-bold text-white leading-none 2xl:text-7xl"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}
              >
                What connects culture.
              </h3>
            </div>
            <div className="hidden lg:block flex-1 mx-16 border-t border-dashed border-white/10" />
            <p className="font-sans font-light text-white/40 text-sm leading-relaxed max-w-[360px]">
              Kollektiv 26 moves between Tourism and Entertainment — not as separate offerings, but as two expressions of the same cultural sensibility.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── ENTERTAINMENT — sans bold ── */}
      <div className="grid lg:grid-cols-2" style={{ minHeight: '90vh' }}>
        {/* Entertainment image */}
        <motion.div
          variants={fadeScale}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative order-2 lg:order-1"
          style={{ minHeight: '90vh', background: 'linear-gradient(145deg, #111 0%, #0a0a0a 60%, #050505 100%)' }}
        >
          <img
            src="/images/13-entertainment-venue-flow-corridor.jpg.png"
            alt="Entertainment — Live performance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="bg-black flex flex-col justify-center px-8 lg:px-24 py-20 lg:py-32 order-1 lg:order-2"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="font-mono text-[9px] text-yellow/60 tracking-[0.22em] uppercase block mb-8"
          >
            Entertainment
          </motion.span>
          <div className="w-10 h-[2px] bg-yellow mb-10" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" as const }}
            className="font-sans font-bold text-white leading-[1.08] mb-10"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)' }}
          >
            Live moments.<br />Lasting impact.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-sans font-light text-white/50 text-lg leading-relaxed mb-12 max-w-[400px]"
          >
            Live music, curated events, and cultural programming — from intimate venues to landmark occasions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
          >
            <Link href="/entertainment" className="inline-flex items-center gap-3 font-sans text-sm tracking-[0.06em] text-yellow hover:opacity-50 transition-opacity group w-fit">
              Explore Entertainment
              <motion.span whileHover={{ x: 4 }} className="inline-block"><Arrow /></motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
