import { useLanguage } from '../i18n/useLanguage'
import { getLocalizedProjects } from '../i18n/projectTranslations'
import { ProjectCard } from './ProjectCard'

export function ProjectBrowser() {
  const { language, t } = useLanguage()
  const projects = getLocalizedProjects(language)
  return (
    <section className="space-y-7">
      <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <h2 className="text-xl font-black tracking-[-0.03em] text-slate-950">{t('work.gallery')}</h2>
        <p className="text-sm font-semibold text-slate-500">{projects.length} {t('work.count')}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
    </section>
  )
}
