# ✅ DexLab Setup Checklist

## Pre-Setup
- [ ] Node.js installed (check: `node --version`)
- [ ] Terminal/PowerShell open in this folder
- [ ] Text editor ready (VS Code, Sublime, etc.)

---

## Google Form Integration (2 minutes)

### Find Entry ID
- [ ] Open Google Form: https://docs.google.com/forms/d/e/1FAIpQLScBVVjWsUoxV2ysXVgJBfcZ8_XKD2v6cScqRKXbEDo2zbv-Dw/viewform
- [ ] Press F12 (Developer Tools)
- [ ] Go to Console tab
- [ ] Paste the code from HOW_TO_FIND_ENTRY_ID.txt
- [ ] Copy your entry ID (example: entry.123456789)

### Update Code
- [ ] Open index.html in text editor
- [ ] Find line with: `formData.append('entry.1234567890'`
- [ ] Replace `entry.1234567890` with YOUR entry ID
- [ ] Save the file

---

## Run & Test

### Local Setup
- [ ] Run: `npm install` (first time only, takes ~5 min)
- [ ] Run: `npm start`
- [ ] Browser opens to http://localhost:3000

### Test Form
- [ ] Page loads with beautiful animation
- [ ] Enter test email
- [ ] Click "Join Waitlist"
- [ ] See "Welcome aboard! 🎉" message
- [ ] Form clears after success

### Verify in Google Form
- [ ] Go to Google Form edit page
- [ ] Click "Responses" tab
- [ ] See your test email in spreadsheet ✅

---

## Customization (Optional)

### Brand & Copy
- [ ] Edit heading text (line ~278)
- [ ] Edit subheading text (line ~281)
- [ ] Edit badge text (line ~283)
- [ ] Edit footer text (line ~319)

### Colors
- [ ] Change `--hero-base` for background
- [ ] Change `--heading` for text
- [ ] Change button colors
- [ ] Save and refresh to see changes

### Animations
- [ ] Check animation timing (already optimized)
- [ ] Check WebGL fluid speed (already slowed down)

---

## Deployment (When Ready)

### Pre-Deployment Checklist
- [ ] Form works locally
- [ ] Entry ID is correct
- [ ] All customizations done
- [ ] Content is finalized

### Deploy to Internet
- [ ] Choose platform: Railway (recommended) or Heroku
- [ ] Read DEPLOY.md for step-by-step
- [ ] Push to GitHub
- [ ] Connect to deployment platform
- [ ] Get live URL
- [ ] Test on live URL
- [ ] Share link with users

---

## File Structure Verified

```
✅ index.html              Landing page (40KB)
✅ server.js              Backend (no longer needed for Google Form)
✅ package.json           Dependencies
✅ QUICKSTART.txt         Quick start guide
✅ GOOGLE_FORM_QUICK_SETUP.txt
✅ HOW_TO_FIND_ENTRY_ID.txt
✅ GOOGLE_FORM_SETUP.md
✅ DEPLOY.md              Deployment guide
✅ EXCEL_FLOW.md          Data flow (legacy)
✅ find-entry-id.js       Helper script
✅ CHANGES.md             Change log
✅ README.md              Full docs
✅ .env.example           Config template
```

---

## Troubleshooting

### "npm install" fails
- [ ] Check Node.js is installed: `node --version`
- [ ] Try: `npm install --no-save` 
- [ ] Check internet connection

### Form doesn't submit
- [ ] Check entry ID is correct (no typos)
- [ ] Make sure you saved index.html
- [ ] Check browser console (F12) for errors
- [ ] Try submitting again

### Entry ID not found
- [ ] Make sure you're on VIEWFORM page (not edit)
- [ ] Try manual inspection method (right-click → Inspect)
- [ ] See HOW_TO_FIND_ENTRY_ID.txt for alternatives

### Animation too slow/fast
- [ ] Edit config in index.html (around line 200)
- [ ] Adjust: CURL, DENSITY_DISSIPATION, ORBIT_SPEED
- [ ] Save and refresh

### Can't run npm start
- [ ] Close and reopen terminal
- [ ] Make sure you're in the right folder
- [ ] Try: `npm start --verbose` for more info

---

## Success Indicators

✅ **When everything is working:**
- Landing page loads with animation
- Form submits without errors
- "Welcome aboard! 🎉" message appears
- Email shows up in Google Form responses tab
- Can visit http://localhost:3000 any time

---

## Next Steps After Setup

1. **Monitor responses**
   - Check Google Form responses regularly
   - Export data to Excel if needed

2. **Share the link**
   - Deploy to internet
   - Send to friends
   - Post on social media
   - Add to bio links

3. **Grow the waitlist**
   - Promote DexLab features
   - Build community
   - Collect feedback
   - Plan next features

---

## Quality Assurance

### Desktop Testing
- [ ] Chrome: ✓
- [ ] Firefox: ✓
- [ ] Safari: ✓
- [ ] Edge: ✓

### Mobile Testing
- [ ] iPhone Safari: ✓
- [ ] Android Chrome: ✓
- [ ] Landscape mode: ✓
- [ ] Form responsive: ✓

### Form Testing
- [ ] Valid email submits: ✓
- [ ] Invalid email rejected: ✓
- [ ] Duplicate emails: Check
- [ ] Empty submit blocked: ✓
- [ ] Success message shows: ✓

---

## Performance Checklist

- [ ] Page loads in < 2 seconds
- [ ] Animation smooth at 60fps
- [ ] Form submits instantly
- [ ] No console errors
- [ ] Mobile performance good

---

## Documentation

- [ ] Read QUICKSTART.txt ✓
- [ ] Read GOOGLE_FORM_QUICK_SETUP.txt ✓
- [ ] Read HOW_TO_FIND_ENTRY_ID.txt ✓
- [ ] Understand the setup ✓

---

## Final Status

- [ ] Entry ID found and entered
- [ ] Code updated
- [ ] npm start works
- [ ] Form submits successfully
- [ ] Google Form receives data
- [ ] Ready for production! 🚀

---

## Help & Support

**Questions about setup?** → See GOOGLE_FORM_QUICK_SETUP.txt  
**Need detailed guide?** → See GOOGLE_FORM_SETUP.md  
**Can't find entry ID?** → See HOW_TO_FIND_ENTRY_ID.txt  
**Want to deploy?** → See DEPLOY.md  

---

**Once all items are checked, you're fully set up! 🎉**
