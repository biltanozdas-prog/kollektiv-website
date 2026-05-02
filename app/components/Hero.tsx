'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const circles = [
  {
    id: 'places',
    label: 'Places',
    // Desktop: positioned within circle zone (top portion of right col)
    dTop: '5%',   dRight: '4%',  dSize: 144,  xlSize: 180,
    // Mobile: positioned within 200px circle block
    mTop: '5%',   mRight: '2%',  mSize: 90,
    duration: 7,  oscDelay: 0,   amp: 10, dotDuration: 9,
  },
  {
    id: 'moments',
    label: 'Moments',
    dTop: '28%',  dRight: '30%', dSize: 118,  xlSize: 148,
    mTop: '38%',  mRight: '16%', mSize: 74,
    duration: 6,  oscDelay: 1.4, amp: 8,  dotDuration: 7,
  },
  {
    id: 'futures',
    label: 'Futures',
    dTop: '52%',  dRight: '5%',  dSize: 98,   xlSize: 122,
    mTop: '68%',  mRight: '3%',  mSize: 60,
    duration: 8,  oscDelay: 2.8, amp: 6,  dotDuration: 11,
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
    <section className="relative min-h-screen w-full bg-white overflow-x-hidden pt-[68px]">

      {/* ── DESKTOP layout (md and up) ── */}
      <div className="hidden md:block max-w-screen-2xl mx-auto px-8 md:px-16 xl:px-20 2xl:px-24">
        <div className="grid lg:grid-cols-12 gap-8 min-h-[calc(100vh-68px)] items-stretch py-16 lg:py-20">

          {/* LEFT: Text — vertically centered */}
          <div className="lg:col-span-4 flex flex-col justify-center relative z-10">
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

          {/* RIGHT: circles (top zone) + h1 (bottom zone) — no overlap */}
          <div className="lg:col-span-8 flex flex-col min-h-[520px] lg:min-h-[calc(100vh-160px)]">

            {/* CIRCLE ZONE — upper fixed-height area, h1 cannot enter here */}
            <div className="relative h-[280px] xl:h-[380px] overflow-hidden shrink-0">

              {/* md/lg circles */}
              {circles.map((c, i) => (
                <motion.div
                  key={c.id}
                  style={{ position: 'absolute', top: c.dTop, right: c.dRight, width: c.dSize, height: c.dSize }}
                  initial={{ opacity: 0, scale: 0.82, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + i * 0.18, ease: "easeOut" as const }}
                  className="xl:hidden"
                >
                  <CircleContent c={c} size={c.dSize} />
                </motion.div>
              ))}

              {/* xl+ circles — slightly larger */}
              {circles.map((c, i) => (
                <motion.div
                  key={`xl-${c.id}`}
                  style={{ position: 'absolute', top: c.dTop, right: c.dRight, width: c.xlSize, height: c.xlSize }}
                  initial={{ opacity: 0, scale: 0.82, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + i * 0.18, ease: "easeOut" as const }}
                  className="hidden xl:block"
                >
                  <CircleContent c={c} size={c.xlSize} />
                </motion.div>
              ))}
            </div>

            {/* H1 ZONE — below circles, zero overlap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 flex items-end pb-8 lg:pb-14 pointer-events-none select-none"
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

          </div>
        </div>
      </div>

      {/* ── MOBILE layout (below md) — 3 separate blocks ── */}
      <div className="md:hidden flex flex-col min-h-[calc(100vh-68px)] overflow-x-hidden">

        {/* BLOCK 1: Circles — isolated, right-side cluster, no text here */}
        <div className="relative h-[200px] overflow-hidden shrink-0">
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

        {/* BLOCK 2: Label + button — no circles */}
        <div className="px-5 py-8 flex flex-col gap-10">
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

        {/* BLOCK 3: Big typography — no circles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex items-end pb-8 px-5 overflow-hidden pointer-events-none select-none"
          aria-hidden="true"
        >
          <h1
            className="font-sans font-bold uppercase text-black"
            style={{ fontSize: 'clamp(44px, 20vw, 80px)', letterSpacing: '-0.025em', lineHeight: 0.88 }}
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
