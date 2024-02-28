import React from 'react';
import "../../css/DoctorHomePage.css";
import Calendar from 'react-calendar'
import "../../css/Calendar.css"


const DoctorHomePage = ({ userData }) => {
    console.log(userData);
    return (
        <section className='doctor-homepage'>
            <div className="container-fluid">
                <div className="row justify-content-between flex-nowrap align-items-center">
                    <div className="col-6">
                        <h2 className="Goodmorning">Good Morning <span id="name-of-doctor">Dr. {userData.Fname}!</span></h2>
                    </div>
                    <div className="col-2">
                        <div className='doctor-picture-box'>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                alt="patient-image" />
                            {userData.Fname} {userData.Lname}
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className="col-6 rectangle-2">
                        <div className="row">
                            <div className="col-4 mx-3">
                                <h3>Visits for Today</h3>
                                <h3 className='number-of-new-patients'>104</h3>
                                <div className='row my-3'>
                                    <div className='new-patients-2'>
                                        <h3>New Patients</h3>
                                        <p className='patients-all'>40</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">
                            </div>
                            <div className='col-5'>
                                <div className='doctor-image align-items-center justify-content-center'>
                                    <img src="doctor2.png" alt="doctor-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        <h2>Calendar</h2>
                        <Calendar />
                    </div>
                </div>
                <div className="row mt-3 ">
                    <div className="col-6 patient-data">
                        <div className="row">
                            <div className="col-6">
                                <h2>Patient List</h2>
                                <div></div>
                            </div>
                            <div className="col-6">
                                <h3>Consultation</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div>
            </div>
        </section >
    );
};

export default DoctorHomePage;
