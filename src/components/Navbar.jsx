import React, { useContext, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { ImSun } from 'react-icons/im';
import { BsFillMoonFill } from 'react-icons/bs';
import logo from '../assets/logo.png';
import { ThemeContext } from '../context/ThemeContext';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { isDark, changeTheme } = useContext(ThemeContext);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <nav>
      <div className='brand-container'>
        <div className='brand'>
          <img src={logo} alt='logo' />
        </div>
        <div className='toggle-container'>
          <div className='toggle' style={{ cursor: 'pointer' }}>
            {isOpen ? (
              <MdClose onClick={() => setIsOpen(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setIsOpen(true)} />
            )}
          </div>
          <div
            className='mode'
            onClick={changeTheme}
            style={{ cursor: 'pointer' }}
          >
            {isDark ? (
              <ImSun className='light' />
            ) : (
              <BsFillMoonFill className='dark' />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${isOpen ? 'nav-visible' : ''}`}>
        <ul className='links'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='https://element.market/collections/tirwin-series'>Market</a>
          </li>
          <li>
          <a href="https://omnisea.org/Tirwin" style={{ cursor: 'pointer' }}>
              Mint Now
            </a>
          </li>
          <li onClick={changeTheme} style={{ cursor: 'pointer' }}>
            {isDark ? (
              <ImSun className='light' />
            ) : (
              <BsFillMoonFill className='dark' />
            )}
          </li>
        </ul>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="popup-close" onClick={togglePopup}>
              <MdClose />
            </span>
            {/* popup */}
            <p>Mint Soon - Coming in the Future!</p>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
