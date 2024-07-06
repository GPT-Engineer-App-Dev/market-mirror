import React from 'react';
import PropTypes from 'prop-types';
import './NewsGrid.css'; // Assuming you will create a CSS file for styling

const NewsGrid = ({ articles }) => {
  return (
    <div className="news-grid">
      {articles.map((article, index) => (
        <div key={index} className="news-item">
          <img src={article.image} alt={article.headline} className="news-image" />
          <h3 className="news-headline">{article.headline}</h3>
          <p className="news-description">{article.description}</p>
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
```

```css
/* src/components/NewsGrid.css */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
}

.news-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.2s;
}

.news-item:hover {
  transform: scale(1.05);
}

.news-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.news-headline {
  font-size: 1.2em;
  margin: 16px;
}

.news-description {
  font-size: 1em;
  margin: 0 16px 16px 16px;
  color: #555;
}