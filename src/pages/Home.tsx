import { Hero } from '../components/Hero'
import { ProjectBrowser } from '../components/ProjectBrowser'

export function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <ProjectBrowser />
    </div>
  )
}
