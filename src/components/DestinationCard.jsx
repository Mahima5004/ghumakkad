import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DestinationCard({destination}) {

  const [image, setImage]  = useState([]);
  
  useEffect(() => {
     axios.get("https://api.unsplash.com/search/photos", {
        params : {
            query : destination,
            per_page : 6,
        },
        headers : {
            Authorization : `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
        },
     })
     .then((res) => setImage(res.data.results))
     .catch((err) => console.log("Image fetch error: ", err));
  },[destination])
  return (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        { image && image.map((img) => (
            <img 
             key={img.id}
             src = {img.urls.small}
             alt = {img.alt_description}
             className='rounded-xl w-full h-48 object-cover'
            />
        ))}
    </div>
  )
}

export default DestinationCard