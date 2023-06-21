import React from 'react'
import backgroundvideo from '../assets/background_gifs/homeBackground.mp4'
import './Home.css'
import * as Aiicons from 'react-icons/ai'
import * as Bsicons from 'react-icons/bs'
import {NavLink} from 'react-router-dom'


class Home extends React.Component {

  state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
        
    }

  render(){
    return (
      <div className='background-video'>
          <div className='overlay'></div>
          <video src={backgroundvideo} autoPlay loop muted/>
          <nav id="homeNav">
          <div id='home-nav-list'>
            <ul id="home-navbar-nav" className={this.state.clicked? "home-navbar active" : "home-navbar" }>
                <li className="home-nav-item" onClick={this.handleClick}>
                    <NavLink to="/" activeclassname="active" >Home</NavLink>
                </li>
                <li className="home-nav-item" onClick={this.handleClick}>
                    <NavLink to="/music" activeclassname="active" >Music</NavLink>
                </li>
                <li className="home-nav-item" onClick={this.handleClick}>
                    <NavLink to="/books" activeclassname="active" >Books</NavLink>
                </li>
                <li className="home-nav-item" onClick={this.handleClick}>
                    <NavLink to="/about" activeclassname="active" >About</NavLink>
                </li>
                <li className="home-nav-item" onClick={this.handleClick}>
                    <NavLink to="/contacts" activeclassname="active" >Contact</NavLink>
                </li>
            </ul>
          </div>
          </nav>
          <div id="home-social-list">
              {socialData.map((item, index) => (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                </a>
              ))}
          </div>
      </div>
    )
  }
  
}

export default Home

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