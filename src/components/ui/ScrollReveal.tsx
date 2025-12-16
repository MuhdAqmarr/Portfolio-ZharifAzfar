import { useRef, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import {
    getScrollRevealVariants,
    staggerContainer,
    staggerItem,
} from '../../lib/motion'

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
    once?: boolean
}

export function ScrollReveal({
    children,
    className,
    delay = 0,
    direction = 'up',
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once, margin: '-100px' })
    const reducedMotion = useReducedMotion()
    const variants = getScrollRevealVariants(reducedMotion)

    const directionOffsets = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
    }

    const offset = directionOffsets[direction]

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                ...(reducedMotion ? {} : offset),
            }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        x: 0,
                    }
                    : {
                        opacity: 0,
                        ...(reducedMotion ? {} : offset),
                    }
            }
            transition={{
                duration: reducedMotion ? 0.2 : 0.6,
                delay,
                ease: [0.4, 0, 0.2, 1],
            }}
        >
            {children}
        </motion.div>
    )
}

interface StaggerContainerProps {
    children: ReactNode
    className?: string
    once?: boolean
}

export function StaggerContainer({
    children,
    className,
    once = true,
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            {children}
        </motion.div>
    )
}

interface StaggerItemProps {
    children: ReactNode
    className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
    return (
        <motion.div className={className} variants={staggerItem}>
            {children}
        </motion.div>
    )
}
