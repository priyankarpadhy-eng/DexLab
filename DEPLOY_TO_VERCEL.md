# 🚀 Deploy DexLab to Vercel

Get your landing page live at **dexlab.vercel.app** in 5 minutes!

---

## Prerequisites

✅ **GitHub Account** - [Sign up here](https://github.com)  
✅ **Vercel Account** - [Sign up here](https://vercel.com)  
✅ **Git installed** - Check with: `git --version`

---

## Step 1: Push to GitHub

### Initialize Git Repository

Open PowerShell in this folder and run:

```bash
git init
git add .
git commit -m "Initial DexLab landing page"
```

### Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: **dexlab**
3. Description: **DexLab - Master Design Through Practice**
4. Set to **Public**
5. Click **"Create repository"**

### Push to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/dexlab.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign up"** (use GitHub account)
3. Authorize Vercel to access your GitHub

### Import Your Project

1. On Vercel dashboard, click **"New Project"**
2. Find your **dexlab** repository
3. Click **"Import"**

### Configure Project

**Project Name:** `dexlab` (this gives you dexlab.vercel.app)  
**Framework:** Leave as **"Other"**  
**Root Directory:** Leave as **"./"**  
**Build Command:** Leave empty (static site)  
**Output Directory:** Leave empty  

Click **"Deploy"**

---

## Step 3: Get Your URL

After deployment (takes ~2 minutes):

✅ **Your site will be live at:** `https://dexlab.vercel.app`  
✅ **Auto-deploys** on every GitHub push  
✅ **HTTPS enabled** automatically  
✅ **Global CDN** for fast loading  

---

## Step 4: Custom Domain (Optional)

### Get dexlab.vercel.app Subdomain

If the name is available, you'll automatically get:
- `https://dexlab.vercel.app`

If not available, you'll get:
- `https://dexlab-username.vercel.app`
- `https://dexlab-random.vercel.app`

### Use Your Own Domain

1. In Vercel project settings
2. Go to **"Domains"** 
3. Add your custom domain
4. Follow DNS setup instructions

---

## File Structure for Vercel

```
dexlab/
├── index.html           # Main page
├── vercel.json         # Vercel configuration
├── package.json        # Project metadata  
├── .gitignore          # Git ignore rules
└── README.md           # Documentation
```

---

## Vercel Configuration (vercel.json)

```json
{
  "name": "dexlab",
  "version": 2,
  "builds": [
    {
      "src": "index.html", 
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html" 
    }
  ]
}
```

This configuration:
- Serves `index.html` as a static site
- Routes all URLs to the main page
- Optimizes for single-page applications

---

## Environment Variables

For Vercel deployment, no environment variables needed since we're using:
- ✅ Google Forms (no API keys required)
- ✅ Static assets only
- ✅ Client-side JavaScript only

---

## Auto-Deployment

Once connected:

1. **Make changes** to your code
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update landing page"
   git push
   ```
3. **Vercel auto-deploys** in ~1 minute
4. **Live site updates** automatically ✅

---

## Performance Features

Vercel provides automatically:

✅ **Global CDN** - Fast loading worldwide  
✅ **HTTP/2** - Faster connections  
✅ **Gzip compression** - Smaller file sizes  
✅ **Image optimization** - Auto-optimized images  
✅ **Edge caching** - Lightning fast repeat visits  

---

## Monitoring & Analytics

### Vercel Analytics (Free)

1. Go to project settings
2. Enable **"Analytics"**
3. See visitor stats, performance metrics

### Google Analytics (Optional)

Add to `<head>` in index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Troubleshooting

### "Repository not found"
- Check repository is public
- Re-authorize Vercel GitHub access

### "Build failed"  
- Check vercel.json syntax
- Ensure index.html exists

### "Domain already taken"
- Try: dexlab-yourname.vercel.app
- Or use custom domain

### Form not working
- Check Google Form entry ID
- Test locally first: `python -m http.server 3000`

---

## Quick Commands

```bash
# Test locally
python -m http.server 3000
# Visit: http://localhost:3000

# Deploy changes
git add .
git commit -m "Update site"
git push

# Check deployment
# Visit your vercel.app URL
```

---

## Success Checklist

- [ ] GitHub repo created
- [ ] Code pushed to GitHub  
- [ ] Vercel project connected
- [ ] Site deployed successfully
- [ ] URL accessible (dexlab.vercel.app)
- [ ] Form submits to Google Form
- [ ] Mobile responsive
- [ ] Animations working
- [ ] Ready to share! 🚀

---

## Next Steps After Deployment

1. **Test the live site** thoroughly
2. **Share the URL** with friends
3. **Monitor form submissions** in Google Form
4. **Promote on social media**
5. **Collect feedback** and iterate

---

## Support

**Vercel Docs:** https://vercel.com/docs  
**GitHub Help:** https://docs.github.com  
**Need help?** Check the troubleshooting section above  

---

**Ready to deploy? Follow Step 1! 🚀**