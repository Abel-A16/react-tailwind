import React from 'react'

function Form() {
  return (
    <div>
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
            Password:
            <input type="password" />
        </label>
      </form>
    </div>
  )
}

export default Form
