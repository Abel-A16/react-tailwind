import React from 'react'

function CardComponent({imageUrl, title, description}) {
  return (
    <div className='bg-white w-64 flex-wrap h-72 my-5 mx-auto shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105'>
      <div className='flex flex-col items-start'>
        <img src={imageUrl} alt="card" />
        <h2 className='font-bold underline mx-3 my-2'>{title}</h2>
        <p>{description}</p>
    </div>
    </div>
  )
}

export default CardComponent
