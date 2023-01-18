import React from "react"
import './css/navbar.css'
import {Outlet,Link, NavLink} from 'react-router-dom';

const Navbar = () =>{
    return (
        <>
        <nav>
        <div className='logo'>
        {/* <h1>logo</h1> */}
        </div>
        <div>
        <ul>
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/services">services</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
        <li><NavLink to="/about">about</NavLink></li>
        <li><NavLink to="/demo">demo</NavLink></li>
      
        </ul>
        </div>

        </nav>
        <Outlet/>
        
        </>
    )
}
export default Navbar;