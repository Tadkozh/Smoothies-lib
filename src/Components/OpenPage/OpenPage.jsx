import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './OpenPage.css';
import Barcode from '../Navbar/NavComponents/Barcode';
import barcode from  '../assets/barcode3.svg'


function OpenPage() {
  const [classImg, setClassImg] = useState("image-Slide");
  const [classText, setText] = useState("text-Slide");
  const [classSearch, setSearch] = useState("search-Hide");

  const handleClick = () => {
    setClassImg("image-Head");
    setText("text-Home-Hide");
    setSearch("search-Location");
  };
  return (
    <div>
      <div className={classImg} onClick={handleClick}>
        <p className={classText}>
          Hello, cliquez sur écran pour chercher un produit.
        </p>
      </div>
      <div className={classSearch}>
        <button class="food-pref" id="food-pref">Préférences Alimentaires</button>
        <Barcode />
        <img className='barcode-logo' src={barcode} alt='test'/>
      </div>
    </div>
  );
}

export default OpenPage;