import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { getPageVariants } from '../../lib/motion'

interface PageShellProps {
    children: ReactNode
    title: string
    subtitle?: string
    className?: string
}

export function PageShell({ children, title, subtitle, className }: PageShellProps) {
    const reducedMotion = useReducedMotion()
    const pageVariants = getPageVariants(reducedMotion)

    return (
        <motion.div
            className={cn('min-h-screen pt-28 pb-16 relative z-10', className)}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
        >
            {/* Page header */}
            <div className="mx-auto max-w-6xl px-4 mb-12">
                <motion.div
                    className="relative pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: reducedMotion ? 0.1 : 0.5 }}
                >
                    {/* HUD corner decorations */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-neon-cyan/30" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-neon-cyan/30" />

                    <h1
                        className={cn(
                            'font-display text-4xl md:text-5xl lg:text-6xl font-bold',
                            'text-gray-900 dark:text-white',
                            'tracking-tight'
                        )}
                    >
                        <span className="gradient-text">{title}</span>
                    </h1>

                    {subtitle && (
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {subtitle}
                        </p>
                    )}

                    {/* Decorative line */}
                    <div className="mt-6 flex items-center gap-2">
                        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple" />
                        <div className="h-1 w-6 rounded-full bg-neon-cyan/30" />
                        <div className="h-1 w-3 rounded-full bg-neon-cyan/20" />
                    </div>
                </motion.div>
            </div>

            {/* Page content */}
            <div className="mx-auto max-w-6xl px-4">
                {children}
            </div>
        </motion.div>
    )
}
