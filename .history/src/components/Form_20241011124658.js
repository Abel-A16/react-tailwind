import React from 'react';
import { motion } from 'framer-motion';

function Form() {
  return (
    <motion.div
      className='flex flex-col bg-gray-200 shadow-md mx-auto rounded-xl justify-center items-center w-96 h-96'
      initial={{ opacity: 0, scale: 0.8 }}  // Initial state
      animate={{ opacity: 1, scale: 1 }}    // Final state
      transition={{ duration: 0.5 }}        // Smooth transition
    >
      <motion.h1
        className='text-2xl underline tracking-tighter hover:tracking-normal transition-all duration-300 ease-in-out font-bold opacity-75'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Contact Me
      </motion.h1>

      <motion.form
        className='flex flex-col justify-between w-full px-6'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <label className='flex flex-col my-2'>
          Name:
          <motion.input
            required
            placeholder='Enter your name'
            className='rounded-lg border border-gray-400 p-2 mt-2'
            type='text'
            whileFocus={{ scale: 1.05 }}    // Slightly scale the input when focused
          />
        </label>

        <label className='flex flex-col my-2'>
          Email:
          <motion.input
            required
            placeholder='Enter your email'
            className='rounded-lg border border-gray-400 p-2 mt-2'
            type='email'
            whileFocus={{ scale: 1.05 }}    // Slightly scale the input when focused
          />
        </label>

        <label className='flex flex-col my-2'>
          Message:
          <motion.textarea
            required
            placeholder='Enter your message'
            className='rounded-lg border border-gray-400 p-2 mt-2'
            rows='4'
            whileFocus={{ scale: 1.05 }}    // Slightly scale the textarea when focused
          ></motion.textarea>
        </label>

        <motion.button
          className='bg-lime-700 rounded-md p-2 w-24 my-3 hover:opacity-80 transition-opacity duration-300'
          whileHover={{ scale: 1.1 }}       // Slightly scale the button on hover
          whileTap={{ scale: 0.95 }}        // Shrinks on click
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Form;
