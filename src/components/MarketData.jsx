import React from 'react';

const MarketData = () => {
  // Mock data for demonstration
  const marketIndices = [
    { name: 'S&P 500', value: '4,185.47', change: '+0.75%' },
    { name: 'Dow Jones', value: '33,875.40', change: '+0.89%' },
    { name: 'NASDAQ', value: '14,026.16', change: '+0.51%' },
    { name: 'FTSE 100', value: '7,019.53', change: '+0.52%' },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">Market Data</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {marketIndices.map((index, i) => (
          <div key={i} className="text-center">
            <h3 className="font-medium">{index.name}</h3>
            <p className="text-lg">{index.value}</p>
            <p className={`text-sm ${index.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {index.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketData;