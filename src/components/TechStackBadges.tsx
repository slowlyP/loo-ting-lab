import type { IconType } from 'react-icons'
import { FaBrain, FaCode, FaDatabase, FaFileCsv, FaServer } from 'react-icons/fa'
import { LuBot, LuCpu, LuFileSpreadsheet, LuGamepad2, LuServerCog } from 'react-icons/lu'
import {
  SiCss,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGooglemaps,
  SiHtml5,
  SiJavascript,
  SiKakao,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiOpencv,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSocketdotio,
  SiSqlalchemy,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiVite,
  SiYolo,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'

type TechStackBadgesProps = {
  techs: string[]
  limit?: number
  showMoreCount?: boolean
  moreLabel?: string
  size?: 'sm' | 'md'
}

type TechIconConfig = {
  icon: IconType
  tone: string
}

const iconMap: Record<string, TechIconConfig> = {
  'Next.js': { icon: SiNextdotjs, tone: 'text-white' },
  React: { icon: SiReact, tone: 'text-cyan-200' },
  TypeScript: { icon: SiTypescript, tone: 'text-sky-200' },
  JavaScript: { icon: SiJavascript, tone: 'text-yellow-200' },
  HTML: { icon: SiHtml5, tone: 'text-orange-200' },
  CSS: { icon: SiCss, tone: 'text-blue-200' },
  'Tailwind CSS': { icon: SiTailwindcss, tone: 'text-cyan-200' },
  Flask: { icon: SiFlask, tone: 'text-slate-100' },
  FastAPI: { icon: SiFastapi, tone: 'text-emerald-200' },
  Python: { icon: SiPython, tone: 'text-sky-200' },
  YOLOv11: { icon: SiYolo, tone: 'text-rose-200' },
  YOLOv8: { icon: SiYolo, tone: 'text-rose-200' },
  'YOLOv8-p2': { icon: SiYolo, tone: 'text-rose-200' },
  'RT-DETR': { icon: LuCpu, tone: 'text-rose-200' },
  OpenCV: { icon: SiOpencv, tone: 'text-emerald-200' },
  MySQL: { icon: SiMysql, tone: 'text-sky-200' },
  'Socket.IO': { icon: SiSocketdotio, tone: 'text-white' },
  WebSocket: { icon: SiSocketdotio, tone: 'text-cyan-200' },
  'REST API': { icon: FaServer, tone: 'text-violet-200' },
  Linux: { icon: SiLinux, tone: 'text-slate-100' },
  'Linux VM': { icon: SiLinux, tone: 'text-slate-100' },
  systemd: { icon: LuServerCog, tone: 'text-violet-200' },
  Nginx: { icon: SiNginx, tone: 'text-emerald-200' },
  'AI Media Proxy': { icon: LuServerCog, tone: 'text-violet-200' },
  'CCTV / Video Processing': { icon: LuCpu, tone: 'text-cyan-200' },
  'ROI / Rule Engine': { icon: LuCpu, tone: 'text-emerald-200' },
  Unity: { icon: SiUnity, tone: 'text-white' },
  'Unity 2D': { icon: SiUnity, tone: 'text-white' },
  'C#': { icon: TbBrandCSharp, tone: 'text-violet-200' },
  CSV: { icon: FaFileCsv, tone: 'text-emerald-200' },
  Git: { icon: SiGit, tone: 'text-orange-200' },
  GitHub: { icon: SiGithub, tone: 'text-white' },
  Vite: { icon: SiVite, tone: 'text-violet-200' },
  SQLAlchemy: { icon: SiSqlalchemy, tone: 'text-rose-200' },
  'Flask-Migrate': { icon: SiFlask, tone: 'text-slate-100' },
  'Google Maps API': { icon: SiGooglemaps, tone: 'text-emerald-200' },
  'Kakao Navigation API': { icon: SiKakao, tone: 'text-yellow-200' },
  'scikit-learn': { icon: SiScikitlearn, tone: 'text-orange-200' },
  LLM: { icon: LuBot, tone: 'text-violet-200' },
  'rule-based classifier': { icon: FaBrain, tone: 'text-violet-200' },
  Dataclass: { icon: FaCode, tone: 'text-cyan-200' },
  'TF-IDF': { icon: LuFileSpreadsheet, tone: 'text-cyan-200' },
  LogisticRegression: { icon: FaDatabase, tone: 'text-sky-200' },
  'Markdown documentation': { icon: FaCode, tone: 'text-slate-200' },
  'Dataset Card': { icon: LuFileSpreadsheet, tone: 'text-emerald-200' },
  'Labeling Guide': { icon: LuFileSpreadsheet, tone: 'text-cyan-200' },
  'Error Analysis': { icon: FaBrain, tone: 'text-rose-200' },
  'Experiment Log': { icon: LuFileSpreadsheet, tone: 'text-violet-200' },
  'Test Script': { icon: FaCode, tone: 'text-sky-200' },
  'File Upload': { icon: FaServer, tone: 'text-cyan-200' },
  'Route Risk Analysis': { icon: FaBrain, tone: 'text-emerald-200' },
  '2D Sprite': { icon: LuGamepad2, tone: 'text-cyan-200' },
  'PC / Steam Direction': { icon: LuGamepad2, tone: 'text-violet-200' },
  'Tower Defense': { icon: LuGamepad2, tone: 'text-cyan-200' },
  'Battle Loop': { icon: LuGamepad2, tone: 'text-cyan-200' },
  'Random Summon': { icon: LuGamepad2, tone: 'text-violet-200' },
  'Fusion System': { icon: LuGamepad2, tone: 'text-violet-200' },
  'Stage Progression': { icon: LuGamepad2, tone: 'text-cyan-200' },
}

const fallbackIcon = (tech: string): TechIconConfig => {
  const lowerTech = tech.toLowerCase()

  if (lowerTech.includes('ai') || lowerTech.includes('detection')) {
    return { icon: LuCpu, tone: 'text-cyan-200' }
  }

  if (lowerTech.includes('database') || lowerTech.includes('sql')) {
    return { icon: FaDatabase, tone: 'text-sky-200' }
  }

  if (lowerTech.includes('server') || lowerTech.includes('vm')) {
    return { icon: FaServer, tone: 'text-violet-200' }
  }

  return { icon: FaCode, tone: 'text-slate-200' }
}

export function TechStackBadges({
  techs,
  limit,
  showMoreCount = false,
  moreLabel = 'more',
  size = 'md',
}: TechStackBadgesProps) {
  const visibleTechs = limit ? techs.slice(0, limit) : techs
  const hiddenCount = limit ? Math.max(techs.length - limit, 0) : 0
  const badgeClass =
    size === 'sm'
      ? 'gap-1.5 rounded-md px-2 py-1 text-xs'
      : 'gap-2 rounded-lg px-3 py-2 text-sm'
  const iconClass = size === 'sm' ? 'size-3.5' : 'size-4'

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTechs.map((tech) => {
        const config = iconMap[tech] ?? fallbackIcon(tech)
        const Icon = config.icon

        return (
          <span
            key={tech}
            className={`inline-flex items-center border border-slate-700 bg-slate-950/70 font-semibold text-slate-200 shadow-sm shadow-slate-950/20 transition hover:border-cyan-300/60 hover:bg-slate-900 ${badgeClass}`}
          >
            <Icon className={`${iconClass} shrink-0 ${config.tone}`} />
            <span>{tech}</span>
          </span>
        )
      })}
      {showMoreCount && hiddenCount > 0 ? (
        <span
          className={`inline-flex items-center border border-violet-300/40 bg-violet-300/10 font-semibold text-violet-100 shadow-sm shadow-slate-950/20 ${badgeClass}`}
        >
          +{hiddenCount} {moreLabel}
        </span>
      ) : null}
    </div>
  )
}
