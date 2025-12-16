import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { cn } from "../../lib/cn";

interface TypewriterEffectProps {
    text: string;
    className?: string;
    cursorClassName?: string;
    speed?: number;
    delay?: number;
}

export function TypewriterEffect({
    text,
    className,
    cursorClassName,
    speed = 30,
    delay = 0,
}: TypewriterEffectProps) {
    // Clean up text: replace newlines with spaces and condense multiple spaces
    const cleanText = text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();

    // Split text into words for word-by-word animation option, 
    // but for true typewriter we might want character by character.
    // Let's do character by character for smoother "typing" feel.

    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView && !started) {
            const startTimeout = setTimeout(() => {
                setStarted(true);
            }, delay * 1000);
            return () => clearTimeout(startTimeout);
        }
    }, [isInView, delay, started]);

    useEffect(() => {
        if (!started) return;

        let charIndex = 0;
        const intervalId = setInterval(() => {
            if (charIndex <= cleanText.length) {
                setDisplayedText(cleanText.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [started, cleanText, speed]);

    return (
        <div ref={ref} className={cn("inline-block", className)}>
            <span>{displayedText}</span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block h-[1em] w-[2px] align-middle bg-neon-cyan/80 ml-1",
                    cursorClassName
                )}
            />
        </div>
    );
}

// Word by word reveal variant for a different "fun" feel
export function WordReveal({
    text,
    className,
    delay = 0
}: {
    text: string;
    className?: string;
    delay?: number;
}) {
    const cleanText = text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    const words = cleanText.split(" ");

    // Split into sentences for better grouping? No, words is fine for "fun".

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            // Actually let's do a "pop in" effect
            opacity: 0,
            x: -20,
            y: 10,
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn("flex flex-wrap justify-center", className)}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index} className="mr-[0.25em] mb-1 inline-block">
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
