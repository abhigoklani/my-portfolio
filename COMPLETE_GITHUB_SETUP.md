# Complete GitHub Setup & Deployment Guide

Follow these steps to push your portfolio to GitHub and deploy it to GitHub Pages.

---

## 🚀 Step 1: Create a GitHub Repository

### Option A: Using GitHub Website (Easiest)

1. Go to [GitHub.com](https://github.com)
2. Click **"+"** icon (top right) → **"New repository"**
3. **Repository name:** Choose one of these:
   - **`your-username.github.io`** (Recommended - Portfolio will be your main site)
   - **`my-portfolio`** (Alternative - Portfolio will be a project site)
4. **Description:** "Professional Portfolio - Software Developer"
5. **Visibility:** Select **"Public"**
6. ✅ **DO NOT** check "Initialize this repository with a README" (we have one)
7. Click **"Create repository"**

### Option B: Using GitHub CLI (If Installed)

```bash
gh repo create my-portfolio --public --source=. --remote=origin --push
```

---

## 📤 Step 2: Push Your Portfolio to GitHub

### 2a. Configure Git (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Replace with your actual name and email!

### 2b. Add Remote and Push

```bash
# Navigate to your portfolio folder
cd /Users/abhismac/Desktop/my_portfolio

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/abhigoklani/my-portfolio.git
git branch -M main
git push -u origin main
```

### ✅ Verify Push Success

Go to `https://github.com/YOUR_USERNAME/my-portfolio` and you should see all your files!

---

## 🌍 Step 3: Deploy to GitHub Pages

### Option 1: Using GitHub Actions (Automated - RECOMMENDED)

GitHub Actions will automatically build and deploy your site on every push.

#### 3a. Create GitHub Actions Workflow

Create this file:
```
.github/workflows/deploy.yml
```

I've already created this for you! Just make sure it exists in your project.

#### 3b. Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
   - This will automatically use the workflow we created

#### 3c. Push and Wait

```bash
git add .
git commit -m "Add GitHub Actions workflow for deployment"
git push
```

Wait 1-2 minutes for the workflow to run.

#### 3d. Check Deployment Status

1. Go to **Actions** tab in your repository
2. You should see a workflow running: "Deploy to GitHub Pages"
3. Wait for the green checkmark ✅

#### 3e. View Your Live Site

1. Go back to **Settings** → **Pages**
2. You'll see your site URL at the top:
   - If repo is `my-portfolio`: `https://YOUR_USERNAME.github.io/my-portfolio`
   - If repo is `YOUR_USERNAME.github.io`: `https://YOUR_USERNAME.github.io`

**Your portfolio is LIVE! 🎉**

---

### Option 2: Manual Deployment (If Actions Fails)

If GitHub Actions doesn't work, use manual deployment:

#### 2a. Build Locally
```bash
cd /Users/abhismac/Desktop/my_portfolio
npm run build
```

#### 2b. Deploy Using ghpages Package
```bash
npm install --save-dev gh-pages
```

#### 2c. Update package.json
Add these lines to `"scripts"`:
```json
"deploy": "npm run build && gh-pages -d out"
```

#### 2d. Deploy
```bash
npm run deploy
```

#### 2e. Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `gh-pages`
   - **Folder:** Select `/ (root)`
3. Click **Save**

---

## 🔧 Step 4: Configure for Your Repository

### If Using `my-portfolio` Repository

You need to update the `basePath` in `next.config.ts`:

```typescript
const basePath = '/my-portfolio';
```

Then push the changes:
```bash
git add .
git commit -m "Configure basePath for GitHub Pages"
git push
```

### If Using `YOUR_USERNAME.github.io` Repository

Keep the default:
```typescript
const basePath = '';
```

---

## ✅ Verification Checklist

Before pushing, make sure:

- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Git configured with your name and email
- [ ] You can see your code on GitHub
- [ ] GitHub Pages is enabled
- [ ] Workflow has run successfully (green checkmark)
- [ ] You can access your live site

---

## 🎯 Full Command Summary

```bash
# 1. Navigate to your portfolio
cd /Users/abhismac/Desktop/my_portfolio

# 2. Configure git (first time only)
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# 3. Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

# 4. Rename branch
git branch -M main

# 5. Push to GitHub
git push -u origin main

# 6. Wait for GitHub Actions to deploy (1-2 minutes)

# 7. Visit your site at:
# https://YOUR_USERNAME.github.io/my-portfolio
```

---

## 🆘 Troubleshooting

### Q: "fatal: remote origin already exists"
**A:** You might have already configured the remote. Run:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
```

### Q: "Please tell me who you are" error
**A:** Configure your git identity:
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Q: Site shows 404 error
**A:** 
- Wait 2-3 minutes for GitHub Pages to deploy
- Check that Settings → Pages shows the correct source
- Verify `basePath` is set correctly for your repo name

### Q: Workflow shows red ❌ error
**A:**
- Check the Actions tab for error details
- Make sure the workflow file exists at `.github/workflows/deploy.yml`
- Try running `npm run build` locally to check for errors

### Q: Changes not showing on live site
**A:**
- Wait 2-3 minutes for redeployment
- Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check the Actions tab to confirm latest push deployed

### Q: Image not showing on live site
**A:**
- Make sure image is in `/public/images/certifications/`
- Check that `imagePath` in `portfolio.ts` matches the actual filename
- Verify `basePath` is correct in `next.config.ts`

---

## 📝 After Deployment

### Update Your Profiles

1. **GitHub Profile:**
   - Add portfolio link to your bio
   - Pin the repository

2. **LinkedIn:**
   - Add portfolio URL to your profile
   - Share the link with your network

3. **Resume:**
   - Add portfolio website URL

### Keep It Updated

Whenever you want to update your portfolio:

```bash
cd /Users/abhismac/Desktop/my_portfolio

# Make your changes (edit files in src/)

# Commit and push
git add .
git commit -m "Update portfolio with new project"
git push
```

The site will automatically redeploy within 2-3 minutes!

---

## 🎉 You're All Set!

Your portfolio is now live on GitHub Pages and will automatically update with every push!

For questions: Check GitHub's [Pages Documentation](https://docs.github.com/en/pages)
