import React from 'react';
import logo from '../assets/logo.png';
import { BsTwitter, BsDiscord, BsMedium, } from 'react-icons/bs';

function Footer() {
  const links = [

    {
      title: 'NFT',
      data: [
        { label: 'Market', url: 'https://element.market/collections/tirwin-series' },
        { label: 'Contract', url: 'https://scrollscan.com/token/0x42dc75ac62b87dd6a3839f919215d9fc93343471' },
        { label: 'Blog', url: 'https://medium.com/@TirwinSeries' },
      ],
    },
    {
      title: 'General',
      data: [
        { label: 'Become a Partner', url: 'mailto:contact@tirwin.xyz' },
        { label: 'Collabs Request', url: 'https://atlas3.io/project/tirwin' },
      ],
    },
    {
      title: 'Social',
      data: [
        { label: 'Twitter', url: 'https://twitter.com/TirwinSeries' },
        { label: 'Discord', url: 'https://discord.gg/PCUDpMTdqT' },
      ],
    },
  ];

  const socialLink = [
    { icon: <BsMedium />, url: 'https://medium.com/@TirwinSeries' },
    { icon: <BsTwitter />, url: 'https://twitter.com/Tirwin_Scroll' },
    { icon: <BsDiscord />, url: 'https://discord.gg/PCUDpMTdqT' },
  ];

  return (
    <footer>
      <div className='upper'>
        <div className='brand-container'>
          <div className='brand'>
            <img src={logo} alt='logo' />
          </div>
          <p>Exclusive NFT Collection</p>
          <ul className="social-icons">
            {socialLink.map((link, index) => (
              <li key={index}>
                <a className='social-icons' href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='links'>
          {links.map(({ title, data }, index) => {
            return (
              <div className='link' key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>
                      <a className='social-icons' href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className='lower'>
        <span>&copy; Tirwin 2023</span>
      </div>
    </footer>
  );
}


export default Footer;
