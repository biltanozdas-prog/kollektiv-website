'use client'

import { motion } from 'framer-motion'

const words = "Kollektiv 26 is a platform for those who move between worlds — curating travel with cultural depth, entertainment with artistic rigour, and ventures that look ahead.".split(' ')

export default function BrandIntro() {
  return (
    <section className="bg-white py-32 lg:py-48">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left: Text — 7 cols */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[10px] text-mg tracking-[0.22em] uppercase block mb-12"
            >
              About Kollektiv 26
            </motion.span>

            {/* Word-by-word reveal */}
            <h2
              className="font-sans font-bold text-black leading-[1.08] mb-14"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 4rem)' }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.028, ease: "easeOut" }}
                  className="inline-block mr-[0.28em]"
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans font-light text-mg text-lg leading-relaxed max-w-2xl"
            >
              Founded in Istanbul, operating globally. We bring together boutique tourism, live music, and emerging cultural initiatives under one sensibility.
            </motion.p>
          </div>

          {/* Right: Vertical image — 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div
              className="w-full rounded-sm overflow-hidden"
              style={{ height: 'clamp(420px, 55vh, 680px)' }}
            >
              <img
                src="/images/editorial%20support%20image%202.png"
                alt="Kollektiv 26 — editorial"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
