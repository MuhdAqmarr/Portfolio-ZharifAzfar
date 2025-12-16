import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function GameTechBackground() {
    const reducedMotion = useReducedMotion();
    const { scrollY } = useScroll();

    // Parallax effects for shapes
    const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
    const rotate1 = useTransform(scrollY, [0, 1000], [0, 180]);

    // Grid movement
    const gridY = useTransform(scrollY, [0, 1000], [0, 50]);

    if (reducedMotion) return <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950 -z-20" />;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
            {/* Base Background - Opaque to cover global background */}
            <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950 transition-colors duration-500" />

            {/* Cyber Grid - Top Plane (Ceiling) */}
            <motion.div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
                style={{
                    backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.5) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(14, 165, 233, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                    perspective: '1000px',
                    transform: 'perspective(1000px) rotateX(60deg) translateY(-20%) scale(2)',
                    transformOrigin: 'top center',
                    y: gridY
                }}
            />

            {/* Cyber Grid - Bottom Plane (Floor) */}
            <motion.div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
                style={{
                    backgroundImage: `linear-gradient(rgba(191, 0, 255, 0.5) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(191, 0, 255, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                    perspective: '1000px',
                    transform: 'perspective(1000px) rotateX(60deg) translateY(20%) scale(2)',
                    transformOrigin: 'bottom center',
                    y: gridY
                }}
            />

            {/* Glowing Orbs / Ambient Light */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px] mix-blend-screen opacity-50 dark:opacity-30" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] mix-blend-screen opacity-50 dark:opacity-30" />

            {/* Floating Game Primitives (Wireframe Style) */}

            {/* 1. Icosahedron-ish Wireframe */}
            <motion.div
                className="absolute top-[15%] right-[10%] w-48 h-48 opacity-20 dark:opacity-30"
                style={{ y: y1, rotate: rotate1 }}
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
                }}
            >
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-neon-cyan stroke-1">
                    <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" />
                    <line x1="50" y1="5" x2="50" y2="95" />
                    <line x1="95" y1="25" x2="5" y2="75" />
                    <line x1="95" y1="75" x2="5" y2="25" />
                </svg>
            </motion.div>

            {/* 2. Cube Wireframe */}
            <motion.div
                className="absolute bottom-[20%] left-[5%] w-32 h-32 opacity-20 dark:opacity-30"
                style={{ y: y2 }}
                animate={{
                    rotateY: [0, 360],
                    rotateX: [0, 360],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            >
                <div className="w-full h-full border-2 border-neon-purple/50 relative transform-style-3d animate-spin-slow">
                    {/* Simplified CSS Cube representation would be complex here without strict css modules, using SVG instead for reliability */}
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-neon-purple stroke-1">
                        <rect x="25" y="25" width="50" height="50" />
                        <rect x="35" y="15" width="50" height="50" className="opacity-50" />
                        <line x1="25" y1="25" x2="35" y2="15" />
                        <line x1="75" y1="25" x2="85" y2="15" />
                        <line x1="25" y1="75" x2="35" y2="65" />
                        <line x1="75" y1="75" x2="85" y2="65" />
                    </svg>
                </div>
            </motion.div>

            {/* 3. Code/Tech Symbols */}
            <motion.div
                className="absolute top-[40%] left-[20%] text-6xl font-mono font-bold text-gray-900/5 dark:text-white/5"
                animate={{ opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                {"</>"}
            </motion.div>

            <motion.div
                className="absolute bottom-[30%] right-[30%] text-9xl font-display font-bold text-gray-900/5 dark:text-white/5 rotate-12"
                style={{ x: useTransform(scrollY, [0, 1000], [0, 100]) }}
            >
                DESIGN
            </motion.div>

        </div>
    );
}
