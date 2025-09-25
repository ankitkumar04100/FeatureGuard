#!/usr/bin/env node

const { scanProject } = require('./scan');

const targetDir = process.argv[2] || './';
console.log(`Scanning project: ${targetDir}...\n`);

scanProject(targetDir)
  .then(report => {
    console.log('FeatureGuard Report:');
    report.forEach(item => {
      console.log(`- ${item.feature} — ${item.support}% support (${item.note})`);
    });
  })
  .catch(err => console.error('Error scanning project:', err));
