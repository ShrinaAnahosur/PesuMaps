import React from 'react';
import mrdaudi from './images/audi500.jpeg';
import placementcentrall from './images/audi500.jpeg';
import oat from './images/audi500.jpeg';
import mrdlib from './images/audi500.jpeg';
import './Mrd.css';

function Mrd() {
return (
<div className="mrdbody">
    <h4 className="mrdh4">
        MRD BLOCK
    </h4>
    
    
    
    <div class="containermrd">
        <div class="sidenav">
            <a href="#about">The Centre of Examinations</a>
            <a href="#about">The IFSCR Centre</a>
            <a href="#about">The Venture labs</a>
            <a href="#services">The Department of Computer Science</a>
            <a href="#services">The Department of AIML</a>
            <a href="#clients">The Department of Electronics</a>
            <a href="#contact">The Department of Mechanical Engineering</a>
        </div>
        
        <div class="mainmrd" style={{width:'500px'}}>
            <div class="row">
               <div class="col-md-4">
                    <div class="gallerymrd">
                        <a target="_blank" href="mrdaudi.jpeg">
                            <img src={mrdaudi} alt="The MRD Auditorium" class="img-fluid" />
                        </a>
                        <div class="descmrd">The MRD Auditorium</div>
                    </div>
                    </div>
                <div class="col-md-4">
                    <div class="gallerymrd">
                        <a target="_blank" href="placementcentral1.jpeg">
                            <img src={placementcentrall} alt="The Placement Central" class="img-fluid" />
                        </a>
                        <div class="descmrd">The Placement Central</div>
                    </div>
                    
                </div>
                <div class="col-md-4">
                    <div class="gallerymrd">
                        <a target="_blank" href="oat.jpeg">
                            <img src={oat} alt="The Open Air Theatre" class="img-fluid" />
                        </a>
                        <div class="descmrd">The Open Air Theatre</div>
                    </div>
                    
                </div>
                    <div class="col-md-4">
                    <div class="gallerymrd">
                        <a target="_blank" href="mrdlib.jpg">
                            <img src={mrdlib} alt="The Library" class="img-fluid" />
                        </a>
                        <div class="descmrd">The Library</div>
                    </div>
                    
                </div>
    
            </div>
            <div><p className="pmrd">The Prof. M. R. Doreswamy Silver Jubilee Complex (A-Block) is also known as the MRD Block at PES University</p></div>
        </div>
    </div>
    </div>
   );
   }
   export default Mrd;