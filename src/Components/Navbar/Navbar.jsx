import React from 'react';
import {Link} from 'react-router-dom'
import mainLogo from  '../assets/logo2.png'
import barcode from  '../assets/barcode3.svg'
import './stylesNav.css'

const Navbar = () => {
  return (
    
    <nav className="navbar">
      
      <div>
      <Link to="/"><img className='main-logo' src={mainLogo} alt='test'></img></Link>
      </div>
      <div>
        <Link to='barcode'><img className='barcode-logo' src={barcode} alt='test'/></Link>
      </div>
    </nav>
  );
};

export default Navbar;

