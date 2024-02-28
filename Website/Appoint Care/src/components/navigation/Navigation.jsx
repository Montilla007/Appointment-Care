import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Navigation.css';
import logoImage from "/logo.png"

const Navigation = ({ userData }) => {
    const [storedUserData, setStoredUserData] = useState(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setStoredUserData(JSON.parse(storedUserData));
        }
    }, []);
    return (
        <section className="navigation position-relative mb-0 mt-1">
            <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md">
                <div className="container-fluid mx-5">
                    <a href="/" className='navbar-brand'><img src={logoImage} alt="logo" className='mx-2' /></a>
                    <a href="/" className='navbar-brand'><h1 id="LogoTitle" className='d-md-block'>Appoint<span id="LogoSubTitle">Care</span></h1></a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navLinks">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navLinks">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink exact="true" to="/" className={({ isActive }) => isActive ? "nav-active" : "nav-new"}>Home</NavLink></li>
                            {/* <li className="nav-item"><NavLink to="/Service" className={({ isActive }) => isActive ? "nav-active" : "nav-new"}>Service</NavLink></li> */}
                            <li className="nav-item"><NavLink to="/TopDoctors" className={({ isActive }) => isActive ? "nav-active" : "nav-new"}>Find Doctor</NavLink></li>
                            {storedUserData && <li className="nav-item"><NavLink to="PatienAppointment" className={({ isActive }) => isActive ? "nav-active" : "nav-new"}>My Bookings</NavLink></li>}
                            {storedUserData && <li className="nav-item"><NavLink to="PatientConsultation" className={({ isActive }) => isActive ? "nav-active" : "nav-new"}>Consultation</NavLink></li>}
                            <li className="nav-item"><NavLink to="/Contact" className={({ isActive }) => isActive ? "nav-active" : "nav-new"}>Contact Us</NavLink></li>

                        </ul>
                    </div>

                    <div className='collapse navbar-collapse justify-content-end'>
                        {storedUserData ? (
                            <NavLink to="/ProfileLayout">
                                <div className='userData-Name'>
                                    {storedUserData.Fname} {storedUserData.Lname}
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                        alt="patient-image" />
                                </div>
                            </NavLink>
                        ) : userData && userData.response.user ? (
                            <NavLink to="/ProfileLayout">

                                <div className='userData-Name'>

                                    {userData.Fname} {userData.Lname}
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                        alt="patient-image" />
                                </div>
                            </NavLink>

                        ) : (
                            <div id="login">
                                <NavLink to="Signup" className={({ isActive }) => isActive ? "nav-active2" : "linker"}>Sign Up</NavLink>
                                <NavLink to="/Login" className={({ isActive }) => isActive ? "nav-active2" : "login"}>Login</NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navigation;
