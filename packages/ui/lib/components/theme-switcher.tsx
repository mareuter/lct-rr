import { useLocalStorage } from 'usehooks-ts'
import { Cog6ToothIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

const Themes = ['light', 'dark', 'system'] as const
type Theme = (typeof Themes)[number]

const ThemeSwitcher = () => {
  const [currentIndex, setCurrentIndex] = useState(2)
  const [theme, setTheme] = useLocalStorage<Theme>(
    'theme',
    Themes[currentIndex] as Theme,
  )

  const getSystemPreference = (): Theme => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    } else {
      return 'light'
    }
  }

  const getNextIndex = (): number => {
    let nextIndex = currentIndex + 1
    if (nextIndex > Themes.length - 1) {
      nextIndex = 0
    }
    return nextIndex
  }

  useEffect(() => {
    let currentTheme: Theme = theme
    if (theme === 'system') {
      currentTheme = getSystemPreference()
    }
    const root = document.documentElement
    root.setAttribute('data-theme', currentTheme)
  }, [theme])

  const toggleTheme = () => {
    const nextIndex = getNextIndex()
    setTheme(Themes[nextIndex] as Theme)
    setCurrentIndex(nextIndex)
  }

  return (
    <div>
      <button
        className="my-1 mr-1 hover:rounded-full hover:outline-1 hover:outline-blue-700"
        aria-label={`Switch to ${theme} ${theme === 'system' ? 'preference' : 'mode'}`}
        onClick={toggleTheme}
      >
        {'light' === Themes[getNextIndex()] ? (
          <SunIcon className="size-8" />
        ) : 'dark' === Themes[getNextIndex()] ? (
          <MoonIcon className="size-8" />
        ) : (
          <Cog6ToothIcon className="size-8" />
        )}
        <p className="sr-only">Theme Switcher</p>
      </button>
    </div>
  )
}

export default ThemeSwitcher
