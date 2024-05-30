import React from 'react';
import ReactDOM from 'react-dom';

function Course({ content }) {
  return (
    <div className="zoom-div pre slidec">
      <center>
        <div className="course">{content}</div>
      </center>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <div>
        <h2>
          <center>Courses offered</center>
        </h2>
      </div>
      <Course content="Bachelor of Physiotherapy" />
      <Course content="B.Sc. (Hons) Dialysis Therapy Technology" />
      <Course content="B.Sc. (Hons) Cardiac Care Technology" />
      <Course content="B.Sc. (Hons) Anaesthesia and Operation Theatre Technology" />
      <Course content="B.Sc. (Hons) Emergency Medical Technology" />
      <Course content="BBA, LLB (Hons)" />
      <Course content="B.Sc. (Hons) Medical Laboratory Technology" />
      <Course content="B.Sc. (Hons) Medical Radiology and Imaging Technology" />
      <Course content="B.Sc. (Hons) Medical Science" />
      <Course content="Bachelor of Computer Applications (BCA)" />
      <Course content="B.Sc. (Hons) Economics" />
      <Course content="Bachelor of Technology (B.Tech)" />
      <Course content="BA, LLB (Hons)" />
      <Course content="Bachelor of Design (B.Des)" />
      <Course content="Bachelor of Architecture (B.Arch)" />
      <Course content="Bachelor of Business Administration (BBA – Gen/Hons)" />
      <Course content="B.Sc. Nursing" />
      <Course content="B.A in Performing Arts" />
      <Course content="BBA (Hons) in Business Analytics" />
      <Course content="B.Sc. (Hons) Psychology" />
      <Course content="BBA – Hospitality & Event Management (BBA-HEM)" />
      <Course content="B.Com (Hons) with ACCA" />
      <Course content="Bachelor of Commerce– B.Com (General/ Hons)" />
      <Course content="BBA (Sports Management)" />
      <Course content="Master of Business Administration (MBA)" />
      <Course content="Master of Technology (M.Tech)" />
      <Course content="Master of Computer Application (MCA)" />
      <Course content="Executive M.Tech in Cyber Security Engineering" />
      <Course content="Master of Technology by Research" />
      <Course content="Doctor of Philosophy (Ph.D)" />
      <Course content="Bachelor of Pharmacy (B.Pharm)" />
      <Course content="Doctor of Pharmacy (Pharm.D)" />
      <Course content="Master of Pharmacy (M.Pharm)" />
    </div>
  );
}

ReactDOM.render(<Courses />, document.getElementById('root'));