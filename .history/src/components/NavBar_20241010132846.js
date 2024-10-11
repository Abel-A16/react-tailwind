import React from 'react'

function NavBar() {
  return (
    <div className='flex'>
      <div className='logo'>
        <img src='' alt=''/>
      </div>
      <div className='flex'>
        <div className='flex justify-between'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
