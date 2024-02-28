import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';


const DoctorProfileLayout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    window.location.href = '/login';
  };
  return (
    <section className='patientinformation'>
      <h2 className='text-center mb-5'>Account Settings</h2>
      <div className="container personal-info">
        <div className="row ">
          <div className="col-3 general-info pt-5">
            <ul>
              <li className='profile-li'>
                <NavLink exact="true" className="profile-nav" ><i className="fa-solid fa-pen-to-square"></i> General</NavLink>
              </li>
              <li className='profile-li'>
                <NavLink to="ProfileChangePassword" className="profile-nav"><i className="fa-solid fa-key"></i> Change Password</NavLink>
              </li>
              {/* <h5><i className="fa-solid fa-user"></i> Info</h5> */}
              <button onClick={handleLogout} className="btn btn-danger logout-button">Logout</button>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default DoctorProfileLayout