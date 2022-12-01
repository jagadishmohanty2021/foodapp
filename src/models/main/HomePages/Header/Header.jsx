import React, { useEffect } from 'react'
import './header.css';
import { FaMobile, FaMapMarkerAlt, FaSearch, FaBars, FaRegWindowClose, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import headerImage from '../../../../assets/images/headerimage.jpg'
const Header = () => {

    const toggleClass = () => {
        console.log("toggle......")
        const resBar = document.querySelector('.res_bar')
        const closeBar = document.querySelector('.close_bar')
        const navbar = document.querySelector('ul')
        const rightNav = document.getElementById('right')
        rightNav.style.float = "none"
        console.log(navbar)
        resBar.style.display = "none"
        closeBar.style.display = "block"
        navbar.style.display = "block"

    }
    const closeNav = () => {
        const resBar = document.querySelector('.res_bar')
        const closeBar = document.querySelector('.close_bar')
        const navbar = document.querySelector('ul')
        closeBar.style.display = "none";
        resBar.style.display = "block";
        navbar.style.display = "none";

    }
    const menu = (key) => {
        console.log('enter');
        const downMenu = document.querySelector(".down")
        const upMenu = document.querySelector(".up")
        if (key === 'up') {
            downMenu.style.display = "block";
            upMenu.style.display = "none";
        } else {
            downMenu.style.display = "none";
            upMenu.style.display = "block";
        }
    }
    return (
        <>
            <div className='header_main'>
                <img src={headerImage} alt="backgroundimage" id='bgimage' />
                <div className='header_content'>
                    <div className='navbar'>
                        <span className='res_bar' onClick={() => { toggleClass() }}><FaBars /></span>
                        <span className='close_bar' onClick={() => { closeNav() }}><FaRegWindowClose /></span>
                        <ul >
                            <li id='right'><Link to="/gettheapp"><FaMobile /> Get the App</Link></li>
                            <li><Link to="/investor">Investor Relations</Link></li>
                            <li><Link to="/addrestaurant">Add Restaurant</Link></li>
                            <li><Link to="/login">Log in</Link></li>
                            <li><Link to="/signup">Sign up</Link></li>
                        </ul>
                    </div>
                    <div className='text_content'>
                        <h1>zomato</h1>
                        <p>Discover the best food & drinks in Odisha</p>
                    </div>
                    <div className="search_input">
                        <div className='map'><span className='map_icon'><FaMapMarkerAlt /></span><input type="text" placeholder='' /></div><span className='up' onClick={() => { menu('up') }}><FaArrowUp /></span><span className='down' onClick={() => { menu('down') }}><FaArrowDown /></span>
                        <div className='bar'></div>
                        <div className='search'><span className='search_icon'><FaSearch /></span><input type="text" placeholder='Search for restaurant, cuisine or a dish' /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header