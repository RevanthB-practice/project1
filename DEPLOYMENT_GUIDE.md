# RemindMe Deployment Guide

This guide will help you deploy your RemindMe application to Vercel's free tier.

## Prerequisites

- A [Vercel](https://vercel.com/) account (free tier is sufficient)
- Your RemindMe project code (from Replit)

## Deployment Steps

### 1. Export Your Code from Replit

First, you need to download your project from Replit:

1. In Replit, click on the three dots (...) in the files panel
2. Select "Download as zip"
3. Extract the ZIP file to your local machine

### 2. Create a GitHub Repository (Optional but Recommended)

For easier deployment and future updates:

1. Create a new repository on [GitHub](https://github.com)
2. Upload your extracted files to this repository

### 3. Deploy to Vercel

#### Option A: Deploy from GitHub (Recommended)

1. Log in to your Vercel account
2. Click "New Project"
3. Import your GitHub repository
4. Keep all default settings
5. Click "Deploy"

#### Option B: Deploy from Local Files

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Navigate to your project directory in the terminal
3. Run:
   ```
   vercel login
   vercel
   ```
4. Follow the prompts to deploy your project

### 4. Configure Deployment Settings (If Needed)

1. In your Vercel project dashboard, go to "Settings"
2. Under "Build & Development Settings", make sure:
   - Build Command is set to: `./build.sh`
   - Output Directory is set to: `dist`

### 5. Verify Your Deployment

1. Once deployment is complete, Vercel will provide you with a URL (e.g., `your-project.vercel.app`)
2. Visit this URL to ensure your application is working correctly
3. Test the reminder functionality and PWA installation

## PWA Installation on Mobile Devices

### Android

1. Open your deployed app URL in Chrome
2. Tap the three dots menu (⋮)
3. Select "Add to Home screen"
4. Follow the prompts to install the app

### iOS

1. Open your deployed app URL in Safari
2. Tap the Share button (square with an arrow)
3. Scroll down and select "Add to Home Screen"
4. Tap "Add" to confirm

## Troubleshooting

- **API Errors**: Ensure your API paths are configured correctly in `client/src/lib/queryClient.ts`
- **PWA Not Installing**: Check that `manifest.json` and `service-worker.js` are being served correctly
- **Build Failures**: Review the build logs in Vercel for any errors

## Maintenance

To update your deployed application:

1. Make changes to your code
2. If using GitHub, simply push your changes to the repository - Vercel will automatically redeploy
3. If deploying manually, run `vercel` again from your project directory

---

For additional help, visit the [Vercel Documentation](https://vercel.com/docs).