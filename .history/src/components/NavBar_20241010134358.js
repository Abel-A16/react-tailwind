import React from 'react'

function NavBar() {
  return (
    <div className='flex flex-row justify-between items-center'>
      
        <img className='flex justify-between items-center' src='../logo.webp' width={45} height={45} alt=''/>
      
      
        
            <a className='flex justify-between items-center' href="http">Home</a>
            <a className='flex justify-between items-center' href="#dfg">About</a>
            <a className='flex justify-between items-center' href="#dfv">Service</a>
            <a className='flex justify-between items-center' href="#df">Contact</a>
        
      
    </div>
  )
}

export default NavBar
