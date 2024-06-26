import React from 'react';
import Card from './Card';
import icon from '../assets/icon.png';
import release3 from '../assets/release3.png';
import release2 from '../assets/release2.png';

function Free() {
  return (
    <div className='free'>
      <div className='container'>
        <div className='background'>
          <div className='ellipse pink'></div>
          <div className='ellipse green'></div>
        </div>
        <div className='content'>
          <div className='image'>
            <img src={icon} alt='icon' />
          </div>
          <h2 className='title'>Free NFT for early birds</h2>
          <p className='description'>
          Become an OG and grab your Tirwin NFT 
          </p>
          <div></div>
          <p>Don't miss the chance to become an OG because we have limited slots available for this exclusive role.</p>
        </div>
      </div>
      <div className='cards'>
        <div className='card1'>
          <Card
            image={release2}
            series='Tirwin Series'
            title='Tirwin'
            price={0.005}
            tag={5}
          />
        </div>
        <div className='card2'>
          <Card
            image={release3}
            series='Tirwin Series'
            title='Tirwin'
            price={0.005}
            tag='6'
          />
        </div>
      </div>
    </div>
  );
}
 
export default Free;
