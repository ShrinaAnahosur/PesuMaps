// Section component

import './App.css';
import React from 'react'
import 'popper.js';
import 'jquery';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function Section({ title, content, image }) {
    return (
        <section className="section zoom-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>
                    <div className="col-md-6">
                        <img src={image} alt="PES Logo" className="img-fluid rounded-circle" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Section;