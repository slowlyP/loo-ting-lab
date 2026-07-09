import { ProjectBrowser } from '../components/ProjectBrowser'

export function Projects() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Archive
        </p>
        <h1 className="text-3xl font-black text-white">프로젝트</h1>
        <p className="max-w-3xl leading-7 text-slate-300">
          포트폴리오의 핵심 프로젝트를 스테이지 선택 화면처럼 모아둔
          공간입니다. 각 카드를 통해 프로젝트의 역할, 기술, 문제 해결 흐름을
          살펴볼 수 있습니다.
        </p>
      </header>
      <ProjectBrowser />
    </div>
  )
}
