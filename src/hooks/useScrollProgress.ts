import { useState, useEffect } from 'react'

export function useScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = window.scrollY
            const progressPercent = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0
            setProgress(Math.min(100, Math.max(0, progressPercent)))
        }

        window.addEventListener('scroll', updateProgress, { passive: true })
        updateProgress()

        return () => window.removeEventListener('scroll', updateProgress)
    }, [])

    return progress
}
