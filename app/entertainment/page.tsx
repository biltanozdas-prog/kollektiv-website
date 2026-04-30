'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EntertainmentPage() {
  return (
    <main className="min-h-screen bg-offwhite">

      {/* ── HERO: asymmetric split ── */}
      <section className="relative pt-[108px] min-h-screen grid lg:grid-cols-12 overflow-hidden">

        {/* Left column — text (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[9px] text-mg mb-8 tracking-[0.24em] uppercase">
              Mode 02 — Entertainment
            </p>
            <div className="w-12 h-[2px] bg-yellow mb-12" />
            <h1
              className="font-sans font-bold text-black mb-10 leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)', letterSpacing: '-0.03em' }}
            >
              SOUND.<br />
              CULTURE.<br />
              <span className="text-yellow">EXPERIENCE.</span>
            </h1>
            <p className="font-sans font-light text-dark/65 text-lg leading-relaxed max-w-sm mb-12">
              Experiences that move people. Built on sound, driven by culture.
            </p>
            <Link
              href="#pillars"
              className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-black hover:opacity-50 transition-opacity"
            >
              Explore
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Right column — dot pattern + yellow audio feed band (7 cols) */}
        <div className="hidden lg:block lg:col-span-7 relative">
          {/* Dot pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute inset-0"
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="dots-hero" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.4" fill="#0A0A0A" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots-hero)" opacity="0.15" />
            </svg>
            {/* Fade left edge */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-offwhite to-transparent" />
          </motion.div>

          {/* Yellow vertical "Audio Feed" band */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-0 top-0 bottom-0 w-14 bg-yellow flex items-center justify-center z-10"
          >
            <p
              className="font-mono text-[9px] text-black/60 tracking-[0.3em] uppercase"
              style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
            >
              Sound · Culture · Experience
            </p>
          </motion.div>
        </div>

        {/* Floating yellow card — overlapping bottom of hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-8 lg:left-16 translate-y-1/2 z-20 bg-yellow px-8 py-5 flex items-center gap-5"
        >
          <span className="w-2 h-2 bg-black rounded-full animate-pulse shrink-0" />
          <div>
            <p className="font-mono text-[9px] text-black tracking-[0.24em] uppercase mb-1">
              Building Infrastructure
            </p>
            <p className="font-sans font-bold text-base text-black">
              First events launching late 2026
            </p>
          </div>
        </motion.div>
      </section>

      {/* Spacer for floating card */}
      <div className="h-16 lg:h-20" />

      {/* ── THREE PILLARS ── */}
      <section id="pillars" className="py-24 lg:py-32 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] text-mg mb-16 tracking-[0.24em] uppercase block"
          >
            Three pillars
          </motion.span>

          {/* Asymmetric 12-col grid */}
          <div className="grid lg:grid-cols-12 gap-6">

            {/* Card 1: white, 5 cols */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <Link href="/entertainment/events" className="group block h-full">
                <div className="h-full border border-black/[0.08] p-8 lg:p-10 bg-white transition-all duration-500 hover:border-yellow hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                  <div className="w-12 h-[2px] bg-yellow mb-8" />
                  <p className="font-mono text-[9px] text-mg mb-5 tracking-[0.24em] uppercase">01</p>
                  <h3
                    className="font-sans font-bold text-black mb-6 leading-tight"
                    style={{ fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)', letterSpacing: '-0.02em' }}
                  >
                    Event Management<br />&amp; Consultancy
                  </h3>
                  <p className="font-sans font-light text-dark/65 text-base leading-relaxed mb-10">
                    An event is a container. We build what goes inside — from concept to close, atmosphere to execution.
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans text-[13px] text-black group-hover:gap-4 transition-all duration-300">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Card 2: black bg, 7 cols, col-start-6 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 lg:col-start-6"
            >
              <Link href="/entertainment/label" className="group block h-full">
                <div className="h-full border border-black p-8 lg:p-10 bg-black transition-all duration-500 hover:border-yellow hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                  <div className="w-12 h-[2px] bg-yellow mb-8" />
                  <p className="font-mono text-[9px] text-white/40 mb-5 tracking-[0.24em] uppercase">02</p>
                  <h3
                    className="font-sans font-bold text-white mb-6 leading-tight"
                    style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.4rem)', letterSpacing: '-0.02em' }}
                  >
                    Music Label &amp;<br />Artist Management
                  </h3>
                  <p className="font-sans font-light text-white/55 text-base leading-relaxed mb-10">
                    We don&apos;t discover artists. We recognize them. Then we build the infrastructure so they can focus on creating.
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans text-[13px] text-white group-hover:gap-4 transition-all duration-300">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Card 3: stone bg, 6 cols */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <Link href="/entertainment/venues" className="group block h-full">
                <div className="h-full border border-black/[0.08] p-8 lg:p-10 bg-stone/[0.12] transition-all duration-500 hover:border-yellow hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                  <div className="w-12 h-[2px] bg-yellow mb-8" />
                  <p className="font-mono text-[9px] text-mg mb-5 tracking-[0.24em] uppercase">03</p>
                  <h3
                    className="font-sans font-bold text-black mb-6 leading-tight"
                    style={{ fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)', letterSpacing: '-0.02em' }}
                  >
                    Venues &amp; Operations
                  </h3>
                  <p className="font-sans font-light text-dark/65 text-base leading-relaxed mb-10">
                    We don&apos;t just book venues. We run them. Infrastructure for spaces where culture happens.
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans text-[13px] text-black group-hover:gap-4 transition-all duration-300">
                    What&apos;s ahead
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── HOW WE WORK — BLACK section ── */}
      <section className="bg-black py-24 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-[9px] text-yellow tracking-[0.24em] uppercase block mb-10"
              >
                How we work
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans font-bold text-white leading-tight"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', letterSpacing: '-0.025em' }}
              >
                Concept before logistics.<br />
                Infrastructure before launch.
              </motion.h2>
            </div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10 pt-1 lg:pt-16"
            >
              {[
                {
                  title: 'Start with why',
                  body: "We don't start with dates and budgets. We start with why an event should exist, what an artist needs to thrive, or what a venue should become.",
                },
                {
                  title: 'Build the infrastructure',
                  body: 'The operational reality follows from concept — not the other way around. Systems that serve the work, not constrain it.',
                },
                {
                  title: 'Stay in it',
                  body: 'We work with artists and clients across the full arc — before, during, and after. Long relationships produce better work.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="border-l border-yellow/30 pl-6"
                >
                  <h3 className="font-sans font-semibold text-white text-lg mb-2">{item.title}</h3>
                  <p className="font-sans font-light text-white/50 text-base leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CTA — white ── */}
      <section className="border-t border-black/[0.06] py-20 lg:py-24 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-4">Work with us</span>
            <h2
              className="font-sans font-bold text-black"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', letterSpacing: '-0.02em' }}
            >
              Let&apos;s talk about your project.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-white bg-black rounded-full px-8 py-4 hover:bg-black/80 transition-colors whitespace-nowrap"
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
