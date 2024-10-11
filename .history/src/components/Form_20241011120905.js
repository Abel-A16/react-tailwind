import React from 'react'

function Form() {
  return (
    <div className='flex flex-col bg-transparent mx-auto rounded-xl  justify-center items-center w-96 h-96'>
    <h1 className='text-2xl underline font-bold opacity-75 '>Contact Me</h1>
      <form className='flex flex-col justify-between '>
        <label className='flex flex-col justify-between my-2'>
            Name:
            <input type="text" />
        </label>
        <label className='flex justify-between my-2'>
            Email:
            <input type="email" />
        </label>
        <label className='flex justify-between my-2'>
            Messege:
            <input type="text" />
        </label>
      </form>
    </div>
  )
}

export default Form
