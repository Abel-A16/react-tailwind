import React, { useState, useEffect } from 'react';

function Gallery() {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch the image from Unsplash
  const fetchImage = async () => {
    try {
      // Fetch a random image from Unsplash using the provided access key
      const response = await fetch('https://api.unsplash.com/photos/random?client_id=qJdc4soP7jI7Z3b-gmzXxleEuZMWtk8vhmzUOJFpe_U');
      const data = await response.json();
      setImageUrl(data.urls.regular); // Set the image URL from the API response
      setLoading(false);
    } catch (error) {
      console.error('Error fetching the image:', error);
      setError('Failed to fetch image');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []); // Fetch the image on component mount

  return (
    <div className='my-5'>
      <h1 className='text-4xl opacity-75 font-bold underline underline-offset-4'>Gallery</h1>
      <div className='grid grid-cols-3'>
        {loading ? (
          <p>Loading image...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <img className="transform hover:scale-105 rounded-lg shadow-md" src={imageUrl} alt="Unsplash Random" />
        )}
      </div>
    </div>
  );
}

export default Gallery;
