import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AnimationProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function PopIn({ children, className, delay = 0 }: AnimationProps) {
    const reducedMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
}

export function SlideIn({ children, className, delay = 0, direction = "left" }: AnimationProps & { direction?: "left" | "right" | "up" | "down" }) {
    const reducedMotion = useReducedMotion();

    const offsets = {
        left: { x: -50, y: 0 },
        right: { x: 50, y: 0 },
        up: { x: 0, y: 50 },
        down: { x: 0, y: -50 },
    };

    return (
        <motion.div
            className={className}
            initial={{ ...offsets[direction], opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
}

export function Hover3D({ children, className }: AnimationProps) {
    return (
        <motion.div
            className={className}
            whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                zIndex: 10
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ perspective: 1000 }}
        >
            {children}
        </motion.div>
    );
}

export function ParallaxText({ children, className, baseVelocity = 100 }: { children: string, className?: string, baseVelocity?: number }) {
    // This requires a more complex setup often wrapping the content multiple times for infinite scroll
    // For now, let's just do a simple subtle parallax move
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, baseVelocity]);

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div style={{ x }}>
                {children}
            </motion.div>
        </div>
    );
}

export function ParallaxItem({ children, className, offset = 50 }: AnimationProps & { offset?: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Smooth out the parallax
    const y = useSpring(
        useTransform(scrollYProgress, [0, 1], [offset, -offset]),
        { stiffness: 400, damping: 90 }
    );

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
}
