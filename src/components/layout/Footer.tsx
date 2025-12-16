import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { resumeData } from '../../data/resumeText'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const footerLinks = [
    { to: '/', label: 'Home' },
    { to: '/resume', label: 'Resume' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' },
]

export function Footer() {
    const reducedMotion = useReducedMotion()
    const currentYear = new Date().getFullYear()

    return (
        <footer
            className={cn(
                'relative mt-auto border-t',
                'border-gray-200 dark:border-gray-800',
                'bg-gray-50/50 dark:bg-gray-950/50',
                'backdrop-blur-sm'
            )}
        >
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

            <div className="mx-auto max-w-6xl px-4 py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand section */}
                    <div className="space-y-4">
                        <motion.div
                            className="flex items-center gap-2"
                            whileHover={reducedMotion ? {} : { scale: 1.02 }}
                        >
                            <div
                                className={cn(
                                    'flex h-10 w-10 items-center justify-center rounded-lg',
                                    'bg-gradient-to-br from-neon-cyan to-neon-purple'
                                )}
                            >
                                <span className="text-sm font-bold text-white">ZA</span>
                            </div>
                            <span className="font-display font-bold text-lg gradient-text">
                                Zharif Azfar
                            </span>
                        </motion.div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                            Game Designer & Graphic Designer passionate about creating engaging digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        className={cn(
                                            'text-sm text-gray-600 dark:text-gray-400',
                                            'hover:text-primary-600 dark:hover:text-neon-cyan',
                                            'transition-colors focus:outline-none focus-visible:underline'
                                        )}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <a
                                    href={`mailto:${resumeData.personal.email}`}
                                    className="hover:text-primary-600 dark:hover:text-neon-cyan transition-colors"
                                >
                                    {resumeData.personal.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`tel:${resumeData.personal.mobile}`}
                                    className="hover:text-primary-600 dark:hover:text-neon-cyan transition-colors"
                                >
                                    {resumeData.personal.mobile}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            © {currentYear} {resumeData.personal.name}. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-gray-400 dark:text-gray-600 font-mono">
                                v1.0.0
                            </span>
                            <span className="text-xs text-gray-400 dark:text-gray-600">
                                Built with React + Tailwind
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
