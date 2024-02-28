import React from 'react'
import { useParams, NavLink } from "react-router-dom"
import axios from 'axios';
import "../../css/Appointment.css"
import WelcomeDesign from '../../components/reusecomponent/WelcomeDesign';

const Appointment = ({ userData }) => {
    const [doctorInfo, setDoctorInfo] = React.useState([])
    const [appointmentInfo, setAppointmentInfo] = React.useState({
        fullName: '',
        email: '',
        number: '',
        doctorId: '',
        online: false,
        f2f: true,
        date: '',
        time: '',
    })
    console.log(appointmentInfo)
    const [errors, setErrors] = React.useState({
        date: '',
        time: '',
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'online') {
            setAppointmentInfo(prevState => ({
                ...prevState,
                online: true,
                f2f: false
            }));
        } else if (id === 'f2f') {
            setAppointmentInfo(prevState => ({
                ...prevState,
                online: false,
                f2f: true
            }));
        } else {
            if ((id === 'number' || id === 'email') && value.trim() === '') {
                setAppointmentInfo(prevState => ({
                    ...prevState,
                    [id]: id === 'number' ? userData.number : userData.email
                }));
            } else {
                setAppointmentInfo(prevState => ({
                    ...prevState,
                    [id]: value
                }));
            }
        }
    };
    const params = useParams();
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users/${params.id}`);
                setDoctorInfo(response.data);
                setAppointmentInfo(prevState => ({
                    ...prevState,
                    doctorId: response.data._id // Assuming _id is the correct property name
                }));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [params.id]);
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(
                `https://appointment-care-api.vercel.app/api/v1/appoint/request/${userData._id}`,
                appointmentInfo
            );
            console.log(response);
            window.location.href = '/'

        } catch (error) {
            console.error('Error submitting appointment:', error);
        }
    };
    const [emailExists, setEmailExists] = React.useState(false);
    console.log(doctorInfo)
    return (
        <section className='section-appointment'>
            <div className='text-center mb-5'>
                <WelcomeDesign />
                <hr />
            </div>
            <div className="container">
                <div className='row'>
                    {/* <div className="col-"></div> */}
                    <div className="col-3 appointment-doctor-info">
                        <img src="https://d1c0x5rkl7k63i.cloudfront.net/upload/doctor/avatar/kRtqlvEO4x94ddXJCeeGpoAvIJszZz07YTP1ffhoLVQPR9Uzac.png" alt="doctor-picture" />
                        <br />
                        <h2 className='doctor-name-2 text-capitalize'>{doctorInfo.Fname} {doctorInfo.Lname}</h2>
                        <span className='speciality-2 text-capitalize'>{doctorInfo.specialty}</span>
                        <br />
                        <span className='md-doctor-2'>MD since {doctorInfo.md}</span>
                    </div>
                    <div className="col-8 book-an-appointment">
                        <h2 className='mb-3'>Book an Appointment</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="fullName">Full Name*</label>
                                <br />
                                <input type="text" className="form-control" id="fullName" placeholder={userData ? `${userData.Fname} ${userData.Lname}` : "Full Name"} onChange={handleChange} value={appointmentInfo.fullName} required />
                            </div>
                            <div>
                                <label htmlFor="email">Email*</label>
                                <br />
                                <input type="email" className="form-control" id="email" placeholder={userData ? userData.email : "Email"} onChange={handleChange} value={appointmentInfo ? appointmentInfo.email : userData.email} required />
                            </div>
                            <div>
                                <label htmlFor="number">Phone Number*</label>
                                <br />
                                <input type="text" className="form-control" id="number" placeholder={userData ? userData.number : "Phone Number"} onChange={handleChange} value={appointmentInfo.number} required />
                            </div>
                            <div>
                                <label htmlFor="date">Date*</label>
                                <br />
                                <input type="date" className="form-control" id="date" value={appointmentInfo.date} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="time">Time*</label>
                                <br />
                                <input type="time" className="form-control" id="time" value={appointmentInfo.time} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="">Appointment Type</label>
                                <div className='mx-auto appointment-f2f'>
                                    <div>
                                        <input type="radio" id="f2f" name="consultationType" value="f2f" checked={appointmentInfo.f2f} onChange={handleChange} />
                                        <label htmlFor="f2f">F2F</label>
                                    </div>
                                    {doctorInfo.online && <div>
                                        <input type="radio" id="online" name="consultationType" value="online" checked={appointmentInfo.online} onChange={handleChange} />
                                        <label htmlFor="online">Online</label>
                                    </div>}
                                </div>
                            </div>
                            <div className='book-button'>
                                <NavLink to="/"><button type="submit" className='btn-viewprofile px-3'>Go back</button></NavLink>
                                <button type="submit" className='btn-appointment'>Book Appointment</button>
                            </div>
                            {emailExists && <div className="alert alert-danger alert-email" role="alert">Email already exists. Please use another email.</div>}
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Appointment
