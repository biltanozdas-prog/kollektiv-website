import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond, DM_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import LoadingAnimation from './components/LoadingAnimation'
import { LanguageProvider } from '@/lib/LanguageContext'

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
  metadataBase: new URL('https://kollektiv26.com'),
  title: {
    default: 'Kollektiv26',
    template: '%s — Kollektiv26',
  },
  description: 'A platform for those who move between worlds. Travel, culture, music and experience in Istanbul, Bodrum and the Aegean.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Kollektiv26',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Kollektiv26',
              url: 'https://kollektiv26.com',
              description: 'Contemporary cultural platform for travel, culture, music and experience.',
              foundingLocation: 'Istanbul, Turkey',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Istanbul',
                addressCountry: 'TR',
              },
              sameAs: ['https://www.instagram.com/kollektiv.26/'],
            }),
          }}
        />
        <LanguageProvider>
          <LoadingAnimation />
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
