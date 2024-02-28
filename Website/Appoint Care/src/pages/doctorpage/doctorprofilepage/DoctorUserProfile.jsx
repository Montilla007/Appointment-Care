import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorUserProfile = ({ userData }) => {
  const [editedUserData, setEditedUserData] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEditedUserData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      if (userData && userData._id) {
        const response = await axios.put(`https://appointment-care-api.vercel.app/api/v1/person/users/${userData._id}`, editedUserData);
        localStorage.setItem('userData', JSON.stringify(response.data.user));
        console.log("Successfully updated")
        window.location.reload();
        setEmailExists(false);

      } else {
        console.error('User data is invalid.');
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setEmailExists(true);
      } else {
        console.error('Error updating user data:', error);
      }
    }
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
  const [emailExists, setEmailExists] = useState(false);
  return (
    <div className="col-7 mx-5 mt-3 mb-5">
      <div className="row align-items-center mb-3">
        <div className="col-3">
          <h2 className=''>General</h2>
        </div>
        <div className="col-6"></div>
        <div className="col-3 change-profile-2">
          <label htmlFor="profile-image">
            <img id="profile-picture" className="change-profile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile picture" />
            <input type="file" id="profile-image" className='mt-2' style={{ display: 'none' }} onChange={handleFileSelect} />
          </label>
        </div>
      </div>
      <div className="row info-input">
        <div className="col-12 px-0">
          <label htmlFor="Fname">First Name</label>
          <br />
          <input type="text" className='form-control' placeholder={userData ? userData.Fname : "First Name"}
            value={editedUserData ? editedUserData.Fname || "" : ""} id='Fname' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label htmlFor="Lname">Last Name</label>
          <br />
          <input type="text" className='form-control' placeholder={userData ? userData.Lname : "Last Name"}
            value={editedUserData ? editedUserData.Lname || "" : ""} id='Lname' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label htmlFor="age">Age</label>
          <br />
          <input type="number" className='form-control' placeholder={userData ? userData.age : "Age"}
            value={editedUserData ? editedUserData.age || "" : ""} id='age' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label htmlFor="gender">Gender</label>
          <br />
          <input type="text" className='form-control' placeholder={userData ? userData.gender : "Gender"}
            value={editedUserData ? editedUserData.gender || "" : ""} id='gender' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label htmlFor="md">MD Year</label>
          <br />
          <input type="number" className='form-control' placeholder={userData ? userData.md : "MD Year"}
            value={editedUserData ? editedUserData.md || "" : ""} id='md' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label htmlFor="specialty">Specialty</label>
          <br />
          <input type="text" className='form-control' placeholder={userData ? userData.specialty : "specialty"}
            value={editedUserData ? editedUserData.specialty || "" : ""} id='specialty' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label htmlFor="number">Number</label>
          <br />
          <input type="text" className='form-control' placeholder={userData ? userData.number : "Phone number"}
            value={editedUserData ? editedUserData.number || "" : ""} id='number' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label htmlFor="hn">Clinic House Number</label>
          <br />
          <input type="number" className='form-control' placeholder={userData ? userData.hn : "House number"}
            value={editedUserData ? editedUserData.hn || "" : ""} id='hn' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label htmlFor="barangay">Clinic Barangay</label>
          <br />
          <input type="text" className='form-control' placeholder={userData ? userData.barangay : "Barangay clinic"}
            value={editedUserData ? editedUserData.barangay || "" : ""} id='barangay' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label htmlFor="municipality">Clinic Municipality</label>
          <br />
          <input type="text" className='form-control' placeholder={userData ? userData.municipality : "Municipality clinic"}
            value={editedUserData ? editedUserData.municipality || "" : ""} id='municipality' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label htmlFor="province">Clinic Province</label>
          <br />
          <input type="text" className='form-control' placeholder={userData ? userData.province : "Province clinic"}
            value={editedUserData ? editedUserData.province || "" : ""} id='province' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label htmlFor="consultPrice">Consultation Price</label>
          <br />
          <input type="number" className='form-control' placeholder={userData ? userData.consultPrice : "Consultation Price"}
            value={editedUserData ? editedUserData.consultPrice || "" : ""} id='consultPrice' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" className='form-control' placeholder={userData ? userData.email : "Email"}
            value={editedUserData ? editedUserData.email || "" : ""} id='email' onChange={handleInputChange} />
        </div>
        <div className="col-12 px-0">
          <label className='d-block radio-button-text'>Online consultation:</label>
          <div className='row align-items-center mx-auto'>
            <div className="col-2 p-0">
              <input className='radio-button' type="radio" id="online" name="online" value={true} onChange={handleInputChange} />
              <label id="FemaleLabel" className='radio-button-text' htmlFor="female">True</label>
            </div>
            <div className="col-2 p-0">
              <input className='radio-button' type="radio" id="online" name="online" value={false} onChange={handleInputChange} />
              <label id="MaleLabel" className='radio-button-text' htmlFor="male">False</label>
            </div>
          </div>
        </div>
        {emailExists && <div className="alert alert-danger alert-email" role="alert">Email already exists. Please use another email.</div>}

        <div className="col-7">
        </div>
        <div className="col-2">
          <button className='save-changes' onClick={handleUpdateProfile}>Save Changes</button>
        </div>
        <div className="col-2">
          <button className='cancel-changes'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default DoctorUserProfile