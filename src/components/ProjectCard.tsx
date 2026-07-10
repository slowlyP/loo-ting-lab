import { Link } from 'react-router'
import type { Project } from '../data/projects'
import { TechStackBadges } from './TechStackBadges'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 shadow-lg shadow-slate-950/30 backdrop-blur transition hover:border-cyan-300/70 hover:bg-slate-900/90 hover:shadow-cyan-950/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent transition group-hover:via-cyan-300" />
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
              Experiment File
            </p>
            <p className="mt-2 text-3xl font-black text-cyan-100">
              {project.stage.replace('STAGE', 'FILE')}
            </p>
            <h2 className="mt-3 text-xl font-black text-white">
              {project.title}
            </h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              {project.category}
            </p>
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
        <TechStackBadges
          techs={project.tech}
          limit={8}
          showMoreCount
          moreLabel="modules"
          size="sm"
        />
      </div>
      <Link
        to={`/projects/${project.id}`}
        className="mt-5 inline-flex justify-center rounded-md border border-cyan-300/70 px-3 py-2.5 text-center text-sm font-black text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
      >
        파일 열람
      </Link>
    </article>
  )
}
