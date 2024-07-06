import React, { useEffect, useState } from 'react';

const MarketData = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch('https://api.example.com/market-data');
        if (!response.ok) {
          throw new Error('Failed to fetch market data');
        }
        const data = await response.json();
        setMarketData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Market Data</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Current Value</th>
            <th>Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((index) => (
            <tr key={index.name}>
              <td>{index.name}</td>
              <td>{index.currentValue}</td>
              <td>{index.changePercent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketData;