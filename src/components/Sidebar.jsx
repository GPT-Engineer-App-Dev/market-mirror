import React from 'react';

const Sidebar = () => {
  const trendingTopics = [
    'React Hooks',
    'JavaScript ES6',
    'CSS Grid',
    'Node.js',
    'GraphQL',
  ];

  const handleNewsletterSignup = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    console.log(`Newsletter signup for: ${email}`);
    // Here you would typically handle the signup logic, e.g., send the email to your server
  };

  return (
    <aside className="sidebar">
      <section className="trending-topics">
        <h2>Trending Topics</h2>
        <ul>
          {trendingTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </section>
      <section className="newsletter-signup">
        <h2>Newsletter Signup</h2>
        <form onSubmit={handleNewsletterSignup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">Sign Up</button>
        </form>
      </section>
    </aside>
  );
};

export default Sidebar;