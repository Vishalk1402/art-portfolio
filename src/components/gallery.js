import React, { useState } from "react";
import "./../style/gallery.css";
import ImageCard from "./imagecard";

// Example gallery data
const galleryData = [
  { id: 1, title: "Sunset Painting", category: "Painting", image: "/sunset.jpg" },
  { id: 2, title: "Digital Art", category: "Digital", image: "/D-A.jpg" },
  { id: 3, title: "Abstract Art", category: "Abstract", image: "/ab.jpg" },
  { id: 4, title: "Nature Sketch", category: "Sketch", image: "/nature.jpg" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All"
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">My Portfolio</h1>
      <div className="category-filter">
        {["All", "Painting", "Digital", "Abstract", "Sketch"].map((category) => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="image-grid">
        {filteredImages.map((item) => (
          <ImageCard key={item.id} image={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
