'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Language, translations } from './translations'

interface LanguageContextType {
  lang: Language
  setLang: (l: Language) => void
  t: typeof translations['en']
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations['en'],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as typeof translations['en'] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
