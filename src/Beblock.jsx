import React from 'react';
import ReactDOM from 'react-dom';
import houseofsac2 from './images/houseofsac2.jpg';
import silentreflections from './images/silentreflections.jpg';
import seminarhall from './images/seminarhall.jpg';
import designdepartment from './images/designdepartment.jpg';
import becafe from './images/becafe.png';
import cie from './images/cie.png';
import robotics from './images/robotics.png';
import iot from './images/iot.png';
import oat from './images/oat.jpeg';
import cricketground from './images/cricketground.jpg';

function Mrd() {
return (
    <div className="bebody">
    <h4 className="beh4">BE BLOCK</h4>
    
    <div className="becontainer">
        <div className="sidenav">
            <a href="#about">The Centre of Examinations</a>
            <a href="#about">The IFSCR Centre</a>
            <a href="#about">The Venture labs</a>
            <a href="#services">The Department of Computer Science</a>
            <a href="#services">The Department of AIML</a>
            <a href="#clients">The Department of Electronics</a>
            <a href="#contact">The Department of Mechanical Engineering</a>
        </div>
    
        <div className="bemain" style={{width:'500px'}}>
            <div className="row">
                <div className="col-md-4">
                    <div className="begallery">
                        <a target="_blank" href="houseofsac2.jpg">
                            <img src={houseofsac2} alt="The House Of Sac" className="img-fluid"/>
                        </a>
                        <div className="bedesc">The House of Sac</div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="begallery">
                        <a target="_blank" href="silentreflections.jpg">
                            <img src={silentreflections} alt="The Silent Reflections" className="img-fluid"/>
                        </a>
                        <div className="bedesc">The Silent Reflections</div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="begallery">
                        <a target="_blank" href="seminarhall.jpg">
                            <img src={seminarhall} alt="Seminar Hall" className="img-fluid"/>
                        </a>
                        <div className="bedesc">Seminar Hall</div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="begallery">
                        <a target="_blank" href="designdepartment.jpg">
                            <img src={designdepartment} alt="The Design Department" className="img-fluid"/>
                        </a>
                        <div className="bedesc">The Design Department</div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="begallery">
                        <a target="_blank" href="becafe.png">
                            <img src={becafe} alt="The 13th Floor Cafeteria" className="img-fluid"/>
                        </a>
                        <div className="bedesc">The 13th Floor Cafeteria</div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="begallery">
                        <a target="_blank" href="cie.png">
                            <img src={cie} alt="The Centre Of Entrepreneurship" className="img-fluid"/>
                        </a>
                        <div className="bedesc">The Centre Of Entrepreneurship</div>
                    </div>
                    
                </div>
                
                <div className="col-md-4">
                    <div className="begallery">
                        <a target="_blank" href="robotics.png">
                            <img src={robotics} alt="Robotics And Automation" className="img-fluid"/>
                        </a>
                        <div className="bedesc">Centre for Robotics And Automation</div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="begallery">
                        <a target="_blank" href="iot.png">
                            <img src={iot} alt="Internet Of Things" className="img-fluid"/>
                        </a>
                        <div className="bedesc">Centre for IoT</div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="begallery">
                        <a target="_blank" href="oat.jpeg">
                            <img src={oat} alt="The Open Air Theatre" className="img-fluid"/>
                        </a>
                        <div className="bedesc">The Open Air Theatre</div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="begallery">
                        <a target="_blank" href="cricketground.jpg">
                            <img src={cricketground} alt="The Cricket Ground" className="img-fluid"/>
                        </a>
                        <div className="bedesc">The Cricket Ground</div>
                    </div>
                    
                </div>
    
            </div>
            <div><p classNameName="bep">The Be-Block stands tall and is an epitome of all that the proud engineersn of PES University have achieved.</p></div>
        </div>
    </div>
    </div>
   );
   }