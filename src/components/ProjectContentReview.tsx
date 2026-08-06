import { getProjectContentReview } from '../data/projectContentReviews'
import type { ProjectContentReviewMetric } from '../data/projectContentReviews'
import type { Language } from '../i18n/types'

const metricTones: Record<ProjectContentReviewMetric['tone'], string> = {
  neutral: 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800/75 dark:text-slate-200',
  pass: 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-700/50 dark:bg-emerald-950/35 dark:text-emerald-200',
  partial: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-700/50 dark:bg-amber-950/35 dark:text-amber-200',
  revise: 'border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-700/50 dark:bg-rose-950/35 dark:text-rose-200',
}

export function ProjectContentReview({ projectId, language }: { projectId: string; language: Language }) {
  const review = getProjectContentReview(projectId)
  if (!review) return null

  return (
    <section aria-labelledby={`${projectId}-content-review`} className="min-w-0 border-t border-slate-200 pt-8 dark:border-slate-700/70">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
        {language === 'ko' ? '콘텐츠 검수 기록' : 'Content Review Record'}
      </p>
      <h2 id={`${projectId}-content-review`} className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-slate-50">
        {review.title[language]}
      </h2>
      <p className="mt-4 max-w-4xl leading-8 text-slate-600 dark:text-slate-300">{review.description[language]}</p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {review.metrics.map((metric) => (
          <div key={metric.label.ko} className={`min-w-0 rounded-2xl border p-4 ${metricTones[metric.tone]}`}>
            <p className="text-xs font-black uppercase tracking-wider opacity-75">{metric.label[language]}</p>
            <p className="mt-2 text-2xl font-black">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-cyan-200 bg-cyan-50/60 p-3 dark:border-cyan-700/40 dark:bg-cyan-950/20 sm:p-4">
        <div className="max-w-full overflow-x-auto rounded-2xl bg-slate-950/5 dark:bg-slate-950" tabIndex={0} aria-label={language === 'ko' ? '검수 대시보드 이미지 가로 스크롤 영역' : 'Horizontally scrollable review dashboard image'}>
          <img
            src={review.image}
            alt={review.imageAlt[language]}
            loading="lazy"
            className="block h-auto w-full min-w-[48rem] max-w-[85.625rem]"
          />
        </div>
        <div className="px-2 pb-2 pt-5 sm:px-3 sm:pb-3">
          <h3 className="text-lg font-black text-slate-950 dark:text-slate-50">{review.captionTitle[language]}</h3>
          <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{review.caption[language]}</p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border-l-4 border-cyan-500 bg-slate-50 p-5 dark:bg-slate-800/75">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
          {language === 'ko' ? '프롬프트 수정 후 재검증 흐름' : 'Prompt Revision and Retest Flow'}
        </p>
        <p className="mt-3 font-semibold leading-7 text-slate-700 dark:text-slate-200">{review.workflow[language]}</p>
      </div>
    </section>
  )
}
