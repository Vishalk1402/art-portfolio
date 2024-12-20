import React from "react";
import "./../style/imagecard.css";

const ImageCard = ({ image }) => {
  return (
    <div className="image-tilt">
      <div className="image-card">
        <img src={image.image} alt={image.title} className="image" />
        <div className="image-overlay">
          <h3 className="image-title">{image.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
