'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const circles = [
  {
    id: 'places',
    label: 'Places',
    size: 330,
    // desktop
    top: '2%',
    right: '5%',
    // xl overrides
    xlTop: '0%',
    xlRight: '3%',
    xlSize: 370,
    duration: 7,
    oscDelay: 0,
    amp: 14,
    dotDuration: 9,
    // mobile
    mTop: '10%',
    mRight: '0%',
    mSize: 110,
  },
  {
    id: 'moments',
    label: 'Moments',
    size: 280,
    top: '47%',
    right: '38%',
    xlTop: '44%',
    xlRight: '34%',
    xlSize: 320,
    duration: 6,
    oscDelay: 1.4,
    amp: 11,
    dotDuration: 7,
    mTop: '40%',
    mRight: '5%',
    mSize: 95,
  },
  {
    id: 'futures',
    label: 'Futures',
    size: 240,
    top: '58%',
    right: '3%',
    xlTop: '60%',
    xlRight: '1%',
    xlSize: 275,
    duration: 8,
    oscDelay: 2.8,
    amp: 9,
    dotDuration: 11,
    mTop: '62%',
    mRight: '2%',
    mSize: 80,
  },
]

const textReveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3 + i * 0.12, ease: "easeOut" as const },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden pt-[68px]">

      {/* ── DESKTOP layout (md and up) ── */}
      <div className="hidden md:block max-w-screen-2xl mx-auto px-8 md:px-16 xl:px-20 2xl:px-24">
        <div className="grid lg:grid-cols-12 gap-8 min-h-[calc(100vh-68px)] items-center py-28 lg:py-36">

          {/* LEFT: Text */}
          <div className="lg:col-span-4 relative z-10">
            <motion.p
              custom={0}
              variants={textReveal}
              initial="hidden"
              animate="show"
              className="font-mono text-[10px] xl:text-[11px] text-mg mb-10 tracking-[0.22em] uppercase"
            >
              A Contemporary Cultural Platform
            </motion.p>

            <motion.p
              custom={1}
              variants={textReveal}
              initial="hidden"
              animate="show"
              className="font-sans font-light text-dark/55 text-[16px] xl:text-lg 2xl:text-xl leading-relaxed mb-16 max-w-[300px] xl:max-w-[340px]"
            >
              Curated journeys in culture, design, and entertainment. Meaningful by design. Unforgettable by nature.
            </motion.p>

            <motion.div
              custom={2}
              variants={textReveal}
              initial="hidden"
              animate="show"
            >
              <Link
                href="/tourism"
                className="inline-flex items-center gap-3 font-sans text-[12px] xl:text-[13px] tracking-[0.1em] uppercase text-black border border-black/15 rounded-full px-7 xl:px-9 py-3 xl:py-4 hover:bg-black hover:text-white hover:border-black transition-all group"
              >
                Explore the worlds
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-yellow group-hover:text-white transition-colors">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M5 7h4M7.5 5.5l1.5 1.5-1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Massive type + decorative circles */}
          <div className="lg:col-span-8 relative min-h-[520px] lg:min-h-[calc(100vh-220px)]">

            {/* Large display type */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute inset-0 flex items-center pointer-events-none select-none"
              aria-hidden="true"
            >
              <h1
                className="font-sans font-bold uppercase text-black"
                style={{ fontSize: 'clamp(52px, 14vw, 200px)', letterSpacing: '-0.025em', lineHeight: 0.88 }}
              >
                {['CULTURE', 'IN'].map((word, i) => (
                  <motion.span
                    key={word}
                    custom={i}
                    variants={textReveal}
                    initial="hidden"
                    animate="show"
                    className="block"
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  className="block text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75, duration: 0.8 }}
                >
                  CONTEXT
                </motion.span>
              </h1>
            </motion.div>

            {/* Floating decorative circles — desktop */}
            {circles.map((c, i) => (
              <motion.div
                key={c.id}
                style={{ position: 'absolute', top: c.top, right: c.right, width: c.size, height: c.size }}
                initial={{ opacity: 0, scale: 0.82, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + i * 0.18, ease: "easeOut" as const }}
                className="xl:hidden"
              >
                <CircleContent c={c} size={c.size} />
              </motion.div>
            ))}

            {/* XL+ circles — slightly larger and repositioned */}
            {circles.map((c, i) => (
              <motion.div
                key={`xl-${c.id}`}
                style={{ position: 'absolute', top: c.xlTop, right: c.xlRight, width: c.xlSize, height: c.xlSize }}
                initial={{ opacity: 0, scale: 0.82, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + i * 0.18, ease: "easeOut" as const }}
                className="hidden xl:block"
              >
                <CircleContent c={c} size={c.xlSize} />
              </motion.div>
            ))}

          </div>
        </div>
      </div>

      {/* ── MOBILE layout (below md) ── */}
      <div className="md:hidden flex flex-col min-h-[calc(100vh-68px)]">

        {/* TOP: label + button — protected zone */}
        <div className="relative z-20 flex flex-col px-6 pt-10 pb-6 min-h-[45vh] justify-between">
          <motion.p
            custom={0}
            variants={textReveal}
            initial="hidden"
            animate="show"
            className="font-mono text-[10px] text-mg tracking-[0.22em] uppercase"
          >
            A Contemporary Cultural Platform
          </motion.p>

          <motion.div
            custom={2}
            variants={textReveal}
            initial="hidden"
            animate="show"
          >
            <Link
              href="/tourism"
              className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-black border border-black/15 rounded-full px-7 py-3 hover:bg-black hover:text-white hover:border-black transition-all group"
            >
              Explore the worlds
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-yellow group-hover:text-white transition-colors">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                <path d="M5 7h4M7.5 5.5l1.5 1.5-1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* BOTTOM: big type + circles */}
        <div className="relative z-10 flex-1 overflow-hidden">

          {/* Big type */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute inset-0 flex items-start pt-4 pl-6 pointer-events-none select-none"
            aria-hidden="true"
          >
            <h1
              className="font-sans font-bold uppercase text-black"
              style={{ fontSize: 'clamp(48px, 20vw, 80px)', letterSpacing: '-0.025em', lineHeight: 0.88 }}
            >
              {['CULTURE', 'IN'].map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={textReveal}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="block text-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.8 }}
              >
                CONTEXT
              </motion.span>
            </h1>
          </motion.div>

          {/* Mobile circles — right-side cluster */}
          {circles.map((c, i) => (
            <motion.div
              key={`m-${c.id}`}
              style={{
                position: 'absolute',
                top: c.mTop,
                right: c.mRight,
                width: c.mSize,
                height: c.mSize,
              }}
              initial={{ opacity: 0, scale: 0.82, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 + i * 0.18, ease: "easeOut" as const }}
            >
              <CircleContent c={c} size={c.mSize} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-black/[0.06]" />
    </section>
  )
}

function CircleContent({ c, size }: { c: typeof circles[0]; size: number }) {
  return (
    <motion.div
      animate={{ y: [0, -c.amp, 0, c.amp, 0] }}
      transition={{ duration: c.duration, delay: c.oscDelay, repeat: Infinity, ease: 'easeInOut' }}
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <div
        style={{ width: '100%', height: '100%', borderRadius: '9999px', position: 'relative' }}
        className="backdrop-blur-sm bg-white/40 border-2 border-black/20 shadow-[0_16px_60px_rgba(0,0,0,0.07)] pointer-events-none"
      >
        {/* Rotating yellow dot */}
        <motion.div
          className="absolute inset-0"
          style={{ transformOrigin: 'center center' }}
          animate={{ rotate: 360 }}
          transition={{ duration: c.dotDuration, repeat: Infinity, ease: 'linear' }}
        >
          <span
            className="absolute rounded-full bg-yellow"
            style={{
              width: 10,
              height: 10,
              top: '50%',
              left: '50%',
              transform: `translate(${size / 2 - 5}px, -5px)`,
              boxShadow: '0 0 10px 3px rgba(232,200,50,0.55)',
            }}
          />
        </motion.div>

        {/* Label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-sans font-semibold text-black leading-none"
            style={{ fontSize: Math.round(size * 0.088) }}
          >
            {c.label}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
