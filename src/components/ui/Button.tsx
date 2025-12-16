import React, { forwardRef } from 'react'
import { cn } from '../../lib/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const baseStyles = cn(
            'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'overflow-hidden group'
        )

        const variants = {
            primary: cn(
                'bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink',
                'bg-[length:200%_auto] transition-[background-position] duration-500 hover:bg-[position:100%_center]',
                'text-white shadow-lg shadow-neon-cyan/25',
                'hover:shadow-xl hover:shadow-neon-purple/30 hover:scale-[1.02]',
                'focus-visible:ring-neon-cyan'
            ),
            secondary: cn(
                'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100',
                'hover:bg-gray-200 dark:hover:bg-gray-700',
                'focus-visible:ring-gray-400'
            ),
            ghost: cn(
                'text-gray-700 dark:text-gray-300',
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                'focus-visible:ring-gray-400'
            ),
            outline: cn(
                'border-2 border-primary-500/50 text-primary-600 dark:text-primary-400',
                'hover:bg-primary-500/10 hover:border-primary-500',
                'focus-visible:ring-primary-500'
            ),
        }

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-5 py-2.5 text-base',
            lg: 'px-7 py-3 text-lg',
        }

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {/* Glow effect on hover */}
                {variant === 'primary' && (
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
                )}
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'
