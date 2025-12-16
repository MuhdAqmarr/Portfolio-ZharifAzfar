import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../lib/cn'

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const reducedMotion = useReducedMotion()

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                'relative flex h-10 w-10 items-center justify-center rounded-lg',
                'border border-gray-200 dark:border-gray-700',
                'bg-gray-100 dark:bg-gray-800',
                'text-gray-700 dark:text-gray-300',
                'transition-colors duration-300',
                'hover:bg-gray-200 dark:hover:bg-gray-700',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500'
            )}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <span className="sr-only">Toggle theme</span>

            {/* Sun icon */}
            <motion.svg
                className={cn(
                    'absolute h-5 w-5 transition-opacity',
                    theme === 'dark' ? 'opacity-0' : 'opacity-100'
                )}
                initial={false}
                animate={reducedMotion ? {} : { rotate: theme === 'dark' ? 90 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </motion.svg>

            {/* Moon icon */}
            <motion.svg
                className={cn(
                    'absolute h-5 w-5 transition-opacity',
                    theme === 'dark' ? 'opacity-100' : 'opacity-0'
                )}
                initial={false}
                animate={reducedMotion ? {} : { rotate: theme === 'dark' ? 0 : -90 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </motion.svg>
        </button>
    )
}
