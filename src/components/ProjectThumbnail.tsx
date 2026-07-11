import type { Project } from '../data/projects'

const tones: Record<string, string> = {
  staccato: 'from-cyan-100 via-sky-50 to-violet-100',
  'wizard-defense': 'from-violet-100 via-fuchsia-50 to-amber-100',
  'inquiry-dataset': 'from-emerald-100 via-cyan-50 to-sky-100',
  'ai-accident-detection': 'from-amber-100 via-orange-50 to-rose-100',
}

export function ProjectThumbnail({ project }: { project: Project }) {
  return (
    <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${tones[project.id] ?? tones.staccato}`}>
      <div className="absolute -right-12 -top-12 size-48 rounded-full border border-white/70 bg-white/30" />
      <div className="absolute bottom-8 left-8 size-20 rounded-full border border-slate-900/10 bg-white/35 backdrop-blur" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(15,23,42,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.08)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute inset-x-6 bottom-5 flex items-end justify-between gap-4">
        <span className="max-w-[75%] text-xl font-black tracking-[-0.04em] text-slate-900 sm:text-2xl">{project.title}</span>
        <span className="rounded-full border border-white/80 bg-white/65 px-3 py-1 text-[10px] font-black tracking-wider text-slate-700 backdrop-blur">{project.stage}</span>
      </div>
    </div>
  )
}
