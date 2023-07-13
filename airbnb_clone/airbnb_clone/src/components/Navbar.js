import React from 'react'
import airbnb_logo from '../image/airbnb_logo.png';

export default function Navbar(){
    return(
      <nav className="navbar">
        <img src={airbnb_logo} className='nav--logo' />
      </nav>
    )
}