# 🚀 Silvina Portfolio

A modern, responsive portfolio website showcasing web development projects and skills. Built with Next.js 16, React 19, and SCSS.

**Live Site**: https://silvina-portfolio.vercel.app

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Component Documentation](#component-documentation)
5. [Getting Started](#getting-started)
6. [Development](#development)
7. [Build & Deployment](#build--deployment)
8. [Scripts](#scripts)

---

## 🎯 Project Overview

**Silvina Portfolio** is a modern, single-page portfolio website that showcases:

- 📝 Professional introduction and background
- 🎨 Featured projects showcase
- 🛠️ Technical skills and tools
- 💬 QA Automation expertise
- 📧 Contact information
- 🎯 Fully responsive design (mobile, tablet, desktop)

---

## 🔧 Tech Stack

| Technology         | Purpose                                    |
| ------------------ | ------------------------------------------ |
| **Next.js 16.2.6** | React framework with SSG & dynamic routing |
| **React 19.2.6**   | UI library & component framework           |
| **SCSS 1.68**      | Advanced styling with variables & mixins   |
| **ESLint 9**       | Code quality & linting                     |
| **Node.js 18+**    | Runtime environment                        |

---

## 📁 Project Structure

```
silvina_portfolio/
│
├── Components/              ← Reusable React components
│   ├── About-Me/            → About section component
│   ├── Banner/              → Banner/hero banner section
│   ├── Contact/             → Contact form/CTA section
│   ├── Footer/              → Footer with links & info
│   ├── Intro/               → Hero introduction section
│   ├── MyProjects/          → Featured projects showcase
│   ├── My_Info/             → Personal information display
│   ├── NavBar/              → Navigation bar
│   ├── Portfolio/           → Full projects portfolio page
│   ├── QA/                  → QA Automation section
│   ├── SideBar/             → Sidebar navigation
│   ├── Skills/              → Technical skills display
│   └── TechTools/           → Tech tools & technologies list
│
├── src/app/
│   ├── page.js              → Home page (/) - Main entry point
│   ├── contact/
│   │   └── page.jsx         → Contact redirect (→ WhatsApp)
│   ├── projects/
│   │   └── page.js          → Projects portfolio page
│   ├── layout.js            → Root layout wrapper
│   ├── globals.scss         → Global styles
│   ├── mixins.scss          → SCSS mixins & utilities
│   ├── icon.js              → Favicon generator (Next.js API)
│   └── opengraph-image.js   → Social media preview image generator
│
├── public/                  ← Static assets
│   └── assets/              → Images, logos, etc.
│
├── package.json             → Dependencies & scripts
├── next.config.mjs          → Next.js configuration
├── eslint.config.js         → ESLint rules
├── jsconfig.json            → JavaScript config
└── README.md                → This file
```

---

## 🧩 Component Documentation

### **NavBar**

- **File**: `Components/NavBar/NavBar.jsx`
- **Purpose**: Main navigation bar with logo and menu links
- **Features**:
  - Logo linking to home
  - Menu items: About, Projects, QA, Skills, Contact
  - Responsive design
  - data-testid attributes for testing

### **Intro**

- **File**: `Components/Intro/Intro.jsx`
- **Purpose**: Hero section with introduction text
- **Features**:
  - Welcome message
  - Call-to-action buttons
  - Hero background styling

### **Banner**

- **File**: `Components/Banner/Banner.jsx`
- **Purpose**: Banner section with key information
- **Features**:
  - Visual banner content
  - Styled content area

### **About-Me**

- **File**: `Components/About-Me/Aboutme.jsx`
- **Purpose**: About section with personal background
- **Features**:
  - Professional biography
  - Skills overview
  - Experience highlights

### **MyProjects**

- **File**: `Components/MyProjects/MyProjects.jsx`
- **Purpose**: Featured projects showcase on home page
- **Features**:
  - Displays top 3-4 featured projects
  - Project cards with images
  - Links to full portfolio
  - "View All" button

### **Portfolio**

- **File**: `Components/Portfolio/Portfolio.jsx`
- **Purpose**: Full projects portfolio page
- **Features**:
  - All projects display
  - Grid layout
  - Project details (title, description, category)
  - Filter/sorting capabilities

### **Skills**

- **File**: `Components/Skills/Skills.jsx`
- **Purpose**: Display technical skills
- **Features**:
  - Programming languages
  - Frameworks & libraries
  - Tools & technologies
  - Social media links

### **TechTools**

- **File**: `Components/TechTools/TechTools.jsx`
- **Purpose**: Display all tech tools and technologies
- **Features**:
  - Tech stack visualization
  - Tool categories
  - Icons/logos

### **QA**

- **File**: `Components/QA/QA.jsx`
- **Purpose**: QA Automation expertise section
- **Features**:
  - QA skills display
  - Testing frameworks info
  - Automation tools

### **Contact**

- **File**: `Components/Contact/ContactEn.jsx`
- **Purpose**: Contact section
- **Features**:
  - Contact form or information
  - Social media links
  - WhatsApp integration

### **Footer**

- **File**: `Components/Footer/Footer.jsx`
- **Purpose**: Footer section
- **Features**:
  - Copyright information
  - Links to social media
  - Quick navigation

### **SideBar**

- **File**: `Components/SideBar/`
- **Purpose**: Sidebar navigation (mobile)
- **Features**:
  - Mobile menu toggle
  - Navigation links
  - Social media links

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** ([Download](https://nodejs.org/))
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SilviStani/silvina_portfolio.git
   cd silvina_portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm --version
   node --version
   ```

---

## 💻 Development

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**Features**:

- Fast refresh on file changes
- Turbopack for instant compilation
- SCSS compilation with hot reload
- ESLint checks on save

### File Structure for Development

- **Add new components**: Create folder in `Components/ComponentName/`
- **Edit styles**: Use SCSS in component folder or `globals.scss`
- **Add pages**: Create folders in `src/app/` (Next.js App Router)
- **Static files**: Add to `public/assets/`

### Common Development Tasks

**Add a new component**:

```
Components/NewComponent/
├── NewComponent.jsx    (main component)
└── NewComponent.scss   (styles)
```

**Add a new page**:

```
src/app/
└── newpage/
    └── page.js         (page component)
```

**Update global styles**:

- Edit `src/app/globals.scss`
- Use SCSS mixins from `src/app/mixins.scss`

---

## 🔨 Build & Deployment

### Build for Production

```bash
npm run build
```

Creates optimized production build in `.next/` folder.

**Build output includes**:

- ✅ 6 routes compiled
- ✅ Static page generation
- ✅ Optimized bundle size
- ✅ Image optimization

### Start Production Server

```bash
npm start
```

Runs the production build locally.

### Deploy to Vercel

**Option 1: Using Vercel CLI**

```bash
npm i -g vercel
vercel
```

**Option 2: GitHub Integration**

1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on every push

**Environment Variables**: (if needed)

- None required for current setup

---

## 📜 Scripts

| Script    | Command         | Purpose                                   |
| --------- | --------------- | ----------------------------------------- |
| **dev**   | `npm run dev`   | Start development server (localhost:3000) |
| **build** | `npm run build` | Create production-optimized build         |
| **start** | `npm start`     | Run production build locally              |
| **lint**  | `npm run lint`  | Run ESLint code quality checks            |

---

## 🎨 Styling Guide

### SCSS Structure

- **Globals**: `src/app/globals.scss` - Global styles, reset, variables
- **Mixins**: `src/app/mixins.scss` - Reusable SCSS mixins
- **Components**: `Components/ComponentName/ComponentName.scss` - Component-specific styles

### Responsive Breakpoints

```scss
Mobile:  < 640px
Tablet:  640px - 1024px
Desktop: > 1024px
```

---

## 🔍 Code Quality

### ESLint

```bash
npm run lint
```

Checks code for style issues and best practices.

### Best Practices

- Use functional components with hooks
- Keep components small and focused
- Use semantic HTML
- Add data-testid attributes for testing
- Follow SCSS naming conventions

---

## 📱 Responsive Design

The portfolio is fully responsive:

- ✅ Mobile-first approach
- ✅ Touch-friendly navigation
- ✅ Optimized images for all devices
- ✅ Flexible grid layouts

Test responsiveness:

```bash
npm run dev
# Open DevTools (F12) → Toggle Device Toolbar
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### SCSS Issues

Ensure SCSS is properly imported in components:

```javascript
import './ComponentName.scss';
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [Web Development Best Practices](https://web.dev)

---

## 📝 License

This project is personal portfolio work. All content © Silvina.

---

## 👤 About the Author

**Silvina** - Full-stack web developer with expertise in:

- Frontend: React, Next.js, SCSS
- Backend: Node.js (if applicable)
- QA Automation: Selenium, testing frameworks
- Web Development best practices

Connect:

- 💼 [LinkedIn](https://linkedin.com/in/silvina)
- 🐙 [GitHub](https://github.com/SilviStani)
- 💬 [WhatsApp](https://wa.me/5491163632288)

---

**Last Updated**: June 2026  
**Next.js Version**: 16.2.6  
**Status**: ✅ Production Ready
