import React from 'react'

function CardComponent({imageUrl, title, description}) {
  return (
    <div className='bg-white w-60 flex-wrap h-80 my-5 mx-2 shadow-md rounded-lg overflow-hidden duration-700  hover:scale-105'>
      <div className='flex flex-col items-start'>
        <img src={imageUrl} alt="card" />
        <h2 className='font-bold underline mx-3 my-2'>{title}</h2>
        <p className='items-start px-1'>{description}</p>
    </div>
    </div>
  )
}

export default CardComponent
