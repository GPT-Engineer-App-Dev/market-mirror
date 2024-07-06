import React from 'react';
import NewsGrid from '../components/NewsGrid';
import MarketData from '../components/MarketData';
import Sidebar from '../components/Sidebar';

const Index = () => {
  // Mock data for demonstration
  const articles = [
    {
      image: '/placeholder.svg',
      headline: 'Global Markets Rally on Economic Recovery Hopes',
      description: 'Stock markets worldwide show strong gains as countries ease lockdown measures.'
    },
    {
      image: '/placeholder.svg',
      headline: 'Tech Giants Face New Antitrust Scrutiny',
      description: 'Regulators launch investigations into major technology companies over competition concerns.'
    },
    {
      image: '/placeholder.svg',
      headline: 'Central Banks Consider Digital Currencies',
      description: 'Several countries explore the possibility of launching their own digital currencies.'
    },
    // Add more articles as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <h1 className="text-3xl font-bold mb-6">Latest Financial News</h1>
          <MarketData />
          <div className="my-8">
            <NewsGrid articles={articles} />
          </div>
        </div>
        <aside className="lg:w-1/4">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default Index;