'use client'

import { useState } from 'react'

type Logo = {
  src: string
  alt: string
}

const logos: Logo[] = [
  { src: '/images/partners/Opa logo png.png',         alt: 'Opa' },
  { src: '/images/partners/daze logo.png',            alt: 'Daze' },
  { src: '/images/partners/ils logo.png',             alt: 'ILS Publishing' },
  { src: '/images/partners/toranaga.png',             alt: 'Toranaga' },
  { src: '/images/partners/villa residance.png',      alt: 'Villa Residence' },
  { src: '/images/partners/rise.png',                 alt: 'Rise' },
  { src: '/images/partners/vogue otel supreme.png',   alt: 'Vogue Hotel Supreme' },
  { src: '/images/partners/el papi logo.png',         alt: 'El Papi' },
]

export default function CollaboratorsStrip() {
  const [paused, setPaused] = useState(false)

  if (!logos.length) return null

  return (
    <section className="border-t border-black/15 bg-white">
      <div className="flex flex-col lg:flex-row items-stretch">

        {/* Sol kolon — başlık */}
        <div className="w-full lg:w-[280px] lg:flex-shrink-0 border-b lg:border-b-0 lg:border-r border-black/15 flex flex-col justify-center py-8 px-5 lg:py-12 lg:pl-[60px] lg:pr-10">
          <h2 className="font-sans font-light text-[36px] tracking-[-0.025em] leading-[1.1] text-black">
            Selected<br />partnerships.
          </h2>
        </div>

        {/* Sağ kolon — ticker */}
        <div className="flex-1 h-[220px] overflow-hidden relative">

          {/* Üst gradient */}
          <div
            className="absolute top-0 left-0 right-0 h-9 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, #ffffff, transparent)' }}
          />

          {/* Alt gradient */}
          <div
            className="absolute bottom-0 left-0 right-0 h-9 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }}
          />

          {/* Ticker */}
          <div
            className={`ticker-animate${paused ? ' ticker-paused' : ''}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Liste 1 */}
            <div>
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-[100px] px-16"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Liste 2 — seamless loop için kopya */}
            <div>
              {logos.map((logo, i) => (
                <div
                  key={`copy-${i}`}
                  className="flex items-center justify-center h-[100px] px-16"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
