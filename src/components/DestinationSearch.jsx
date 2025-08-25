import React from 'react'

function DestinationSearch({destination, setDestination}) {

  
  return (
    <div className='text-center px-4'>
          <h1 className='text-2xl font-bold mb-6 text-[#113F67]'>Discover Your Next Journey</h1>
          <div className='flex items-center justify-center gap-3'>  
            <input 
            type="text" 
            placeholder='Search destination...'
            className='p-3 max-w-md rounded shadow text-black bg-[#33A1E0]'
            onChange={(e) => setDestination(e.target.value)}
          />
          <button 
          className='p-3 rounded text-black bg-[#33A1E0] shadow'
          >
            Search
          </button>
          </div>
    </div>
  )
}

export default DestinationSearch