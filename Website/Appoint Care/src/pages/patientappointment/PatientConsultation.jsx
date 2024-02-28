import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PatientConsultation = ({ userData }) => {
    const [loading, setLoading] = useState(true);
    const [patientInfo, setPatientInfo] = useState(null);
    const [scheduleInfo, setScheduleInfo] = useState(null);
    console.log(scheduleInfo)
    const [doctorInfo, setDoctorInfo] = useState(null);
    useEffect(() => {
        const fetchPatient = async () => {
            try {
                if (userData && userData._id) {
                    const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/appoint/schedule/${userData._id}`);
                    setPatientInfo(response.data);
                    const response2 = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users/${userData._id}`);
                    setScheduleInfo(response2.data)
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

    if (!patientInfo || !patientInfo.schedules || patientInfo.schedules.length === 0 || scheduleInfo.consultation === " ") {
        return (
            <section className='patient-booking'>
                <div className="container">
                    <div className='text-center'>
                        <img src="/public/consultation-vector-2.png" alt="patient-vector" />
                        <h2 className='mt-5'>No Prescription</h2>
                        <p className='lead'>You have no prescription at the moment. Book an Appoinment</p>
                    </div>
                </div>
            </section>
        );
    }
    return (
        <div className='container'>
            <h2 className='text-center'>Consultation History</h2>
        </div>
    )
}

export default PatientConsultation