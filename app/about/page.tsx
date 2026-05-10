'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-[88px]">

      {/* Hero */}
      <section className="py-28 lg:py-44 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-5xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-mono text-[10px] !text-[#6A6A6A] tracking-[0.22em] uppercase block mb-10"
            >
              About Kollektiv 26
            </motion.span>
            <div className="w-10 h-[2px] bg-yellow mb-12" />
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" as const }}
              className="font-sans font-bold text-black leading-[1.04] mb-12"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 6rem)', letterSpacing: '-0.025em' }}
            >
              A platform for those<br />who move between worlds.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="font-sans font-normal !text-[#1F1F1F] text-xl lg:text-2xl leading-relaxed max-w-3xl"
            >
              We curate travel with cultural depth, entertainment with artistic rigour, and ventures that look ahead. Founded in Istanbul. Operating globally.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Platform Description */}
      <section className="border-t border-black/15 py-20 lg:py-28 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-0 border-l border-black/15">
            {[
              {
                label: 'Tourism & Concierge',
                body: 'Curated journeys across Turkey and beyond. Private transfers, bespoke itineraries, and cultural concierge services for those who travel with intention.',
                href: '/tourism',
                linkLabel: 'Explore Tourism',
              },
              {
                label: 'Entertainment',
                body: 'Event production, artist management, and venue operations. Building the infrastructure for live culture — from a single night to permanent spaces.',
                href: '/entertainment',
                linkLabel: 'Explore Entertainment',
              },
              {
                label: 'Innovation',
                body: "Ventures at the edge of what's next. Partnerships, platforms, and ideas built for longevity, not trend cycles.",
                href: '/innovation',
                linkLabel: 'Explore Innovation',
              },
            ].map((item, i) => (
              <Link href={item.href} key={item.label} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.09, ease: "easeOut" as const }}
                  className="border-r border-black/15 px-10 lg:px-14 py-10 hover:bg-black/[0.02] transition-colors cursor-pointer"
                >
                  <span className="font-mono text-[9px] text-yellow tracking-[0.22em] uppercase block mb-5">{item.label}</span>
                  <p className="font-sans font-normal !text-[#2A2A2A] text-base leading-relaxed">{item.body}</p>
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-dark/40 hover:text-black transition-colors mt-6 inline-flex items-center gap-2">
                    {item.linkLabel} <span className="text-yellow">→</span>
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why 26 */}
      <section id="why-26" className="border-t border-black/15 py-28 lg:py-44 px-8 lg:px-16 bg-offwhite">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left: Text */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] !text-[#6A6A6A] tracking-[0.22em] uppercase block mb-6"
            >
              The name
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
              className="font-sans font-bold !text-black leading-tight mb-14"
              style={{ fontSize: 'clamp(2.4rem, 4vw, 4.2rem)', letterSpacing: '-0.025em' }}
            >
              Why 26?
            </motion.h2>

            <div className="space-y-8 max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-sans font-semibold !text-black text-xl lg:text-2xl leading-relaxed"
              >
                26 is the number of letters in the Latin alphabet.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans font-normal !text-[#2A2A2A] text-[17px] leading-[1.75]"
              >
                A finite set, capable of producing everything that has been written — and everything still waiting to be written. Names, directions, invitations, maps, contracts, songs, stories, departures, returns.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans font-normal !text-[#2A2A2A] text-[17px] leading-[1.75]"
              >
                For us, 26 is not a number of completion. It is a structure of expression.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-sans font-normal !text-[#2A2A2A] text-[17px] leading-[1.75]"
              >
                The Agora was built on a similar idea: a space where voices, disciplines, questions and encounters could gather. Not as a single message, but as a living field of exchange.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-sans font-normal !text-[#2A2A2A] text-[17px] leading-[1.75]"
              >
                Kollektiv 26 carries that logic forward. Travel, entertainment, culture and new ventures meet here as parts of a shared language — each one distinct, but stronger when placed in relation.
              </motion.p>
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" as const }}
            className="lg:col-span-5 lg:sticky lg:top-40"
          >
            <div
              className="w-full rounded-sm overflow-hidden bg-neutral-100"
              style={{ height: 'clamp(420px, 60vh, 720px)' }}
            >
              <img
                src="/images/Editorial%20Image%20Concept.png"
                alt="Kollektiv 26 Philosophy"
                className="w-full h-full object-cover grayscale contrast-110"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* How We Work — Accordion */}
      <section className="border-t border-black/15 py-28 lg:py-44 px-8 lg:px-16 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

            {/* Left: Headline */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-mono text-[10px] !text-[#6A6A6A] tracking-[0.22em] uppercase block mb-8">
                  How we work
                </span>
                <div className="w-8 h-[2px] bg-yellow mb-10" />
                <h2
                  className="font-sans font-bold !text-black leading-tight"
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
              className="lg:col-span-8 border-t border-[#CFCFCF]"
            >
              {[
                {
                  id: '01',
                  title: 'A contemporary Agora',
                  body: 'Like the ancient Athenian gathering place where commerce, culture, and civic life intersected, we operate as a platform where disciplines inform one another. Not isolated departments — interconnected practices.',
                },
                {
                  id: '02',
                  title: 'Quality over reach',
                  body: "We don't optimize for scale. Better to serve fewer people well than maximize volume at the expense of experience.",
                },
                {
                  id: '03',
                  title: 'Context matters',
                  body: 'Every project exists within a broader cultural landscape. We consider how our work fits, what it responds to, and what it contributes.',
                },
                {
                  id: '04',
                  title: 'Transparency, not hype',
                  body: 'We avoid marketing language that promises transformation. Clear communication, honest expectations, work that speaks for itself.',
                },
                {
                  id: '05',
                  title: 'Based in Istanbul, operating globally',
                  body: 'Founded in a city that exists between continents and centuries. This shapes how we think about connection, heritage, and building something contemporary that respects the past.',
                },
              ].map((item) => (
                <details key={item.title} className="group border-b-[1.5px] border-[#CFCFCF] outline-none">
                  <summary className="flex items-center justify-between cursor-pointer list-none py-10 lg:py-14 gap-8 outline-none select-none">
                    <div className="flex items-baseline gap-6 lg:gap-10">
                      <span className="font-mono text-[10px] !text-[#6A6A6A] translate-y-[-2px]">{item.id}</span>
                      <h3 className="font-sans font-bold !text-black text-2xl lg:text-4xl leading-tight tracking-tight group-hover:text-black/70 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="relative w-8 h-8 lg:w-10 lg:h-10 shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-open:rotate-[135deg]">
                        <div className="w-full h-[2px] bg-black" />
                        <div className="absolute w-[2px] h-full bg-black" />
                      </div>
                    </div>
                  </summary>
                  <div className="pb-10 lg:pb-14 pl-[50px] lg:pl-[78px] max-w-3xl overflow-hidden">
                    <p className="font-sans font-normal !text-[#3A3A3A] text-base leading-[1.7]">
                      {item.body}
                    </p>
                  </div>
                </details>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/15 py-24 px-8 lg:px-16 bg-offwhite">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] !text-[#6A6A6A] tracking-[0.22em] uppercase block mb-4">Work with us</span>
            <h2 className="font-sans font-bold text-black text-3xl lg:text-4xl" style={{ letterSpacing: '-0.02em' }}>
              If something here resonates, we&apos;d like to hear from you.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-white bg-black rounded-full px-8 py-4 hover:bg-black/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
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
