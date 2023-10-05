import React from 'react';
import {Outlet, Link} from "react-router-dom";
import './Nav-bar.css'

function Navbar(props)
{
    return <div className='Navbar-div'>
        <a href="#home">{props.text}</a>
        <Link to='/create' className="split">{props.text1}</Link>
        <Link to='/login' className="split">{props.text2}</Link>
        <a href="#findJobs" className="split">{props.text3}</a>
        <a href="#findDev" className="split">{props.text4}</a>
        <Outlet/>
        </div>
}


export default Navbar
