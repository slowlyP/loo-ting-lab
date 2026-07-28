import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { ProjectThumbnail } from '../components/ProjectThumbnail'
import { ProjectVisualGallery } from '../components/ProjectVisualGallery'
import { TechStackBadges } from '../components/TechStackBadges'
import { getOwnershipTranslationKey } from '../data/projectOwnership'
import type { Project } from '../data/projects'
import { getProjectVideo } from '../data/projectVideos'
import type { Language } from '../i18n/types'
import { useLanguage } from '../i18n/useLanguage'
import { getLocalizedProject } from '../i18n/projectTranslations'

function ListSection({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null
  return <section className="border-t border-slate-200 pt-8 dark:border-slate-700/70"><h2 className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-slate-50">{title}</h2><ul className="mt-5 space-y-4">{items.map((item) => <li key={item} className="flex gap-4 leading-7 text-slate-600 dark:text-slate-300"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-500 dark:bg-violet-300" /><span className="min-w-0 break-words">{item}</span></li>)}</ul></section>
}

function ProjectHeroMedia({ project, language }: { project: Project; language: Language }) {
  const [videoFailed, setVideoFailed] = useState(false)
  const video = getProjectVideo(project.id)

  if (!video || videoFailed) return <ProjectThumbnail project={project} />

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
      <video
        src={video.src}
        poster={video.poster}
        controls
        preload="metadata"
        playsInline
        aria-label={video.title[language]}
        onError={() => setVideoFailed(true)}
        className={`absolute inset-0 size-full bg-black ${video.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/55 to-transparent" />
      <div className="pointer-events-none absolute inset-x-6 bottom-14 flex items-end justify-between gap-4">
        <span className="max-w-[72%] text-xl font-black tracking-[-0.04em] text-white drop-shadow-[0_2px_5px_rgba(0,0,0,.85)] sm:text-2xl">{project.title}</span>
        <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[10px] font-black tracking-wider text-slate-700 backdrop-blur">{project.stage}</span>
      </div>
    </div>
  )
}

export function ProjectDetail() {
  const { projectId } = useParams()
  const { language, t } = useLanguage()
  const project = getLocalizedProject(projectId, language)
  if (!project) return <section className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900"><p className="text-sm font-black uppercase tracking-widest text-violet-600 dark:text-violet-300">{t('detail.missingEyebrow')}</p><h1 className="mt-3 text-3xl font-black text-slate-950 dark:text-slate-50">{t('detail.missingTitle')}</h1><Link to="/projects" className="mt-6 inline-flex font-black text-violet-700 dark:text-violet-300">← {t('common.backToWork')}</Link></section>

  const detail = project.detail
  const artifactLabel = (kind: string, label: string) => kind === 'repository' ? t('common.repository') : label.toLowerCase().includes('pdf') ? t('common.viewPdf') : t('common.viewResource')
  const coreTitle = project.id === 'wizard-defense' ? t('detail.gameCore') : project.id === 'staccato' ? t('detail.architecture') : t('detail.core')
  return (
    <article className="mx-auto max-w-6xl space-y-10 lg:space-y-14">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-black text-slate-600 transition hover:text-violet-700 dark:text-slate-300 dark:hover:text-violet-300">← {t('common.backToWork')}</Link>
      <header className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-xl shadow-slate-200/60 dark:border-slate-700/70 dark:bg-slate-900/90 dark:shadow-slate-950/50">
        <ProjectHeroMedia key={project.id} project={project} language={language} />
        <ProjectVisualGallery projectId={project.id} language={language} />
        <div className="p-6 sm:p-9 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"><span>{project.category}</span><span className="rounded-full bg-violet-50 px-3 py-1.5 normal-case tracking-normal text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">{t('detail.projectType')}: {t(getOwnershipTranslationKey(project.id))}</span></div>
          <h1 className="mt-6 break-words text-4xl font-black tracking-[-0.055em] text-slate-950 dark:text-slate-50 sm:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl break-words text-lg font-semibold leading-8 text-slate-600 dark:text-slate-300">{project.subtitle}</p>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(16rem,.75fr)] lg:items-start">
        <div className="min-w-0 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/90 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">{t('detail.overview')}</p>
          <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">{project.summary}</p>
          <h2 className="mt-8 text-lg font-black text-slate-950 dark:text-slate-50">{t('detail.contribution')}</h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.role}</p>
          <h2 className="mt-8 text-lg font-black text-slate-950 dark:text-slate-50">{t('detail.highlights')}</h2><ul className="mt-4 space-y-3">{project.highlights.map((item) => <li key={item} className="border-l-2 border-violet-300 pl-4 leading-7 text-slate-600 dark:border-violet-500 dark:text-slate-300">{item}</li>)}</ul>
        </div>
        <aside className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/90 lg:sticky lg:top-28"><h2 className="text-lg font-black text-slate-950 dark:text-slate-50">{t('detail.stack')}</h2><div className="mt-5"><TechStackBadges techs={detail?.techStack ?? project.tech} /></div></aside>
      </div>

      {detail ? <div className="space-y-10 rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/90 sm:p-9 lg:p-12">
        <ListSection title={t('detail.projectOverview')} items={detail.overview} />
        <ListSection title={t('detail.problem')} items={detail.problem} />
        <ListSection title={t('detail.design')} items={detail.designDirection} />
        <ListSection title={t('detail.labels')} items={detail.labelStructure} />
        <ListSection title={coreTitle} items={detail.coreStructure} />
        <ListSection title={t('detail.responsibilities')} items={detail.responsibilities} />
        <section className="border-t border-slate-200 pt-8 dark:border-slate-700/70"><h2 className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-slate-50">{t('detail.status')}</h2><div className="mt-6 grid gap-4 lg:grid-cols-3">{([['completed', detail.implementationStatus.completed], ['inProgress', detail.implementationStatus.inProgress], ['planned', detail.implementationStatus.planned]] as const).map(([key, items]) => <div key={key} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/75"><h3 className="font-black text-slate-900 dark:text-slate-100">{t(`detail.${key}`)}</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></section>
        <ListSection title={t('detail.classifier')} items={detail.classifierStructure} />
        <ListSection title={t('detail.experiments')} items={detail.experimentLog} />
        {detail.metrics?.length ? <section className="border-t border-slate-200 pt-8 dark:border-slate-700/70"><h2 className="text-2xl font-black text-slate-950 dark:text-slate-50">{t('detail.metrics')}</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{detail.metrics.map((metric) => <div key={metric.label} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/75"><p className="text-xs font-black uppercase tracking-wider text-violet-600 dark:text-violet-300">{metric.label}</p><p className="mt-2 break-words text-2xl font-black text-slate-950 dark:text-slate-50">{metric.value}</p><p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{metric.note}</p></div>)}</div></section> : null}
        <ListSection title={t('detail.problemSolving')} items={detail.problemSolving} />
        <ListSection title={t('detail.outcomes')} items={detail.outcomes} />
        <ListSection title={t('detail.systemFlow')} items={detail.systemFlow} />
        <ListSection title={t('detail.teamContribution')} items={detail.teamContribution} />
        <ListSection title={t('detail.evidence')} items={detail.evidence} />
        <ListSection title={t('detail.scopeLimitations')} items={detail.scopeLimitations} />
        <ListSection title={t('detail.verification')} items={detail.verification} />
        <ListSection title={t('detail.deployment')} items={detail.deployment} />
        <ListSection title={t('detail.milestones')} items={detail.milestones} />
        <ListSection title={t('detail.liveDemoNotice')} items={detail.liveDemoNotice} />
        {detail.artifacts?.length ? <section className="border-t border-slate-200 pt-8 dark:border-slate-700/70"><h2 className="text-2xl font-black text-slate-950 dark:text-slate-50">{t('detail.resources')}</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{detail.artifacts.map((artifact) => { const external = artifact.pathOrUrl.startsWith('http'); const content = <><h3 className="font-black text-slate-950 dark:text-slate-50">{artifact.label}</h3><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{artifact.note}</p><p className="mt-3 break-all text-xs text-slate-400 dark:text-slate-500">{artifact.pathOrUrl}</p>{external ? <span className="mt-4 inline-flex text-sm font-black text-violet-700 dark:text-violet-300">{artifactLabel(artifact.kind, artifact.label)} ↗</span> : null}</>; return external ? <a key={artifact.label} href={artifact.pathOrUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 p-5 transition hover:border-violet-300 dark:border-slate-700 dark:hover:border-violet-500">{content}</a> : <div key={artifact.label} className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">{content}</div> })}</div></section> : null}
        <section className="grid gap-5 border-t border-slate-200 pt-8 dark:border-slate-700/70 lg:grid-cols-2"><div><h2 className="text-2xl font-black text-slate-950 dark:text-slate-50">{detail.media?.videos?.length ? t('detail.media') : t('detail.mediaPending')}</h2>{detail.media?.videos?.map((video) => <a key={video.url} href={video.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white dark:bg-slate-100 dark:text-slate-950">{video.title} ↗</a>)}<p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">{detail.media?.note}</p></div><div><h2 className="text-2xl font-black text-slate-950 dark:text-slate-50">{t('detail.repository')}</h2><div className="mt-5 flex flex-wrap gap-3">{project.links?.github ? <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-900 dark:border-slate-600 dark:text-slate-100">{t('common.repository')} ↗</a> : <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{t('detail.repositoryPending')}</p>}{project.links?.service ? <a href={project.links.service} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-violet-600 px-5 py-3 text-sm font-black text-white transition hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-400">{t('common.openService')} ↗</a> : null}</div></div></section>
      </div> : null}
    </article>
  )
}
