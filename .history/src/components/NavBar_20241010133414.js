import React from 'react'

function NavBar() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex'>
        <img src='' alt=''/>
      </div>
      <div className='flex justify-between md:hidden'>
        
            <link className='flex' href="#">Home</link>
            <a className='flex' href="#">About</a>
            <a className='flex' href="#">Service</a>
            <a className='flex' href="#">Contact</a>
        
      </div>
    </div>
  )
}

export default NavBar
