'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Subject = 'Tourism' | 'Entertainment' | 'Innovation' | 'General'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '' as Subject | '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire up to your preferred backend / Resend / etc.
    setSent(true)
  }

  return (
    <main className="min-h-screen bg-white pt-[88px]">

      <section className="py-28 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-[10px] text-mg tracking-[0.22em] uppercase block mb-10">
              Contact
            </span>
            <div className="w-10 h-[2px] bg-yellow mb-12" />
            <h1
              className="font-sans font-bold text-black leading-[1.04] mb-12"
              style={{ fontSize: 'clamp(2.6rem, 4.5vw, 4.5rem)', letterSpacing: '-0.025em' }}
            >
              Have something in mind?
            </h1>

            <motion.p
              className="font-sans font-light text-dark/55 text-lg leading-relaxed max-w-sm mb-14"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Whether you&apos;re planning a journey, commissioning
              an experience, or simply want to understand what&apos;s
              possible — this is where it begins. We respond to
              every inquiry personally.
            </motion.p>

            <div className="space-y-10">
              <div>
                <span className="font-mono text-[9px] text-mg tracking-[0.2em] uppercase block mb-3">
                  General Enquiries
                </span>
                <a
                  href="mailto:request@kollektiv26.com"
                  className="font-sans text-lg text-black hover:opacity-50 transition-opacity"
                >
                  request@kollektiv26.com
                </a>
              </div>

              <div>
                <span className="font-mono text-[9px] text-mg tracking-[0.2em] uppercase block mb-3">
                  Location
                </span>
                <p className="font-sans font-light text-dark/60 text-lg">
                  Istanbul, Turkey
                </p>
              </div>

              <div>
                <span className="font-mono text-[9px] text-mg tracking-[0.2em] uppercase block mb-3">
                  Instagram
                </span>
                <a
                  href="https://www.instagram.com/kollektiv.26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-lg text-black hover:opacity-50 transition-opacity"
                >
                  @kollektiv.26
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {sent ? (
              <div className="flex flex-col items-start justify-center h-full gap-6">
                <div className="w-10 h-[2px] bg-yellow" />
                <h2 className="font-sans font-bold text-black text-3xl" style={{ letterSpacing: '-0.02em' }}>
                  Message received.
                </h2>
                <p className="font-sans font-light text-dark/55 text-lg leading-relaxed max-w-sm">
                  We&apos;ll be in touch at the email you provided. Usually within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Subject pills */}
                <div>
                  <span className="font-mono text-[9px] text-mg tracking-[0.2em] uppercase block mb-4">
                    Regarding
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(['Tourism', 'Entertainment', 'Innovation', 'General'] as Subject[]).map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm({ ...form, subject: s })}
                        className={`font-sans text-[12px] tracking-[0.06em] uppercase px-4 py-2 rounded-full border transition-all ${
                          form.subject === s
                            ? 'bg-black text-white border-black'
                            : 'border-black/10 text-black/60 hover:border-black/30'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-[9px] text-mg tracking-[0.2em] uppercase block mb-3">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full px-5 py-4 bg-white border border-black/10 font-sans text-base text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors rounded-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] text-mg tracking-[0.2em] uppercase block mb-3">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full px-5 py-4 bg-white border border-black/10 font-sans text-base text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors rounded-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[9px] text-mg tracking-[0.2em] uppercase block mb-3">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={7}
                    className="w-full px-5 py-4 bg-white border border-black/10 font-sans text-base text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors rounded-sm resize-none"
                    placeholder="Tell us what you have in mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white font-sans text-[13px] tracking-[0.08em] uppercase rounded-full py-4 hover:bg-black/80 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>

    </main>
  )
}
