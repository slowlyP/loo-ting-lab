const coreSkills = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
  },
  {
    title: 'Backend / AI Support',
    items: ['Python', 'Flask', 'FastAPI', 'MySQL', 'rule-based classifier'],
  },
  {
    title: 'Game / Data',
    items: ['Unity', 'C#', 'CSV', 'Data Labeling', 'Dataset Card'],
  },
]

const projectExperience = [
  {
    name: 'STACCATO',
    summary:
      'AI 분석 결과가 Flask API, DB, Next.js 관제 화면으로 이어지는 흐름을 이해하고, 영상 분석 결과와 운영 문서를 포트폴리오 관점으로 정리했습니다.',
    tags: ['Flask', 'YOLO', 'Next.js', 'Linux VM', 'MySQL'],
  },
  {
    name: 'Wizard Defense',
    summary:
      'Unity와 C# 기반 2D 타워디펜스 프로토타입에서 전투 루프, 랜덤 소환, 일반 마법사 융합, 전설 마법사 구조를 기획/구현 상태로 나누어 정리했습니다.',
    tags: ['Unity', 'C#', '2D Sprite', 'Tower Defense'],
  },
  {
    name: 'Inquiry Dataset',
    summary:
      '한국어 합성 고객 문의 데이터셋, 라벨링 기준, dataset card, rule-based classifier, 실험 기록과 오류 분석을 함께 구성했습니다.',
    tags: ['Python', 'CSV', 'Data Labeling', 'TF-IDF', 'GitHub'],
  },
]

const workStyle = [
  '기능을 만들 때 구현 범위, 확인된 사실, 향후 확장 예정 내용을 나누어 기록합니다.',
  '프로젝트 설명은 결과만 나열하기보다 문제, 구조, 검증, 배운 점이 보이도록 정리합니다.',
  '불확실한 정보는 확정된 것처럼 쓰지 않고 추가 확인이 필요한 항목으로 분리합니다.',
]

const portfolioHighlights = [
  '웹 포트폴리오 자체를 React + TypeScript 기반 프로젝트 아카이브로 구성',
  'AI 관제, Unity 게임 프로토타입, 한국어 데이터셋 프로젝트를 하나의 흐름으로 정리',
  '각 프로젝트 상세 페이지에 역할, 기술 스택, 문제 해결, 결과와 한계를 구분해 표시',
]

export function Resume() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase text-cyan-300">RESUME</p>
        <h1 className="text-3xl font-black text-white">이력 요약</h1>
        <p className="max-w-3xl text-slate-300">
          프로젝트를 구조화하고, 구현한 내용과 검증 기록을 남기는 방식으로
          성장하고 있는 개발자 포트폴리오입니다.
        </p>
      </header>

      <section className="rounded-lg border border-violet-400/30 bg-slate-900 p-6">
        <h2 className="text-xl font-bold text-white">Profile Summary</h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          React 기반 포트폴리오, Unity 게임 프로토타입, 한국어 문의 데이터셋
          프로젝트를 통해 화면 구성, 게임 시스템 이해, 데이터 라벨링 기준 정리,
          규칙 기반 분류 실험을 경험했습니다. 현재는 프로젝트별 역할과 검증
          과정을 취업용으로 설명할 수 있도록 정리하고 있습니다.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Core Skills</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {coreSkills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-lg border border-slate-700 bg-slate-900 p-5"
            >
              <h3 className="text-lg font-bold text-cyan-100">
                {skill.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-slate-700 px-2 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Project Experience</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {projectExperience.map((project) => (
            <article
              key={project.name}
              className="rounded-lg border border-slate-700 bg-slate-900 p-5"
            >
              <h3 className="text-lg font-bold text-white">{project.name}</h3>
              <p className="mt-3 leading-7 text-slate-300">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-violet-300/40 px-2 py-1 text-xs text-violet-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
          <h2 className="text-xl font-bold text-white">Technical Stack</h2>
          <p className="mt-3 leading-7 text-slate-300">
            React, TypeScript, Tailwind CSS로 포트폴리오 UI를 구성하고,
            Python과 CSV 기반 데이터 실험, Unity/C# 기반 게임 프로토타입,
            Flask/Next.js/MySQL 기반 프로젝트 흐름을 함께 정리하고 있습니다.
          </p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
          <h2 className="text-xl font-bold text-white">Work Style</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {workStyle.map((item) => (
              <li key={item} className="border-l-2 border-cyan-300 pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
          <h2 className="text-xl font-bold text-white">
            Portfolio Highlights
          </h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {portfolioHighlights.map((item) => (
              <li key={item} className="border-l-2 border-violet-300 pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
          <h2 className="text-xl font-bold text-white">
            Education / Training
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            학력과 교육 이력은 확인된 내용 기준으로 정리 예정입니다.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-slate-700 bg-slate-900 p-5">
        <h2 className="text-xl font-bold text-white">
          Links / Contact Summary
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <p className="rounded border border-slate-700 bg-slate-950 p-4 text-slate-300">
            Email: 추가 예정
          </p>
          <a
            href="https://github.com/slowlyP"
            target="_blank"
            rel="noreferrer"
            className="rounded border border-cyan-300/70 bg-slate-950 p-4 font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
          >
            GitHub: slowlyP
          </a>
          <p className="rounded border border-slate-700 bg-slate-950 p-4 text-slate-300">
            상세 연락 정보: 정리 예정
          </p>
        </div>
      </section>
    </div>
  )
}
