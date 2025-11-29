---
description: Repository Information Overview
alwaysApply: true
---

# 3D Portfolio Information

## Summary
**3D Portfolio** is a fully functional, responsive portfolio website built with React 18 and Three.js. It showcases interactive 3D graphics and animations to create an engaging personal portfolio experience. The project uses Vite as the build tool and TypeScript for type safety.

## Structure
- **src/**: Application source code
  - **components/**: Organized by atoms (Header), canvas (3D components), layout (Navbar, Loader), sections (Hero, About, Experience, etc.)
  - **assets/**: Images, company logos, tech icons
  - **constants/**: Configuration and styling constants
  - **hoc/**: Higher-order component (SectionWrapper)
  - **utils/**: Helper functions (motion utilities)
  - **types/**: TypeScript type definitions
  - **App.tsx**: Main application component
  - **main.tsx**: React entry point
- **public/**: Static assets including 3D models (desktop_pc, planet in GLTF format), logos
- **Configuration files**: ESLint, Prettier, Tailwind CSS, PostCSS, TypeScript configs

## Language & Runtime
**Language**: TypeScript  
**Version**: TypeScript 5.2.2  
**Target**: ES2020  
**Build System**: Vite 5.0.8  
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- react 18.2.0 – UI library
- react-dom 18.2.0 – DOM rendering
- three 0.161.0 – 3D graphics library
- @react-three/fiber 8.15.16 – React renderer for Three.js
- @react-three/drei 9.99.4 – Helpful utilities for React Three Fiber
- framer-motion 9.0.7 – Animation library
- react-router-dom 6.22.1 – Client-side routing
- react-vertical-timeline-component 3.6.0 – Timeline UI component
- react-parallax-tilt 1.7.212 – Parallax tilt effect
- @emailjs/browser 3.12.1 – Email service integration
- maath 0.10.7 – Math utilities

**Development Dependencies**:
- @types/react 18.2.43 – React type definitions
- @types/react-dom 18.2.17 – React DOM type definitions
- @types/react-vertical-timeline-component 3.3.6 – Timeline component types
- @typescript-eslint/eslint-plugin 6.14.0 – TypeScript ESLint plugin
- @typescript-eslint/parser 6.14.0 – TypeScript parser for ESLint
- @vitejs/plugin-react 4.2.1 – Vite React plugin
- eslint 8.55.0 – Linter
- eslint-config-prettier 9.1.0 – Prettier ESLint config
- eslint-plugin-react-hooks 4.6.0 – React hooks linting
- eslint-plugin-react-refresh 0.4.5 – React refresh linting
- prettier 3.1.1 – Code formatter
- tailwindcss 3.2.6 – Utility-first CSS framework
- autoprefixer 10.4.13 – CSS vendor prefixer
- postcss 8.4.21 – CSS transformation tool

## Build & Installation
```bash
npm install
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run ts:check     # TypeScript type checking
```

**Build Output**: Production build creates optimized assets in the `dist/` directory.

## Configuration Files
- **tsconfig.json**: TypeScript compilation targeting ES2020, React JSX support, strict mode enabled
- **vite.config.js**: Vite configuration with React plugin
- **tailwind.config.cjs**: Tailwind CSS configuration
- **postcss.config.cjs**: PostCSS configuration with Autoprefixer
- **.eslintrc.cjs**: ESLint rules extending recommended config, TypeScript support, React hooks validation
- **.prettierrc.cjs**: Prettier formatting rules

## Main Files & Resources
**Entry Points**:
- **src/main.tsx**: React DOM render entry point
- **index.html**: HTML template

**Key Components**:
- **src/App.tsx**: Main application component
- **src/components/sections/Hero.tsx**: Hero/landing section
- **src/components/canvas/**: 3D canvas components (Ball, Computers, Earth, Stars)
- **src/constants/**: Configuration data and style constants

**3D Assets**:
- **public/desktop_pc/**: Desktop computer 3D model (GLTF format with textures)
- **public/planet/**: Planet 3D model (GLTF format with textures)

