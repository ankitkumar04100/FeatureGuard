import React from 'react';
import FeatureCard from './FeatureCard';

const sampleData = [
  { feature: 'CSS:gap', support: 92, note: 'partial fallback suggested' },
  { feature: 'HTML:dialog', support: 85, note: 'use polyfill' },
  { feature: 'JS:fetch', support: 99, note: 'safe' }
];

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {sampleData.map(item => (
        <FeatureCard key={item.feature} feature={item.feature} support={item.support} note={item.note} />
      ))}
    </div>
  );
}

export default Dashboard;
