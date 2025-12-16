import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { resumeData } from "../../data/resumeText";

const skills = resumeData.skills.proficiency;

// Icon mapping (Same as before, simplified SVG paths)
const skillIcons: Record<string, React.ReactNode> = {
    'Unity': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-gray-900 dark:text-white">
            <path d="M4.3 9l3.5-2L4.3 5v4zm15.4 0l-3.5-2 3.5-2v4zm-7.7-6l3.5 2-3.5 1.9-3.5-1.9 3.5-2zm-6.4 8.6l1.2 6.6 5.2 3.8v-7l-6.4-3.4zm12.8 0l-6.4 3.4v7l5.2-3.8 1.2-6.6zM11 16.2l-3.5 1.9L4 16.2v-4.5l3.5 2 3.5-2v4.5zm2 0v-4.5l3.5 2 3.5-2v4.5l-3.5 1.9-3.5-1.9z" />
        </svg>
    ),
    'Unreal Engine': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-gray-900 dark:text-white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 15.5c-4.14 0-7.5-3.36-7.5-7.5S12.36 2.5 16.5 2.5 24 5.86 24 10s-3.36 7.5-7.5 7.5z" />
            <text x="12" y="16" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor">U</text>
        </svg>
    ),
    'Construct': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-gray-900 dark:text-white">
            <path d="M12 2l-10 6 10 6 10-6-10-6zm0 12l-10-6v6l10 6 10-6v-6l-10 6z" />
        </svg>
    ),
    'C# Programming': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-32 h-32 text-gray-900 dark:text-white">
            <path d="M16.5 22.5V13.5H7.5V22.5" />
            <text x="12" y="15" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">C#</text>
        </svg>
    ),
    'Canva': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-gray-900 dark:text-white">
            <circle cx="12" cy="12" r="10" className="opacity-20" />
            <text x="12" y="16" fontSize="12" fontWeight="bold" textAnchor="middle" fill="currentColor">Cv</text>
        </svg>
    ),
    'Adobe Premiere Pro': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-gray-900 dark:text-white">
            <rect x="2" y="2" width="20" height="20" rx="4" className="opacity-20" />
            <text x="12" y="16" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor">Pr</text>
        </svg>
    ),
    'Android Studio': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-gray-900 dark:text-white">
            <path d="M17.5 6.5c0 .0-.5 1.5-.5 1.5l2.5 1.5-1.5 2.5c0 0 1.5.5 1.5.5v2.5h-2.5c0 0-.5 1.5-.5 1.5l-2.5-1.5-1.5 2.5c0 0-1.5-.5-1.5-.5v-2.5H8.5c0 0 .5-1.5.5-1.5l-2.5-1.5 1.5-2.5c0 0-1.5-.5-1.5-.5V8.5H6.5c0 0 .5-1.5.5-1.5l2.5-1.5 1.5-2.5v2.5h2.5V3l1.5 2.5z" />
        </svg>
    )
}

const skillData = skills.map((skill, index) => {
    const hue = (index * 360 / skills.length) % 360
    return {
        name: skill,
        hueA: hue,
        hueB: hue + 40,
        icon: skillIcons[skill] || (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-gray-900 dark:text-white">
                <circle cx="12" cy="12" r="8" />
            </svg>
        )
    }
})

// === Matt Perry's Provided Component & Styles (Converted to TSX/Framer Motion) ===

export function ScrollingSkills() {
    return (
        <div style={container} className="relative z-10">
            <div className="text-center mb-20">
                <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Technical <span className="gradient-text">Proficiency</span>
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    Scroll down to explore my skillset
                </p>
            </div>

            {skillData.map((data, i) => (
                <Card i={i} data={data} key={data.name} />
            ))}
        </div>
    )
}

interface CardProps {
    data: typeof skillData[0]
    i: number
}

function Card({ data, i }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(data.hueA)}, ${hue(data.hueB)})`

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} className="opacity-80 dark:opacity-60" />
            <motion.div style={card} variants={cardVariants} className="card bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-gray-700">
                <div className="flex flex-col items-center justify-center h-full gap-4">
                    {data.icon}
                    <div className="text-2xl font-bold text-gray-800 dark:text-white text-center px-4">
                        {data.name}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring" as const,
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    // background will be handled by classNames for dark mode support
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}
