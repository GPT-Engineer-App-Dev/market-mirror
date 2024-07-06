import React from 'react';

const Sidebar = () => {
  const trendingTopics = [
    'Cryptocurrency',
    'Inflation',
    'Green Energy',
    'Tech Stocks',
    'Global Trade',
  ];

  return (
    <aside className="bg-gray-100 p-4 rounded-lg">
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
        <ul className="space-y-2">
          {trendingTopics.map((topic, index) => (
            <li key={index} className="text-blue-600 hover:underline cursor-pointer">{topic}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Newsletter Signup</h2>
        <form onSubmit={(e) => { e.preventDefault(); console.log('Newsletter signup'); }}>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-2 border rounded mb-2"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </section>
    </aside>
  );
};

export default Sidebar;