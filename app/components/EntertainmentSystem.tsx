'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export function SignalWave({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-[2px] opacity-60 ${className}`}>
      {[4, 8, 5, 10, 6, 3, 9, 5, 12, 4, 7, 5, 9, 4, 6].map((h, i) => (
        <div key={i} className="w-[2px] bg-current animate-pulse" style={{ height: `${h}px`, animationDelay: `${i * 0.1}s`, animationDuration: '2s' }} />
      ))}
      <div className="w-8 h-[2px] bg-current ml-2 opacity-50" />
    </div>
  )
}

interface EventTicketCardProps {
  label: string
  title: string
  mainNumber: string
  details: string
  cta: string
}

export function EventTicketCard({ label, title, mainNumber, details, cta }: EventTicketCardProps) {
  return (
    <div className="bg-yellow text-black p-6 md:p-8 flex flex-col justify-between relative shadow-2xl transition-transform duration-300 hover:-translate-y-1 group/card">
      <div className="flex justify-between items-start mb-12">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
          <span className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase">{label}</span>
        </div>
        <SignalWave className="text-black" />
      </div>
      
      <div>
        <h3 className="font-sans font-bold text-2xl md:text-3xl mb-8 tracking-tight max-w-[240px]">{title}</h3>
        
        <div className="flex items-end gap-6 mb-8 border-b border-black/20 pb-6">
          <div className="flex flex-col">
            <span className="font-sans font-bold text-4xl md:text-5xl leading-none">{mainNumber}</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-black/20 pl-6">
            {details.split(' / ').map((detail, i) => (
              <span key={i} className="font-sans text-[11px] font-bold uppercase tracking-wider">{detail}</span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between group-hover/card:text-black/80 transition-colors cursor-pointer">
          <span className="font-sans text-[13px] font-bold uppercase tracking-[0.1em]">{cta}</span>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover/card:translate-x-1">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function EntertainmentModeRail({ label = 'MODE 02 — ENTERTAINMENT', light = false }: { label?: string, light?: boolean }) {
  return (
    <div className={`hidden lg:flex absolute left-0 top-0 bottom-0 w-14 border-r flex-col items-center py-12 z-10 ${light ? 'border-white/15' : 'border-black/15'}`}>
      <div className={`w-2 h-2 rounded-full mb-8 ${light ? 'bg-yellow' : 'bg-yellow'}`} />
      <div className={`flex-1 w-[1px] opacity-20 ${light ? 'bg-white' : 'bg-black'}`} />
      <p 
        className={`font-mono text-[10px] font-bold tracking-[0.25em] uppercase whitespace-nowrap mt-8 ${light ? 'text-white/60' : 'text-black/50'}`}
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        {label}
      </p>
    </div>
  )
}

export function NumberedRail({ activeIndex, count = 4, className = '' }: { activeIndex: number, count?: number, className?: string }) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex
        return (
          <div key={i} className="flex items-center gap-4 justify-end group cursor-default">
            <span className={`font-mono text-[10px] tracking-[0.15em] transition-colors duration-300 ${isActive ? 'text-yellow font-bold' : 'text-white/50 group-hover:text-white/80'}`}>
              0{i + 1}
            </span>
            <span className={`h-[2px] transition-all duration-300 ${isActive ? 'w-8 bg-yellow' : 'w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/40'}`} />
          </div>
        )
      })}
    </div>
  )
}

export function ModuleIndex({ modules }: { modules: { title: string, desc: string, link: string, cta: string, active?: boolean }[] }) {
  return (
    <div className="grid lg:grid-cols-3 border-l border-t border-black/15">
      {modules.map((mod, i) => (
        <Link key={i} href={mod.link} className="group block">
          <div className={`h-full border-r border-b border-black/15 p-10 lg:p-14 flex flex-col justify-between transition-all duration-300 ${mod.active ? 'bg-black text-white hover:bg-[#111]' : 'bg-transparent text-black hover:bg-black/[0.03] hover:border-black/30'}`}>
            <div>
              <div className="flex items-center justify-between mb-12">
                <span className={`font-mono text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${mod.active ? 'text-yellow' : 'text-black/50 group-hover:text-black/80'}`}>0{i + 1}</span>
                <SignalWave className={`transition-opacity duration-300 ${mod.active ? 'text-yellow opacity-100' : 'text-black opacity-0 group-hover:opacity-40'}`} />
              </div>
              <h3 className="font-sans font-bold text-2xl lg:text-3xl mb-6 leading-[1.1] tracking-tight pr-4">
                {mod.title}
              </h3>
              <p className={`font-sans text-[15px] leading-relaxed mb-16 ${mod.active ? 'text-white/90' : 'text-black/80'}`}>
                {mod.desc}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className={`font-sans text-[13px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${mod.active ? 'text-yellow' : 'text-black group-hover:text-black/70'}`}>{mod.cta}</span>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className={`transition-transform duration-300 group-hover:translate-x-1 ${mod.active ? 'text-yellow' : 'text-black'}`}>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function DarkSystemPanel({ children, eyebrow, headline }: { children: React.ReactNode, eyebrow: string, headline: string }) {
  return (
    <section className="bg-dark text-white relative border-y border-white/10 overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" 
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} 
      />
      
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-16 py-24 lg:py-32 relative z-10 grid lg:grid-cols-12 gap-16 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
            <span className="font-mono text-[10px] font-bold text-yellow tracking-[0.2em] uppercase">{eyebrow}</span>
          </div>
          <h2 className="font-sans font-bold text-4xl lg:text-5xl leading-[1.05] tracking-tight text-white mb-8 pr-8">
            {headline.split('. ').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}{i !== arr.length - 1 ? '.' : ''}<br />
              </React.Fragment>
            ))}
          </h2>
          <SignalWave className="text-white/40 mt-14" />
        </div>
        
        <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-0 border-l border-white/15 border-t">
          {children}
        </div>
      </div>
    </section>
  )
}
