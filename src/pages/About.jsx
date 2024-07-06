import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About Financial Times</h1>
        <p className="mb-4">
          Financial Times is a leading global news organization dedicated to providing high-quality, accurate, and timely financial news and analysis.
        </p>
        <p className="mb-4">
          Founded in 1888, we have a long history of delivering essential information to business leaders, policymakers, and investors worldwide.
        </p>
        <p className="mb-4">
          Our team of experienced journalists and analysts work tirelessly to bring you the most important stories and insights from the world of finance, economics, and business.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;