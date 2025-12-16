import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { cn } from '../lib/cn'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { getPageVariants } from '../lib/motion'

export function NotFound() {
    const reducedMotion = useReducedMotion()
    const pageVariants = getPageVariants(reducedMotion)

    return (
        <motion.div
            className="min-h-screen flex items-center justify-center px-4"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
        >
            <div className="text-center">
                {/* 404 with glitch effect */}
                <motion.div
                    className="relative mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className={cn(
                        'font-display text-[150px] md:text-[200px] font-bold leading-none',
                        'text-transparent bg-clip-text',
                        'bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink'
                    )}>
                        404
                    </h1>

                    {/* Decorative glitch layers */}
                    {!reducedMotion && (
                        <>
                            <motion.div
                                className="absolute inset-0 font-display text-[150px] md:text-[200px] font-bold leading-none text-neon-cyan/30"
                                animate={{ x: [-2, 2, -2], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                            >
                                404
                            </motion.div>
                            <motion.div
                                className="absolute inset-0 font-display text-[150px] md:text-[200px] font-bold leading-none text-neon-pink/30"
                                animate={{ x: [2, -2, 2], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3, delay: 0.05 }}
                            >
                                404
                            </motion.div>
                        </>
                    )}
                </motion.div>

                {/* Error message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="hud-panel inline-block px-6 py-3 mb-6">
                        <span className="font-mono text-sm text-neon-cyan">
                            ERROR: PAGE_NOT_FOUND
                        </span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Oops! Lost in the Digital Void
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
                        The page you're looking for seems to have wandered off into another dimension.
                        Let's get you back on track!
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link to="/">
                            <Button size="lg">
                                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Back to Home
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" size="lg">
                                Contact Support
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="xp-bar w-48">
                        <motion.div
                            className="xp-bar-fill"
                            initial={{ width: '100%' }}
                            animate={{ width: ['100%', '0%'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </div>
                    <p className="text-xs font-mono text-gray-500 mt-2 text-center">
                        RESPAWNING...
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}
