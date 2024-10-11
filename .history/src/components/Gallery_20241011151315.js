import React, { useState, useEffect } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessKey = 'qJdc4soP7jI7Z3b-gmzXxleEuZMWtk8vhmzUOJFpe_U'; // Your Unsplash access key

  // Function to fetch multiple images from Unsplash
  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch 10 images from Unsplash (you can adjust the count)
      const response = await fetch(`https://api.unsplash.com/photos?client_id=${accessKey}&per_page=10`);
      const data = await response.json();
      const imageUrls = data.map((img) => img.urls.regular); // Get the image URLs
      setImages(imageUrls); // Set the state with image URLs
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('Failed to fetch images');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []); // Fetch images on component mount

  return (
    <div className='my-5'>
      <h1 className='text-4xl opacity-75 font-bold underline underline-offset-4'>Gallery</h1>
      <div className='grid grid-cols-3 gap-4'>
        {loading ? (
          <p>Loading images...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          images.map((imageUrl, index) => (
            <img
              key={index}
              className="transform hover:scale-105 rounded-lg shadow-md"
              src={imageUrl}
              alt={`Unsplash Image ${index}`}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Gallery;
