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
    <header className="border-b border-cyan-400/20 bg-slate-950/95">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <NavLink to="/" className="group w-fit">
          <span className="block text-xs font-semibold uppercase text-cyan-300">
            Loo Ting Lab
          </span>
          <span className="text-lg font-bold text-white group-hover:text-violet-200">
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
                  'rounded-md border px-3 py-2 text-sm font-medium transition',
                  isActive
                    ? 'border-cyan-300 bg-cyan-300/10 text-cyan-100'
                    : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-violet-300 hover:text-white',
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
