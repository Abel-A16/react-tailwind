import React from 'react';

function CardComponent({ imageUrl, title, description }) {
  return (
    <div className='bg-white w-full flex items-center sm:w-72 md:w-80 lg:w-96 h-auto my-5 mx-auto shadow-md rounded-lg overflow-hidden duration-700 hover:scale-105'>
      <div className='flex flex-col items-start'>
        <img 
          src={imageUrl} 
          alt="card" 
          className='w-full h-48 object-cover' // Ensuring the image covers its container responsively
        />
        <h2 className='font-bold underline mx-3 my-2 text-lg sm:text-xl md:text-2xl'>{title}</h2>
        <p className='items-start px-3 text-sm md:text-base lg:text-lg'>{description}</p>
      </div>
    </div>
  );
}

export default CardComponent;
