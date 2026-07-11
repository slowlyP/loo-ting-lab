import { useLanguage } from '../i18n/useLanguage'

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  return (
    <div className="flex rounded-full border border-slate-300 bg-white/80 p-1 shadow-sm" role="group" aria-label={t('language.label')}>
      {(['ko', 'en'] as const).map((item) => (
        <button key={item} type="button" onClick={() => setLanguage(item)} aria-pressed={language === item}
          className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${language === item ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}>
          {t(`language.${item}`)}
        </button>
      ))}
    </div>
  )
}
