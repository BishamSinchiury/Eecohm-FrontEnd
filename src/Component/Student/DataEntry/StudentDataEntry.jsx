import { useState, useEffect } from "react";
import "./StudentDataEntry.css";
import NavBar from "../../NavBar/NavBar";

const StudentEntryForm = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    student_class: '',
    photo: null,
    rollno: '',
    registration_number: '',
    symbol_number: '',
    iemis_code: '',
    address: '',
    fathers_name: '',
    mothers_name: '',
    gender: '',
    date_of_birth: ''
  });

  // Fetch classes on component mount
  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch('http://192.168.1.100/api/admin/classes');
      if (response.ok) {
        const data = await response.json();
        setClasses(data);
      } else {
        console.error('Failed to fetch classes');
      }
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      
      // Append all form fields to FormData
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== '') {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await fetch('http://192.168.1.100/api/student/student-data', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Student registered successfully!');
        // Reset form
        setFormData({
          firstname: '',
          middlename: '',
          lastname: '',
          student_class: '',
          photo: null,
          rollno: '',
          registration_number: '',
          symbol_number: '',
          iemis_code: '',
          address: '',
          fathers_name: '',
          mothers_name: '',
          gender: '',
          date_of_birth: ''
        });
      } else {
        const errorData = await response.json();
        alert('Error registering student: ' + JSON.stringify(errorData));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="main-div">
        <NavBar />
        <div className="student-data-entry-form">
          <h1 className="heading">Student Registration Form</h1>
          
          <form onSubmit={handleSubmit}>
            {/* Name Section */}
            <div className="detail-group">
              <label htmlFor="firstname" className="text-label">
                First Name: 
              </label>
              <input
                className="text-input" 
                type="text" 
                name="firstname" 
                id="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                required
              />
              
              <label htmlFor="middlename" className="text-label">
                Middle Name: 
              </label>
              <input
                className="text-input" 
                type="text" 
                name="middlename" 
                id="middlename"
                value={formData.middlename}
                onChange={handleInputChange}
              />
              
              <label htmlFor="lastname" className="text-label">
                Last Name: 
              </label>
              <input
                className="text-input" 
                type="text" 
                name="lastname" 
                id="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Academic Info Section */}
            <div className="detail-group">
              <label htmlFor="student_class" className="text-label">
                Class: 
              </label>
              <select
                className="text-input" 
                name="student_class" 
                id="student_class"
                value={formData.student_class}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Class</option>
                {classes.map((cls, index) => (
                  <option key={index} value={cls.name || cls}>
                    {cls.name || cls}
                  </option>
                ))}
              </select>
              
              <label htmlFor="rollno" className="text-label">
                Roll No: 
              </label>
              <input
                className="text-input" 
                type="number" 
                name="rollno" 
                id="rollno"
                value={formData.rollno}
                onChange={handleInputChange}
                required
              />
              
              <label htmlFor="photo" className="text-label">
                Photo: 
              </label>
              <input
                className="text-input file-input" 
                type="file" 
                name="photo" 
                id="photo"
                accept="image/*"
                onChange={handleInputChange}
              />
            </div>

            {/* Registration Details */}
            <div className="detail-group">
              <label htmlFor="registration_number" className="text-label">
                Registration No: 
              </label>
              <input
                className="text-input" 
                type="text" 
                name="registration_number" 
                id="registration_number"
                value={formData.registration_number}
                onChange={handleInputChange}
                required
              />
              
              <label htmlFor="symbol_number" className="text-label">
                Symbol No: 
              </label>
              <input
                className="text-input" 
                type="text" 
                name="symbol_number" 
                id="symbol_number"
                value={formData.symbol_number}
                onChange={handleInputChange}
                required
              />
              
              <label htmlFor="iemis_code" className="text-label">
                IEMIS Code: 
              </label>
              <input
                className="text-input" 
                type="text" 
                name="iemis_code" 
                id="iemis_code"
                value={formData.iemis_code}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Personal Info */}
            <div className="detail-group">
              <label htmlFor="gender" className="text-label">
                Gender: 
              </label>
              <select
                className="text-input" 
                name="gender" 
                id="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
              
              <label htmlFor="date_of_birth" className="text-label">
                Date of Birth: 
              </label>
              <input
                className="text-input" 
                type="date" 
                name="date_of_birth" 
                id="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Parents Info */}
            <div className="detail-group">
              <label htmlFor="fathers_name" className="text-label">
                Father's Name: 
              </label>
              <input
                className="text-input" 
                type="text" 
                name="fathers_name" 
                id="fathers_name"
                value={formData.fathers_name}
                onChange={handleInputChange}
                required
              />
              
              <label htmlFor="mothers_name" className="text-label">
                Mother's Name: 
              </label>
              <input
                className="text-input" 
                type="text" 
                name="mothers_name" 
                id="mothers_name"
                value={formData.mothers_name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Address */}
            <div className="detail-group address-group">
              <label htmlFor="address" className="text-label">
                Address: 
              </label>
              <textarea
                className="text-input address-input" 
                name="address" 
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="4"
                required
              />
            </div>
            
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentEntryForm;