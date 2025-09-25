#!/usr/bin/env node

const webFeatures = require("web-features");
const fs = require("fs");
const path = require("path");

// Simple CLI scan
const projectPath = process.argv[2] || "./";
console.log(`Scanning project: ${projectPath}\n`);

function scanFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      scanFiles(fullPath);
    } else if (/\.(js|html|css)$/.test(file)) {
      console.log(`Checking: ${fullPath}`);
      // For demo, just list features (replace with real web-features integration)
      console.log("- Example feature: fetch (99% support)");
    }
  });
}

scanFiles(projectPath);

console.log("\nFeatureGuard CLI scan complete.");
