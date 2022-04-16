import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiChevronLeft, HiOutlineMicrophone, HiHome } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import Nav from './NavBar.style';

const NavBar = () => {
  const navigate = useNavigate();
  const params = useLocation();

  const url = params.pathname.split('/').slice(1, 3);

  const region = !url[1] && url[0].split('%20').join(' ');

  return (
    <Nav>
      {params.pathname !== '/' && (
        <button type="button" onClick={() => navigate(-1)}>
          <HiChevronLeft className="arrow-left" />
          BACK
        </button>
      )}
      <h2 className="header-title">{region}</h2>
      {url[0] === '' && (
        <h2 className="logo">
          COVID
          <span>Info</span>
        </h2>
      )}
      <div className="settings-tab">
        <HiHome className="btn-home" onClickCapture={() => navigate('/')} />
        <HiOutlineMicrophone className="btn-setting" />
        <FiSettings className="btn-microphone" />
      </div>
    </Nav>
  );
};

export default NavBar;
