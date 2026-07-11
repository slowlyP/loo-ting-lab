import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from './translations'
import type { Language, TranslationTree, TranslationValue } from './types'
import { LanguageContext, STORAGE_KEY, type LanguageContextValue } from './useLanguage'

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'ko'
  return window.localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ko'
}

function resolveTranslation(tree: TranslationTree, key: string): TranslationValue | undefined {
  return key.split('.').reduce<TranslationValue | undefined>((value, segment) => {
    if (!value || typeof value === 'string' || Array.isArray(value)) return undefined
    return value[segment]
  }, tree)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    toggleLanguage: () => setLanguage((current) => current === 'ko' ? 'en' : 'ko'),
    t: (key) => {
      const selected = resolveTranslation(translations[language], key)
      const fallback = resolveTranslation(translations.ko, key)
      return typeof selected === 'string'
        ? selected
        : typeof fallback === 'string'
          ? fallback
          : key
    },
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
