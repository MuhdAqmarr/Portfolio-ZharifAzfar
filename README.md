# Portfolio - Muhammad Zharif Azfar

A production-ready portfolio website for a Game Designer / Graphic Designer built with modern web technologies.

## 🚀 Tech Stack

- **React 19** + **TypeScript** - Modern UI library with type safety
- **Vite** - Lightning-fast build tool
- **React Router DOM v6** - Client-side routing with lazy loading
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animations
- **clsx + tailwind-merge** - Conditional class utilities

## ✨ Features

- 🌙 **Dark/Light Mode** - Theme toggle with system preference detection
- 🎮 **Game-Inspired Design** - XP bars, HUD panels, neon accents
- 🎨 **Gradient Visuals** - Animated backgrounds and glowing effects
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - Semantic HTML, keyboard navigation, reduced motion support
- ⚡ **Performance** - Code splitting, lazy loading, optimized builds
- 🔍 **SEO Optimized** - Meta tags, Open Graph support

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── router.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── PageShell.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── ThemeToggle.tsx
│   │       ├── ScrollProgress.tsx
│   │       ├── LoadingScreen.tsx
│   │       └── ScrollReveal.tsx
│   ├── data/
│   │   └── resumeText.ts
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useScrollProgress.ts
│   │   └── useReducedMotion.ts
│   ├── lib/
│   │   ├── cn.ts
│   │   └── motion.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Resume.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── styles/
│   │   └── globals.css
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, intro, and CTAs |
| `/resume` | Full resume with all sections |
| `/projects` | Final Year Project showcase |
| `/experience` | Working experiences and internship |
| `/skills` | Technical and soft skills |
| `/contact` | Contact information and form |
| `/*` | 404 Not Found page |

## 🎨 Design System

### Colors

- **Primary**: Sky blue gradient palette
- **Accent**: Purple/Pink gradient palette
- **Neon**: Cyan, Purple, Pink, Green accents

### Typography

- **Display**: Outfit (headings)
- **Body**: Inter (text content)
- **Mono**: JetBrains Mono (code/badges)

### Components

- Glass cards with backdrop blur
- HUD-style panels with corner decorations
- XP bar progress indicators
- Gradient glow effects on hover

## 🔧 Configuration

### Theme

Theme is stored in localStorage and defaults to system preference. Toggle using the sun/moon button in the navbar.

### Reduced Motion

Animations are automatically reduced when `prefers-reduced-motion: reduce` is enabled in the user's system settings.

## 📝 License

This project is for personal portfolio use.

---

Built with ❤️ by Muhammad Zharif Azfar
