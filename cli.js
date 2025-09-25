#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Minimal demo CLI scan
const projectPath = process.argv[2] || "./";
console.log(`\nScanning project: ${projectPath}\n`);

function scanFiles(dir) {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (err) {
    console.error(`Cannot read directory: ${dir}`);
    return;
  }

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    let stat;
    try {
      stat = fs.lstatSync(fullPath);
    } catch (err) {
      console.error(`Cannot read file: ${fullPath}`);
      return;
    }

    if (stat.isDirectory()) {
      scanFiles(fullPath);
    } else if (/\.(js|html|css)$/.test(file)) {
      console.log(`Checking: ${fullPath}`);
      // Demo: Replace this with real web-features logic
      console.log("- Example feature: fetch (99% support)");
    }
  });
}

scanFiles(projectPath);

console.log("\nFeatureGuard CLI scan complete.");
