import { LuMoon, LuSun } from 'react-icons/lu'
import { useLanguage } from '../i18n/useLanguage'
import { useTheme } from '../theme/useTheme'

export function ThemeToggle() {
  const { t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const label = theme === 'light' ? t('theme.toDark') : t('theme.toLight')
  const Icon = theme === 'light' ? LuMoon : LuSun

  return (
    <button type="button" onClick={toggleTheme} aria-label={label} title={label}
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-600 shadow-sm transition hover:border-violet-300 hover:text-violet-700 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-violet-300">
      <Icon className="size-4" aria-hidden="true" />
    </button>
  )
}
