// This script will be executed on Vercel during the build process
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Run the build commands
console.log('Building client...');
execSync('vite build', { stdio: 'inherit' });

console.log('Building server...');
execSync('esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

// Copy PWA assets
console.log('Copying PWA assets...');
const sourceDir = path.resolve('client/public');
const targetDir = path.resolve('dist/public');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy function
function copyDirectory(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = fs.readdirSync(source);

  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

// Execute the copy
try {
  copyDirectory(sourceDir, targetDir);
  console.log('PWA assets copied successfully!');
} catch (error) {
  console.error('Error copying PWA assets:', error);
}

console.log('Build completed successfully!');