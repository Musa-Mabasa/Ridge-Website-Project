import React from 'react'
import './ReadMore.css'

function ReadMore({text, maxlength, onClick}) {

  return (
    <div className='text'>
        <p>
            {text.slice(0, maxlength)}
        </p>
        <button onClick={onClick} className='text-button'>
            ...read More
        </button>
    </div>
  )
}

export default ReadMore
