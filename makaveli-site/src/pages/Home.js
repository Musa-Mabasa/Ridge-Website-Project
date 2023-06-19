import React from 'react'
import backgroundvideo from '../assets/background_gifs/homeBackground.mp4'

function Home() {
  return (
    <div className='background-video'>
        <video src={backgroundvideo} autoPlay loop muted>
        </video>
    </div>
  )
}

export default Home
