import React from 'react';
// import { Divider } from 'rsuite';
import './BookDisplay.css';


function BookDisplay({title, description, image, amazonlink, takealotlink, date, author}) {
  return (
    <div className='book'>
        <div className='book-content'>
            <div className='book-title'>
                <h1>{title}</h1>
            </div>
            <div className='book-published'>
                <p className='book-author'>{author}</p>
                {/* <Divider vertical /> */}
                <hr/>
                <p className='book-date'>{date}</p>
            </div>
            <div className='book-description'>
                <p className='book-description-text'>{description}</p>
            </div>
            <div className='book-links'>
                <a href={amazonlink} target="_blank" rel="noopener noreferrer">
                    <div>

                    </div>
                </a>
                <a href={takealotlink} target="_blank" rel="noopener noreferrer">
                    <div>
                        
                    </div>
                </a>
            </div>    
        </div>
        <div className='book-image'>
            <img src={image} alt='book cover' />
        </div>
    </div>
  )
}

export default BookDisplay
