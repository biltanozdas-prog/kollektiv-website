'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-offwhite pt-[108px]">

      {/* Hero */}
      <section className="py-28 lg:py-44 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-5xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-mono text-[10px] text-mg tracking-[0.22em] uppercase block mb-10"
            >
              About Kollektiv 26
            </motion.span>
            <div className="w-10 h-[2px] bg-yellow mb-12" />
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-bold text-black leading-[1.04] mb-12"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 6rem)', letterSpacing: '-0.025em' }}
            >
              A platform for those<br />who move between worlds.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="font-sans font-light text-dark/55 text-xl leading-relaxed max-w-3xl"
            >
              We curate travel with cultural depth, entertainment with artistic rigour, and ventures that look ahead. Founded in Istanbul. Operating globally.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Platform Description */}
      <section className="border-t border-black/[0.06] py-20 lg:py-28 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-0 border-l border-black/[0.06]">
            {[
              {
                label: 'Tourism & Concierge',
                body: 'Curated journeys across Turkey and beyond. Private transfers, bespoke itineraries, and cultural concierge services for those who travel with intention.',
              },
              {
                label: 'Entertainment',
                body: 'Event production, artist management, and venue operations. Building the infrastructure for live culture — from a single night to permanent spaces.',
              },
              {
                label: 'Innovation',
                body: "Ventures at the edge of what's next. Partnerships, platforms, and ideas built for longevity, not trend cycles.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="border-r border-black/[0.06] px-10 lg:px-14 py-10"
              >
                <span className="font-mono text-[9px] text-yellow tracking-[0.22em] uppercase block mb-5">{item.label}</span>
                <p className="font-sans font-light text-dark/70 text-base leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 26 */}
      <section className="border-t border-black/[0.06] py-28 lg:py-40 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-16 items-center">

          {/* Left: Text */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] text-mg tracking-[0.22em] uppercase block mb-6"
            >
              The name
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-bold text-black leading-tight mb-14"
              style={{ fontSize: 'clamp(2.4rem, 4vw, 4.2rem)', letterSpacing: '-0.025em' }}
            >
              Why 26?
            </motion.h2>

            <div className="space-y-10">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="font-sans font-medium text-black text-lg leading-relaxed"
              >
                Twenty-six letters. The full span of the Latin alphabet — the writing system that underpins most of the world's contemporary languages, trade, and communication. A deliberate reference to completeness, to the building blocks that make expression possible.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans font-light text-black text-lg leading-relaxed"
              >
                In Roman numerals, XXVI. A classical notation system — the infrastructure beneath empires, routes, and exchange. We carry that reference forward: not as nostalgia, but as acknowledgement that systems built to last are built on something intentional.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans font-light text-black text-lg leading-relaxed"
              >
                The ancient Agora was a gathering place — commerce, culture, and civic life intersecting without hierarchy. We operate with the same logic. Three areas of practice, one platform. Not departments reporting to a centre, but disciplines that inform each other continuously.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.32 }}
                className="font-mono text-2xl text-black tracking-widest pt-4"
              >
                I + I = III
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.42 }}
                className="font-sans font-light text-black text-base leading-relaxed italic"
              >
                The point where parallel paths intersect. The space between disciplines where new forms emerge.
              </motion.p>
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div
              className="w-full rounded-sm overflow-hidden"
              style={{ height: 'clamp(420px, 50vh, 620px)' }}
            >
              <img
                src="/images/Editorial%20Image%20Concept.png"
                alt="Kollektiv 26"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* How We Work — Accordion */}
      <section className="border-t border-black/[0.06] py-28 lg:py-40 px-8 lg:px-16 bg-stone/[0.08]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

            {/* Left: Headline */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-mono text-[10px] text-mg tracking-[0.22em] uppercase block mb-8">
                  How we work
                </span>
                <div className="w-8 h-[2px] bg-yellow mb-10" />
                <h2
                  className="font-sans font-bold text-black leading-tight"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', letterSpacing: '-0.025em' }}
                >
                  Our<br />approach
                </h2>
              </motion.div>
            </div>

            {/* Right: Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-8"
            >
              {[
                {
                  title: 'A contemporary Agora',
                  body: 'Like the ancient Athenian gathering place where commerce, culture, and civic life intersected, we operate as a platform where disciplines inform one another. Not isolated departments — interconnected practices.',
                },
                {
                  title: 'Quality over reach',
                  body: "We don't optimize for scale. Better to serve fewer people well than maximize volume at the expense of experience.",
                },
                {
                  title: 'Context matters',
                  body: 'Every project exists within a broader cultural landscape. We consider how our work fits, what it responds to, and what it contributes.',
                },
                {
                  title: 'Transparency, not hype',
                  body: 'We avoid marketing language that promises transformation. Clear communication, honest expectations, work that speaks for itself.',
                },
                {
                  title: 'Based in Istanbul, operating globally',
                  body: 'Founded in a city that exists between continents and centuries. This shapes how we think about connection, heritage, and building something contemporary that respects the past.',
                },
              ].map((item) => (
                <details key={item.title} className="group border-b border-black/[0.08] last:border-b-0">
                  <summary className="flex items-center justify-between cursor-pointer list-none py-7 gap-8">
                    <h3 className="font-sans font-semibold text-black text-xl leading-snug">
                      {item.title}
                    </h3>
                    <svg
                      className="w-5 h-5 text-black/40 shrink-0 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-sans font-light text-dark/70 text-base leading-relaxed pb-7 max-w-2xl">
                    {item.body}
                  </p>
                </details>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/[0.06] py-24 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-4">Work with us</span>
            <h2 className="font-sans font-bold text-black text-3xl lg:text-4xl" style={{ letterSpacing: '-0.02em' }}>
              Let&apos;s build something together.
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
