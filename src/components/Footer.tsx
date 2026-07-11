import { useLanguage } from '../i18n/useLanguage'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white/70 dark:border-slate-700/70 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-7 text-sm text-slate-500 dark:text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <p className="font-bold text-slate-800 dark:text-slate-200">Loo Ting Lab.</p>
        <p>{t('footer.line')}</p>
      </div>
    </footer>
  )
}
