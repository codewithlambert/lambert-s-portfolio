# lambert. — Portfolio

A premium minimalist portfolio website built with modern web technologies.

## 🎨 Design Philosophy

- **Pure Black Background** (#000000) - No gradients, no bright colors
- **Minimal UI** - Clean, quiet, and controlled design
- **Spider-Themed Identity** - Subtle spider elements for visual depth
- **Typography** - Space Grotesk for headings, Inter for body text
- **Lowercase Aesthetic** - Selectively applied for modern feel

## 🚀 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: TanStack Router
- **Styling**: TailwindCSS
- **State Management**: TanStack Query
- **Animations**: Framer Motion + Custom CSS
- **Icons**: Hugeicons React
- **Language**: TypeScript

## ✨ Features

- 🕷️ Spider loading animation
- 📱 Fully responsive (mobile & desktop)
- 🎭 Smooth page transitions
- 🎯 Floating pill navbar (desktop)
- 📊 Tech stack marquee
- 🎨 Custom scrollbar
- ⌨️ Typewriter effect on headings
- 🔄 Swinging spider animation
- 🎪 Bottom navigation (mobile)
- 🌓 Dark theme optimized

## 📁 Project Structure

```
lambert-portfolio/
├── public/              # Static assets
│   ├── favicon.png
│   ├── spider-*.png/jpg
│   └── shot-*.png/jpg   # Project screenshots
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.tsx
│   │   ├── SpiderLoader.tsx
│   │   ├── TechStackMarquee.tsx
│   │   ├── SpiderMark.tsx
│   │   └── SpiderWeb.tsx
│   ├── routes/          # Page routes
│   │   ├── __root.tsx
│   │   ├── index.tsx    # Home page
│   │   ├── work.tsx     # Projects listing
│   │   ├── work.$projectId.tsx  # Project details
│   │   ├── about.tsx
│   │   └── contact.tsx
│   ├── lib/             # Utilities and config
│   ├── styles.css       # Global styles
│   ├── main.tsx         # App entry point
│   └── router.tsx       # Router configuration
├── index.html
├── vite.config.ts
└── tailwind.config.js
```

## 🛠️ Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run test     # Run tests
```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory ready for deployment.

## 🚢 Deployment

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions for:
- Vercel (Recommended)
- Netlify
- Cloudflare Pages
- GitHub Pages

Quick deploy to Vercel:
```bash
npm install -g vercel
vercel
```

## 🎯 Routes

- `/` - Home page with hero, featured work, and about section
- `/work` - All projects grid
- `/work/:projectId` - Individual project details
- `/about` - About page
- `/contact` - Contact information and form

## 🔧 Configuration

### Adding New Projects

Edit `src/routes/index.tsx` and `src/routes/work.tsx`:

```typescript
const PROJECTS = [
  {
    title: "project name",
    desc: "project description",
    img: "/shot-project.png",
    projectId: "project-id",
  },
];
```

### Customizing Colors

Edit `src/styles.css`:

```css
:root {
  --background: 0 0% 0%;
  --foreground: 0 0% 98%;
  --card: 0 0% 5%;
  --border: 0 0% 10%;
  --muted-foreground: 0 0% 62%;
}
```

### Tech Stack Marquee

Edit `src/components/TechStackMarquee.tsx`:

```typescript
const stacks = ["React", "TypeScript", "..."];
```

## 📄 License

© 2026 lambert. All rights reserved.

## 🤝 Contact

- Email: igweajurijosph@gmail.com
- Twitter: [@_yk_lambert](https://twitter.com/_yk_lambert)
- GitHub: [codewithlambert](https://github.com/codewithlambert)

---

**Built with ❤️ and silence.**
