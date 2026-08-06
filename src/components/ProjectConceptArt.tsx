import type { ProjectConceptArtItem } from '../data/projectConceptArt'
import { getProjectConceptArt } from '../data/projectConceptArt'
import type { Language } from '../i18n/types'

function ConceptFigure({ item, language }: { item: ProjectConceptArtItem; language: Language }) {
  const portrait = item.layout === 'portrait'

  return (
    <figure className="min-w-0 overflow-hidden rounded-3xl border border-amber-200/80 bg-amber-50/70 p-3 dark:border-amber-700/40 dark:bg-amber-950/20 sm:p-4">
      <div className={`relative w-full overflow-hidden rounded-2xl bg-slate-950/10 dark:bg-slate-950 ${portrait ? 'aspect-[3/4]' : 'aspect-video'}`}>
        <img
          src={item.src}
          alt={item.alt[language]}
          loading="lazy"
          className="block h-full w-full object-cover"
          style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
        />
      </div>
      <figcaption className="px-2 pb-2 pt-5 sm:px-3 sm:pb-3">
        <h3 className="text-lg font-black text-slate-950 dark:text-slate-50">{item.title[language]}</h3>
        <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{item.description[language]}</p>
      </figcaption>
    </figure>
  )
}

export function ProjectConceptNotice({ projectId, language }: { projectId: string; language: Language }) {
  const conceptArt = getProjectConceptArt(projectId)
  if (!conceptArt) return null

  return (
    <div className="border-t border-amber-200 bg-amber-50/90 px-6 py-5 dark:border-amber-700/40 dark:bg-amber-950/30 sm:px-9 lg:px-12">
      <p className="font-black text-amber-950 dark:text-amber-100">{conceptArt.noticeTitle[language]}</p>
      <p className="mt-2 max-w-4xl leading-7 text-amber-900/80 dark:text-amber-100/75">{conceptArt.notice[language]}</p>
      <div className="mt-4 border-l-2 border-amber-500 pl-4">
        <p className="font-black text-slate-900 dark:text-slate-100">{conceptArt.hero.title[language]}</p>
        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{conceptArt.hero.description[language]}</p>
      </div>
    </div>
  )
}

export function ProjectConceptWorld({ projectId, language }: { projectId: string; language: Language }) {
  const conceptArt = getProjectConceptArt(projectId)
  if (!conceptArt) return null

  return (
    <section aria-labelledby={`${projectId}-concept-world`}>
      <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">{conceptArt.sectionTitle[language]}</p>
      <h2 id={`${projectId}-concept-world`} className="sr-only">{conceptArt.world.title[language]}</h2>
      <ConceptFigure item={conceptArt.world} language={language} />
    </section>
  )
}

export function ProjectConceptRoles({ projectId, language }: { projectId: string; language: Language }) {
  const conceptArt = getProjectConceptArt(projectId)
  if (!conceptArt) return null

  return (
    <section aria-labelledby={`${projectId}-concept-roles`}>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">{conceptArt.sectionTitle[language]}</p>
      <h2 id={`${projectId}-concept-roles`} className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-slate-50">
        {language === 'ko' ? '용병 후보와 정찰 역할' : 'Mercenary Candidate and Scouting Role'}
      </h2>
      <div className="mt-6 grid min-w-0 gap-6 md:grid-cols-2 md:items-start">
        <ConceptFigure item={conceptArt.character} language={language} />
        <ConceptFigure item={conceptArt.mission} language={language} />
      </div>
    </section>
  )
}
