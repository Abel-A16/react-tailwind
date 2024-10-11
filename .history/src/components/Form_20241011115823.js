import React from 'react'

function Form() {
  return (
    <div className='flex flex-col bg-slate-500 mx-auto justify-center items-center w-0.5'>
      <form className='flex flex-col my-5'>
        <label>
            Name:
            <input type="text" />
        </label>
        <label>
            Email:
            <input type="email" />
        </label>
        <label>
            Messege:
            <input type="text" />
        </label>
      </form>
    </div>
  )
}

export default Form
