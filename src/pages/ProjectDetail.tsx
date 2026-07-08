import { Link, useParams } from 'react-router'
import { findProject } from '../data/projects'

type DetailSectionProps = {
  title: string
  items: string[]
  tone?: 'cyan' | 'violet'
}

function DetailSection({ title, items, tone = 'cyan' }: DetailSectionProps) {
  const borderColor = tone === 'cyan' ? 'border-cyan-300' : 'border-violet-300'

  return (
    <section className="rounded-lg border border-slate-700 bg-slate-900 p-5">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-slate-300">
        {items.map((item) => (
          <li key={item} className={`border-l-2 ${borderColor} pl-3`}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export function ProjectDetail() {
  const { projectId } = useParams()
  const project = findProject(projectId)

  if (!project) {
    return (
      <section className="rounded-lg border border-slate-700 bg-slate-900 p-6">
        <p className="text-sm font-semibold uppercase text-rose-300">
          STAGE MISSING
        </p>
        <h1 className="mt-2 text-3xl font-black text-white">
          프로젝트를 찾을 수 없습니다
        </h1>
        <Link
          to="/projects"
          className="mt-6 inline-flex rounded-md border border-cyan-300 px-4 py-2 text-sm font-bold text-cyan-100"
        >
          프로젝트 목록으로 돌아가기
        </Link>
      </section>
    )
  }

  return (
    <article className="space-y-6">
      <Link to="/projects" className="text-sm font-semibold text-cyan-300">
        프로젝트 목록으로
      </Link>
      <header className="rounded-lg border border-violet-400/30 bg-slate-900 p-6">
        <p className="text-sm font-bold uppercase text-violet-300">
          {project.category} · {project.stage}
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-black text-white">{project.title}</h1>
            <p className="mt-2 text-slate-300">{project.subtitle}</p>
          </div>
          <span className="w-fit rounded bg-cyan-300/10 px-3 py-1 text-sm font-bold text-cyan-100">
            {project.status}
          </span>
        </div>
      </header>
      <section className="grid gap-4 md:grid-cols-[1fr_0.7fr]">
        <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
          <h2 className="text-xl font-bold text-white">프로젝트 개요</h2>
          <p className="mt-3 font-semibold text-cyan-100">{project.role}</p>
          <p className="mt-3 leading-7 text-slate-300">{project.summary}</p>
          <ul className="mt-5 space-y-3 text-slate-300">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="border-l-2 border-cyan-300 pl-3">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-lg border border-slate-700 bg-slate-900 p-5">
          <h2 className="text-xl font-bold text-white">기술 스택</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded border border-slate-700 px-2 py-1 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </aside>
      </section>
      <section className="rounded-lg border border-slate-700 bg-slate-900 p-5">
        <h2 className="text-xl font-bold text-white">문제 해결 포인트</h2>
        <ul className="mt-4 space-y-3 text-slate-300">
          {project.problemSolving.map((item) => (
            <li key={item} className="border-l-2 border-violet-300 pl-3">
              {item}
            </li>
          ))}
        </ul>
      </section>
      {project.detail ? (
        <>
          <DetailSection title="해결하려는 문제" items={project.detail.problem} />
          <DetailSection
            title="내가 맡은 역할"
            items={project.detail.responsibilities}
            tone="violet"
          />
          <DetailSection
            title="주요 구현/참여 기능"
            items={project.detail.features}
          />
          <DetailSection
            title="아키텍처 / 데이터 흐름 요약"
            items={project.detail.architecture}
            tone="violet"
          />
          <DetailSection
            title="결과 및 배운 점"
            items={project.detail.outcomes}
          />
          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
              <h2 className="text-xl font-bold text-white">발표 영상</h2>
              {project.links?.youtube ? (
                <a
                  href={project.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-md border border-cyan-300 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10"
                >
                  발표 영상 보기
                </a>
              ) : (
                <p className="mt-4 text-slate-300">발표 영상 추가 예정</p>
              )}
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
              <h2 className="text-xl font-bold text-white">GitHub 링크</h2>
              {project.links?.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-md border border-violet-300 px-4 py-2 text-sm font-bold text-violet-100 transition hover:bg-violet-300/10"
                >
                  저장소 보기
                </a>
              ) : (
                <p className="mt-4 text-slate-300">GitHub 링크 추가 예정</p>
              )}
            </div>
          </section>
        </>
      ) : null}
    </article>
  )
}
