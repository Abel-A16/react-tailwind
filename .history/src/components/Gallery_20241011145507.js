import React, { useState, useEffect } from 'react';

function Gallery() {
    const [imageUrl, setImageUrl] = useState('');

  // Function to fetch the image
  const fetchImage = async () => {
    try {
      const response = await fetch('https://images.unsplash.com/face-springmorning.jpg');
      const data = await response.json();

      // Assuming the image URL is in data.image or data.url (modify based on actual API structure)
      setImageUrl(data.url);
    } catch (error) {
      console.error('Error fetching the image:', error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []); 
  return (
    <div className='my-5'>
      <h1 className='text-4xl opacity-75 font-bold underline underline-offset-4'>Gallery</h1>
      <div className='grid grid-cols-3'>
      {imageUrl ? (
        <img className="transform hover:scale-105 rounded-lg shadow-md" src={imageUrl} alt="Fetched from API"  />
      ) : (
        <p>Loading image...</p>
      )}
      </div>
    </div>
  )
}

export default Gallery
