import React from 'react'

function NavBar() {
  return (
    <div className='flex flex-row justify-between items-center'>
      <div className='flex'>
        <img src='../logo.webp' width={45} height={45} alt=''/>
      </div>
      <div className='flex justify-between md:hidden'>
        
            <a className='flex' href="http">Home</a>
            <a className='flex' href="#dfg">About</a>
            <a className='flex' href="#dfv">Service</a>
            <a className='flex' href="#df">Contact</a>
        
      </div>
    </div>
  )
}

export default NavBar
