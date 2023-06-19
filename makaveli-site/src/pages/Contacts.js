import React from 'react'
import './Contacts.css'
import * as Aiicons from 'react-icons/ai'
import * as Faicons from 'react-icons/fa'
import * as Bsicons from 'react-icons/bs'

function Contacts() {
  return (
    <div id='wrapper'>
      <div className='contact-header'>
        <p className='header-content'>CONTACT</p>
      </div>
        <div className='contact-box-list'>
        <div className='contact-box'>
          <div className='contact-text'>
            <p>EMAIL:</p>
          </div>
            <p className='details-text' style={{'text-decoration':'underline'}}>JOHNDOE@GMAIL.COM</p>
        </div>
        <div className='contact-box'>
          <div className='contact-text'>
            <p>SOCIAL:</p>
          </div>
          <div id="social-list">
              {socialData.map((item, index) => (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                </a>
              ))}
          </div>
        </div>
        <div className='contact-box'>
          <div className='contact-text'>
            <p>PHONE:</p>
          </div>
            <p className='details-text'>+1 234 567 890</p> 
        </div>
        <div className='contact-box'>
          <div className='contact-text'>
            <p>STREAM:</p>
          </div>
          <div id="music-list">
              {musicData.map((item, index) => (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                </a>
              ))}
          </div>
        </div>
        </div>
    </div>
  )
}

const socialData = [
  {
    link: 'https://www.twitter.com/',
    icon: <Aiicons.AiOutlineTwitter />
  },
  {
    link: 'https://www.instagram.com/',
    icon: <Aiicons.AiOutlineInstagram />
  },
  {
    link: 'https://www.facebook.com/',
    icon: <Bsicons.BsFacebook />
  },
]

const musicData =[
  {
    link: 'https://open.spotify.com/artist/3Qdtx3XbuyxpXzxBBOBffq',
    icon: <Bsicons.BsSpotify />
  },
  {
    link: 'https://music.apple.com/us/artist/raja-de-spyce/1658646151',
    icon: <Faicons.FaItunesNote />
  },
  {
    link: 'https://deezer.page.link/YtBtVVe6SJHXTZXd9',
    icon: <Faicons.FaDeezer />
  },
  {
    link: 'https://youtube.com/',
    icon: <Faicons.FaYoutube/>
  }
]

export default Contacts
