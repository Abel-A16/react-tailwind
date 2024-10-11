import React from 'react';

function Form() {
  return (
    <div className='flex flex-col bg-gray-200 shadow-md mx-auto rounded-xl justify-center items-center w-96 h-96'>
      <h1 className='text-2xl underline tracking-tighter hover:tracking-normal transition-all duration-300 ease-in-out font-bold opacity-75'>
        Contact Me
      </h1>
      <form className='flex flex-col justify-between w-full px-6'>
        <label className='flex flex-col my-4'>
          Name:
          <input
            required
            placeholder='Enter your name'
            className='rounded-lg border border-gray-400 p-2 mt-2'
            type='text'
          />
        </label>
        <label className='flex flex-col my-4'>
          Email:
          <input
            required
            placeholder='Enter your email'
            className='rounded-lg border border-gray-400 p-2 mt-2'
            type='email'
          />
        </label>
        <label className='flex flex-col my-4'>
          Message:
          <textarea
            required
            placeholder='Enter your message'
            className='rounded-lg border border-gray-400 p-2 mt-2'
            rows='4'
          ></textarea>
        </label>
        <button className='bg-lime-700 rounded-md p-2 w-24 my-3 hover:opacity-80 transition-opacity duration-300'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
