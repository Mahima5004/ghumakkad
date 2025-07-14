import React from 'react'

function DestinationSearch() {
  return (
    <div className='text-center text-white px-4'>
          <h1 className='text-2xl font-bold mb-6'>Discover Your Next Journey</h1>
          <input 
          type="text" 
          placeholder='Search destination...'
          className='p-3 max-w-d rounded shadow text-black'
          />
    </div>
  )
}

export default DestinationSearch