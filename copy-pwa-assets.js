// Script to copy PWA assets to the build output directory
import fs from 'fs';
import path from 'path';

const sourceDir = path.resolve('client/public');
const targetDir = path.resolve('dist/public');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy all files from public directory to the build output
function copyDirectory(source, target) {
  // Create the target directory if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  // Read the source directory
  const files = fs.readdirSync(source);

  // Copy each file/directory
  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    // Check if it's a directory or file
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