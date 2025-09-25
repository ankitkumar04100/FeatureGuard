#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const projectPath = process.argv[2] || "./";
console.log(`\nFeatureGuard CLI Demo Scan: Scanning folder ${projectPath}\n`);

// Safe file scanner
function scanFiles(dir) {
  let files = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    console.warn(`Cannot read directory: ${dir}`);
    return;
  }

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    let stat;
    try {
      stat = fs.lstatSync(fullPath);
    } catch {
      console.warn(`Cannot read file: ${fullPath}`);
      return;
    }

    if (stat.isDirectory()) {
      scanFiles(fullPath);
    } else if (/\.(js|html|css)$/.test(file)) {
      console.log(`Checked: ${fullPath}`);
      console.log("- Feature: fetch (99% support)"); // Demo
    }
  });
}

// Run scan
scanFiles(projectPath);

console.log("\nFeatureGuard CLI demo scan complete.");
