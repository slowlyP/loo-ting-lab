const resumeSections = [
  {
    title: '관심 분야',
    items: ['프론트엔드 포트폴리오', 'AI 프로젝트 대시보드', '게임 시스템'],
  },
  {
    title: '기술 스택',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Unity', 'Flask'],
  },
  {
    title: '작업 방식',
    items: ['구현', '문서화', '분석', '개선'],
  },
]

export function Resume() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase text-cyan-300">RESUME</p>
        <h1 className="text-3xl font-black text-white">이력서</h1>
        <p className="max-w-3xl text-slate-300">
          이 아카이브를 구성하는 기술, 관심 분야, 프로젝트 경험을 간단히
          정리한 화면입니다.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {resumeSections.map((section) => (
          <section
            key={section.title}
            className="rounded-lg border border-slate-700 bg-slate-900 p-5"
          >
            <h2 className="text-xl font-bold text-white">{section.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
