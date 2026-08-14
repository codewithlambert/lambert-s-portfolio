# Deploy to Vercel 🚀

## Option 1: Deploy via Vercel CLI (Fastest)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# Deploy to production
vercel --prod
```

That's it! Your site will be live at `https://your-project.vercel.app`

---

## Option 2: Deploy via Vercel Dashboard (Recommended for first deploy)

### Step 1: Push to Git
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. **Import your Git repository** (GitHub/GitLab/Bitbucket)
4. Select your repository

### Step 3: Configure Build Settings
Vercel will auto-detect settings, but verify:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Deploy
Click **"Deploy"** and wait ~2 minutes

---

## Post-Deployment

### Automatic Deployments
Every push to `main` branch will automatically deploy to production!

### Custom Domain
1. Go to **Project Settings → Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `lambert.dev`)
4. Follow DNS configuration instructions

### Environment Variables (if needed)
1. Go to **Project Settings → Environment Variables**
2. Add variables (e.g., `VITE_API_URL`)
3. Redeploy to apply changes

---

## Troubleshooting

### Build fails?
- Check that `npm run build` works locally
- Verify all dependencies are in `package.json`
- Check Node version (use 18+)

### Routes return 404?
- The `vercel.json` file handles SPA routing
- It's already configured in your project ✅

### Images not loading?
- Ensure images are in `public/` folder
- Paths should start with `/` (e.g., `/favicon.png`)

---

## Vercel Features You Get

✅ **Automatic HTTPS**
✅ **Global CDN**
✅ **Automatic deployments** on git push
✅ **Preview deployments** for pull requests
✅ **Edge network** for fast loading worldwide
✅ **Analytics** (optional upgrade)

---

## Quick Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Docs**: https://vercel.com/docs
- **CLI Docs**: https://vercel.com/docs/cli

---

**Estimated deployment time**: 2-3 minutes 🎉
