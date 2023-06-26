import React, {useState, useEffect} from 'react';
// import { Divider } from 'rsuite';
import './BookDisplay.css';
import amazon from '../assets/amazon.png';
import takealot from '../assets/takealot.png';
import smashwords from '../assets/smashwords.png';
import ReadMore from './ReadMore.js';
import Popup from './Popup.js';


function BookDisplay({title, description, image, amazonLink, takealotlink, smashwordslink, date, author}) {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 600); // Adjust the screen width breakpoint as needed
        };
    
        handleResize(); // Check initial screen width
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      const maxLength = isSmallScreen ? 50 : 100; // Change maxLength based on screen width
    
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
             <ReadMore onClick={() => setButtonPopup(true)} text={description} maxlength={maxLength}></ReadMore>
             <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>
                <h3 style={{height: '350px'}}>{description}</h3>
             </Popup>
            </div>
            <div className='book-links'>
                <a href={amazonLink} target="_blank" rel="noopener noreferrer">
                    <div className='shop-img'  data-tooltip="Shop at amazon">
                        <img src={amazon} alt='amazon'  style={{color: "white"}} />
                    </div>
                </a>
                <a href={takealotlink} target="_blank" rel="noopener noreferrer">
                    <div className='shop-img'  data-tooltip="Shop at takealot">
                        <img src={takealot} alt='takealot' style={{color: "white"}} />
                    </div>
                </a>
                <a href={smashwordslink} target="_blank" rel="noopener noreferrer">
                    <div className='shop-img'  data-tooltip="Shop at smashwords">
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
