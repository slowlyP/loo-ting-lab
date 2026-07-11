import { Link } from 'react-router'
import type { Project } from '../data/projects'
import { useLanguage } from '../i18n/useLanguage'
import { ProjectThumbnail } from './ProjectThumbnail'
import { TechStackBadges } from './TechStackBadges'

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage()
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/70">
      <Link to={`/projects/${project.id}`} aria-label={`${project.title} — ${t('common.viewProject')}`}><ProjectThumbnail project={project} /></Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
          <span>{project.category}</span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{project.status}</span>
        </div>
        <h2 className="mt-5 break-words text-2xl font-black tracking-[-0.04em] text-slate-950">{project.title}</h2>
        <p className="mt-2 break-words font-semibold leading-7 text-slate-700">{project.subtitle}</p>
        <p className="mt-3 break-words text-sm leading-6 text-slate-500">{project.summary}</p>
        <div className="mt-5"><TechStackBadges techs={project.tech} limit={6} showMoreCount moreLabel={t('common.more')} size="sm" /></div>
        <Link to={`/projects/${project.id}`} className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-black text-slate-900 transition group-hover:text-violet-700">{t('common.viewProject')} <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  )
}
