import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond, DM_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import LoadingAnimation from './components/LoadingAnimation'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal'],
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Kollektiv 26',
  description: 'Contemporary cultural platform. Travel, culture, music, experience.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} ${dmMono.variable}`}
    >
      <body>
        <LoadingAnimation />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
