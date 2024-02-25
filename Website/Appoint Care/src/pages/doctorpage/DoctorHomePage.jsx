import React from 'react'

const DoctorHomePage = () => {
    return (
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
                        <img src="doctor2.png" alt="doctor2" id="doctorpage-doctor" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorHomePage