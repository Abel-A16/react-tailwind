import React from 'react'

function CardComponent({imageUrl, title, description}) {
  return (
    <div className='bg-white w-80 flex-wrap h-72 m-5 shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105'>
      <div className='flex w-72 h-64 flex-col items-start'>
        <img className='w-72' src={imageUrl} alt="card" />
        <h2 className='font-bold underline mx-3 my-3'>{title}</h2>
        <p>{description}</p>
    </div>
    </div>
  )
}

export default CardComponent
