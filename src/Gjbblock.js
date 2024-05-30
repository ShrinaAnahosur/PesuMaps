import React from 'react'

import './Gjb.css';
import centralLib from './images/centrallib.jpg';
import audi500 from './images/audi500.jpeg';
import gym from './images/gym.jpg';
import pesu52 from './images/pesu52.jpg';
import badmintonCourt from './images/badmintoncourt.png';
import tdmstudio from './images/tdmstudio1.jpg';
import squash from './images/squash.jpg';
import gjbcafe from './images/squash.jpg';
import basketball from './images/basketball.jpeg';
import jagsnest from './images/squash.jpg';
import football from './images/squash.jpg';
export default function Gjbblock() {
    
  return (
    <div><h4>GOLDEN JUBILEE BLOCK</h4>

    <div className="container123">
        <div className="sidenav123">
            <a href="#about">The Centre of Examinations</a>
            <a href="#about">The IFSCR Centre</a>
            <a href="#about">The Venture labs</a>
            <a href="#services">The Department of Computer Science</a>
            <a href="#services">The Department of AIML</a>
            <a href="#clients">The Department of Electronics</a>
            <a href="#contact">The Department of Mechanical Engineering</a>
        </div>
    
        <div className="main123" style={{width:'500px'}}>
            <div className="row">
                <div className="col-md-4">
                    <div className="gallery123">
                        <a target="_blank" href="centrallib.jpg">
                            <img src={centralLib}  alt="The Central Library" className="img-fluid"/>
                        </a>
                        <div className="desc123">The Central Library</div>
                    </div>
                    
                </div>
                        
        <div className="col-md-4">
                    <div className="gallery123">
                        <a target="_blank" href="audi500.jpeg">
                            <img src={audi500} alt="The 500-seater Auditorium" className="img-fluid"/>
                        </a>
                        <div className="desc123">The 500-seater Auditorium</div>
                    </div>
                    
                </div>
            
                <div className="col-md-4">
                    <div className="gallery123">
                        <a target="_blank" href="gym.jpg">
                            <img src={gym} alt="The Gym" className="img-fluid"/>
                        </a>
                        <div className="desc123">The Gym</div>
                    </div>
                    
                </div>
            <div className="col-md-4">
                    <div className="gallery123">
                        <a target="_blank" href="pesu52.jpg">
                            <img src={pesu52} alt="The Hackathon Space" className="img-fluid"/>
                        </a>
                        <div className="desc123">PESU 52</div>
                    </div>
                    
                </div>
                    <div className="col-md-4">
                    <div className="gallery123">
                        <a target="_blank" href="badmintoncourt.png">
                            <img src={badmintonCourt} alt="The Badminton Court" className="img-fluid"/>
                        </a>
                        <div className="desc123">The Badminton Court</div>
                    </div>
                    
                </div>
            
        <div className="col-md-4">
                    <div className="gallery123">
                        <a target="_blank" href="tdmstudio1.jpg">
                            <img src={tdmstudio} alt="The TDM Studio" className="img-fluid"/>
                        </a>
                        <div className="desc123">The TDM Studio</div>
                    </div>
                    
                </div>
                    <div className="col-md-4">
                    <div className="gallery123">
                        <a target="_blank" href="squash.jpg">
                            <img src={squash} alt="The Squash Court" className="img-fluid"/>
                        </a>
                        <div className="desc123">The Squash Court</div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="gallery123">
                        <a target="_blank" href="gjbcafe.jpeg">
                            <img src={gjbcafe} alt="The GJB Canteen" className="img-fluid"/>
                        </a>
                        <div className="desc123">The GJB Canteen</div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="gallery123">
                        <a target="_blank" href="basketball.jpeg">
                            <img src={basketball} alt="The Basketball Court" className="img-fluid"/>
                        </a>
                        <div className="desc123">The Basketball Court</div>
                    </div>
                    
                </div>
                
                <div className="col-md-4">
                    <div className="gallery123">
                        <a target="_blank" href="jagsnest.jpeg">
                            <img src={jagsnest} alt="The Assessment Centre" className="img-fluid"/>
                        </a>
                        <div className="desc123">The Assessment Centre</div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="gallery123">
                        <a target="_blank" href="football.jpeg">
                            <img src={football} alt="The Football Ground" className="img-fluid"/>
                        </a>
                        <div className="desc123">The Football Ground</div>
                    </div>
                    
                </div>
             
    
            </div>
            <div><p></p></div>
        </div>
    </div>
    </div>
  )
}


