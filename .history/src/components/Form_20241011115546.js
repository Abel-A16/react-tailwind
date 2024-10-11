import React from 'react'

function Form() {
  return (
    <div className='flex flex-col'>
      <form>
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
