const interests = [
  'React와 TypeScript 기반의 포트폴리오형 UI 구성',
  'Unity와 C#을 사용한 게임 시스템 구조 이해',
  '한국어 데이터셋 설계와 라벨링 기준 정리',
  'AI 지원 시스템에서 데이터, 규칙, 검증 기록을 연결하는 방식',
]

const buildProcess = [
  '먼저 프로젝트가 해결하려는 문제와 사용자가 보는 흐름을 정리합니다.',
  '구현한 내용, 진행 중인 내용, 향후 확장 예정 내용을 분리합니다.',
  'README, worklog, validation, experiment log처럼 나중에 다시 확인할 수 있는 기록을 남깁니다.',
]

const strengths = [
  '프로젝트를 기능 목록이 아니라 문제, 구조, 역할, 검증 결과로 정리하려고 합니다.',
  '확인되지 않은 내용은 확정된 것처럼 쓰지 않고 추가 예정 항목으로 분리합니다.',
  '웹, 게임, 데이터 프로젝트를 각각 따로 보지 않고 포트폴리오 경험으로 연결합니다.',
]

export function About() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          About
        </p>
        <h1 className="text-3xl font-black text-white">소개</h1>
        <p className="max-w-3xl leading-7 text-slate-300">
          Loo Ting Lab은 프로젝트를 하나씩 탐색하며 개발 경험을 확인할 수
          있도록 만든 개인 포트폴리오 아카이브입니다.
        </p>
      </header>

      <section className="rounded-lg border border-violet-400/30 bg-slate-900/90 p-6">
        <h2 className="text-xl font-black text-white">
          나는 어떤 개발자인가
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          화면을 만드는 일뿐 아니라 프로젝트의 목적, 데이터 흐름, 시스템 구조,
          검증 기록을 함께 정리하는 데 관심이 있습니다. STACCATO, Wizard
          Defense, Inquiry Dataset을 통해 웹 UI, 게임 프로토타입, 한국어
          데이터셋 설계를 각각 경험했고, 현재는 그 경험을 취업용 포트폴리오로
          설명 가능한 형태로 다듬고 있습니다.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
          <h2 className="text-xl font-black text-white">관심 분야</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {interests.map((item) => (
              <li key={item} className="border-l-2 border-cyan-300 pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
          <h2 className="text-xl font-black text-white">
            프로젝트를 만드는 방식
          </h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {buildProcess.map((item) => (
              <li key={item} className="border-l-2 border-violet-300 pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
          <h2 className="text-xl font-black text-white">강점</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {strengths.map((item) => (
              <li key={item} className="border-l-2 border-cyan-300 pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
          <h2 className="text-xl font-black text-white">
            현재 집중하고 있는 것
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            포트폴리오의 각 프로젝트를 취업 담당자가 읽기 쉬운 구조로 정리하고
            있습니다. 프로젝트별 역할, 사용 기술, 문제 해결, 검증 결과, 남은
            한계를 분리해 더 명확한 설명을 만드는 데 집중하고 있습니다.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
        <h2 className="text-xl font-black text-white">
          앞으로 확장하고 싶은 방향
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          현재 프로젝트 구현 경험을 바탕으로, 게임 시스템과 데이터/AI 지원
          프로젝트의 구조를 더 잘 설명하고 검증하는 방향으로 확장하고 싶습니다.
          이후에는 실제 스크린샷, 시연 영상, 프로젝트별 다이어그램을 추가해
          포트폴리오의 전달력을 높일 예정입니다.
        </p>
      </section>
    </div>
  )
}
