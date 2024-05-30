
import React from 'react'
import 'popper.js';
import 'jquery';
function Footer() {
    const [showContact, setshowContact] = React.useState(false);
                                const [showAboutUsInfo, setShowAboutUsInfo] = React.useState(false);
    
    const handleContactClick = () => {
                                    // Toggle the visibility of the about us information
                                    setshowContact(!showContact);
          };
        const handleAboutClick = () => {
                                    // Toggle the visibility of the about us information
                                    setShowAboutUsInfo(!showAboutUsInfo);
          };
    
                                return (
                                <footer className="footer bg-dark text-white text-center py-3">
                                    <a className="contact" href="#0" onClick={handleContactClick}>Contact</a>
                                    {showContact && (
                                        <div className="contact">
                                            <span className="contact">
                                                <table className="table" >
                                                    <tr >
                                                        <th > General Enquiries </th>
                                                        <th> Admissions</th>
                                                        <th> Placements</th>
                                                    </tr>
    
                                                    <tr >
                                                        <td> +91 123456789</td>
                                                        <td> +91 123456789</td>
                                                        <td> +91 123456789</td>
                                                    </tr>
    
                                                    <tr >
                                                        <td> +91 123456789</td>
                                                        <td> +91 123456789</td>
                                                        <td> +91 123456789</td>
                                                    </tr>
    
                                                </table>
    
                                            </span>
                                        </div>
                                    )}
                                    <div>
                                        <a className="aboutinfo" href="#0" onClick={handleAboutClick}>About Us</a>
                                        {showAboutUsInfo && (
                                            <div className="aboutinfo">
                                                <p> People's Education Society University, formerly PES Institute of Technology, is a private university in Bengaluru, India. Established in 1988, it is focused on the following educational areas: Engineering, Management, Law, Economics, Commerce, Architecture, Design, Psychology, Arts, Medicine and Life Sciences.</p>
                                            </div>
                                        )}
                                    </div>
                                </footer>
                                );
        }
    
export default Footer;