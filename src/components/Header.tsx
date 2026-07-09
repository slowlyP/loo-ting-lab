import { NavLink } from 'react-router'

const navItems = [
  { to: '/', label: '홈' },
  { to: '/projects', label: '프로젝트' },
  { to: '/resume', label: '이력' },
  { to: '/about', label: '소개' },
  { to: '/contact', label: '연락' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-cyan-300/15 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <NavLink to="/" className="group w-fit">
          <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Loo Ting Lab
          </span>
          <span className="text-lg font-black text-white transition group-hover:text-cyan-100">
            프로젝트 아카이브
          </span>
        </NavLink>
        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                [
                  'rounded-md border px-3 py-2 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300',
                  isActive
                    ? 'border-cyan-300 bg-cyan-300/12 text-cyan-50 shadow-sm shadow-cyan-950'
                    : 'border-slate-700 bg-slate-900/80 text-slate-300 hover:border-violet-300 hover:bg-slate-800 hover:text-white',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
