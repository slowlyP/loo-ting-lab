import { Route, Routes } from 'react-router'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { NetworkBackground } from './components/NetworkBackground'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'
import { Projects } from './pages/Projects'
import { Resume } from './pages/Resume'

function App() {
  return (
    <div className="relative min-h-screen text-slate-900">
      <NetworkBackground />
      <Header />
      <main className="relative z-10 mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
