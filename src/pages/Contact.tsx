import { motion } from 'framer-motion'
import { PageShell } from '../components/layout/PageShell'
import { Card, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { resumeData } from '../data/resumeText'
import { cn } from '../lib/cn'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Contact() {
    const reducedMotion = useReducedMotion()

    const contactInfo = [
        {
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: 'Address',
            value: resumeData.personal.address,
            href: null,
            color: 'neon-cyan',
        },
        {
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: 'Mobile',
            value: resumeData.personal.mobile,
            href: `tel:${resumeData.personal.mobile}`,
            color: 'neon-purple',
        },
        {
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: 'Email',
            value: resumeData.personal.email,
            href: `mailto:${resumeData.personal.email}`,
            color: 'neon-pink',
        },
    ]

    return (
        <PageShell
            title="Contact"
            subtitle="Let's connect and discuss opportunities."
        >
            <div className="space-y-12">
                {/* Contact Cards */}
                <section>
                    <div className="grid gap-6 md:grid-cols-3">
                        {contactInfo.map((info, index) => (
                            <ScrollReveal key={info.label} delay={index * 0.1}>
                                <Card variant="hud" glow className="p-6 h-full">
                                    <div className="flex flex-col items-center text-center">
                                        <motion.div
                                            className={cn(
                                                'flex h-14 w-14 items-center justify-center rounded-xl mb-4',
                                                info.color === 'neon-cyan' && 'bg-neon-cyan/20 text-neon-cyan',
                                                info.color === 'neon-purple' && 'bg-neon-purple/20 text-neon-purple',
                                                info.color === 'neon-pink' && 'bg-neon-pink/20 text-neon-pink'
                                            )}
                                            whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                                        >
                                            {info.icon}
                                        </motion.div>
                                        <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2">
                                            {info.label}
                                        </h3>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className={cn(
                                                    'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-neon-cyan',
                                                    'transition-colors break-all'
                                                )}
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Contact Form Section */}
                <section>
                    <ScrollReveal>
                        <Card variant="glass" className="p-8">
                            <div className="max-w-2xl mx-auto">
                                <div className="text-center mb-8">
                                    <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Get in Touch
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Feel free to reach out for collaborations or just a friendly hello
                                    </p>
                                </div>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className={cn(
                                                    'w-full px-4 py-3 rounded-lg',
                                                    'bg-white dark:bg-gray-900',
                                                    'border border-gray-300 dark:border-gray-700',
                                                    'text-gray-900 dark:text-white',
                                                    'placeholder-gray-400 dark:placeholder-gray-500',
                                                    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                                                    'transition-colors'
                                                )}
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className={cn(
                                                    'w-full px-4 py-3 rounded-lg',
                                                    'bg-white dark:bg-gray-900',
                                                    'border border-gray-300 dark:border-gray-700',
                                                    'text-gray-900 dark:text-white',
                                                    'placeholder-gray-400 dark:placeholder-gray-500',
                                                    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                                                    'transition-colors'
                                                )}
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className={cn(
                                                'w-full px-4 py-3 rounded-lg',
                                                'bg-white dark:bg-gray-900',
                                                'border border-gray-300 dark:border-gray-700',
                                                'text-gray-900 dark:text-white',
                                                'placeholder-gray-400 dark:placeholder-gray-500',
                                                'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                                                'transition-colors'
                                            )}
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            className={cn(
                                                'w-full px-4 py-3 rounded-lg resize-none',
                                                'bg-white dark:bg-gray-900',
                                                'border border-gray-300 dark:border-gray-700',
                                                'text-gray-900 dark:text-white',
                                                'placeholder-gray-400 dark:placeholder-gray-500',
                                                'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                                                'transition-colors'
                                            )}
                                            placeholder="Your message..."
                                        />
                                    </div>

                                    <div className="text-center">
                                        <Button type="submit" size="lg">
                                            Send Message
                                            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </Card>
                    </ScrollReveal>
                </section>

                {/* Quick Actions */}
                <section>
                    <ScrollReveal>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <a
                                href={`mailto:${resumeData.personal.email}`}
                                className="block"
                            >
                                <Card variant="hud" className="p-6 h-full hover:border-neon-cyan/40 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-cyan/20 text-neon-cyan">
                                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-display font-semibold text-gray-900 dark:text-white">
                                                Email Me Directly
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {resumeData.personal.email}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </a>

                            <a
                                href={`tel:${resumeData.personal.mobile}`}
                                className="block"
                            >
                                <Card variant="hud" className="p-6 h-full hover:border-neon-purple/40 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-purple/20 text-neon-purple">
                                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-display font-semibold text-gray-900 dark:text-white">
                                                Call Me
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {resumeData.personal.mobile}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </PageShell>
    )
}
