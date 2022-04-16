import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiChevronLeft, HiOutlineMicrophone } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import Nav from './NavBar.style';

const NavBar = () => {
  const navigate = useNavigate();
  const params = useLocation();

  const url = params.pathname.split('/').slice(1, 3);

  const region = url[1]
    ? url[1].split('%20').join(' ')
    : url[0].split('%20').join(' ');

  return (
    <Nav>
      {params.pathname !== '/' && (
        <HiChevronLeft
          className="arrow-left"
          url={url[0]}
          onClick={() => navigate(-1)}
        />
      )}
      <h2 className="header-title">{region}</h2>
      {url[0] === '' && (
        <h2 className="logo" onClickCapture={() => navigate('/')}>
          COVID
          <span>Info</span>
        </h2>
      )}
      <div className="settings-tab">
        <HiOutlineMicrophone className="btn-setting" />
        <FiSettings className="btn-microphone" />
      </div>
    </Nav>
  );
};

export default NavBar;
