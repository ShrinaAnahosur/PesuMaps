import './App.css';
import 'popper.js';
import 'jquery';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import campusfinal from './images/campuspesfinalll.png';
function Pesmap() {
  const navigate = useNavigate();

  const handleAreaClick = (destination) => {
    navigate(destination);
  };

  return (
    <div className="container mt-4">
      <a href="/home" onClick={() => handleAreaClick('/home')}>
        <img src={campusfinal} alt="PES RR Campus Map" className="img-fluid" useMap="#workmap" />
      </a>

      <map name="workmap">
      <area shape="rect" coords="350,200,700,459" alt="gjb" onClick={() => navigate('/gjbblock-route')} />

        <area shape="rect" coords="890,215,1060,447" onClick={() => navigate('/gjbblock-route')} alt="beblock"  />
        <area shape="rect" coords="740,425,850,540" onClick={() => navigate('/beblock-route')} alt="mrd"  />
      </map>

      <div className="overlay">PES RR Campus</div>
    </div>
  );
}

export default Pesmap;
