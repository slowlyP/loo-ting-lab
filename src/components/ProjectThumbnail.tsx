import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/projects'
import { getProjectPreview } from '../data/projectPreviews'
import { useLanguage } from '../i18n/useLanguage'

const tones: Record<string, string> = {
  staccato: 'from-cyan-100 via-sky-50 to-violet-100 dark:from-slate-800 dark:via-cyan-950 dark:to-violet-950',
  'wizard-defense': 'from-violet-100 via-fuchsia-50 to-amber-100 dark:from-violet-950 dark:via-slate-900 dark:to-amber-950',
  'animal-pang': 'from-sky-100 via-amber-50 to-rose-100 dark:from-sky-950 dark:via-slate-900 dark:to-rose-950',
  'inquiry-dataset': 'from-emerald-100 via-cyan-50 to-sky-100 dark:from-emerald-950 dark:via-slate-900 dark:to-sky-950',
  'ai-accident-detection': 'from-amber-100 via-orange-50 to-rose-100 dark:from-amber-950 dark:via-slate-900 dark:to-rose-950',
}

function AbstractPreview({ project, isActive }: { project: Project; isActive: boolean }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${tones[project.id] ?? tones.staccato}`}>
      <div className={`absolute -right-12 -top-12 size-48 rounded-full border border-white/70 bg-white/30 transition-transform duration-700 ease-out motion-reduce:transform-none ${isActive ? 'translate-x-2 -translate-y-2 scale-110' : ''}`} />
      <div className={`absolute bottom-8 left-8 size-20 rounded-full border border-slate-900/10 bg-white/35 backdrop-blur transition-transform duration-700 ease-out motion-reduce:transform-none ${isActive ? '-translate-x-1 translate-y-1 scale-110' : ''}`} />
      <div className={`absolute inset-0 opacity-40 transition-transform duration-700 ease-out [background-image:linear-gradient(rgba(15,23,42,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.08)_1px,transparent_1px)] [background-size:32px_32px] motion-reduce:transform-none ${isActive ? 'scale-105' : ''}`} />
    </div>
  )
}

export function ProjectThumbnail({ project, isPreviewActive = false }: { project: Project; isPreviewActive?: boolean }) {
  const { t } = useLanguage()
  const preview = getProjectPreview(project.id, project.title)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mediaFailed, setMediaFailed] = useState(false)
  const hasImage = preview.kind === 'image' && Boolean(preview.image) && !mediaFailed
  const hasVideo = preview.kind === 'video' && Boolean(preview.video) && !mediaFailed

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isPreviewActive && !reducedMotion) {
      void video.play().catch(() => setMediaFailed(true))
      return
    }
    video.pause()
    video.currentTime = 0
  }, [isPreviewActive])

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800" aria-label={preview.alt}>
      {!hasImage && !hasVideo ? <AbstractPreview project={project} isActive={isPreviewActive} /> : null}
      {hasImage ? <img src={preview.image} alt={preview.alt} onError={() => setMediaFailed(true)} className={`absolute inset-0 size-full object-cover transition duration-700 ease-out motion-reduce:transform-none ${isPreviewActive ? 'scale-[1.045] translate-x-1' : 'scale-100'}`} /> : null}
      {hasVideo ? <video ref={videoRef} src={preview.video} muted loop playsInline preload="metadata" aria-label={preview.alt} onError={() => setMediaFailed(true)} className={`absolute inset-0 size-full object-cover transition duration-700 ease-out motion-reduce:transform-none ${isPreviewActive ? 'scale-[1.035]' : 'scale-100'}`} /> : null}
      <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent transition-opacity duration-300 ${isPreviewActive ? 'opacity-100' : 'opacity-30'}`} />
      <div className={`absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-700 shadow-sm backdrop-blur transition duration-300 ${isPreviewActive ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'} motion-reduce:transform-none`}>
        <span className={`size-1.5 rounded-full ${hasVideo ? 'bg-rose-500' : 'bg-violet-500'}`} />
        {hasImage || hasVideo ? 'Preview available' : project.category}
      </div>
      <div className="absolute inset-x-6 bottom-5 flex items-end justify-between gap-4">
        <span className={`max-w-[72%] text-xl font-black tracking-[-0.04em] sm:text-2xl ${hasImage || hasVideo ? 'text-white drop-shadow-[0_2px_5px_rgba(0,0,0,.85)]' : 'text-slate-900 drop-shadow-[0_1px_0_rgba(255,255,255,.6)] dark:text-slate-50 dark:drop-shadow-[0_2px_5px_rgba(0,0,0,.65)]'}`}>{project.title}</span>
        <span className={`rounded-full border border-white/80 bg-white/70 px-3 py-1 text-[10px] font-black tracking-wider text-slate-700 backdrop-blur transition duration-300 ${isPreviewActive ? 'border-white bg-white/90 shadow-sm' : ''}`}>{isPreviewActive ? t('common.viewProject') : project.stage}</span>
      </div>
    </div>
  )
}
