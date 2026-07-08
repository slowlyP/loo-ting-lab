import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectBrowser() {
  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 border-b border-slate-800 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-300">
            STAGE SELECT
          </p>
          <h2 className="text-2xl font-bold text-white">
            입장할 프로젝트를 선택하세요
          </h2>
        </div>
        <p className="text-sm text-slate-400">
          {projects.length}개의 스테이지가 준비되어 있습니다
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
