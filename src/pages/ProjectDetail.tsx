import { Link, useParams } from 'react-router'
import { findProject } from '../data/projects'

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
    </article>
  )
}
