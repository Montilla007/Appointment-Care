import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useParams } from "react-router-dom"
import axios from 'axios';


const Overview = () => {
    const [doctorInfo, setDoctorInfo] = React.useState([])
    const params = useParams();
    console.log(params.id)
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users/${params.id}`);
                setDoctorInfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [params.id]);

    return (
        <div className="row">
            <h3 className='professional'>Professional Info</h3>
            <p className='doctor-introduction lead '>Dr. <strong>{doctorInfo.Fname} {doctorInfo.Lname}</strong> is in the field of {doctorInfo.specialty}.</p>
            <br />
            <p className='doctor-paragraph lead mx-2'><strong className='margin-left-doctorName'>{doctorInfo.Fname} {doctorInfo.Lname}</strong>, a dedicated {doctorInfo.age}-year-old <strong>{doctorInfo.specialty}</strong>, offers specialized {doctorInfo.specialty} care to patients in need at <strong style={{ textTransform: "capitalize" }}>{doctorInfo.hn} {doctorInfo.barangay} {doctorInfo.municipality} {doctorInfo.province}</strong>. Patients
                are encouraged to seek consultation with {doctorInfo.Fname} {doctorInfo.Lname} through convenient walk-in visits or by scheduling personalized appointments.
                The consultation fee is set at  <strong>Php {doctorInfo.consultPrice}</strong>. To arrange an appointment, individuals can utilize the
                provided contact information, including the clinic's phone number: <strong>{doctorInfo.number}</strong>. {doctorInfo.Fname} {doctorInfo.Lname} accommodates
                <strong> face to face
                    consultations{doctorInfo.online ? " and virtual appointments" : ""}</strong>, ensuring accessibility and flexibility to meet patients' needs.
                For inquiries or to schedule appointments, please don't hesitate to reach out via email at <strong>{doctorInfo.email}</strong>. {doctorInfo.Fname} {doctorInfo.Lname} remains steadfast
                in delivering comprehensive {doctorInfo.specialty} expertise tailored to each patient, placing utmost importance on promoting health and wellness in every interaction.</p>
        </div>
    )
}

export default Overview