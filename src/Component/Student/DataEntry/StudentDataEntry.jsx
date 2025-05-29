import { useState, useEffect } from "react";
import "./StudentDataEntry.css";
import NavBar from "../../NavBar/NavBar";

const StudentEntryForm = () => {
 

  return (
    <>
      <div className="main-div">
        <NavBar />
        <div className="student-data-entry-form">
          <h1 className="heading">Student Registration Form</h1>
          <div className="detail-group">
            <label 
            htmlFor="first-name"
            className="text-label">
              First Name: 
            </label>
            <input
            className="text-input" 
            type="text" 
            name="first-name" 
            id="firstName"
             />
              <label 
            htmlFor="middle-name"
            className="text-label">
              Middle Name: 
            </label>
            <input
            className="text-input" 
            type="text" 
            name="middle-name" 
            id="middle-Name"
             />
             <label 
            htmlFor="last-name"
            className="text-label">
              Last Name: 
            </label>
            <input
            className="text-input" 
            type="text" 
            name="last-name" 
            id="last-Name"
             />
          </div>
          <div className="detail-group">
            <label 
            htmlFor="first-name"
            className="text-label">
              First Name: 
            </label>
            <input
            className="text-input" 
            type="text" 
            name="first-name" 
            id="firstName"
             />
              <label 
            htmlFor="middle-name"
            className="text-label">
              Middle Name: 
            </label>
            <input
            className="text-input" 
            type="text" 
            name="middle-name" 
            id="middle-Name"
             />
             <label 
            htmlFor="last-name"
            className="text-label">
              Last Name: 
            </label>
            <input
            className="text-input" 
            type="text" 
            name="last-name" 
            id="last-Name"
             />
          </div>
          
          
          
          <button type="button">Submit</button>
        </div>
      </div>
    </>
  );
};

export default StudentEntryForm;