'use client'

import { useState } from 'react'

type Logo = {
  src: string
  alt: string
}

const logos: Logo[] = [
  // Logolar gelince buraya eklenecek:
  // { src: '/images/partners/logo-adi.png', alt: 'Marka Adı' },
]

export default function CollaboratorsStrip() {
  const [paused, setPaused] = useState(false)

  if (!logos.length) return null

  return (
    <section className="border-t border-black/15 bg-white">
      <div className="flex flex-col lg:flex-row items-stretch">

        {/* Sol kolon — eyebrow + başlık */}
        <div className="w-full lg:w-[280px] lg:flex-shrink-0 border-b lg:border-b-0 lg:border-r border-black/15 flex flex-col justify-center py-8 px-5 lg:py-12 lg:pl-[60px] lg:pr-10">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-mg mb-3">
            Collaborators
          </p>
          <h2 className="font-sans font-light text-[28px] tracking-[-0.025em] leading-[1.1] text-black">
            Selected<br />partnerships.
          </h2>
        </div>

        {/* Sağ kolon — ticker */}
        <div className="flex-1 h-[120px] overflow-hidden relative">

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
                  className="flex items-center justify-center h-[60px] border-b border-black/15 px-12"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-7 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Liste 2 — seamless loop için kopya */}
            <div>
              {logos.map((logo, i) => (
                <div
                  key={`copy-${i}`}
                  className="flex items-center justify-center h-[60px] border-b border-black/15 px-12"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-7 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
