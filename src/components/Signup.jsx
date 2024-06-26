import React from 'react';
import signup from '../assets/signup.png';

const handleJoinNowClick = () => {
  const url = 'https://discord.gg/PCUDpMTdqT';
  window.location.href = url; };

function Signup() {
  return (
    <div className='signup'>
      <div className='container'>
        <div className='content'>
          <p className='sub-title'>Mint Live!</p>
          <h1 className='title'>555 Unique NFTs</h1>
          <p className='description'>
          Join our lively Discord community and keep your eyes to our announcement channel. When the time comes, you'll have the chance to mint one of Tirwin series without spending a single cent.
          </p>
          <button onClick={handleJoinNowClick}>Join Now</button>
        </div>
        <div className='image-container'>
          <div className='image'>
            <img src={signup} alt='home image' />
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

export default Signup;
