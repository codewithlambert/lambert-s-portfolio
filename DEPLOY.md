# Deployment Guide

This portfolio is built with **Vite + TanStack Router + React** and can be deployed to various platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- Account on your preferred hosting platform

## Build the Project

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment Options

### 1. Vercel (Recommended)

**Via Vercel CLI:**
```bash
npm install -g vercel
vercel
```

**Via Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy!

### 2. Netlify

**Via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Via Netlify Dashboard:**
1. Go to [netlify.com](https://netlify.com)
2. Import your Git repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### 3. GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`
4. Enable GitHub Pages in repository settings

### 4. Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Pages → Create a project
3. Connect your Git repository
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Deploy!

## Environment Variables

If you need environment variables:
1. Copy `.env.example` to `.env.local`
2. Add your variables
3. Configure them in your hosting platform's dashboard

## Custom Domain

After deployment, you can configure a custom domain in your hosting platform's settings:
- Vercel: Project Settings → Domains
- Netlify: Site settings → Domain management
- Cloudflare: Pages project → Custom domains

## Performance Optimizations

✅ Images are optimized
✅ Code splitting enabled
✅ CSS minified
✅ Tree shaking active
✅ Lazy loading implemented

## Post-Deployment Checklist

- [ ] Test all routes work correctly
- [ ] Verify navigation functions properly
- [ ] Check mobile responsiveness
- [ ] Test loading animations
- [ ] Verify all images load
- [ ] Check custom scrollbar
- [ ] Test marquee animation
- [ ] Verify meta tags for SEO

## Troubleshooting

**404 on refresh:** Make sure your hosting platform is configured for SPA routing (redirects are set up in `vercel.json` and `netlify.toml`)

**Images not loading:** Ensure all images are in the `public/` folder and paths start with `/`

**Build fails:** Run `npm install` to ensure all dependencies are installed

## Support

For issues or questions, check the project README or open an issue in the repository.
