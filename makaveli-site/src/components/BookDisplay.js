import React, {useState} from 'react';
// import { Divider } from 'rsuite';
import './BookDisplay.css';
import amazon from '../assets/amazon.png';
import takealot from '../assets/takealot.png';
import smashwords from '../assets/smashwords.png';
import ReadMore from './ReadMore.js';
import Popup from './Popup.js';


function BookDisplay({title, description, image, amazonLink, takealotlink, smashwordslink, date, author}) {
    const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className='book'>
        <div className='book-content'>
            <div className='book-title'>
            {title}
            </div>
            <div className='book-published'>
                <div className='book-author'>
                {author}
                </div>
                {/* <Divider vertical /> */}
                <hr id='published-separator'></hr>
                <div className='book-date'>
                {date}
                </div>
            </div>
            <div className='book-description'>
             <ReadMore onClick={() => setButtonPopup(true)} text={description} maxlength={180}></ReadMore>
             <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>
                <h3 style={{height: '350px'}}>{description}</h3>
             </Popup>
            </div>
            <div className='book-links'>
                <a href={amazonLink} target="_blank" rel="noopener noreferrer" data-tooltip="Shop at amazon">
                    <div className='shop-img'>
                        <img src={amazon} alt='amazon' style={{color: "white"}} />
                    </div>
                </a>
                <a href={takealotlink} target="_blank" rel="noopener noreferrer">
                    <div className='shop-img'>
                        <img src={takealot} alt='takealot' style={{color: "white"}} />
                    </div>
                </a>
                <a href={smashwordslink} target="_blank" rel="noopener noreferrer">
                    <div className='shop-img'>
                        <img src={smashwords} alt='smashwords' style={{color: "white"}} />
                    </div>
                </a>
            </div>    
        </div>
        <hr id='content-separator'></hr>
        <div className='book-image'>
            <img src={image} alt='book cover' />
        </div>
    </div>
  )
}

export default BookDisplay
