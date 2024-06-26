import React from 'react';
import Card from './Card';
import super1 from '../assets/super1.png';
import super2 from '../assets/super2.png';
import super3 from '../assets/super3.png';
import super4 from '../assets/super4.png';

function SuperRare() {
  const data = [
    {
      image: super1,
      series: 'Tirwin Series',
      title: 'Tirwin',
      price: 0.005,
      tag: 1,
    },
    {
      image: super2,
      series: 'Tirwin Series',
      title: 'Tirwin',
      price: 0.005,
      tag: 2,
    },
    {
      image: super3,
      series: 'Tirwin Series',
      title: 'Tirwin',
      price: 0.005,
      tag: 3,
    },
    {
      image: super4,
      series: 'Tirwin Series',
      title: 'Tirwin',
      price: 0.005,
      tag: 4,
    },
  ];
  return (
    <div className='super-rare'>
      <div className='title-container'>
        <h2 className='title'>LE Super Rare Auction</h2>
        <p className='description'>
          We have released four limited edition NFT's early which which can be
          bid on via <a href='https://element.market/collections/tirwin-series'>Element</a>.
        </p>
      </div>
      <div className='cards'>
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default SuperRare;
