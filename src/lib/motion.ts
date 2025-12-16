import type { Variants } from 'framer-motion'

// Check for reduced motion preference
export const prefersReducedMotion = (): boolean => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Base transition settings
export const baseTransition = {
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1] as const,
}

export const springTransition = {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
}

// Page transition variants
export const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 1, 1],
        },
    },
}

// Reduced motion page variants
export const pageVariantsReduced: Variants = {
    initial: { opacity: 0 },
    enter: {
        opacity: 1,
        transition: { duration: 0.2 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.15 },
    },
}

// Scroll reveal variants
export const scrollRevealVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
}

// Scroll reveal variants - reduced motion
export const scrollRevealVariantsReduced: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
}

// Stagger children
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
}

// Stagger item
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: baseTransition,
    },
}

// Card hover effect
export const cardHoverVariants: Variants = {
    rest: {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
    },
    hover: {
        scale: 1.02,
        transition: springTransition,
    },
}

// Float animation for decorative elements
export const floatVariants: Variants = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

// Glow pulse animation
export const glowPulseVariants: Variants = {
    initial: { opacity: 0.5 },
    animate: {
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

// Get the appropriate variants based on motion preference
export const getPageVariants = (reducedMotion: boolean): Variants =>
    reducedMotion ? pageVariantsReduced : pageVariants

export const getScrollRevealVariants = (reducedMotion: boolean): Variants =>
    reducedMotion ? scrollRevealVariantsReduced : scrollRevealVariants
