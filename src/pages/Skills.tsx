import { motion } from 'framer-motion'
import { PageShell } from '../components/layout/PageShell'
import { Card } from '../components/ui/Card'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal'
import { resumeData } from '../data/resumeText'
import { cn } from '../lib/cn'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Skills() {
    const reducedMotion = useReducedMotion()

    return (
        <PageShell
            title="Skills"
            subtitle="Technical proficiencies, soft skills, and language abilities."
        >
            <div className="space-y-16">
                {/* Proficiency Skills */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple" />
                            Proficiency
                        </h2>
                    </ScrollReveal>

                    <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {resumeData.skills.proficiency.map((skill, index) => (
                            <StaggerItem key={skill}>
                                <Card variant="hud" glow className="p-5 h-full">
                                    <div className="flex items-center gap-4">
                                        {/* Skill icon placeholder */}
                                        <div className={cn(
                                            'flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0',
                                            'bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20',
                                            'border border-neon-cyan/20'
                                        )}>
                                            <span className="text-2xl">
                                                {getSkillIcon(skill)}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-display font-semibold text-gray-900 dark:text-white">
                                                {skill}
                                            </h3>
                                            <div className="mt-2 xp-bar">
                                                <motion.div
                                                    className="xp-bar-fill"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${getSkillLevel(skill)}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: reducedMotion ? 0.2 : 1,
                                                        delay: index * 0.05,
                                                        ease: 'easeOut'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Soft Skills */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink" />
                            Soft Skills
                        </h2>
                    </ScrollReveal>

                    <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                        {resumeData.skills.softSkills.map((skill, index) => (
                            <StaggerItem key={skill}>
                                <Card variant="glass" className="p-6 h-full">
                                    <div className="flex items-start gap-4">
                                        <motion.div
                                            className={cn(
                                                'flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0',
                                                'bg-gradient-to-br from-neon-purple to-neon-pink'
                                            )}
                                            whileHover={reducedMotion ? {} : { scale: 1.1 }}
                                        >
                                            <span className="text-white text-lg">{getSoftSkillIcon(index)}</span>
                                        </motion.div>
                                        <div>
                                            <h3 className="font-display font-semibold text-gray-900 dark:text-white">
                                                {skill}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                {getSoftSkillDescription(skill)}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Language Proficiency */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan" />
                            Language Proficiency
                        </h2>
                    </ScrollReveal>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {resumeData.skills.languageProficiency.map((lang, index) => (
                            <ScrollReveal key={lang.language} delay={index * 0.1}>
                                <Card variant="hud" glow className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                'flex h-10 w-10 items-center justify-center rounded-full',
                                                'bg-gradient-to-br from-neon-green/20 to-neon-cyan/20',
                                                'border border-neon-green/20'
                                            )}>
                                                <span className="text-xl">{getLanguageFlag(lang.language)}</span>
                                            </div>
                                            <h3 className="font-display font-semibold text-gray-900 dark:text-white">
                                                {lang.language}
                                            </h3>
                                        </div>
                                        <span className={cn(
                                            'px-3 py-1 rounded-full text-xs font-mono',
                                            lang.level === 'Excellent'
                                                ? 'bg-neon-green/10 text-neon-green border border-neon-green/30'
                                                : 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30'
                                        )}>
                                            {lang.level}
                                        </span>
                                    </div>

                                    {/* Language proficiency bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-mono text-gray-500 dark:text-gray-400">
                                            <span>PROFICIENCY</span>
                                            <span>{lang.level === 'Excellent' ? '95%' : '70%'}</span>
                                        </div>
                                        <div className="xp-bar h-2">
                                            <motion.div
                                                className="xp-bar-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: lang.level === 'Excellent' ? '95%' : '70%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: reducedMotion ? 0.2 : 1.2, ease: 'easeOut' }}
                                            />
                                        </div>
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Skills Summary */}
                <section>
                    <ScrollReveal>
                        <Card variant="glass" className="p-8">
                            <div className="text-center">
                                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    Skills Overview
                                </h3>
                                <div className="flex flex-wrap justify-center gap-6">
                                    {[
                                        { label: 'Technical Skills', count: resumeData.skills.proficiency.length, color: 'neon-cyan' },
                                        { label: 'Soft Skills', count: resumeData.skills.softSkills.length, color: 'neon-purple' },
                                        { label: 'Languages', count: resumeData.skills.languageProficiency.length, color: 'neon-green' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center">
                                            <motion.div
                                                className={cn(
                                                    'text-4xl font-display font-bold',
                                                    stat.color === 'neon-cyan' && 'text-neon-cyan',
                                                    stat.color === 'neon-purple' && 'text-neon-purple',
                                                    stat.color === 'neon-green' && 'text-neon-green'
                                                )}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                            >
                                                {stat.count}
                                            </motion.div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>
                </section>
            </div>
        </PageShell>
    )
}

// Helper functions
function getSkillIcon(skill: string): string {
    const icons: Record<string, string> = {
        'Unity': '🎮',
        'Unreal Engine': '⚡',
        'Construct': '🔧',
        'C# Programming': '💻',
        'Canva': '🎨',
        'Adobe Premiere Pro': '🎬',
        'Android Studio': '📱',
    }
    return icons[skill] || '🛠️'
}

function getSkillLevel(skill: string): number {
    const levels: Record<string, number> = {
        'Unity': 85,
        'Unreal Engine': 75,
        'Construct': 80,
        'C# Programming': 80,
        'Canva': 90,
        'Adobe Premiere Pro': 85,
        'Android Studio': 70,
    }
    return levels[skill] || 75
}

function getSoftSkillIcon(index: number): string {
    const icons = ['🔍', '💬', '🔄', '🤝']
    return icons[index] || '⭐'
}

function getSoftSkillDescription(skill: string): string {
    const descriptions: Record<string, string> = {
        'Root Cause Analysis': 'Identifying underlying issues to solve problems effectively',
        'Effective Communication': 'Clear and concise interaction with team members and stakeholders',
        'Adaptability': 'Quick adjustment to new environments and challenges',
        'Supportive and Flexible in Team': 'Collaborative approach with willingness to help team succeed',
    }
    return descriptions[skill] || ''
}

function getLanguageFlag(language: string): string {
    const flags: Record<string, string> = {
        'Bahasa Malaysia': '🇲🇾',
        'English': '🇬🇧',
    }
    return flags[language] || '🌐'
}
