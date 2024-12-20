import React, { useState } from 'react';
import './../style/Shop.css';

const Shop = () => {
  const [filter, setFilter] = useState('All');

  const artworks = [
    { id: 1, name: 'Sunset Bliss', type: 'Print', price: '$50', image: "/sun.jpg" },
    { id: 2, name: 'Abstract Dreams', type: 'Custom', price: '$20', image: "/abs.jpg" },
    { id: 3, name: 'Ocean Waves', type: 'Print', price: '$70', image: "/ocean.jpg" },
    { id: 4, name: 'Mountain Peaks', type: 'Custom', price: '$250', image: "/peak.jpg" },
  ];

  const filteredArtworks =
    filter === 'All' ? artworks : artworks.filter((art) => art.type === filter);

  return (
    <div className="shop-container">
      <h1 className="shop-title">Shop</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>
          All
        </button>
        <button onClick={() => setFilter('Print')} className={filter === 'Print' ? 'active' : ''}>
          Prints
        </button>
        <button onClick={() => setFilter('Custom')} className={filter === 'Custom' ? 'active' : ''}>
          Custom Art
        </button>
      </div>
      <div className="artwork-grid">
        {filteredArtworks.map((art) => (
          <div className="artwork-card" key={art.id}>
            <img src={art.image} alt={art.name} className="artwork-image" />
            <div className="artwork-details">
              <h2 className="artwork-name">{art.name}</h2>
              <p className="artwork-type">{art.type}</p>
              <p className="artwork-price">{art.price}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
