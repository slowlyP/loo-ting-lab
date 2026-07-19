import { useLanguage } from '../i18n/useLanguage'
import { resumeContent } from '../data/resume'

export function About() {
  const { language, t } = useLanguage()
  const interestList = language === 'en'
    ? ['Connecting AI models to service workflows', 'Game systems with Unity and C#', 'Korean dataset design and classification experiments']
    : ['AI 모델과 서비스 기능의 연결', 'Unity와 C# 기반 게임 시스템', '한국어 데이터셋 설계와 분류 실험']
  const processList = language === 'en'
    ? ['I begin by defining the problem and the user flow.', 'I separate completed work, work in progress, and future ideas.', 'I keep READMEs, experiment logs, and validation notes so decisions can be reviewed.']
    : ['먼저 해결할 문제와 사용자의 흐름을 정리합니다.', '구현 완료, 진행 중, 확장 예정 범위를 구분합니다.', 'README, 실험 기록, 검증 결과를 남겨 다시 확인할 수 있게 합니다.']

  const links = [
    { label: 'Loo Ting Lab', note: t('about.portfolioNote'), href: '#/projects/loo-ting-lab' },
    { label: t('common.github'), note: t('about.githubNote'), href: 'https://github.com/slowlyP' },
    { label: t('common.email'), note: t('about.emailNote'), href: 'mailto:vvckfn@gmail.com' },
    { label: t('common.resume'), note: t('about.resumeNote'), href: resumeContent.resumeDocument.fileUrl },
  ]
  return (
    <div className="space-y-14 lg:space-y-20">
      <header className="max-w-4xl space-y-5 py-4 lg:py-10">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">{t('about.eyebrow')}</p>
        <h1 className="text-4xl font-black leading-[1.1] tracking-[-0.055em] text-slate-950 dark:text-slate-50 sm:text-5xl lg:text-6xl">{t('about.title')}</h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">{t('about.intro')}</p>
      </header>
      <section className="grid gap-6 lg:grid-cols-2">
        {[{ title: t('about.interests'), items: interestList }, { title: t('about.process'), items: processList }].map((section) => (
          <div key={section.title} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/82 sm:p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-slate-50">{section.title}</h2>
            <ul className="mt-6 space-y-4">{section.items.map((item, index) => <li key={item} className="flex gap-4 leading-7 text-slate-600 dark:text-slate-300"><span className="font-black text-violet-600 dark:text-violet-300">0{index + 1}</span><span>{item}</span></li>)}</ul>
          </div>
        ))}
      </section>
      <section>
        <h2 className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-slate-50">{t('about.links')}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="group rounded-2xl border border-slate-200 bg-white/90 p-5 transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg dark:border-slate-700/70 dark:bg-slate-900/82 dark:hover:border-violet-500/60"><span className="font-black text-slate-950 dark:text-slate-50">{link.label} ↗</span><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{link.note}</p></a>)}</div>
      </section>
    </div>
  )
}
