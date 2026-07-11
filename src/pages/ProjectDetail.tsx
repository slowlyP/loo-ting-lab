import { Link, useParams } from 'react-router'
import { ProjectThumbnail } from '../components/ProjectThumbnail'
import { TechStackBadges } from '../components/TechStackBadges'
import { useLanguage } from '../i18n/useLanguage'
import { getLocalizedProject } from '../i18n/projectTranslations'

function ListSection({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null
  return <section className="border-t border-slate-200 pt-8"><h2 className="text-2xl font-black tracking-[-0.04em] text-slate-950">{title}</h2><ul className="mt-5 space-y-4">{items.map((item) => <li key={item} className="flex gap-4 leading-7 text-slate-600"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-500" /><span className="min-w-0 break-words">{item}</span></li>)}</ul></section>
}

export function ProjectDetail() {
  const { projectId } = useParams()
  const { language, t } = useLanguage()
  const project = getLocalizedProject(projectId, language)
  if (!project) return <section className="rounded-3xl border border-slate-200 bg-white p-8"><p className="text-sm font-black uppercase tracking-widest text-violet-600">{t('detail.missingEyebrow')}</p><h1 className="mt-3 text-3xl font-black text-slate-950">{t('detail.missingTitle')}</h1><Link to="/projects" className="mt-6 inline-flex font-black text-violet-700">← {t('common.backToWork')}</Link></section>

  const detail = project.detail
  const artifactLabel = (kind: string, label: string) => kind === 'repository' ? t('common.repository') : label.toLowerCase().includes('pdf') ? t('common.viewPdf') : t('common.viewResource')
  const coreTitle = project.id === 'wizard-defense' ? t('detail.gameCore') : project.id === 'staccato' ? t('detail.architecture') : t('detail.core')
  return (
    <article className="mx-auto max-w-6xl space-y-10 lg:space-y-14">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-black text-slate-600 transition hover:text-violet-700">← {t('common.backToWork')}</Link>
      <header className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-xl shadow-slate-200/60">
        <ProjectThumbnail project={project} />
        <div className="p-6 sm:p-9 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-black uppercase tracking-[0.16em] text-slate-500"><span>{project.category}</span><span className="rounded-full bg-violet-50 px-3 py-1.5 text-violet-700">{project.status}</span></div>
          <h1 className="mt-6 break-words text-4xl font-black tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl break-words text-lg font-semibold leading-8 text-slate-600">{project.subtitle}</p>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(16rem,.75fr)] lg:items-start">
        <div className="min-w-0 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm sm:p-9">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-600">{t('detail.overview')}</p>
          <p className="mt-4 text-lg leading-8 text-slate-700">{project.summary}</p>
          <h2 className="mt-8 text-lg font-black text-slate-950">{t('detail.contribution')}</h2><p className="mt-3 leading-7 text-slate-600">{project.role}</p>
          <h2 className="mt-8 text-lg font-black text-slate-950">{t('detail.highlights')}</h2><ul className="mt-4 space-y-3">{project.highlights.map((item) => <li key={item} className="border-l-2 border-violet-300 pl-4 leading-7 text-slate-600">{item}</li>)}</ul>
        </div>
        <aside className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm lg:sticky lg:top-28"><h2 className="text-lg font-black text-slate-950">{t('detail.stack')}</h2><div className="mt-5"><TechStackBadges techs={detail?.techStack ?? project.tech} /></div></aside>
      </div>

      {detail ? <div className="space-y-10 rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-sm sm:p-9 lg:p-12">
        <ListSection title={t('detail.projectOverview')} items={detail.overview} />
        <ListSection title={t('detail.problem')} items={detail.problem} />
        <ListSection title={t('detail.design')} items={detail.designDirection} />
        <ListSection title={t('detail.labels')} items={detail.labelStructure} />
        <ListSection title={coreTitle} items={detail.coreStructure} />
        <ListSection title={t('detail.responsibilities')} items={detail.responsibilities} />
        <section className="border-t border-slate-200 pt-8"><h2 className="text-2xl font-black tracking-[-0.04em] text-slate-950">{t('detail.status')}</h2><div className="mt-6 grid gap-4 lg:grid-cols-3">{([['completed', detail.implementationStatus.completed], ['inProgress', detail.implementationStatus.inProgress], ['planned', detail.implementationStatus.planned]] as const).map(([key, items]) => <div key={key} className="rounded-2xl bg-slate-50 p-5"><h3 className="font-black text-slate-900">{t(`detail.${key}`)}</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></section>
        <ListSection title={t('detail.classifier')} items={detail.classifierStructure} />
        <ListSection title={t('detail.experiments')} items={detail.experimentLog} />
        {detail.metrics?.length ? <section className="border-t border-slate-200 pt-8"><h2 className="text-2xl font-black text-slate-950">{t('detail.metrics')}</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{detail.metrics.map((metric) => <div key={metric.label} className="rounded-2xl bg-slate-50 p-5"><p className="text-xs font-black uppercase tracking-wider text-violet-600">{metric.label}</p><p className="mt-2 break-words text-2xl font-black text-slate-950">{metric.value}</p><p className="mt-3 text-sm leading-6 text-slate-500">{metric.note}</p></div>)}</div></section> : null}
        <ListSection title={t('detail.problemSolving')} items={detail.problemSolving} />
        <ListSection title={t('detail.outcomes')} items={detail.outcomes} />
        {detail.artifacts?.length ? <section className="border-t border-slate-200 pt-8"><h2 className="text-2xl font-black text-slate-950">{t('detail.resources')}</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{detail.artifacts.map((artifact) => { const external = artifact.pathOrUrl.startsWith('http'); const content = <><h3 className="font-black text-slate-950">{artifact.label}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{artifact.note}</p><p className="mt-3 break-all text-xs text-slate-400">{artifact.pathOrUrl}</p>{external ? <span className="mt-4 inline-flex text-sm font-black text-violet-700">{artifactLabel(artifact.kind, artifact.label)} ↗</span> : null}</>; return external ? <a key={artifact.label} href={artifact.pathOrUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 p-5 transition hover:border-violet-300">{content}</a> : <div key={artifact.label} className="rounded-2xl border border-slate-200 p-5">{content}</div> })}</div></section> : null}
        <section className="grid gap-5 border-t border-slate-200 pt-8 lg:grid-cols-2"><div><h2 className="text-2xl font-black text-slate-950">{detail.media?.videos?.length ? t('detail.media') : t('detail.mediaPending')}</h2>{detail.media?.videos?.map((video) => <a key={video.url} href={video.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white">{video.title} ↗</a>)}<p className="mt-4 text-sm leading-6 text-slate-500">{detail.media?.note}</p></div><div><h2 className="text-2xl font-black text-slate-950">{t('detail.repository')}</h2>{project.links?.github ? <a href={project.links.github} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-900">{t('common.repository')} ↗</a> : <p className="mt-4 text-sm leading-6 text-slate-500">{t('detail.repositoryPending')}</p>}</div></section>
      </div> : null}
    </article>
  )
}
