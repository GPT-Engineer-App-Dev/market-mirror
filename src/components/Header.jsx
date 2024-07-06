import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">Financial Times</Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/markets" className="text-gray-600 hover:text-blue-600">Markets</Link>
          <Link to="/companies" className="text-gray-600 hover:text-blue-600">Companies</Link>
          <Link to="/economy" className="text-gray-600 hover:text-blue-600">Economy</Link>
          <Link to="/careers" className="text-gray-600 hover:text-blue-600">Work & Careers</Link>
          <Link to="/life-arts" className="text-gray-600 hover:text-blue-600">Life & Arts</Link>
          <Link to="/opinion" className="text-gray-600 hover:text-blue-600">Opinion</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search..." className="pl-8 pr-2 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <User className="text-gray-600 cursor-pointer" size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;