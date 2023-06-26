import React from 'react'
import './ReadMore.css'

function ReadMore({text, maxlength, onClick}) {

  return (
    <div className='text'>
        <p>
            {text.slice(0, maxlength)}
            <button onClick={onClick} className='text-button' style={{'font-size':'15px'}}>
            ...read More
            </button>
        </p>
  
    </div>
  )
}

export default ReadMore
