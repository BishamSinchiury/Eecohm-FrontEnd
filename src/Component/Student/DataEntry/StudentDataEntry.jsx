import { useState } from "react";
import "./StudentDataEntry.css";

export default function StudentEntryForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    student_class: "",
    email:"",
    phone_number:"",
    section: "",
    rollno: "",
    registration_number: "",
    symbol_number: "",
    iemis_code: "",
    address: "",
    fathers_name: "",
    mothers_name: "",
    gender: "",
    date_of_birth: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Submit data to Django backend via API
  };

  return (
    <>
    <form action="">
      <div className="student-personal-detail-from">
        <input 
        className="stylish-input"
        type="text" 
        name="first-name"
        placeholder="First Name"
        required
        />
        <input 
        className="stylish-input"
        type="text" 
        name="middle-name"
        placeholder="Middle Name"
        required
        />
        <input 
        className="stylish-input"
        type="text" 
        name="last-name"
        placeholder="Last Name"
        required
        />
      </div>
      <div className="student-personal-detail-from">
        <select 
          className="stylish-input" 
          name="gender" 
          required
        >
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>
      </div>
    </form>
    
    </>
  );
}
