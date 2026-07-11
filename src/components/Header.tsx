import { NavLink } from 'react-router'
import { useLanguage } from '../i18n/useLanguage'
import { LanguageToggle } from './LanguageToggle'

export function Header() {
  const { t } = useLanguage()
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <NavLink to="/projects" className="group text-lg font-black tracking-[-0.04em] text-slate-950">
          Loo Ting Lab<span className="text-violet-600 transition group-hover:text-cyan-600">.</span>
        </NavLink>
        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary navigation">
            {[
              { to: '/projects', label: t('nav.work') },
              { to: '/about', label: t('nav.about') },
            ].map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `rounded-full px-3 py-2 text-sm font-bold transition sm:px-4 ${isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
