import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../css/ProfileChangePassword.css"

const ProfileChangePassword = () => {
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
    return (
        <div className="col-7 mx-5 mt-3 mb-5">
            <div className="row align-items-center mb-3">
                <div className="col-5">
                    <h2 className='mb-3'>Change Password</h2>
                </div>
            </div>
            <div className="row info-input">
                <div className="col-12 px-0">
                    <label htmlFor="patientinfo-firstName">Current Password</label>
                    <br />
                    <input type="text" className='form-control' placeholder={storedUserData ? storedUserData.Fname : "First Name"} id='patientinfo-firstName' />
                </div>
                <div className="col-12 px-0">
                    <label htmlFor="patientinfo-lastName">New Password</label>
                    <br />
                    <input type="text" className='form-control' placeholder={storedUserData ? storedUserData.Lname : "Last Name"} id='patientinfo-lastName' />
                </div>
                <div className="col-12 px-0">
                    <label htmlFor="patientinfo-email">Repeat New Password</label>
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
    )
}

export default ProfileChangePassword