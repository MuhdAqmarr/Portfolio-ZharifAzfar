import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'hud'
    glow?: boolean
    children: React.ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', glow = false, children, ...props }, ref) => {
        const reducedMotion = useReducedMotion()

        const variants = {
            default: cn(
                'rounded-2xl border border-gray-200 dark:border-gray-800',
                'bg-white dark:bg-gray-900',
                'shadow-lg shadow-gray-200/50 dark:shadow-black/20'
            ),
            glass: cn(
                'glass-card',
                'bg-white/70 dark:bg-gray-900/70',
                'border border-white/20 dark:border-gray-700/30',
                'backdrop-blur-lg'
            ),
            hud: cn(
                'hud-panel',
                'bg-gray-50/90 dark:bg-gray-900/90',
                'border border-neon-cyan/20'
            ),
        }

        const cardContent = (
            <div
                ref={ref}
                className={cn(
                    'relative overflow-hidden transition-all duration-300',
                    variants[variant],
                    glow && 'glow-border',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        )

        if (reducedMotion || variant === 'hud') {
            return cardContent
        }

        return (
            <motion.div
                whileHover={{
                    scale: 1.01,
                    transition: { type: 'spring', stiffness: 400, damping: 25 },
                }}
                className="h-full"
            >
                {cardContent}
            </motion.div>
        )
    }
)

Card.displayName = 'Card'

// Card sub-components
export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('p-6 pb-0', className)}
            {...props}
        />
    )
)
CardHeader.displayName = 'CardHeader'

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('p-6', className)}
            {...props}
        />
    )
)
CardContent.displayName = 'CardContent'

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn(
                'text-xl font-semibold font-display tracking-tight',
                'text-gray-900 dark:text-white',
                className
            )}
            {...props}
        />
    )
)
CardTitle.displayName = 'CardTitle'
