import React, { useState, useEffect } from 'react'
import '../../css/DoctorPatients.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import VectorTwo from "../../../public/consultation-vector-2.png"


const DoctorPatients = ({ userData }) => {
  const [loading, setLoading] = useState(true);
  const [patientInfo, setPatientInfo] = React.useState(null);
  const [doctorInfo, setDoctorInfo] = useState(null);
  console.log(patientInfo);
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        if (userData && userData._id) {
          const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/appoint/schedule/${userData._id}`);
          setPatientInfo(response.data);
          setLoading(false);
          if (response.data && response.data.schedules && response.data.schedules.length > 0) {
            const doctorId = response.data.schedules[0].doctorId;
            const response3 = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users/${doctorId}`);
            setDoctorInfo(response3.data);
          }
        }
      } catch (e) {
        console.error('Error fetching data:', e);
        setLoading(false);
      }
    };

    fetchPatient();
  }, [userData]);

  if (!userData || !userData._id) {
    return <div>No user data available.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!patientInfo || !patientInfo.schedules || patientInfo.schedules.length === 0) {
    return (
      <section className='patient-booking'>
        <div className="container">
          <div className='text-center'>
            <img src={VectorTwo} alt="patient-vector" />
            <h2>No Bookings</h2>
            <p className='lead'>You have no Patients at the moment. Check Patient Appointment List</p>
          </div>
        </div>
      </section>
    );
  }
  const acceptedBookings = patientInfo.schedules.filter(x => x.status === "Accepted");
  if (acceptedBookings.length === 0) {
    return (
      <section className='patient-booking'>
        <div className="container">
          <div className='text-center'>
            <img src={VectorTwo} alt="patient-vector" />
            <h2 className='mt-5'>No Accepted Bookings</h2>
            <p className='lead'>You have no accepted Patients at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  const patients = patientInfo.schedules.map((x, index) => {
    if (x.status === "Accepted") {
      return (
        <div key={index} className="bookings mb-5">
          <h2 className='status-3'>Status: {x.status}</h2>
          <h3>Doctor Information</h3>
          <div className="row ">
            <div className="first-half ">
              <img src="https://d1c0x5rkl7k63i.cloudfront.net/upload/doctor/avatar/kRtqlvEO4x94ddXJCeeGpoAvIJszZz07YTP1ffhoLVQPR9Uzac.png"
                alt="" />
              <div className="details-container">
                <div className="personal-details mx-4">
                  <span className='doctor-name text-capitalize'>{doctorInfo ? `${doctorInfo.Fname} ${doctorInfo.Lname}` : 'N/A'}</span>
                  <br />
                  <span className='speciality text-capitalize'>{doctorInfo ? `${doctorInfo.specialty}` : 'N/A'}</span>
                  <br />
                  <span className='md-doctor' >MD Since {doctorInfo ? `${doctorInfo.md}` : 'N/A'}</span>
                  <br />
                </div>
                <div className="other-details">
                  <span><i className="fa-regular fa-envelope"></i> {doctorInfo ? doctorInfo.email : 'N/A'}</span>
                  <br />
                  <span><i className="fa-solid fa-phone"></i> {doctorInfo ? doctorInfo.number : 'N/A'}</span>
                  <br />
                  <span><i className="fa-solid fa-money-bill-transfer"></i>₱ {doctorInfo ? doctorInfo.consultPrice : 'N/A'}</span>
                </div>
              </div>
            </div>
            <h3 className='mt-5'>Appointment Request Details</h3>
            <div className="first-half">
              <div className="details-container">
                <div className="personal-details">
                  {x.online ? <span><i className="fa-solid fa-video">
                  </i><span className='important-bold'>Online Consultation</span></span>
                    : <span>
                      <i className="fa-solid fa-person-running"></i>
                      <span className='important-bold'>Face to Face Consultation</span></span>}
                  <br />
                  <span><i className="fa-regular fa-calendar"></i><span className='important-bold'>{x.date}</span></span>
                  <br />
                  <span><i className="fa-solid fa-clock"></i><span className='important-bold'>{x.time} (24 Hours Format)</span></span>
                </div>
                <div className="other-details">
                  {x.online ? <div></div>
                    : <div><span className='text-capitalize'><i className="fa-regular fa-building"></i> <span className='important-bold'> {doctorInfo ? doctorInfo.hn : 'N/A'} {doctorInfo ? doctorInfo.barangay : 'N/A'}</span></span>
                      <br />
                      <span className='text-capitalize'><i className="fa-solid fa-location-dot"></i><span className='text-capitalize important-bold'>{doctorInfo ? doctorInfo.municipality : 'N/A'} {doctorInfo ? doctorInfo.province : 'N/A'}</span></span>
                      <br /></div>}
                </div>
              </div>
            </div>
            <h3 className='mt-5'>PATIENT Info</h3>
            <div className="first-half">
              <img src="/public/me.png"
                alt="" />
              <div className="details-container mx-4">
                <div className="personal-details">
                  <span className='doctor-name'>{x.fullName} </span>
                  <br />
                  <span><i className="fa-regular fa-envelope"></i> {x.email}</span>
                  <br />
                  <span><i className="fa-solid fa-phone"></i> {x.number}</span>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <NavLink to={`Consult/${x.patientId}`}><button className='btn-appointment-3 mt-5 mb-3'>Consult a Prescription</button></NavLink>
        </div >
      );
    }
  });


  return (
    <section className='patient-accepted-list'>
      <div className="container">
        <h2 className='text-center mt-3 mb-5'>Patient Appointment</h2>
        {patients}
      </div>
    </section>
  )
}

export default DoctorPatients