import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/sass/section/Header.scss';
import menuicon from '../assets/img/icons/whitemenu.svg';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="header">
      <button className="Header-menu-icon" onClick={toggleMenu} style={{ backgroundImage: `url(${menuicon})` }}></button>
      <div className="Header-title" onClick={() => handleMenuItemClick('/home')}>
        <img src={require('../assets/img/icons/mainlogo.png')} alt="아이콘" className="Header-icon" />
        <h1 className="Header-titletext">노련한 이력서</h1>
      </div>

      {isMenuOpen && (
        <div className="Header-menu">
          <ul>
            <li onClick={() => handleMenuItemClick('/Interest')}>관심채용공고</li>
            <li onClick={() => handleMenuItemClick('/myresume')}>내 이력서</li>
            <li onClick={() => handleMenuItemClick('/')}>설정</li>
            <li className="Header-logout" onClick={() => handleMenuItemClick('/Login')} >
              <img src={require('../assets/img/icons/icon-logout.png')} alt="" className="Header-logout-icon" />
              로그아웃
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
