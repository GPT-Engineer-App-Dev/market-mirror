import React from 'react';

const Index = () => {
  return (
    <div className="container mx-auto">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-4xl">Financial News</h1>
      </header>
      <div className="flex">
        <main className="flex-1 p-4">
          <h2 className="text-2xl mb-4">Latest News</h2>
          {/* Main content goes here */}
        </main>
        <aside className="w-1/4 p-4 bg-gray-100">
          <h2 className="text-xl mb-4">Sidebar</h2>
          {/* Sidebar content goes here */}
        </aside>
      </div>
      <footer className="bg-blue-500 text-white p-4 text-center">
        <p>&copy; 2023 Financial News. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
