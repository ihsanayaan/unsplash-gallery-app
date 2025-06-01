import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";

const ACCESS_KEY = "9Bv4KMrqxbOUg43wcHRg6pZz1i3o4MbxvIFLX6ESfX8";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("Nature");

  useEffect(() => {
    fetchImages(query);
  }, [query]);

  const fetchImages = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${ACCESS_KEY}`
      );
      setImages(response.data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="gallery-container">
      <input
        type="text"
        placeholder="Search Images..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-box"
      />

      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.urls.small} alt={image.alt_description} />
            <a
              href={`${image.links.download}?force=true`}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
