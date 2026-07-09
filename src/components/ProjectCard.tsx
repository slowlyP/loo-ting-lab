import { Link } from 'react-router'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-slate-700 bg-slate-900/90 p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-950/30">
      <div className="absolute inset-x-0 top-0 h-1 bg-violet-400/70 transition group-hover:bg-cyan-300" />
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
              {project.category}
            </p>
            <p className="mt-2 text-3xl font-black text-cyan-100">
              {project.stage}
            </p>
            <h2 className="mt-3 text-xl font-black text-white">
              {project.title}
            </h2>
          </div>
          <span className="shrink-0 rounded border border-cyan-300/30 bg-cyan-300/10 px-2 py-1 text-xs font-black text-cyan-100">
            {project.statusCode}
          </span>
        </div>
        <p className="rounded-md border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs font-semibold text-slate-300">
          {project.status}
        </p>
        <p className="text-sm font-semibold leading-6 text-slate-200">
          {project.subtitle}
        </p>
        <p className="text-sm leading-6 text-slate-400">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded border border-slate-700 bg-slate-950/60 px-2 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <Link
        to={`/projects/${project.id}`}
        className="mt-5 inline-flex justify-center rounded-md border border-cyan-300/70 px-3 py-2.5 text-center text-sm font-black text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
      >
        프로젝트 보기
      </Link>
    </article>
  )
}
