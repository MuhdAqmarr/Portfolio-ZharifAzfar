import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '../lib/cn'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { resumeData } from '../data/resumeText'
import { Button } from '../components/ui/Button'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { getPageVariants } from '../lib/motion'
import { TypewriterEffect } from '../components/ui/TypewriterEffect'
import { PopIn, SlideIn, Hover3D } from '../components/ui/FunScrollAnimations'
import { ScrollingSkills } from '../components/ui/ScrollingSkills'


export function Home() {
    const reducedMotion = useReducedMotion()
    // Explicitly memoize variants to avoid re-calculation on every render
    const pageVariants = getPageVariants(reducedMotion)

    const { scrollY } = useScroll()
    const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0])

    return (
        <motion.div
            className="min-h-screen"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
        >


            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Hero Content */}
                <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                    >
                        {/* Status badge */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
                            }}
                            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 dark:border-neon-cyan/40 bg-cyan-50 dark:bg-neon-cyan/10 px-4 py-2 hover:bg-cyan-100 dark:hover:bg-neon-cyan/20 transition-colors cursor-default"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-600 dark:bg-neon-cyan opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-600 dark:bg-neon-cyan" />
                            </span>
                            <span className="text-sm font-medium text-cyan-700 dark:text-neon-cyan">Open to Opportunities</span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            className={cn(
                                'font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold',
                                'tracking-tight mb-4'
                            )}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
                            }}
                        >
                            <span className="text-gray-900 dark:text-white block sm:inline">Hi, I'm </span>
                            <span className="gradient-text block sm:inline">{resumeData.personal.name.split(' ').slice(0, 2).join(' ')}</span>
                        </motion.h1>

                        <motion.h2
                            className="mt-4 font-display text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            Game Designer • Graphic Designer • Creative Technologist
                        </motion.h2>



                        {/* CTA Buttons */}
                        <motion.div
                            className="mt-10 flex flex-wrap items-center justify-center gap-4"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <Link to="/projects">
                                <Button size="lg" className="shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40 transition-shadow">
                                    View Projects
                                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" size="lg" className="backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
                                    Get in Touch
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ opacity: scrollIndicatorOpacity }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <motion.div
                        animate={reducedMotion ? {} : { y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
                    >
                        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </section>

            {/* Quick Stats Section */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <ScrollReveal>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { label: 'Education', value: 'Bachelor\'s', sublabel: 'CS Multimedia' },
                                { label: 'Experience', value: '7+ Months', sublabel: 'Industry Work' },
                                { label: 'Skills', value: '10+', sublabel: 'Technical Tools' },
                                { label: 'Projects', value: 'VR Fitness', sublabel: 'Final Year' },
                            ].map((stat, index) => (
                                <PopIn key={stat.label} delay={index * 0.1}>
                                    <Hover3D
                                        className={cn(
                                            'hud-panel p-6 text-center shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300',
                                            'hover:border-neon-cyan/40 bg-gradient-to-br from-white/90 via-cyan-50/30 to-purple-50/30 dark:from-gray-900/80 dark:via-gray-900/80 dark:to-cyan-900/20 backdrop-blur-md' // Enhanced bg
                                        )}
                                    >
                                        <div className="font-mono text-xs text-cyan-600 dark:text-neon-cyan mb-2">{stat.label}</div>
                                        <div className="font-display text-3xl font-bold text-gray-900 dark:text-white">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {stat.sublabel}
                                        </div>
                                    </Hover3D>
                                </PopIn>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* About Section - Summary moved here */}
            <section className="py-12 bg-gray-50/50 dark:bg-gray-900/30">
                <div className="mx-auto max-w-4xl px-4">
                    <ScrollReveal>
                        <div className={cn(
                            "hud-panel p-8 md:p-10 relative overflow-hidden group border-none",
                            "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950", // Sleek dark tech gradient
                            "dark:bg-transparent dark:bg-none"
                        )}>
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 p-32 bg-neon-cyan/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                <SlideIn direction="left" className="text-center md:text-left flex-1" delay={0.2}>
                                    <h2 className="font-display text-2xl font-bold text-white dark:text-white mb-4 flex items-center justify-center md:justify-start gap-2">
                                        <span className="w-8 h-[2px] bg-neon-cyan inline-block rounded-full" />
                                        About Me
                                    </h2>
                                    <div className="text-lg text-gray-200 dark:text-gray-400 leading-relaxed text-pretty">
                                        {reducedMotion ? (
                                            <p>{resumeData.summary.replace(/\n/g, " ")}</p>
                                        ) : (
                                            <TypewriterEffect
                                                text={resumeData.summary}
                                                className="leading-relaxed"
                                                speed={15}
                                                delay={0.5} // Wait for slide in
                                            />
                                        )}
                                    </div>
                                    <div className="mt-6 flex justify-center md:justify-start">
                                        <Link to="/resume">
                                            <Button variant="ghost" size="sm" className="group">
                                                Read More
                                                <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Button>
                                        </Link>
                                    </div>
                                </SlideIn>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Skills Preview */}
            <section className="py-20 bg-gray-50/50 dark:bg-gray-900/30">
                <div className="mx-auto max-w-6xl px-4">


                    <ScrollingSkills />

                    <div className="mt-10 text-center">
                        <Link to="/skills">
                            <Button variant="outline">
                                View All Skills
                                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <ScrollReveal>
                        <div className="hud-panel p-8 md:p-12">
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Ready to <span className="gradient-text">Connect</span>?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/contact">
                                    <Button size="lg">
                                        Contact Me
                                    </Button>
                                </Link>
                                <Link to="/resume">
                                    <Button variant="ghost" size="lg">
                                        View Full Resume
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </motion.div>
    )
}
