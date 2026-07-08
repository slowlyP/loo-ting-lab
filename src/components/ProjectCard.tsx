import { Link } from 'react-router'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-lg border border-slate-700 bg-slate-900 p-5 transition hover:border-cyan-300 hover:bg-slate-900/80">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase text-violet-300">
              {project.category} · {project.stage}
            </p>
            <h2 className="mt-1 text-xl font-bold text-white">
              {project.title}
            </h2>
          </div>
          <span className="rounded bg-slate-800 px-2 py-1 text-xs text-cyan-200">
            {project.status}
          </span>
        </div>
        <p className="text-sm font-medium text-slate-300">{project.subtitle}</p>
        <p className="text-sm leading-6 text-slate-400">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded border border-slate-700 px-2 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <Link
        to={`/projects/${project.id}`}
        className="mt-5 rounded-md border border-cyan-300/70 px-3 py-2 text-center text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10"
      >
        자세히 보기
      </Link>
    </article>
  )
}
