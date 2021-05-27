import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import $ from "jquery";
  


const MenuBody = () => {
    return (
        <div className="nav">
            <div className="menu">
                <div id="menuParticles" className="particles"></div>
                <ul>
                    <li><NavLink to="/" className="clickItem">Home</NavLink></li>
                    <li><NavLink to="/about" className="clickItem">About</NavLink></li>
                    <li><NavLink to="/projects" className="clickItem">Projects</NavLink></li>
                    <li><NavLink to="/contacts" className="clickItem">Contacts</NavLink></li>
                </ul>
            </div>
            
        </div>        
    )
}
  
const MenuBtn = () => {

    return (
        <a href="" className="menuBtn clickItem" id="responsive-menu-button" onClick={(e) => {e.preventDefault()}}>
            <span className="line1"></span>Main Menu Button
            <span className="line2"></span>Main Menu Button
            <span className="line3"></span>Main Menu Button
        </a>
        
    )
}

class Header extends Component {
    render() {
        // const { characterData, removeCharacter } = this.props

        return (
            <div className="header">
                <NavLink to="/" className="logoBtn clickItem">
                    <img src="/img/logo.png" alt="" />
                </NavLink>

                <MenuBtn />

                <MenuBody />
                
            </div>
        )
    }
}

export default Header