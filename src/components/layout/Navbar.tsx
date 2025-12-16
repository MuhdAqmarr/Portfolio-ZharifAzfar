import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '../ui/ThemeToggle'
import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/resume', label: 'Resume' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' },
]

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const reducedMotion = useReducedMotion()

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
    const closeMobileMenu = () => setIsMobileMenuOpen(false)

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-40',
                'mt-1 px-4 pt-3 transition-all duration-300'
            )}
        >
            <nav
                className={cn(
                    'mx-auto max-w-6xl rounded-xl',
                    'border border-white/10 dark:border-gray-800/50',
                    'bg-white/80 dark:bg-gray-900/80',
                    'backdrop-blur-lg shadow-lg'
                )}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="flex items-center justify-between px-4 py-3 md:px-6">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        className={cn(
                            'group flex items-center gap-2',
                            'font-display font-bold text-lg',
                            'text-gray-900 dark:text-white',
                            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg px-2 py-1 -ml-2'
                        )}
                        onClick={closeMobileMenu}
                    >
                        <motion.div
                            className={cn(
                                'flex h-8 w-8 items-center justify-center rounded-lg',
                                'bg-gradient-to-br from-neon-cyan to-neon-purple'
                            )}
                            whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            <span className="text-sm font-bold text-white">ZA</span>
                        </motion.div>
                        <span className="hidden sm:inline gradient-text">Zharif</span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        cn(
                                            'relative px-3 py-2 rounded-lg font-medium text-sm transition-colors',
                                            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                                            isActive
                                                ? 'text-primary-600 dark:text-neon-cyan'
                                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                        )
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.label}
                                            {isActive && (
                                                <motion.div
                                                    className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                                                    layoutId={reducedMotion ? undefined : 'activeNav'}
                                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Right side controls */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMobileMenu}
                            className={cn(
                                'md:hidden flex h-10 w-10 items-center justify-center rounded-lg',
                                'border border-gray-200 dark:border-gray-700',
                                'bg-gray-100 dark:bg-gray-800',
                                'text-gray-700 dark:text-gray-300',
                                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500'
                            )}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label="Toggle navigation menu"
                        >
                            <motion.svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={isMobileMenuOpen ? 'open' : 'closed'}
                            >
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    variants={{
                                        closed: { d: 'M4 6h16M4 12h16M4 18h16' },
                                        open: { d: 'M6 18L18 6M6 6l12 12' },
                                    }}
                                />
                            </motion.svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            id="mobile-menu"
                            className="md:hidden border-t border-gray-200 dark:border-gray-800"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: reducedMotion ? 0.1 : 0.3 }}
                        >
                            <ul className="flex flex-col gap-1 p-4">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.to}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: reducedMotion ? 0 : index * 0.05 }}
                                    >
                                        <NavLink
                                            to={link.to}
                                            onClick={closeMobileMenu}
                                            className={({ isActive }) =>
                                                cn(
                                                    'block px-4 py-2 rounded-lg font-medium transition-colors',
                                                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                                                    isActive
                                                        ? 'bg-primary-500/10 text-primary-600 dark:text-neon-cyan'
                                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                )
                                            }
                                        >
                                            {link.label}
                                        </NavLink>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}
