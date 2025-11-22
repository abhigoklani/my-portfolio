# 🚀 Quick Start - Push to GitHub in 5 Steps

Copy and paste these commands one by one!

---

## Step 1: Configure Git (First Time Only)

```bash
git config --global user.name "Abhishek Goklani"
git config --global user.email "abhishekgoklani0@gmail.com"
```

---

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Fill in:
   - **Repository name:** `my-portfolio` (or `abhigoklani.github.io`)
   - **Description:** Professional Portfolio
   - **Visibility:** Public
3. **DO NOT** check "Initialize with README"
4. Click **Create repository**

---

## Step 3: Copy Your GitHub Repo URL

After creating, you'll see something like:
```
https://github.com/abhigoklani/my-portfolio.git
```

Keep this handy!

---

## Step 4: Push Your Code to GitHub

```bash
cd /Users/abhismac/Desktop/my_portfolio
git remote add origin https://github.com/abhigoklani/my-portfolio.git
git branch -M main
git push -u origin main
```

**Replace `abhigoklani` with YOUR actual GitHub username!**

---

## Step 5: Enable GitHub Pages

1. Go to: `https://github.com/YOUR_USERNAME/my-portfolio`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
5. Wait 1-2 minutes

---

## ✅ Your Site is Live!

Visit: `https://YOUR_USERNAME.github.io/my-portfolio`

Replace `YOUR_USERNAME` with your actual GitHub username!

---

## 📋 Complete Commands (Copy All at Once)

```bash
cd /Users/abhismac/Desktop/my_portfolio
git config --global user.name "Abhishek Goklani"
git config --global user.email "abhishekgoklani0@gmail.com"
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

**Just replace `YOUR_USERNAME` with your GitHub username!**

---

## 🎯 What Happens Automatically

✅ GitHub Actions builds your site  
✅ Deploys to GitHub Pages  
✅ Your portfolio goes live  
✅ Updates automatically with every push  

---

## 💡 Pro Tips

- **Update portfolio?** Just edit files and run:
  ```bash
  git add .
  git commit -m "Update portfolio"
  git push
  ```

- **Add new certification?** Upload image to `/public/images/certifications/` and update `src/data/portfolio.ts`

- **Need help?** See `COMPLETE_GITHUB_SETUP.md` for detailed guide

---

**That's it! You're done! 🎉**
