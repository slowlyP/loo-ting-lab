import { Link } from 'react-router'

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-lg border border-cyan-300/30 bg-slate-950 p-6 shadow-2xl shadow-violet-950/40 md:p-8">
      <div className="absolute inset-x-0 top-0 h-px bg-cyan-300/70" />
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              PORTFOLIO STAGE SELECT · v0.2
            </p>
            <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              프로젝트를 스테이지처럼 탐험하는 개발 아카이브
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              Loo Ting Lab은 AI, 게임, 데이터 프로젝트를 스테이지 선택
              화면처럼 둘러보는 개인 개발 아카이브입니다. 각 스테이지에서
              어떤 문제를 풀었고, 어떤 기술로 구현했는지 빠르게 확인할 수
              있습니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-md bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              스테이지 선택하기
            </Link>
            <Link
              to="/resume"
              className="rounded-md border border-violet-300 px-4 py-2 text-sm font-bold text-violet-100 transition hover:bg-violet-300/10"
            >
              이력서 보기
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
            <div className="rounded-md border border-slate-800 bg-slate-900 p-3">
              <strong className="block text-lg text-white">03</strong>
              공개 스테이지
            </div>
            <div className="rounded-md border border-slate-800 bg-slate-900 p-3">
              <strong className="block text-lg text-white">AI</strong>
              감지/분석
            </div>
            <div className="rounded-md border border-slate-800 bg-slate-900 p-3">
              <strong className="block text-lg text-white">GAME</strong>
              시스템 설계
            </div>
          </div>
        </div>
        <div className="grid min-h-72 content-between gap-4 rounded-lg border border-violet-300/30 bg-slate-900 p-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs uppercase text-slate-400">
            <span>MISSION BOARD</span>
            <span className="text-emerald-300">ONLINE</span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold uppercase text-violet-300">
                CURRENT QUEST
              </p>
              <p className="mt-1 text-2xl font-black text-white">
                Home Stage Layout
              </p>
            </div>
            <div className="grid gap-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-slate-400">현재 버전</span>
                <span className="font-semibold text-white">v0.2</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-400">화면 모드</span>
                <span className="font-semibold text-white">Stage Browser</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-400">탐색 방식</span>
                <span className="font-semibold text-white">프로젝트 선택형</span>
              </div>
            </div>
          </div>
          <div className="h-2 rounded-full bg-slate-800">
            <div className="h-2 w-2/3 rounded-full bg-cyan-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
