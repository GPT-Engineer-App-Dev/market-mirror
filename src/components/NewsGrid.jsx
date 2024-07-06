import React from 'react';
import PropTypes from 'prop-types';

const NewsGrid = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img src={article.image} alt={article.headline} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{article.headline}</h3>
            <p className="text-gray-600">{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

NewsGrid.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewsGrid;