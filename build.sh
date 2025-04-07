#!/bin/bash

# This script handles the build process for Vercel deployment

# Build client with Vite
echo "Building client..."
npm run build

# Copy PWA assets to the build directory
echo "Copying PWA assets..."
mkdir -p dist/public
cp -r client/public/* dist/public/

echo "Build completed successfully!"
