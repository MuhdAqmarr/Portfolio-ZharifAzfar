import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                accent: {
                    50: '#fdf4ff',
                    100: '#fae8ff',
                    200: '#f5d0fe',
                    300: '#f0abfc',
                    400: '#e879f9',
                    500: '#d946ef',
                    600: '#c026d3',
                    700: '#a21caf',
                    800: '#86198f',
                    900: '#701a75',
                    950: '#4a044e',
                },
                neon: {
                    cyan: '#00f5ff',
                    purple: '#bf00ff',
                    pink: '#ff00a0',
                    green: '#00ff88',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
                'gradient-y': 'gradient-y 15s ease infinite',
                'gradient-xy': 'gradient-xy 15s ease infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'scan': 'scan 8s linear infinite',
                'xp-fill': 'xp-fill 2s ease-out forwards',
            },
            keyframes: {
                'gradient-y': {
                    '0%, 100%': {
                        'background-size': '400% 400%',
                        'background-position': 'center top'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'center center'
                    }
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
                'gradient-xy': {
                    '0%, 100%': {
                        'background-size': '400% 400%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                'glow': {
                    '0%': { 'box-shadow': '0 0 20px rgba(0, 245, 255, 0.3)' },
                    '100%': { 'box-shadow': '0 0 40px rgba(191, 0, 255, 0.5)' }
                },
                'scan': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' }
                },
                'xp-fill': {
                    '0%': { width: '0%' },
                    '100%': { width: 'var(--xp-width, 100%)' }
                }
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}

export default config
