import { ProjectBrowser } from '../components/ProjectBrowser'
import { useLanguage } from '../i18n/useLanguage'

export function Projects() {
  const { t } = useLanguage()
  return (
    <div className="space-y-14 lg:space-y-20">
      <header className="max-w-4xl space-y-5 py-4 lg:py-10">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-600">{t('work.eyebrow')}</p>
        <h1 className="text-4xl font-black leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-7xl">{t('work.title')}</h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{t('work.intro')}</p>
      </header>
      <ProjectBrowser />
    </div>
  )
}
