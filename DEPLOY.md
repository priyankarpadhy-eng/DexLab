# 🚀 Deployment Guide - DexLab

Choose your platform and follow the steps below.

---

## 1️⃣ Railway (Recommended - Easiest)

### Why Railway?
- ✅ Auto-deploys from GitHub
- ✅ Includes Excel functionality
- ✅ Free tier available
- ✅ Custom domain support
- ✅ One-click setup

### Setup Steps

**Step 1: Push to GitHub**
```bash
git init
git add .
git commit -m "Initial DexLab setup"
git remote add origin https://github.com/YOUR_USERNAME/dexlab.git
git push -u origin main
```

**Step 2: Deploy on Railway**
1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Authorize GitHub & select your repo
5. Railway auto-detects it's Node.js
6. Set `PORT` env variable (if needed)
7. Click "Deploy"

**Step 3: Get Your URL**
- Railway gives you a URL: `https://dexlab-xxxx.railway.app`
- Waitlist saved to Excel in the cloud ✅

**Cost:** Free tier includes plenty. Paid plan starts $5/month.

---

## 2️⃣ Heroku (Classic - Good Alternative)

### Why Heroku?
- ✅ Easy git push deployment
- ✅ Reliable uptime
- ✅ Includes Excel support
- ⚠️ Free tier ending (paid from $7/month)

### Setup Steps

**Step 1: Install Heroku CLI**
```bash
# Windows: Download from https://devcenter.heroku.com/articles/heroku-cli
# Or use: choco install heroku-cli
```

**Step 2: Login & Deploy**
```bash
heroku login
heroku create dexlab-waitlist
git push heroku main
heroku open
```

**Step 3: Check It Works**
- Browser opens to your deployed app
- Submit email → check Excel

**Step 4: View Excel File**
```bash
heroku run "node -e \"console.log(require('fs').readFileSync('waitlist.xlsx', 'base64'))\""
```

---

## 3️⃣ Vercel (Frontend Only - No Backend)

### Why Vercel?
- ✅ Free forever
- ✅ Extremely fast (CDN)
- ✅ Dead simple deployment
- ❌ No backend = no Excel saving

### Setup Steps

**Step 1: Push to GitHub**
```bash
git push origin main
```

**Step 2: Deploy**
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repo
4. Click "Deploy"

**That's it!** Vercel auto-deploys on every push.

---

## 4️⃣ Azure App Service (Enterprise)

### Why Azure?
- ✅ Microsoft enterprise support
- ✅ SQL Database integration
- ✅ Scalable to millions
- ⚠️ More complex setup

### Quick Setup
1. Create Azure account
2. Create "App Service" resource
3. Connect GitHub repo
4. Auto-deploys
5. Add MySQL for production Excel

---

## 5️⃣ DigitalOcean (DIY - Full Control)

### Why DigitalOcean?
- ✅ Full server control
- ✅ Affordable ($5/month)
- ✅ Great documentation
- ⚠️ Manual setup required

### Quick Setup
1. Create Droplet (Ubuntu 22.04)
2. SSH into server
3. Install Node.js: `curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -`
4. Clone repo: `git clone ...`
5. Run: `npm install && npm start`
6. Use PM2 for auto-restart: `npm install -g pm2 && pm2 startup && pm2 start server.js`

---

## 6️⃣ AWS Lambda + S3 (Serverless)

### Why AWS?
- ✅ Pay only for usage
- ✅ Scales automatically
- ✅ AWS free tier available
- ⚠️ Complex setup
- ⚠️ Excel storage needs S3

### Not Recommended For This Project
Better suited for high-traffic apps.

---

## 📊 Comparison Table

| Platform | Setup Time | Cost | Excel Support | Recommendation |
|----------|-----------|------|---------------|-----------------|
| **Railway** | 5 min | Free+$5/mo | ✅ Full | ⭐⭐⭐⭐⭐ Best |
| **Heroku** | 5 min | $7/mo+ | ✅ Full | ⭐⭐⭐⭐ Good |
| **Vercel** | 3 min | Free | ❌ No | ⭐⭐ Frontend only |
| **DigitalOcean** | 20 min | $5/mo+ | ✅ Full | ⭐⭐⭐ DIY option |
| **Azure** | 15 min | $0.013/hr | ✅ Full | ⭐⭐⭐ Enterprise |

---

## 🔧 Environment Variables

Before deploying, set these vars:

```
PORT=3000
EXCEL_FILE=waitlist.xlsx
```

**For Railway:**
1. Project settings → Variables
2. Add `PORT=3000`
3. Redeploy

**For Heroku:**
```bash
heroku config:set PORT=3000
```

---

## 🛡️ Production Checklist

Before going live:

- [ ] Set `NODE_ENV=production`
- [ ] Add rate limiting (prevent spam)
- [ ] Add CAPTCHA (prevent bots)
- [ ] Enable HTTPS (automatic on Railway/Heroku)
- [ ] Add email verification link
- [ ] Implement GDPR consent
- [ ] Set up monitoring/alerts
- [ ] Backup Excel file daily
- [ ] Add error logging (Sentry, LogRocket)
- [ ] Test on mobile/tablet

---

## 📈 Monitoring

### Railway
- Dashboard shows CPU, memory, requests
- Logs visible in real-time

### Heroku
```bash
heroku logs --tail
heroku metrics
```

### Vercel
- Analytics dashboard included
- Email alerts for errors

---

## 🆘 Troubleshooting

**App won't start?**
```bash
# Check logs
heroku logs --tail

# Try local first
npm start
```

**Excel file not saving?**
- Check if `/tmp` directory is writable
- For permanent storage, use cloud storage (S3, GCS, Azure Blob)

**Too slow?**
- Add caching headers
- Use CDN (Railway auto-includes)
- Optimize images (none here ✓)

**Out of memory?**
- Upgrade to paid tier
- Implement pagination for Excel

---

## 💾 Backup Strategy

### Local Machine
```bash
# Download Excel regularly
heroku run "cat waitlist.xlsx" > backup.xlsx
```

### Cloud Storage
1. Upload to Google Drive
2. Or backup to S3
3. Or use GitHub as backup

### Automated Backup
```javascript
// server.js - Add daily backup
setInterval(() => {
  const backup = new Date().toISOString().split('T')[0];
  fs.copyFileSync('waitlist.xlsx', `backups/${backup}.xlsx`);
}, 24 * 60 * 60 * 1000); // Daily
```

---

## 🎯 Recommended Path

1. **Start:** Railway (free tier, easy setup)
2. **Test:** Add some signups, check Excel
3. **Customize:** Edit copy & colors
4. **Share:** Send link to friends
5. **Monitor:** Watch Excel grow
6. **Upgrade:** Move to paid tier if > 1000 signups

---

## 📞 Support

**Railway Help:** https://docs.railway.app  
**Heroku Help:** https://devcenter.heroku.com  
**Vercel Help:** https://vercel.com/docs  

---

**Ready to deploy? Pick Railway and go in 5 minutes!** 🚀
