import React, { useState } from 'react';
import './OrgSetup.css';

const OrgSetup = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    tel_phone_no: '',
    phone_no: '',
    email: '',
    logo: null,
    pan_no: '',
    vat_no: '',
    registration_certificate: null,
    letter_head: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/org/', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      alert('Organization data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit organization data.');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">Organization Setup</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name" className="label">Organization Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="input"
              placeholder="Enter organization name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="label">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              rows="4"
              className="textarea"
              placeholder="Enter organization address"
            ></textarea>
          </div>

          <div className="grid">
            <div className="form-group">
              <label htmlFor="tel_phone_no" className="label">Telephone Number</label>
              <input
                type="tel"
                id="tel_phone_no"
                name="tel_phone_no"
                value={formData.tel_phone_no}
                onChange={handleInputChange}
                className="input"
                placeholder="Enter telephone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone_no" className="label">Mobile Number</label>
              <input
                type="tel"
                id="phone_no"
                name="phone_no"
                value={formData.phone_no}
                onChange={handleInputChange}
                className="input"
                placeholder="Enter mobile number"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input"
              placeholder="Enter email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="logo" className="label">Logo</label>
            <input
              type="file"
              id="logo"
              name="logo"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
          </div>

          <div className="grid">
            <div className="form-group">
              <label htmlFor="pan_no" className="label">PAN Number</label>
              <input
                type="text"
                id="pan_no"
                name="pan_no"
                value={formData.pan_no}
                onChange={handleInputChange}
                className="input"
                placeholder="Enter PAN number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="vat_no" className="label">VAT Number</label>
              <input
                type="text"
                id="vat_no"
                name="vat_no"
                value={formData.vat_no}
                onChange={handleInputChange}
                className="input"
                placeholder="Enter VAT number"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="registration_certificate" className="label">Registration Certificate</label>
            <input
              type="file"
              id="registration_certificate"
              name="registration_certificate"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="file-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="letter_head" className="label">Letterhead</label>
            <input
              type="file"
              id="letter_head"
              name="letter_head"
              accept=".pdf,.doc,.docx,.jpg,.png"
              onChange={handleFileChange}
              className="file-input"
            />
          </div>

          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default OrgSetup;