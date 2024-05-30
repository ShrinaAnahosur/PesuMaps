
import peslogo from './images/peslogo.jpg';
import React from 'react';
import 'jquery/dist/jquery.slim.min';
import 'popper.js/dist/umd/popper.min';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Your custom CSS file should come after Bootstrap
import Course from './Courses.js'
import { Link,useNavigate } from 'react-router-dom';
function Navbar() {
  const usenavigate=useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <a className="navbar-brand" href="#">
        <img src={peslogo} alt="PES Logo" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
      </a>
      
      <div className="typing-animation">Wanna know about pes?</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        
      </button>
     
      <div className=" navbar-collapse navbar-ml-auto" id="navbarNav" style={{float:'right'}} >
        <ul className="navbar-nav ml-auto"  > 
          <li className="nav-item active">
            <a className="nav-link" href="#">
                  Home
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link"  onClick={()=>usenavigate("/Courses")}>
              Courses
            </a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
