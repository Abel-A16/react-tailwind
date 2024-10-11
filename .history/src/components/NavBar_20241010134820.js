import React from 'react'

function NavBar() {
  return (
    <div className='flex flex-col justify-between items-center'>
      
        <img className=' justify-between items-center' src='../logo.webp' width={45} height={45} alt=''/>
      
      
        
            <h1 className='decoration-none  justify-between items-center'><a  href="http">Home</a></h1>
            <h1 className='  justify-between items-center'><a  href="#dfg">About</a></h1>
            <h1 className='  justify-between items-center'><a  href="#dfv">Service</a></h1>
            <h1 className='  justify-between items-center'><a  href="#df">Contact</a></h1>
        
      
    </div>
  )
}

export default NavBar
