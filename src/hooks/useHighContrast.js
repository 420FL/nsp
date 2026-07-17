import { useState, useEffect } from 'react'

/**
 * Manages the high-contrast accessibility mode.
 * Persists preference in localStorage.
 * Toggles the `high-contrast` class on <html>.
 */
export function useHighContrast() {
  const [isHighContrast, setIsHighContrast] = useState(() => {
    return localStorage.getItem('nsp-high-contrast') === 'true'
  })

  useEffect(() => {
    const html = document.documentElement
    if (isHighContrast) {
      html.classList.add('high-contrast')
    } else {
      html.classList.remove('high-contrast')
    }
    localStorage.setItem('nsp-high-contrast', String(isHighContrast))
  }, [isHighContrast])

  const toggle = () => setIsHighContrast(prev => !prev)

  return { isHighContrast, toggle }
}
