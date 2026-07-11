import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getOwnershipTranslationKey } from '../data/projectOwnership'
import type { Project } from '../data/projects'
import { useLanguage } from '../i18n/useLanguage'
import { ProjectThumbnail } from './ProjectThumbnail'
import { TechStackBadges } from './TechStackBadges'

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage()
  const [isPreviewActive, setIsPreviewActive] = useState(false)
  const [canHover, setCanHover] = useState(false)

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateHoverCapability = () => setCanHover(hoverQuery.matches)
    updateHoverCapability()
    hoverQuery.addEventListener('change', updateHoverCapability)
    return () => hoverQuery.removeEventListener('change', updateHoverCapability)
  }, [])

  return (
    <article onMouseEnter={() => canHover && setIsPreviewActive(true)} onMouseLeave={() => setIsPreviewActive(false)} className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm transition duration-300 motion-safe:hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-2xl hover:shadow-slate-300/60">
      <Link to={`/projects/${project.id}`} aria-label={`${project.title} — ${t('common.viewProject')}`}><ProjectThumbnail project={project} isPreviewActive={isPreviewActive} /></Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
          <span>{project.category}</span><div className="flex flex-wrap justify-end gap-2"><span className="rounded-full bg-slate-100 px-2.5 py-1 normal-case tracking-normal text-slate-600">{project.status}</span><span className="rounded-full bg-violet-50 px-2.5 py-1 normal-case tracking-normal text-violet-700">{t(getOwnershipTranslationKey(project.id))}</span></div>
        </div>
        <h2 className="mt-5 break-words text-2xl font-black tracking-[-0.04em] text-slate-950">{project.title}</h2>
        <p className="mt-2 break-words font-semibold leading-7 text-slate-700">{project.subtitle}</p>
        <p className="mt-3 break-words text-sm leading-6 text-slate-500">{project.summary}</p>
        <div className="mt-5"><TechStackBadges techs={project.tech} limit={6} showMoreCount moreLabel={t('common.more')} size="sm" /></div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link to={`/projects/${project.id}`} className="inline-flex w-fit items-center gap-2 text-sm font-black text-slate-900 transition group-hover:text-violet-700">{t('common.viewProject')} <span aria-hidden="true">↗</span></Link>
          {project.links?.service ? <a href={project.links.service} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-violet-600 px-4 py-2 text-xs font-black text-white transition hover:bg-violet-700">{t('common.openService')} ↗</a> : null}
        </div>
      </div>
    </article>
  )
}
