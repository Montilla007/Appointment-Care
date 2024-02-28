import React, { useEffect, useState } from 'react'
import "../../css/DoctorRejectedPatients.css"
import { NavLink } from 'react-router-dom'

import axios from 'axios';


const DoctorRejectedPatients = ({ userData }) => {
  const [patientList, setPatientList] = useState([]);
  console.log(patientList)
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/appoint/schedule/${userData._id}`);
        console.log(response.data);
        setPatientList(response.data);
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    };

    fetchPatient();
  }, [userData]);
  if (!userData || !userData._id) {
    return <div>No user data available.</div>;
  }
  if (!patientList || !patientList.schedules || patientList.schedules.length === 0) {
    return (
      <section className='patient-booking'>
        <div className="container">
          <div className='text-center'>
            <img src="/public/consultation-vector-3.png" alt="patient-vector" />
            <h2>No Bookings</h2>
            <p className='lead'>You have no Patients at the moment. Check Patient Appointment List</p>
          </div>
        </div>
      </section>
    );
  }

  const rejectedBookings = patientList.schedules.filter(x => x.status === "Rejected");
  if (rejectedBookings.length === 0) {
    return (
      <section className='patient-booking'>
        <div className="container">
          <div className='text-center'>
            <img src="/public/consultation-vector-3.png" alt="patient-vector" />
            <h2 className=''>No Rejected Bookings</h2>
            <p className='lead'>You have no rejected Patients at the moment.</p>
          </div>
        </div>
      </section>
    );
  }



  const doctorAcceptReject = async (patientId, status) => {
    try {
      await axios.put(
        `https://appointment-care-api.vercel.app/api/v1/appoint/verify/${userData._id}`,
        { patientId, status }
      );
      const response = await axios.get(
        `https://appointment-care-api.vercel.app/api/v1/appoint/schedule/${userData._id}`
      );
      setPatientList(response.data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }
  const patients = patientList && patientList.schedules ? patientList.schedules.map((schedule, index) => {
    if (schedule.status === "Rejected") {
      return (
        <div key={index} className='container'>
          <div className="schedule-container-2">
            <h2 className='status-2'>Status: {schedule.status}</h2>
            <div className="row">
              <div className="first-half">
                <div className="avatar-container">
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt="avatar"
                  />
                </div>
                <div className="details-container">
                  <div className="personal-details">
                    <h2>{schedule.fullName}</h2>
                    <span className='speciality-2'><i className="fa-regular fa-envelope"></i> <span>{schedule.email}</span></span>
                    <br />
                    <span className='speciality-2'><i className="fa-solid fa-phone"></i> <span className=''>{schedule.number} </span></span>
                    <div className="other-details">
                    </div>
                  </div>
                  <div className="other-details-2">
                    <div className="svg-component-2">
                      {schedule.online ? <span><i className="fa-solid fa-video ">
                      </i><span className='important-bold'>Online Consultation</span></span>
                        : <span>
                          <i className="fa-solid fa-person-running"></i>
                          <span className='important-bold'>Face to Face Consultation</span></span>}
                      {schedule.status === "Request" ?
                        <div>
                          <i className="fa-regular fa-calendar"></i>
                          <span className="span-bold"
                            style={{ textTransform: "capitalize" }}>from: {schedule.date} <br /><i className="fa-solid fa-pen-to-square"></i>to: {schedule.localDate}
                          </span>
                        </div>
                        : <div>
                          <span className="span-bold" ><i className=" fa-regular fa-calendar"></i> {schedule.date}</span>
                        </div>}
                    </div>
                    <div className="svg-component-2">
                      {schedule.status === "Request" ? <div> <i className="fa-solid fa-clock"></i>
                        <span className="span-bold"
                          style={{ textTransform: "capitalize" }}>Time: {schedule.time} (24 Hour Format) <br /> <i className="fa-solid fa-pen-to-square"></i>To: {schedule.localTime}
                        </span>
                      </div>
                        : <div>
                          <div> <i className="fa-solid fa-clock"></i>
                            <span className="span-bold"
                              style={{ textTransform: "capitalize" }}>Time: {schedule.time} (24 Hour Format)
                            </span>
                          </div>
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="second-half">
                <hr />
                <div className="availability-consultation">
                  <div className='svg-row'>
                    <div className='svg-component'>
                      <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-logo">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.26701 3.88159C6.91008 3.83027 7.52057 3.5774 8.01158 3.15897C9.15738 2.18252 10.8426 2.18252 11.9884 3.15897C12.4794 3.5774 13.0899 3.83027 13.733 3.88159C15.2336 4.00135 16.4253 5.19299 16.545 6.69365C16.5964 7.33672 16.8492 7.94721 17.2677 8.43821C18.2441 9.58401 18.2441 11.2693 17.2677 12.4151C16.8492 12.9061 16.5964 13.5166 16.545 14.1596C16.4253 15.6603 15.2336 16.8519 13.733 16.9717C13.0899 17.023 12.4794 17.2759 11.9884 17.6943C10.8426 18.6707 9.15738 18.6707 8.01158 17.6943C7.52057 17.2759 6.91008 17.023 6.26701 16.9717C4.76636 16.8519 3.57471 15.6603 3.45496 14.1596C3.40364 13.5166 3.15077 12.9061 2.73234 12.4151C1.75589 11.2693 1.75589 9.58401 2.73234 8.43821C3.15077 7.94721 3.40364 7.33672 3.45496 6.69365C3.57471 5.19299 4.76636 4.00135 6.26701 3.88159ZM13.7071 9.13374C14.0976 8.74322 14.0976 8.11005 13.7071 7.71953C13.3166 7.329 12.6834 7.329 12.2929 7.71953L9 11.0124L7.70711 9.71953C7.31658 9.329 6.68342 9.329 6.29289 9.71953C5.90237 10.1101 5.90237 10.7432 6.29289 11.1337L8.29289 13.1337C8.68342 13.5243 9.31658 13.5243 9.70711 13.1337L13.7071 9.13374Z" fill="#10B981"></path>
                      </svg>
                      <span>BookingID: {schedule._id}</span>
                    </div>
                  </div>
                  <div className='button-request'>
                    <NavLink ><button className='btn-viewprofile-3' onClick={() => doctorAcceptReject(schedule.patientId, "Pending")}>Recover</button></NavLink>
                    <NavLink ><button className='wew mx-2' onClick={() => doctorAcceptReject(schedule.patientId, "Rejected")}>Delete</button></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div >
      );
    }
  }) : null;

  return (
    <section className='rejected-patients'>
      <h2 className='text-center mt-3 mb-4 r'>Rejected Patients</h2>
      <div>
        {patients}
      </div>

    </section>
  )
}

export default DoctorRejectedPatients