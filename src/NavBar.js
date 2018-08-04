import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component{
    render() {
        return(
            <nav>
                <div className="left">
                    <a href='' className='logo'>Recipe App</a>
                </div>
                <div className="right">
                    <a href='' className='button'>New Recipe</a>   
                    <a href='' className='button'>Home</a>   
                    <a href='' className='button'>About</a>   
                    <a href='' className='button'>Contact Us</a> 
                </div>
            </nav>
        );
    }
}

export default NavBar;