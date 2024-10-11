import React from 'react'

function NavBar() {
  return (
    <div className='flex flex-row justify-between items-center'>
      
        <img className='flex justify-between items-center' src='../logo.webp' width={45} height={45} alt=''/>
      
      
        
            <a  href="http">Home</a>
            <a  href="#dfg">About</a>
            <a  href="#dfv">Service</a>
            <a  href="#df">Contact</a>
        
      
    </div>
  )
}

export default NavBar
