const fs = require('fs');
const { createCanvas } = require('canvas');

// Function to draw our app icon
function drawIcon(ctx, size) {
  // Background
  ctx.fillStyle = '#4f46e5';
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, size * 0.15);
  ctx.fill();
  
  // White circle
  ctx.fillStyle = '#ffffff';
  ctx.globalAlpha = 0.85;
  ctx.beginPath();
  ctx.arc(size/2, size/2, size * 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
  
  // Clock outline
  ctx.strokeStyle = '#4f46e5';
  ctx.lineWidth = size * 0.04;
  ctx.beginPath();
  ctx.arc(size/2, size/2, size * 0.3, 0, Math.PI * 2);
  ctx.stroke();
  
  // Clock hands
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(size/2, size/2);
  ctx.lineTo(size/2, size/2 - size * 0.15);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(size/2, size/2);
  ctx.lineTo(size/2 + size * 0.15, size/2 + size * 0.15);
  ctx.stroke();
}

// Create 192x192 icon
const canvas192 = createCanvas(192, 192);
const ctx192 = canvas192.getContext('2d');
drawIcon(ctx192, 192);
fs.writeFileSync('client/public/icons/icon-192x192.png', canvas192.toBuffer());

// Create 512x512 icon
const canvas512 = createCanvas(512, 512);
const ctx512 = canvas512.getContext('2d');
drawIcon(ctx512, 512);
fs.writeFileSync('client/public/icons/icon-512x512.png', canvas512.toBuffer());

console.log('Icons created successfully!');
