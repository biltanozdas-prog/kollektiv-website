'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const itinerary = {
  title: 'Five Days Across the Aegean',
  route: 'Bodrum → Alaçatı → Çeşme',
  days: [
    {
      num: 1,
      title: 'Arrival & Grounding',
      location: 'Bodrum',
      activities: [
        'Private transfer from Milas–Bodrum Airport',
        'Check-in to coastal villa, time to settle',
        'Late lunch at a family-run meyhane in the old quarter',
        'Evening walk through Bodrum Marina',
      ],
    },
    {
      num: 2,
      title: 'Art & Architecture',
      location: 'Bodrum',
      activities: [
        'Private morning at Bodrum Museum of Underwater Archaeology',
        'Studio visit with local ceramicist — not a workshop, a conversation',
        'Afternoon left open',
        'Dinner overlooking the castle, chosen for you',
      ],
    },
    {
      num: 3,
      title: 'To Alaçatı',
      location: 'In transit',
      activities: [
        'Morning departure via private car along the coast road',
        'Stop at a roadside vineyard — tasting, no tour group',
        'Arrive Alaçatı, check-in to boutique stone hotel',
        'Explore the windmill streets at your pace',
      ],
    },
    {
      num: 4,
      title: 'Wind & Water',
      location: 'Alaçatı / Çeşme',
      activities: [
        'Optional windsurfing session or a morning on the water',
        'Lunch at a beachside taverna',
        'Private visit to Çeşme Castle',
        'Sunset from Ilıca Beach — thermal springs in the sea',
      ],
    },
    {
      num: 5,
      title: 'Departure',
      location: 'İzmir',
      activities: [
        'Morning fully at leisure — no agenda',
        'Transfer to İzmir Adnan Menderes Airport via scenic route',
      ],
    },
  ],
}

export default function ItinerariesPage() {
  return (
    <main className="min-h-screen bg-offwhite pt-[108px]">

      {/* Intro */}
      <section className="py-24 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-7">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="font-mono text-[9px] text-mg tracking-[0.24em] uppercase block mb-8"
              >
                Example Itinerary
              </motion.span>
              <div className="w-8 h-[2px] bg-yellow mb-10" />
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" as const }}
                className="font-serif italic text-black leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(2.6rem, 4.5vw, 4.8rem)' }}
              >
                {itinerary.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-mono text-[10px] text-mg tracking-[0.16em] uppercase mb-10"
              >
                {itinerary.route}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="lg:col-span-5"
            >
              <p className="font-sans font-light text-dark/55 text-base leading-relaxed">
                This is a sample itinerary — a sense of pacing and structure. Every trip is built around who you are, what you want, and how you travel. Consider this a starting point, not a template.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Day-by-Day */}
      <section className="border-t border-black/[0.06] py-24 lg:py-36 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="space-y-0">
            {itinerary.days.map((day, i) => (
              <motion.div
                key={day.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" as const }}
                className="grid lg:grid-cols-12 gap-8 py-12 border-b border-black/[0.06]"
              >
                {/* Day number + location */}
                <div className="lg:col-span-2">
                  <span className="font-mono text-[9px] text-mg tracking-[0.2em] uppercase block mb-2">Day {day.num}</span>
                  <span className="font-mono text-[9px] text-black/30 tracking-[0.14em] uppercase">{day.location}</span>
                </div>

                {/* Title */}
                <div className="lg:col-span-3">
                  <h3 className="font-sans font-semibold text-black text-xl leading-snug">
                    {day.title}
                  </h3>
                </div>

                {/* Activities */}
                <div className="lg:col-span-7">
                  <ul className="space-y-2.5">
                    {day.activities.map((activity, j) => (
                      <li key={j} className="font-sans font-light text-dark/60 text-base flex items-start gap-3">
                        <span className="text-yellow shrink-0 mt-[5px]">—</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[9px] text-mg tracking-[0.22em] uppercase block mb-4">Build your own</span>
            <h2 className="font-sans font-bold text-black text-3xl lg:text-4xl" style={{ letterSpacing: '-0.02em' }}>
              Every trip is different.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.1em] uppercase text-white bg-black rounded-full px-8 py-4 hover:bg-black/80 transition-colors"
          >
            Start planning
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}
