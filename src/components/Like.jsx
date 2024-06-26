import React from 'react';
import eth1 from '../assets/eth1.png';
import eth2 from '../assets/eth2.png';

function Like() {
  return (
    <div className='like'>
      <div className='container'>
        <div className='content'>
          <div className='image'>
            <img src={eth1} alt='eth1' />
          </div>
          <h2 className='title'>Scroll Network</h2>
          <p className='description'>
          Tirwin leverages the cutting-edge Scroll Network to provide a secure and seamless NFT experience. 
          </p>
          <p className='description'>
          Scroll Network enables Tirwin to easily allocate a portion of NFT sales and royalties to charitable causes and peace initiatives, in line with Tirwin's philanthropic goals.
          </p>
        </div>
        <div className='content'>
          <div className='image'>
            <img src={eth2} alt='eth2' />
          </div>
          <h2 className='title'>Charity</h2>
          <p className='description'>
          Through the sale of exclusive NFTs and the royalties, Tirwin allocates a significant portion of its proceeds to charitable causes.
          </p>
          <p className='description'>
          Our primary focus is on supporting peace initiatives, with a particular emphasis on regions affected by conflict, such as Israel and Palestine.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Like;
