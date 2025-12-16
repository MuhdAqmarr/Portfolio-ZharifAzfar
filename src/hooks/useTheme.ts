import { useState, useEffect, useCallback } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
    const [theme, setThemeState] = useState<Theme>(() => {
        // Check localStorage first
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('theme') as Theme | null
            if (stored) return stored
            // Check system preference
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark'
            }
        }
        return 'dark' // Default to dark for that game-inspired look
    })

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const setTheme = useCallback((newTheme: Theme) => {
        setThemeState(newTheme)
    }, [])

    const toggleTheme = useCallback(() => {
        setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }, [])

    return { theme, setTheme, toggleTheme }
}

export type { Theme }
