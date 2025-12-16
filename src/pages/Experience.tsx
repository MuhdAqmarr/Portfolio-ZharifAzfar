import { motion } from 'framer-motion'
import { PageShell } from '../components/layout/PageShell'
import { Card } from '../components/ui/Card'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal'
import { resumeData } from '../data/resumeText'
import { cn } from '../lib/cn'

export function Experience() {
    return (
        <PageShell
            title="Experience"
            subtitle="My professional journey and work experiences."
        >
            <div className="space-y-16">
                {/* Working Experiences Section */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple" />
                            Working Experiences
                        </h2>
                    </ScrollReveal>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink" />

                        <StaggerContainer className="space-y-8">
                            {/* Combine both working experiences and personal statement (internship) */}
                            {[...resumeData.personalStatement, ...resumeData.workingExperiences].map((exp, index) => (
                                <StaggerItem key={index}>
                                    <div className="relative pl-12 md:pl-20">
                                        {/* Timeline dot */}
                                        <motion.div
                                            className="absolute left-2 md:left-6 top-2 flex h-4 w-4 items-center justify-center"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple shadow-lg shadow-neon-cyan/30" />
                                            <div className="absolute h-6 w-6 rounded-full border-2 border-neon-cyan/30 animate-ping" />
                                        </motion.div>

                                        <Card variant="hud" glow className="p-6">
                                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                                                <div>
                                                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-primary-600 dark:text-neon-cyan font-medium mt-1">
                                                        {exp.company}
                                                    </p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        {exp.location}
                                                    </p>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                                        {exp.period}
                                                    </span>
                                                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
                                                        {exp.duration}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                                                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                                                    {index === 0 ? 'Key Achievements:' : 'Responsibilities:'}
                                                </h4>
                                                <ul className="space-y-3">
                                                    {exp.responsibilities.map((resp, i) => (
                                                        <motion.li
                                                            key={i}
                                                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: i * 0.1 }}
                                                        >
                                                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neon-cyan" />
                                                            <span>{resp}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Show skills only for the Graphic Design internship */}
                                            {index === 0 && (
                                                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                                                    <div className="flex flex-wrap gap-2">
                                                        {['Canva', 'WordPress', 'Wix.com', 'Capcut', 'Adobe Premiere Pro', 'Content Writing'].map((skill) => (
                                                            <span
                                                                key={skill}
                                                                className={cn(
                                                                    'px-2 py-1 rounded-md text-xs',
                                                                    'bg-gray-100 dark:bg-gray-800',
                                                                    'text-gray-600 dark:text-gray-400'
                                                                )}
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </Card>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Experience Summary */}
                <section>
                    <ScrollReveal>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                { value: '7+', label: 'Months Experience', color: 'from-neon-cyan to-neon-purple' },
                                { value: '2', label: 'Positions Held', color: 'from-neon-purple to-neon-pink' },
                                { value: '8+', label: 'Skills Applied', color: 'from-neon-pink to-neon-cyan' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className={cn(
                                        'glass-card p-6 text-center',
                                        'hover:border-neon-cyan/30 transition-colors'
                                    )}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={cn(
                                        'text-4xl font-display font-bold bg-clip-text text-transparent',
                                        `bg-gradient-to-r ${stat.color}`
                                    )}>
                                        {stat.value}
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                        {stat.label}
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
