import React from 'react'

function NavBar() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex'>
        <img src='' alt=''/>
      </div>
      <div className='flex'>
        <div className='flex space-x-2'>
            <a className='flex' href="#">Home</a>
            <a className='flex' href="#">About</a>
            <a className='flex' href="#">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
