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
    console.log('✅ Created waitlist.xlsx');
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

    console.log(`📧 New signup: ${email}`);
    res.json({ success: true, message: 'Email saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve the frontend
app.use(express.static(__dirname));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', file: EXCEL_FILE });
});

initializeExcel();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ DexLab Waitlist Server running on http://localhost:${PORT}`);
  console.log(`📊 Waitlist saved to: ${EXCEL_FILE}`);
  console.log(`📝 Open http://localhost:${PORT} in your browser`);
});
