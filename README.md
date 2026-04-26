# 🥗 NutriTrack — Daily Protein & Calories Tracker

A mobile-first PWA (Progressive Web App) to track your daily protein and calorie intake, with push notification reminders.

---

## 📱 Features
- 🔥 **Calorie & Protein rings** with live progress
- ➕ **Quick-add food presets** + custom meals
- 🔔 **Push notifications** at 8am, 1pm & 7pm
- 🎯 **Custom daily goals**
- 📋 **Full history log**
- 💾 **Data saved locally** (persists between sessions)
- 📴 **Works offline** (Service Worker cache)

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

### Step 1 — Create a GitHub Account
1. Go to **https://github.com**
2. Click **Sign up** and create a free account

---

### Step 2 — Create a New Repository
1. Click the **+** icon (top-right) → **New repository**
2. **Repository name**: `nutritrack` *(or any name you like)*
3. Set to **Public** ✅ *(required for free GitHub Pages)*
4. Check **"Add a README file"** ✅
5. Click **Create repository**

---

### Step 3 — Upload Your Files
1. Open your new repository
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop these 3 files:
   - `index.html`
   - `manifest.json`
   - `sw.js`
4. Scroll down → click **"Commit changes"**

---

### Step 4 — Enable GitHub Pages
1. Go to your repo → click **Settings** (top menu)
2. Scroll down to **"Pages"** (left sidebar)
3. Under **"Source"** → select **"Deploy from a branch"**
4. Branch: **main** | Folder: **/ (root)**
5. Click **Save**

---

### Step 5 — Get Your Live URL 🎉
- Wait **1–2 minutes**
- Refresh the Settings → Pages page
- You'll see: **"Your site is live at https://YOUR-USERNAME.github.io/nutritrack"**
- Open that URL on your phone!

---

## 📲 Install on Your Phone

### Android (Chrome)
1. Open the URL in **Chrome**
2. Tap the **⋮ menu** (top-right)
3. Tap **"Add to Home screen"**
4. Tap **"Add"** → App installs like a native app! ✅

### iPhone (Safari)
1. Open the URL in **Safari** *(must be Safari, not Chrome)*
2. Tap the **Share button** (box with arrow at bottom)
3. Scroll down → tap **"Add to Home Screen"**
4. Tap **"Add"** → App appears on your home screen! ✅

> ⚠️ **Note on Notifications:** Push notifications work fully on Android Chrome. On iPhone, they require iOS 16.4+ and the app must be added to Home Screen first.

---

## 🛠️ Files Explained

| File | Purpose |
|------|---------|
| `index.html` | The entire app (React via CDN, no build needed) |
| `manifest.json` | Makes it installable as a PWA |
| `sw.js` | Service worker for offline support & push notifications |

---

## 🔄 How to Update the App Later

1. Edit the file on your computer
2. Go to your GitHub repo
3. Click the file → click the ✏️ pencil icon → paste new code → **Commit**
4. GitHub Pages auto-updates within 1–2 minutes

---

Made with ❤️ using React + PWA
