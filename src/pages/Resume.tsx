import { PageShell } from '../components/layout/PageShell'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal'
import { Button } from '../components/ui/Button'
import { resumeData } from '../data/resumeText'
import { cn } from '../lib/cn'

export function Resume() {
    return (
        <PageShell
            title="Resume"
            subtitle="My academic background, professional experience, and qualifications."
        >
            {/* Download Resume Button */}
            <div className="flex justify-end -mt-8 mb-8">
                <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                        // Create a link to download the resume PDF
                        const link = document.createElement('a');
                        link.href = '/resume.pdf'; // You'll need to add your resume PDF to the public folder
                        link.download = 'Zharif_Azfar_Resume.pdf';
                        link.click();
                    }}
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                </Button>
            </div>

            <div className="space-y-12">
                {/* Summary Section */}
                <ScrollReveal>
                    <Card variant="glass" className="overflow-hidden">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple text-white text-sm">
                                    📋
                                </span>
                                Profile Summary
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                {resumeData.summary}
                            </p>
                        </CardContent>
                    </Card>
                </ScrollReveal>

                {/* Education Section */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple" />
                            Education
                        </h2>
                    </ScrollReveal>

                    <StaggerContainer className="space-y-6">
                        {resumeData.education.map((edu, index) => (
                            <StaggerItem key={index}>
                                <Card variant="hud" glow className="p-6">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-primary-600 dark:text-neon-cyan font-medium mt-1">
                                                {edu.institution}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                {edu.cgpa}
                                            </p>

                                            {edu.subjects && edu.subjects.length > 0 && (
                                                <div className="mt-4">
                                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        Among subjects taken:
                                                    </p>
                                                    <ul className="space-y-1">
                                                        {edu.subjects.map((subject, i) => (
                                                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                                                <span className="h-1 w-1 rounded-full bg-neon-cyan" />
                                                                {subject}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                        <div className="lg:text-right">
                                            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                                {edu.period}
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Professional Courses Section */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink" />
                            Professional Courses
                        </h2>
                    </ScrollReveal>

                    <StaggerContainer className="space-y-4">
                        {resumeData.professionalCourses.map((course, index) => (
                            <StaggerItem key={index}>
                                <Card variant="glass" className="p-6">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="font-display font-semibold text-gray-900 dark:text-white">
                                                {course.title}
                                            </h3>
                                            <p className="text-sm text-primary-600 dark:text-neon-cyan mt-1">
                                                {course.provider}, {course.type}
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-400 mt-3 whitespace-pre-line">
                                                {course.description}
                                            </p>
                                        </div>
                                        <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                                            {course.date}
                                        </span>
                                    </div>
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Working Experiences Section */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-cyan to-neon-green" />
                            Working Experiences
                        </h2>
                    </ScrollReveal>

                    <StaggerContainer className="space-y-6">
                        {resumeData.workingExperiences.map((exp, index) => (
                            <StaggerItem key={index}>
                                <Card variant="hud" glow className="p-6">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white">
                                                {exp.role}
                                            </h3>
                                            <p className="text-primary-600 dark:text-neon-cyan font-medium">
                                                {exp.company}, {exp.location}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start lg:items-end gap-1">
                                            <span className="text-sm font-mono text-gray-600 dark:text-gray-400">
                                                {exp.period}
                                            </span>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-neon-cyan/10 text-neon-cyan">
                                                {exp.duration}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neon-cyan" />
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Personal Statement Section */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple" />
                            Personal Statement
                        </h2>
                    </ScrollReveal>

                    <StaggerContainer className="space-y-6">
                        {resumeData.personalStatement.map((exp, index) => (
                            <StaggerItem key={index}>
                                <Card variant="hud" glow className="p-6">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white">
                                                {exp.role}
                                            </h3>
                                            <p className="text-primary-600 dark:text-neon-cyan font-medium">
                                                {exp.company}, {exp.location}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start lg:items-end gap-1">
                                            <span className="text-sm font-mono text-gray-600 dark:text-gray-400">
                                                {exp.period}
                                            </span>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-neon-purple/10 text-neon-purple">
                                                {exp.duration}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neon-purple" />
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Activities Section */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan" />
                            Activities and Involvement
                        </h2>
                    </ScrollReveal>

                    <StaggerContainer className="grid gap-4 md:grid-cols-2">
                        {resumeData.activities.map((activity, index) => (
                            <StaggerItem key={index}>
                                <Card variant="glass" className="p-5 h-full">
                                    <h3 className="font-display font-semibold text-gray-900 dark:text-white">
                                        {activity.title}
                                    </h3>
                                    <p className="text-sm text-primary-600 dark:text-neon-cyan mt-1">
                                        {'organization' in activity ? activity.organization : activity.program}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        {activity.location}
                                    </p>
                                    <p className="text-xs font-mono text-gray-400 mt-2">
                                        {'period' in activity ? activity.period : activity.date}
                                    </p>
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Additional Information */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink" />
                            Additional Information
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <Card variant="glass" className="p-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        'flex h-12 w-12 items-center justify-center rounded-xl',
                                        'bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20'
                                    )}>
                                        <svg className="h-6 w-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Driving License</p>
                                        <p className="font-medium text-gray-900 dark:text-white">{resumeData.additionalInfo.drivingLicense}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        'flex h-12 w-12 items-center justify-center rounded-xl',
                                        'bg-gradient-to-br from-neon-purple/20 to-neon-pink/20'
                                    )}>
                                        <svg className="h-6 w-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Possess Own Transport</p>
                                        <p className="font-medium text-gray-900 dark:text-white">{resumeData.additionalInfo.ownTransport}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>
                </section>
            </div>
        </PageShell>
    )
}
