import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ScrollProgress } from '../components/ui/ScrollProgress'
import { LoadingScreen } from '../components/ui/LoadingScreen'
import { ScrollToTop } from '../components/layout/ScrollToTop'

// Lazy load pages for code splitting
const Home = lazy(() => import('../pages/Home').then((m) => ({ default: m.Home })))
const Resume = lazy(() => import('../pages/Resume').then((m) => ({ default: m.Resume })))
const Projects = lazy(() => import('../pages/Projects').then((m) => ({ default: m.Projects })))
const Experience = lazy(() => import('../pages/Experience').then((m) => ({ default: m.Experience })))
const Skills = lazy(() => import('../pages/Skills').then((m) => ({ default: m.Skills })))
const Contact = lazy(() => import('../pages/Contact').then((m) => ({ default: m.Contact })))
const NotFound = lazy(() => import('../pages/NotFound').then((m) => ({ default: m.NotFound })))

// Root layout component
function RootLayout() {
    return (
        <div className="relative min-h-screen flex flex-col">
            <ScrollToTop />
            {/* Animated gradient background */}
            <div className="gradient-bg-animated" />

            {/* Grid overlay */}
            <div className="grid-overlay" />

            {/* Scanline overlay (very subtle) */}
            <div className="scanline-overlay" />



            {/* Scroll progress bar */}
            <ScrollProgress />

            {/* Navigation */}
            <Navbar />

            {/* Main content */}
            <main id="main-content" className="flex-1">
                <AnimatePresence mode="wait">
                    <Suspense fallback={<LoadingScreen />}>
                        <Outlet />
                    </Suspense>
                </AnimatePresence>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

// Create router
export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'resume',
                element: <Resume />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'experience',
                element: <Experience />,
            },
            {
                path: 'skills',
                element: <Skills />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
])
