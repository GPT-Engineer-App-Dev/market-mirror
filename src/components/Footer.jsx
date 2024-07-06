```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Assuming you have some basic styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about-us">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
      </div>
      <div className="footer-social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
```

Note: This implementation assumes you have FontAwesome or a similar library for the social media icons and a CSS file for basic styling. If you don't have FontAwesome, you can replace the `<i>` tags with appropriate `<img>` tags or other icon libraries.