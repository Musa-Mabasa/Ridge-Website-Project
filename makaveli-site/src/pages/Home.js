import React from 'react'
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
      <div id='homeWrapper'>
          <div className='overlay'></div>
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