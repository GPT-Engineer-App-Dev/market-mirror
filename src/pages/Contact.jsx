import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4">
          We value your feedback and inquiries. Please feel free to reach out to us using the contact information below.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">General Inquiries</h2>
          <p>Email: info@financialtimes.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Subscription Support</h2>
          <p>Email: support@financialtimes.com</p>
          <p>Phone: +1 (555) 987-6543</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>Financial Times Headquarters</p>
          <p>123 Finance Street</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;