import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectBrowser() {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-300">
            STAGE LIST
          </p>
          <h2 className="text-2xl font-bold text-white">대표 프로젝트</h2>
        </div>
        <p className="text-sm text-slate-400">
          {projects.length}개의 스테이지 준비 완료
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
