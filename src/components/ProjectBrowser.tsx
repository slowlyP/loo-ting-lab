import { projectGroupOrder } from '../data/projectOwnership'
import type { Project } from '../data/projects'
import { getLocalizedProjects } from '../i18n/projectTranslations'
import { useLanguage } from '../i18n/useLanguage'
import { ProjectCard } from './ProjectCard'

function ProjectGroup({ title, description, projects }: { title: string; description: string; projects: Project[] }) {
  return (
    <section className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">{description}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
    </section>
  )
}

export function ProjectBrowser() {
  const { language, t } = useLanguage()
  const projects = getLocalizedProjects(language)
  const byId = new Map(projects.map((project) => [project.id, project]))
  const orderedProjects = (ids: readonly string[]) => ids.map((id) => byId.get(id)).filter((project): project is Project => Boolean(project))

  return (
    <section className="space-y-14 lg:space-y-20">
      <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <h2 className="text-xl font-black tracking-[-0.03em] text-slate-950">{t('work.gallery')}</h2>
        <p className="text-sm font-semibold text-slate-500">{projects.length} {t('work.count')}</p>
      </div>
      <ProjectGroup title={t('work.teamTitle')} description={t('work.teamDescription')} projects={orderedProjects(projectGroupOrder.team)} />
      <ProjectGroup title={t('work.personalTitle')} description={t('work.personalDescription')} projects={orderedProjects(projectGroupOrder.personal)} />
    </section>
  )
}
