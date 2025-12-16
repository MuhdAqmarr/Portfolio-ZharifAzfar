import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../lib/cn'

interface LoadingScreenProps {
    message?: string
}

export function LoadingScreen({ message = 'Loading assets...' }: LoadingScreenProps) {
    const reducedMotion = useReducedMotion()

    return (
        <div
            className={cn(
                'fixed inset-0 z-50 flex flex-col items-center justify-center',
                'bg-gray-50 dark:bg-gray-950'
            )}
        >
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />

            {/* Grid pattern */}
            <div className="grid-overlay" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Animated logo/icon */}
                <motion.div
                    className={cn(
                        'relative flex h-20 w-20 items-center justify-center',
                        'rounded-2xl border-2 border-neon-cyan/30',
                        'bg-gray-100 dark:bg-gray-900'
                    )}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Rotating gradient border */}
                    <motion.div
                        className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"
                        style={{ opacity: 0.5 }}
                        animate={reducedMotion ? {} : { rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="absolute inset-0.5 rounded-xl bg-gray-100 dark:bg-gray-900" />

                    {/* Controller icon */}
                    <svg
                        className="relative z-10 h-10 w-10 text-neon-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        />
                    </svg>
                </motion.div>

                {/* Loading text */}
                <motion.p
                    className="font-mono text-sm text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {message}
                </motion.p>

                {/* XP Progress bar */}
                <div className="w-64">
                    <div className="xp-bar">
                        <motion.div
                            className="xp-bar-fill"
                            initial={{ width: '0%' }}
                            animate={{ width: ['0%', '70%', '85%', '100%'] }}
                            transition={{
                                duration: reducedMotion ? 0.5 : 2,
                                times: [0, 0.5, 0.8, 1],
                                ease: 'easeInOut',
                            }}
                        />
                    </div>

                    {/* Progress percentage */}
                    <motion.div
                        className="mt-2 flex justify-between font-mono text-xs text-gray-500 dark:text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span>LVL 1</span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            ▶ LOADING
                        </motion.span>
                        <span>XP</span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
