# 🚀 Vercel Deployment Guide

## Quick Deploy (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js)

## Manual Deploy via CLI

```bash
npm install -g vercel
vercel login
vercel
```

## Environment Variables (if needed)

Add in Vercel Dashboard → Settings → Environment Variables

## Auto-Deploy

Every push to `main` branch automatically deploys to production.

## Custom Domain

Vercel Dashboard → Settings → Domains → Add your domain

---

Your site is ready for deployment! ✅
