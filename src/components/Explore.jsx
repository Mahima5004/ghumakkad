import React from 'react'
import DestinationCard from './DestinationCard'

function Explore() {
  return (
    <div>
        <section>
            <h1 className='text-3xl font-semibold text-center mb-8'>Popular Destinations</h1>
            <DestinationCard destination = "manali"/>
        </section>
    </div>
  )
}

export default Explore