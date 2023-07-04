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
            <p className='details-text' style={{'text-decoration':'underline'}}>ridgemakavelli@gmail.com</p>
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
    id: 1,
    link: 'https://twitter.com/MakavelliRidge',
    icon: <Aiicons.AiOutlineTwitter />
  },
  {
    id: 2,
    link: 'https://www.instagram.com/makavelliridge/',
    icon: <Aiicons.AiOutlineInstagram />
  },
  {
    id: 3,
    link: 'https://www.facebook.com/profile.php?id=100090989985403',
    icon: <Bsicons.BsFacebook />
  },
]

const musicData =[
  {
    id: 1,
    link: 'https://open.spotify.com/artist/3Qdtx3XbuyxpXzxBBOBffq',
    icon: <Bsicons.BsSpotify />
  },
  {
    id: 2,
    link: 'https://music.apple.com/us/artist/raja-de-spyce/1658646151',
    icon: <Faicons.FaItunesNote />
  },
  {
    id: 3,
    link: 'https://deezer.page.link/YtBtVVe6SJHXTZXd9',
    icon: <Faicons.FaDeezer />
  },
  {
    id: 4,
    link: 'https://www.youtube.com/@Makavelliridge',
    icon: <Faicons.FaYoutube/>
  }
]

export default Contacts
