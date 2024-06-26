import React, { useState } from 'react';
import home from '../assets/home.png';
import { MdClose } from 'react-icons/md';

function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className='home'>
      <div className='container'>
        <div className='content'>
          <p className='sub-title'>Mint Live!</p>
          <h1 className='title'>Exclusive NFT Collection</h1>
          <p className='description'>
            Every NFT sale and royalty generated will be donated to charity and support peace initiatives
          </p>
          <button onClick={() => window.location.href = "https://omnisea.org/Tirwin"}>
  Mint Now
</button>

        </div>
        <div className='image-container'>
          <div className='image'>
            <img src={home} alt='home' />
          </div>
          <div className='ellipse-container'>
            <div className='ellipse pink'></div>
            <div className='ellipse orange'></div>
          </div>
        </div>
      </div>
    </div>


);
}

export default Home;
