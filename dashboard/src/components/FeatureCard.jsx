import React from 'react';

function FeatureCard({ feature, support, note }) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="font-bold">{feature}</h2>
      <p>Support: {support}%</p>
      <p>{note}</p>
    </div>
  );
}

export default FeatureCard;
