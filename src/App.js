import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Gallery from './Gallery';
import Pesmap from './Pesmap';
import Section from './Section';
import Login from './Login';
import './App.css';
import img1 from './images/club1.png';
import img3 from './images/cultural.png';
import img4 from './images/technical.png';
import img5 from './images/confer.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'jquery';
import Courses from './Courses.js';
import Gjbblock from './Gjbblock.js';
import Mrd from './Mrd.js';
import Beblock from './Beblock.js'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="Courses" element={<Courses />} />
        <Route path="/gjbblock-route" element={<Gjbblock />} />
        <Route path="/mrdblock-route" element={<Mrd />} />
        <Route path="/beblock-route" element={<Beblock />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <div className="column-container">
        <div className="column">
          <Section title="Culture and Clubs" content="Something about culture and clubs in PES RR campus." image={img3} />
          <Section title="Upcoming Activities" content="Information about upcoming activities in PES RR campus." image={img1} />
        </div>
        <div className="column">
          <Section title="Technical" content="Something about technical activities in PES RR campus." image={img4} />
          <Section title="Conferences and Forums" content="Details about conferences and forums in PES RR campus." image={img5} />
        </div>
      </div>
      <Pesmap />
      <Footer />
      <Gallery />
    </div>
  );
}

export default App;
