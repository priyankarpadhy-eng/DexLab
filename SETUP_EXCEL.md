# DexLab Waitlist - Excel Integration Guide

## Overview
The frontend (`index.html`) is ready to collect emails. You have **two options** to save them to Excel:

---

## Option 1: Simple Node.js Backend (Recommended for Quick Setup)

### Step 1: Create a backend directory
```bash
mkdir dexlab-backend
cd dexlab-backend
npm init -y
npm install express cors body-parser xlsx dotenv
```

### Step 2: Create `server.js`
```javascript
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const EXCEL_FILE = path.join(__dirname, 'waitlist.xlsx');

// Initialize Excel file if it doesn't exist
function initializeExcel() {
  if (!fs.existsSync(EXCEL_FILE)) {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([
      ['Email', 'Timestamp', 'Status']
    ]);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Waitlist');
    XLSX.writeFile(workbook, EXCEL_FILE);
  }
}

// API endpoint to save email
app.post('/api/waitlist', (req, res) => {
  try {
    const { email, timestamp } = req.body;
    
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    // Read existing data
    let workbook = XLSX.readFile(EXCEL_FILE);
    let worksheet = workbook.Sheets['Waitlist'];
    let data = XLSX.utils.sheet_to_json(worksheet);

    // Check for duplicates
    const exists = data.some(row => row.Email === email);
    if (exists) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Add new entry
    data.push({
      Email: email,
      Timestamp: timestamp,
      Status: 'Pending'
    });

    // Write back to Excel
    worksheet = XLSX.utils.json_to_sheet(data);
    workbook.Sheets['Waitlist'] = worksheet;
    XLSX.writeFile(workbook, EXCEL_FILE);

    res.json({ success: true, message: 'Email saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve the frontend
app.use(express.static(path.join(__dirname, '../')));

initializeExcel();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📊 Waitlist saved to: ${EXCEL_FILE}`);
});
```

### Step 3: Update frontend to use backend
The `index.html` already sends to `/api/waitlist` - just point it to your backend:

**If running locally:** Already configured for `http://localhost:3000`

**If deploying:** Update the fetch URL in the form handler to your domain:
```javascript
const response = await fetch('https://your-domain.com/api/waitlist', {
```

### Step 4: Run the server
```bash
node server.js
```

Your `waitlist.xlsx` file will be created automatically in the backend directory.

---

## Option 2: Google Sheets Integration (No Backend)

If you don't want to run a server, use Google Sheets + Apps Script:

### Step 1: Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new sheet called "DexLab Waitlist"
3. Add headers: `Email`, `Timestamp`, `Status`

### Step 2: Set up Apps Script
1. Click `Extensions` → `Apps Script`
2. Replace all code with:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const { email, timestamp } = JSON.parse(e.postData.contents);
  
  const data = sheet.getDataRange().getValues();
  const exists = data.some(row => row[0] === email);
  
  if (exists) {
    return ContentService.createTextOutput(JSON.stringify({ error: 'Duplicate' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  sheet.appendRow([email, timestamp, 'Pending']);
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Step 3: Deploy as Web App
1. Click `Deploy` → `New Deployment`
2. Type: `Web app`
3. Execute as: `Me`
4. Who has access: `Anyone`
5. Copy the deployment URL

### Step 4: Update frontend URL
In `index.html`, change the fetch URL to your Apps Script URL:
```javascript
const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
```

---

## Option 3: Use Formspree or Airtable (No Code)

### Formspree (Simplest)
1. Go to [formspree.io](https://formspree.io)
2. Create account and new form
3. Get your form endpoint
4. Update fetch URL in `index.html`

### Airtable
1. Create Airtable workspace
2. Create table with fields: `Email`, `Timestamp`
3. Get API key from account settings
4. Use Airtable API to POST data

---

## Testing Locally

```bash
# Terminal 1: Start backend
cd dexlab-backend
node server.js

# Terminal 2: Open browser
http://localhost:3000
```

Enter an email and click "Join Waitlist" - it will be saved to `waitlist.xlsx`!

---

## Recommended Stack

| Option | Setup Time | Cost | Reliability |
|--------|-----------|------|-------------|
| **Node.js + Excel** | 10 mins | Free | ⭐⭐⭐⭐⭐ |
| **Google Sheets** | 5 mins | Free | ⭐⭐⭐⭐ |
| **Formspree** | 2 mins | Free (basic) | ⭐⭐⭐ |
| **Airtable** | 5 mins | Free (basic) | ⭐⭐⭐⭐⭐ |

**I recommend Option 1 (Node.js)** for full control and automatic Excel generation. Let me know if you need help setting it up!
