import React, { Component } from 'react'
import backgroundvideo from '../assets/background_gifs/homeBackground.mp4'
import './Home.css'
import * as AiIcons from 'react-icons/ai'
import {Link, NavLink} from 'react-router-dom'


class Home extends React.Component {

  state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

  render(){
    return (
      <div className='background-video'>
          <video src={backgroundvideo} autoPlay loop muted/>
          <nav id="homeNav">
          <div>
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
      </div>
    )
  }
  
}

export default Home
