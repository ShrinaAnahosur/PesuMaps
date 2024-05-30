import React from 'react';
import './App.css'
import pesbg from './images/pesbg.jpg';
function Course({ content }) {
  return (
    <div style={{ backgroundImage:`url(${pesbg})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover", }}>
        <div className="zoom-div pre slidec course-item">
        <center>
        {content}</center>
        </div>
    </div>
  );
}

function Courses() {
  const courseList = [
    "Bachelor of Physiotherapy",
    "B.Sc. (Hons) Dialysis Therapy Technology",
    "B.Sc. (Hons) Cardiac Care Technology",
    "B.Sc. (Hons) Anaesthesia and Operation Theatre Technology",
    "B.Sc. (Hons) Emergency Medical Technology",
    "BBA, LLB (Hons)",
    "B.Sc. (Hons) Medical Laboratory Technology",
    "B.Sc. (Hons) Medical Radiology and Imaging Technology",
    "B.Sc. (Hons) Medical Science",
    "Bachelor of Computer Applications (BCA)",
    "B.Sc. (Hons) Economics",
    "Bachelor of Technology (B.Tech)",
    "BA, LLB (Hons)",
    "Bachelor of Design (B.Des)",
    "Bachelor of Architecture (B.Arch)",
    "Bachelor of Business Administration (BBA – Gen/Hons)",
    "B.Sc. Nursing",
    "B.A in Performing Arts",
    "BBA (Hons) in Business Analytics",
    "B.Sc. (Hons) Psychology",
    "BBA – Hospitality & Event Management (BBA-HEM)",
    "B.Com (Hons) with ACCA",
    "Bachelor of Commerce– B.Com (General/ Hons)",
    "BBA (Sports Management)",
    "Master of Business Administration (MBA)",
    "Master of Technology (M.Tech)",
    "Master of Computer Application (MCA)",
    "Executive M.Tech in Cyber Security Engineering",
    "Master of Technology by Research",
    "Doctor of Philosophy (Ph.D)",
    "Bachelor of Pharmacy (B.Pharm)",
    "Doctor of Pharmacy (Pharm.D)",
    "Master of Pharmacy (M.Pharm)",
  ];

  return (
    <div>
      <h2 className="text-center">Courses offered</h2>
      <ul className="course-list">
        {courseList.map((course, index) => (
          <Course key={index} content={course} />
        ))}
      </ul>
    </div>
  );
}

export default Courses;
