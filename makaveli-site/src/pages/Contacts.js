import React from 'react'
import './Contacts.css'
import * as Aiicons from 'react-icons/ai'
import * as Mdicons from 'react-icons/md'
import * as Bsicons from 'react-icons/bs'

function Contacts() {
  return (
    <div id='wrapper'>
    <div className='contact-header'>
      <h1 className='header-content'>Get in touch with me for any</h1>
      <h1 className='header-content'>further Information.</h1>
    </div>
      <div className='contact-box-list'>
      <div className='contact-box'>
        <div className='contact-icon'>
          <Mdicons.MdEmail />
        </div>
        <div className='contact-text'>
          <h3>Email:</h3>
        </div>
          <p className='details-text'>johndoe@gmail.com</p>
      </div>
      <div className='contact-box'>
        <div className='contact-text'>
          <h3>Social:</h3>
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
        <div className='contact-icon'>
          <Mdicons.MdPhone />
        </div>  
        <div className='contact-text'>
          <h3>Phone:</h3>
         </div>
          <p className='details-text'>+1 234 567 890</p> 
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

export default Contacts
