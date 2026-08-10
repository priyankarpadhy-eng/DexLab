/**
 * Run this script in your Google Form's browser console to find entry IDs
 * 
 * Steps:
 * 1. Open your Google Form: https://docs.google.com/forms/d/e/1FAIpQLScBVVjWsUoxV2ysXVgJBfcZ8_XKD2v6cScqRKXbEDo2zbv-Dw/viewform
 * 2. Press F12 (open Developer Tools)
 * 3. Go to Console tab
 * 4. Paste the code below and press Enter
 * 5. Look for the entry ID associated with the email field
 */

// Method 1: Find all entry IDs
console.log("=== ALL FORM FIELDS ===");
const allInputs = document.querySelectorAll('input[name^="entry"], textarea[name^="entry"]');
allInputs.forEach((input, idx) => {
  const label = input.closest('[role="listitem"]')?.textContent || 'Unknown';
  console.log(`Field ${idx + 1}: ${input.name}`);
  console.log(`  Label: ${label.substring(0, 100)}`);
});

// Method 2: Extract from form inspection
console.log("\n=== QUICK LOOKUP ===");
const formContent = document.documentElement.outerHTML;
const regex = /name="(entry\.\d+)"/g;
const entries = new Set();
let match;
while ((match = regex.exec(formContent)) !== null) {
  entries.add(match[1]);
}
console.log("Entry IDs found:");
entries.forEach(entry => console.log(`  - ${entry}`));

// Method 3: Find email-specific field
console.log("\n=== EMAIL FIELD ===");
const emailInputs = document.querySelectorAll('input[type="email"]');
if (emailInputs.length > 0) {
  emailInputs.forEach(input => {
    console.log(`Email field found: ${input.name}`);
  });
} else {
  console.log("No email input found. Check your form structure.");
}

console.log("\n✅ Copy the entry ID (e.g., entry.123456789) to index.html line ~280");
