import React from 'react'

function CardComponent({imageUrl, title, description}) {
  return (
    <div className='bg-white w-64 h-72 m-5 shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105'>
      <div className='flex flex-col'>
        <img src={imageUrl} alt="card" />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    </div>
  )
}

export default CardComponent
