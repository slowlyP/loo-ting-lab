import { useLanguage } from '../i18n/useLanguage'

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  return (
    <div className="flex shrink-0 rounded-full border border-slate-300 bg-white/80 p-1 shadow-sm dark:border-slate-600 dark:bg-slate-900/80" role="group" aria-label={t('language.label')}>
      {(['ko', 'en'] as const).map((item) => (
        <button key={item} type="button" onClick={() => setLanguage(item)} aria-pressed={language === item}
          className={`rounded-full px-2.5 py-1.5 text-xs font-bold transition sm:px-3 ${language === item ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}>
          {t(`language.${item}`)}
        </button>
      ))}
    </div>
  )
}
