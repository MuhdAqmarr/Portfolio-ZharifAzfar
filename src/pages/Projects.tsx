import { motion } from 'framer-motion'
import { PageShell } from '../components/layout/PageShell'
import { Card, CardContent } from '../components/ui/Card'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { resumeData } from '../data/resumeText'
import { cn } from '../lib/cn'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Projects() {
    const reducedMotion = useReducedMotion()

    return (
        <PageShell
            title="Projects"
            subtitle="Showcasing my work and academic projects."
        >
            <div className="space-y-12">
                {/* Final Year Project Section */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple" />
                            Project Involved / Completed
                        </h2>
                    </ScrollReveal>

                    {resumeData.projects.map((project, index) => (
                        <ScrollReveal key={index} delay={0.1}>
                            <Card variant="hud" glow className="p-0 overflow-hidden">
                                {/* Project Header with gradient */}
                                <div className="relative p-6 pb-4 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10">
                                    {/* Type badge */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-neon-purple/20 text-neon-purple border border-neon-purple/30">
                                            {project.type}
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                            {project.period}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 dark:text-white whitespace-pre-line">
                                        {project.title}
                                    </h3>

                                    {/* Decorative elements */}
                                    <motion.div
                                        className="absolute top-4 right-4 h-20 w-20 opacity-20"
                                        animate={reducedMotion ? {} : { rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    >
                                        <svg viewBox="0 0 100 100" className="h-full w-full text-neon-cyan">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
                                        </svg>
                                    </motion.div>
                                </div>

                                {/* Project Details */}
                                <CardContent className="pt-6">
                                    <div className="space-y-4">
                                        {/* Description points */}
                                        <ul className="space-y-3">
                                            {project.description.map((point, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    <div className="mt-1.5 flex-shrink-0">
                                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple">
                                                            <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* Technologies used */}
                                        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                                                Technologies Used:
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {['Unity', 'VR Technology', 'C#', 'Interactive Design'].map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className={cn(
                                                            'px-3 py-1 rounded-lg text-sm',
                                                            'bg-gray-100 dark:bg-gray-800',
                                                            'text-gray-700 dark:text-gray-300',
                                                            'border border-gray-200 dark:border-gray-700'
                                                        )}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>

                                {/* Progress bar decoration */}
                                <div className="px-6 pb-6">
                                    <div className="flex items-center justify-between text-xs font-mono text-gray-500 dark:text-gray-400 mb-2">
                                        <span>PROJECT PROGRESS</span>
                                        <span>100% COMPLETE</span>
                                    </div>
                                    <div className="xp-bar h-2">
                                        <motion.div
                                            className="xp-bar-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: 'easeOut' }}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </section>

                {/* Project Stats */}
                <section>
                    <ScrollReveal>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                { label: 'VR Environment', icon: '🎮', desc: 'Unity-based development' },
                                { label: 'Interactive NPC', icon: '🤖', desc: 'User interaction prompts' },
                                { label: 'Cross-Platform', icon: '💻', desc: 'PC & Laptop accessible' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className={cn(
                                        'glass-card p-6 text-center',
                                        'hover:border-neon-cyan/30 transition-colors'
                                    )}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="text-4xl mb-3">{stat.icon}</div>
                                    <h3 className="font-display font-semibold text-gray-900 dark:text-white">
                                        {stat.label}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        {stat.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </PageShell>
    )
}
