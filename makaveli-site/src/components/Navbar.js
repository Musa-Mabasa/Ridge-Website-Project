import React, { Component } from 'react'
import './Navbar.css'
import * as AiIcons from 'react-icons/ai'
import {Link, NavLink} from 'react-router-dom'

class Navbar extends Component  {


    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        const path = window.location.pathname;
        const isHomePage = path === '/'
        return (
              <nav>
                <Link id='logo' to='/'>
                    <h3>RIDGE</h3>
                    <h3>MAKAVELI</h3>
                </Link>
                <div>
                    <ul id="navbar-nav" className={`${this.state.clicked? "#navbar active" : "#navbar" } ${isHomePage?  'hide' : ''}`}>
                        <div id= "close" onClick={this.handleClick}>
                            <AiIcons.AiOutlineClose id="close" className="menu-Icon"></AiIcons.AiOutlineClose>
                        </div>
                        <li className="nav-item" onClick={this.handleClick}>
                            <NavLink to="/" activeclassname="active" >Home</NavLink>
                        </li>
                        <li className="nav-item" onClick={this.handleClick}>
                            <NavLink to="/music" activeclassname="active" >Music</NavLink>
                        </li>
                        <li className="nav-item" onClick={this.handleClick}>
                            <NavLink to="/books" activeclassname="active" >Books</NavLink>
                        </li>
                        <li className="nav-item" onClick={this.handleClick}>
                            <NavLink to="/about" activeclassname="active" >About</NavLink>
                        </li>
                        <li className="nav-item" onClick={this.handleClick}>
                            <NavLink to="/contacts" activeclassname="active" >Contact</NavLink>
                        </li>
                    </ul>
                </div>
        
                <div id= "menu" onClick={this.handleClick}>
                    {
                        (<AiIcons.AiOutlineMenu id="bar" className="menu-Icon"></AiIcons.AiOutlineMenu>)
                    }
                    
                </div>
              </nav>
          )
    }
  
}

export default Navbar

