import React from 'react';
import './../style/Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Journey of My Latest Artwork',
      date: 'December 1, 2024',
      excerpt: 'Discover the process behind my latest painting and the inspiration that fueled it.',
      image: '/B1.jpg',
    },
    {
      id: 2,
      title: '5 Tips for Aspiring Artists',
      date: 'November 25, 2024',
      excerpt: 'Learn practical tips to enhance your art skills and grow as an artist.',
      image: 'B2.jpg',
    },
    {
      id: 3,
      title: 'Behind the Scenes: Setting Up an Exhibition',
      date: 'November 15, 2024',
      excerpt: 'A sneak peek into the preparations for my recent gallery exhibition.',
      image: 'B3.jpg',
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-header">Blog & Updates</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <button className="blog-button">Read More</button>
            </div>
          </div>
        )
        )
        }
      </div>
    </div>
  );
};

export default Blog;
