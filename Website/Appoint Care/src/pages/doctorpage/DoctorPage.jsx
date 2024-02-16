import React, { useState } from 'react';
import '../../css/DoctorPage.css';
import { NavLink } from "react-router-dom"


const DoctorPage = () => {
  return (
    <section className='doctor-page'>
      <div className="wrapper">
        <aside id="sidebar">
          <div className="d-flex">
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a href="" className="sidebar-link">
                <i className='lni lni-grid-alt'></i>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="" className="sidebar-link">
                <i className="fa-regular fa-calendar"></i>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="" className="sidebar-link">
                <i className="fa-solid fa-list-check"></i>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="" className="sidebar-link">
                <i className="fa-solid fa-person"></i>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="" className="sidebar-link">
                <i className="fa-solid fa-ban"></i>
              </a>
            </li>
            <li className="sidebar-item">
              <NavLink to="/" className="sidebar-link"><i className="fa-solid fa-right-from-bracket"></i></NavLink>
            </li>
          </ul>
        </aside>
        <div className='main p-3'>
          <div className='container-fluid doctor-main'>
            <div className="row">
              <div className="col-4">
                <h2 className='Goodmorning'>Good Morning <span id="name-doctor">Dr. Kim!</span></h2>
              </div>
            </div>
            <div className="col-6 rectangle">
              <div className="row">
                <div className="col-6">
                  <h2>Visits for Today</h2>
                  <h2 id='number-of-new-patients'>104</h2>
                  <div className="row mt-5">
                    <div className="col-5 new-patients">
                      <h3>New Patients</h3>
                      <h3>40</h3>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5 old-patients">
                      <h3>Old Patients</h3>
                      <h3>64</h3>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <img src="/src/assets/images/doctor2.png" alt="doctor2" id="doctorpage-doctor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorPage;