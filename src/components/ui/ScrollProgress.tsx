import { motion } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../lib/cn'

export function ScrollProgress() {
    const progress = useScrollProgress()
    const reducedMotion = useReducedMotion()

    return (
        <div
            className={cn(
                'fixed top-0 left-0 right-0 z-50 h-1',
                'bg-gray-200/30 dark:bg-gray-800/30'
            )}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Page scroll progress"
        >
            <motion.div
                className="xp-bar-fill h-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.1, ease: 'easeOut' }}
            />

            {/* XP indicator pip */}
            <motion.div
                className={cn(
                    'absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full',
                    'bg-neon-cyan shadow-lg shadow-neon-cyan/50'
                )}
                style={{ left: `${progress}%`, marginLeft: '-5px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: progress > 0 ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            />
        </div>
    )
}
