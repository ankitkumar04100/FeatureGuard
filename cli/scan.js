const { generateReport } = require('./reportGenerator');

async function scanProject(dir) {
    // Placeholder: Simulate scanning HTML, CSS, JS
    const features = [
        { feature: 'CSS:gap', support: 92, note: 'partial fallback suggested' },
        { feature: 'HTML:dialog', support: 85, note: 'use polyfill' },
        { feature: 'JS:fetch', support: 99, note: 'safe' }
    ];
    return generateReport(features);
}

module.exports = { scanProject };
