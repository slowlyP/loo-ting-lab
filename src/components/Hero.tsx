import { Link } from 'react-router'

export function Hero() {
  return (
    <section className="grid gap-8 rounded-lg border border-violet-400/30 bg-slate-900/70 p-6 shadow-2xl shadow-violet-950/30 md:grid-cols-[1.2fr_0.8fr] md:p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase text-cyan-300">
            PORTFOLIO STAGE SELECT
          </p>
          <h1 className="max-w-3xl text-4xl font-black text-white sm:text-5xl">
            Loo Ting Lab
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            AI 시스템, 게임 개발, 데이터 작업을 게임 스테이지처럼 둘러볼 수
            있는 개인 개발 아카이브입니다. 프로젝트를 선택하고, 어떤 문제를
            풀었는지 따라가 보세요.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-md bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
          >
            프로젝트 둘러보기
          </Link>
          <Link
            to="/resume"
            className="rounded-md border border-violet-300 px-4 py-2 text-sm font-bold text-violet-100 transition hover:bg-violet-300/10"
          >
            이력서 보기
          </Link>
        </div>
      </div>
      <div className="grid content-between gap-4 rounded-md border border-slate-700 bg-slate-950 p-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs uppercase text-slate-400">
          <span>BUILD</span>
          <span className="text-emerald-300">ONLINE</span>
        </div>
        <div className="grid gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">현재 버전</span>
            <span className="font-semibold text-white">v0.1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">모드</span>
            <span className="font-semibold text-white">프로젝트 아카이브</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">다음 목표</span>
            <span className="font-semibold text-white">v0.2 홈 레이아웃</span>
          </div>
        </div>
      </div>
    </section>
  )
}
