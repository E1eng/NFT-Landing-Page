import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import release1 from '../assets/release1.png';

function Release() {
  return (
    <div className='releases'>
      
      <div className='release orange'>
        <div className='content'>
          <h2 className='title'>Initial Release 4/555</h2>
          <p className='description'>
            We have released four limited edition NFTs early which can be bid on
            via <a href='https://element.market/collections/tirwin-series'>Element</a>
          </p>
          <p className='description'>
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className='description'>50% of proceeds go to charity.</p>
          <a href='https://element.market/collections/tirwin-series' className='link'>
            Check them out <BsArrowRight />
          </a>
        </div>
        <div className='image'>
          <img src={release1} alt='release' />
          <div className='ellipse pink'></div>
        </div>
      </div>
    </div>
  );
}

export default Release;