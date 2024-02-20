import React, { useState, useEffect } from 'react';
import '../../css/PatientInformation.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Import useHistory

const PatientInformation = ({ userData }) => {
  const location = useLocation();

  const [storedUserData, setStoredUserData] = useState(null);
  const [editedName, setEditedName] = useState('');
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setStoredUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleEditName = async () => {
    try {
      const updatedUserData = { ...storedUserData };
      updatedUserData.response.user.Fname = editedName;
      const response = await axios.put(`https://appointment-care-api.vercel.app/api/v1/auth/Users/${storedUserData.response.user._id}`, updatedUserData); localStorage.setItem('userData', JSON.stringify(updatedUserData));
      setStoredUserData(updatedUserData);
      setEditedName('');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    window.location.href = '/login';
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imageDataUrl = event.target.result;
        document.getElementById('profile-picture').src = imageDataUrl;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section className='patientinformation'>
      <h2 className='text-center mb-5'>Account Settings</h2>
      <div className="container personal-info py-4">
        <div className="row px-4">
          <div className="col-3 general-info">
            <h5><i className="fa-solid fa-pen-to-square"></i> General</h5>
            <h5><i className="fa-solid fa-key"></i> Change Password</h5>
            <h5><i className="fa-solid fa-user"></i> Info</h5>
            <h5><i className="fa-regular fa-calendar-days"></i> Schedule</h5>
            <h5><i className="fa-solid fa-prescription-bottle-medical"></i> Prescription</h5>
            <button onClick={handleLogout} className="btn btn-danger mt-auto">Logout</button>
          </div>
          <div className="col-7 mx-5">
            <div className="row align-items-center mb-3">
              <div className="col-3">
                <h2 className=''>General</h2>
              </div>
              <div className="col-6"></div>
              <div className="col-3 change-profile-2">
                <label htmlFor="profile-image">
                  <img id="profile-picture" className="change-profile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                  <input type="file" id="profile-image" className='mt-2' style={{ display: 'none' }} onChange={handleFileSelect} />
                </label>
              </div>
            </div>
            <div className="row info-input">
              <div className="col-12 px-0">
                <label htmlFor="patientinfo-firstName">First Name</label>
                <br />
                <input type="text" className='form-control' placeholder={storedUserData ? storedUserData.Fname : "First Name"} id='patientinfo-firstName' />
              </div>
              <div className="col-12 px-0">
                <label htmlFor="patientinfo-lastName">Last Name</label>
                <br />
                <input type="text" className='form-control' placeholder={storedUserData ? storedUserData.Lname : "Last Name"} id='patientinfo-lastName' />
              </div>
              <div className="col-12 px-0">
                <label htmlFor="patientinfo-email">Email</label>
                <br />
                <input type="email" className='form-control' placeholder={storedUserData ? storedUserData.email : "Email"} id='patientinfo-email' />
              </div>
              <div className="col-7">
              </div>
              <div className="col-2">
                <button className='save-changes'>Save Changes</button>
              </div>
              <div className="col-2">
                <button className='cancel-changes'>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientInformation;
