'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function InquiryCTA() {
  return (
    <section className="bg-white border-t border-lg px-6 lg:px-14 py-32 lg:py-48">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[10px] text-mg tracking-[0.22em] uppercase block mb-10">
              Get in touch
            </span>
            {/* Sans only — homepage rule */}
            <h2 className="font-sans font-medium text-black leading-[1.1]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}>
              Let&apos;s build something<br />remarkable together
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col items-start lg:items-end gap-6"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-sans text-sm tracking-[0.07em] bg-black text-white rounded-full px-12 py-5 hover:bg-dg transition-colors group"
            >
              Enquire now
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="mailto:request@kollektiv26.com"
              className="font-mono text-[11px] text-mg hover:text-black transition-colors tracking-[0.06em]"
            >
              request@kollektiv26.com
            </a>
          </motion.div>

        </div>

        <div className="mt-20 pt-10 border-t border-black/[0.06] flex items-center justify-between">
          <span className="font-mono text-[9px] text-mg/50 tracking-[0.14em] uppercase">Kollektiv 26 — Istanbul</span>
          <span className="font-mono text-[9px] text-mg/50 tracking-[0.14em] uppercase">EN / TR</span>
        </div>
      </div>
    </section>
  )
}
