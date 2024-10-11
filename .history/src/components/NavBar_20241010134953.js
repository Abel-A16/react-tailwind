import React from 'react'

function NavBar() {
  return (
    <div className='flex'>
      <div>
      
      <img className=' justify-between items-center' src='../logo.webp' width={45} height={45} alt=''/>
      </div>
      
      
        
            <h1><a  href="http">Home</a></h1>
            <h1><a  href="#dfg">About</a></h1>
            <h1><a  href="#dfv">Service</a></h1>
            <h1><a  href="#df">Contact</a></h1>
        
      
    </div>
  )
}

export default NavBar
