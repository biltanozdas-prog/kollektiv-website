'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function LabelPage() {
  return (
    <main className="min-h-screen pt-[108px] bg-offwhite">

      {/* Hero */}
      <section className="py-24 lg:py-40 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <p className="font-mono text-[9px] text-mg mb-8 tracking-[0.24em] uppercase">
              02 — Label
            </p>
            <div className="w-12 h-[2px] bg-yellow mb-12" />
            <h1
              className="font-sans font-bold text-black mb-12 leading-[0.95]"
              style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6.5rem)', letterSpacing: '-0.025em' }}
            >
              We don&apos;t discover artists.<br />
              We recognize them.
            </h1>
            <p className="font-sans font-light text-dark/75 text-xl leading-relaxed max-w-3xl">
              When we decide to work with an artist, we focus on one thing: what does this artist need to exist at their best? Sometimes it&apos;s production. Sometimes it&apos;s legal structure. Sometimes it&apos;s visibility. Sometimes it&apos;s just being in the right room with the right people. We build that room.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-t border-black/[0.06] py-24 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] text-mg mb-16 tracking-[0.24em] uppercase block"
          >
            What we do
          </motion.span>

          <div className="grid lg:grid-cols-3 gap-0 border-l border-black/[0.06]">
            {[
              {
                title: 'A&R',
                body: 'We don\'t search for talent. We see what\'s already there and put it in the right frame. Before the first conversation, we listen to the music. Then we listen to the person. If both align, we move forward.',
              },
              {
                title: 'Production',
                body: 'From studio to mastering, every stage moves alongside strategy. Producer selection, release timing, visual identity — these aren\'t separate decisions. They\'re parts of one decision.',
              },
              {
                title: 'Release',
                body: 'Distribution, live performance rights, publishing — we build separate structures for each because every right has its own value. Visibility starts before the music is finished.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-r border-black/[0.06] px-10 lg:px-14 py-12"
              >
                <h3 className="font-sans font-semibold text-black text-xl leading-snug mb-5">{item.title}</h3>
                <p className="font-sans font-light text-dark/60 text-base leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Process — yellow accent with yellow-left-border items */}
      <section className="py-24 lg:py-36 bg-yellow/[0.06] border-y border-yellow/[0.12] px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[9px] text-mg mb-10 tracking-[0.24em] uppercase block"
            >
              Working with artists
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-bold text-black mb-16 leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', letterSpacing: '-0.025em' }}
            >
              From contract to release
            </motion.h2>

            <div className="space-y-0">
              {[
                {
                  title: 'Contracts as starting points',
                  body: 'Distribution, live performance, publishing — we set up separate structures for each. An artist\'s rights aren\'t a single package. They\'re individual assets with different values.',
                },
                {
                  title: 'Visibility begins during production',
                  body: 'Identity gets built before the music is finished. Cover art, photography, video, digital presence — these aren\'t post-production tasks. They\'re planned while the work is being created.',
                },
                {
                  title: 'MESAM, MSG, royalties — we track it',
                  body: 'The artist should focus on one thing: making work. We handle the rest because we know how.',
                },
              ].map((item) => (
                <details
                  key={item.title}
                  className="group border-l-2 border-yellow pl-8 border-b border-b-black/[0.05] last:border-b-0"
                >
                  <summary className="flex items-start justify-between cursor-pointer list-none py-7 gap-6">
                    <h3 className="font-sans font-semibold text-black text-xl leading-snug">{item.title}</h3>
                    <svg
                      className="w-5 h-5 text-black/40 shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-sans font-light text-dark/65 text-base leading-relaxed pb-7 max-w-2xl">
                    {item.body}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/[0.06] py-20 lg:py-24 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-4">For artists</span>
            <h2 className="font-sans font-bold text-black text-3xl lg:text-4xl" style={{ letterSpacing: '-0.02em' }}>
              If you&apos;re building something, let&apos;s talk.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-white bg-black rounded-full px-8 py-4 hover:bg-black/80 transition-colors whitespace-nowrap"
          >
            Get in touch
            <ArrowRight />
          </Link>
        </div>
      </section>

    </main>
  )
}
