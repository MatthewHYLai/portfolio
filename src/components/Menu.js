import React, { Component } from 'react'
/*********************************** 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * not used 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ***************************************/
import {
    NavLink
} from "react-router-dom";
  
const MenuBody = () => {

    return (
        <div className="nav">
            <div className="menu">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                </ul>
            </div>
            
        </div>
        
        
        
    )
}

class Menu extends Component {
    render() {
        // const { characterData, removeCharacter } = this.props

        return (
            <MenuBody />
        )
    }
}

export default Menu