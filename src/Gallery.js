import React from 'react'
import 'jquery/dist/jquery.slim.min';
import 'popper.js/dist/umd/popper.min';
import silent from './images/silentreflections.jpg';
import becafe from './images/becafe.png';
import thirteen from './images/13thfloor.jpg';
import gjblib from './images/gjblib.jpg';
import campusview from './images/campusview.jpg';
import gjb1 from './images/gjb1.jpg';
import gal1 from './images/gal1.jpg';
import gal2 from './images/gal2.jpg';




 function Gallery() {
  return (
    

<div>

<div className="gallery">
  
<div className="gallery">
  <img src={silent} alt="Silent Reflections" />
  <img src={becafe} alt="BeCafe" />
  <img src={thirteen} alt="13th Floor" />
  <img src={gjblib} alt="GJB Library" />
  <img src={campusview} alt="Campus View" />
  <img src={gjb1} alt="GJB Image 1" />
  <img src={gal1} alt="Gallery Image 1" />
  <img src={gal2} alt="Gallery Image 2" />
  {/* The following lines had redundant alt attributes */}
  
</div>

  
</div>

<div className="contact-form" style={{borderColor:'white'}}>
  <form>
  <h2>Contact Us</h2>
  <div className="form-group">
      <label htmlFor="name">Your Name:</label>
      <input type="text" id="name" name="name" style={{ backgroundColor: 'black', color: 'white' }} required />
  </div>
  <div className="form-group">
      <label htmlFor="email">Your Email:</label>
      <input type="email" id="email" name="email" style={{ backgroundColor: 'black', color: 'white' }} required />
  </div>
  <div className="form-group">
      <label htmlFor="message">Your Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  <div className="form-group">
      <button type="submit">Send Message</button>
  </div>
  </form>
</div>

<div className="testimonials">
  <h2>What People Are Saying</h2>
  <div className="testimonial">
      <p>"This website is amazing! It provides so much useful information in a visually appealing way."</p>
      <p>- Happy Visitor</p>
  </div>
  <div className="testimonial">
      <p>"I love the new features added to the website. The gallery is fantastic!"</p>
      <p>- Satisfied User</p>
  </div>
</div>

</div>

  )
}
export default Gallery;