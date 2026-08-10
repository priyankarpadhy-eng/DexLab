# 📝 Google Form Integration Setup

Your landing page is now connected to submit to your Google Form! Follow these steps to complete the setup.

## Step 1: Find Your Email Field Entry ID

Your Google Form uses unique entry IDs for each field. We need to find the ID for the email field.

### Method A: Using Browser Console (Easiest)

1. **Open your Google Form** in a new tab:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLScBVVjWsUoxV2ysXVgJBfcZ8_XKD2v6cScqRKXbEDo2zbv-Dw/viewform
   ```

2. **Right-click** → Select **"Inspect"** (or press `F12`)

3. **Go to the Console tab**

4. **Paste this code** and press Enter:
   ```javascript
   Array.from(document.querySelectorAll('[data-name]')).forEach(el => {
     const name = el.getAttribute('data-name');
     const input = el.querySelector('input, textarea');
     if (input && input.name) {
       console.log(`Field: ${name} → Entry ID: ${input.name}`);
     }
   });
   ```

5. **Look for your email field** in the console output:
   ```
   Field: Email Address → Entry ID: entry.1234567890
   ```

6. **Copy the entry ID** (example: `entry.1234567890`)

### Method B: Manual Inspection

1. Right-click on the **email input field**
2. Click **"Inspect"**
3. Look for: `name="entry.XXXXXXXXX"`
4. Copy the number after `entry.`

---

## Step 2: Update the Code

1. **Open** `index.html` in your text editor

2. **Find this line** (around line 280):
   ```javascript
   formData.append('entry.1234567890', email); // Replace with actual entry ID
   ```

3. **Replace** `entry.1234567890` with your actual entry ID
   
   Example:
   ```javascript
   formData.append('entry.123456789', email);
   ```

4. **Save the file**

---

## Step 3: Test It

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Visit:** http://localhost:3000

3. **Submit test email** from your landing page

4. **Check your Google Form** responses:
   - Open: https://docs.google.com/forms/d/e/1FAIpQLScBVVjWsUoxV2ysXVgJBfcZ8_XKD2v6cScqRKXbEDo2zbv-Dw/edit
   - Click **"Responses"** tab
   - You should see your test email! ✅

---

## How It Works

```
User submits email on DexLab site
         ↓
Frontend sends to Google Form (no backend needed!)
         ↓
Google Form receives response
         ↓
Shows in "Responses" sheet automatically
         ↓
View live spreadsheet anytime
```

**No Excel file needed** - Google automatically tracks all responses!

---

## Finding Entry IDs - Alternative Method

If the console method doesn't work, try this:

1. Open Google Form in edit mode
2. Click on the email field
3. Look at the URL - it shows the field configuration
4. Or use this script to extract all fields:

```javascript
// Paste in console on your Google Form page
fetch('https://docs.google.com/forms/d/e/1FAIpQLScBVVjWsUoxV2ysXVgJBfcZ8_XKD2v6cScqRKXbEDo2zbv-Dw/viewform')
  .then(r => r.text())
  .then(html => {
    const regex = /name="(entry\.\d+)"/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      console.log(match[1]);
    }
  });
```

---

## Troubleshooting

**Q: Form submits but nothing appears in Google Form**
- A: Entry ID might be wrong. Check Step 1 again.

**Q: Getting CORS error**
- A: Normal! Google Forms blocks direct CORS. We use `mode: 'no-cors'` to bypass this. The submission still works.

**Q: Can't find email field entry ID**
- A: Make sure you're inspecting the actual email input field, not a label or container.

**Q: Form shows error message**
- A: Check browser console (F12) for errors. The entry ID might have a typo.

---

## Benefits of Google Forms

✅ **Free** - No backend needed  
✅ **Automatic spreadsheet** - Responses saved automatically  
✅ **Easy sharing** - Share responses with team  
✅ **Built-in analytics** - See response trends  
✅ **Email notifications** - Get notified of new responses  
✅ **Scalable** - Handles unlimited responses  

---

## Complete Example

**If your entry ID is `entry.987654321`:**

Your code should look like:
```javascript
formData.append('entry.987654321', email);
```

Then test and you're done! 🎉

---

## View Responses

**To see all signups:**
1. Go to your form edit page
2. Click **"Responses"** tab
3. See live spreadsheet with all emails
4. Click **"📊" spreadsheet icon** to open full sheet in Google Sheets

---

**Need help?** Check your browser console (F12) for error messages. They'll tell you exactly what went wrong!
