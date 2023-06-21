import React, { Component } from 'react'
import './Navbar.css'
import * as AiIcons from 'react-icons/ai'
import {Link, NavLink} from 'react-router-dom'

class Navbar extends Component  {


    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    hidden = this.props.hidden
    
        constructor(props){
            super(props)
            this.state = {
                prevScrollPos: window.scrollY,
                show: true
            }
        }
        
        handleScroll = () => {
            const { prevScrollPos } = this.state;
            const currentScrollPos = window.scrollY;
            const show = prevScrollPos > currentScrollPos;
        
            this.setState({
              prevScrollPos: currentScrollPos,
              show
            });
          };

        componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        }
    
        componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        }

    render(){
        const {show} = this.state
        console.log(show)
        const hidden = this.props.hidden
        const inBooks = this.props.inBooks
        const inMusic = this.props.inMusic
        return (
                <nav id='nav' className={(inBooks || inMusic) ? show? 'nav-class':'hidden-nav': ''}>
                <Link id='logo' to='/'>
                    <h3>RIDGE</h3>
                    <h3>MAKAVELI</h3>
                </Link>
                <div id='nav-list'>
                    <ul id={hidden? 'homeNav-nav': "navbar-nav"} className={this.state.clicked? "#navbar active" : "#navbar" }>
                        <div id= "close" onClick={this.handleClick}>
                            <AiIcons.AiOutlineClose id="close" className="menu-Icon"></AiIcons.AiOutlineClose>
                        </div>
                        <li className="nav-item" onClick={this.handleClick}>
                            <NavLink to="/" activeclassname="active" >HOME</NavLink>
                        </li>
                        <li className="nav-item" onClick={this.handleClick}>
                            <NavLink to="/music" activeclassname="active" >MUSIC</NavLink>
                        </li>
                        <li className="nav-item" onClick={this.handleClick}>
                            <NavLink to="/books" activeclassname="active" >BOOKS</NavLink>
                        </li>
                        <li className="nav-item" onClick={this.handleClick}>
                            <NavLink to="/about" activeclassname="active" >ABOUT</NavLink>
                        </li>
                        <li className="nav-item" onClick={this.handleClick}>
                            <NavLink to="/contacts" activeclassname="active" >CONTACT</NavLink>
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

