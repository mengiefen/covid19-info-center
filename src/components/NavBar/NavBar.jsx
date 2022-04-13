import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';
import Nav from './NavBar.style';

const NavBar = () => {
  const navigate = useNavigate();
  const params = useLocation();

  const url = params.pathname.split('/').slice(1, 3);
  return (
    <Nav>
      {params.pathname !== '/' && (
        <HiChevronLeft className="arrow-left" onClick={() => navigate(-1)} />
      )}
      <h2 className="header-title">{url[1] || url[0]}</h2>
      <h2 className="logo" onClickCapture={() => navigate('/')}>
        COVID
        <span>Info</span>
      </h2>
    </Nav>
  );
};

export default NavBar;
