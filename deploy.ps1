# DexLab Deployment Script for Vercel

Write-Host "🚀 DexLab Vercel Deployment" -ForegroundColor Green
Write-Host "=========================" -ForegroundColor Green

# Check if git is initialized
if (!(Test-Path ".git")) {
    Write-Host "📁 Initializing Git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial DexLab landing page"
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "📁 Git repository already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "🌐 NEXT STEPS:" -ForegroundColor Cyan
Write-Host "1. Create GitHub repository: https://github.com/new" -ForegroundColor White
Write-Host "   - Repository name: dexlab" -ForegroundColor White
Write-Host "   - Description: DexLab - Master Design Through Practice" -ForegroundColor White
Write-Host "   - Set to Public" -ForegroundColor White

Write-Host ""
Write-Host "2. Push to GitHub (replace YOUR_USERNAME):" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/dexlab.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray

Write-Host ""
Write-Host "3. Deploy to Vercel:" -ForegroundColor White
Write-Host "   - Go to: https://vercel.com" -ForegroundColor Gray
Write-Host "   - Sign up with GitHub" -ForegroundColor Gray
Write-Host "   - Click 'New Project'" -ForegroundColor Gray
Write-Host "   - Import 'dexlab' repository" -ForegroundColor Gray
Write-Host "   - Click 'Deploy'" -ForegroundColor Gray

Write-Host ""
Write-Host "🎯 YOUR SITE WILL BE LIVE AT:" -ForegroundColor Green
Write-Host "   https://dexlab.vercel.app" -ForegroundColor White
Write-Host "   (or similar if name is taken)" -ForegroundColor Gray

Write-Host ""
Write-Host "📚 Need help? Read: DEPLOY_TO_VERCEL.md" -ForegroundColor Yellow

Write-Host ""
Write-Host "✨ Files ready for deployment:" -ForegroundColor Cyan
Get-ChildItem -Name | Where-Object { $_ -match "\.(html|json|md)$" } | ForEach-Object {
    Write-Host "   ✓ $_" -ForegroundColor White
}