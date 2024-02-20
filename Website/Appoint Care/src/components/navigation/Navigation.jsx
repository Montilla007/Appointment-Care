import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Navigation.css';

const Navigation = ({ userData }) => {
    const [storedUserData, setStoredUserData] = useState(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        console.log('Stored User Data:', storedUserData); // Check if stored user data is retrieved
        if (storedUserData) {
            setStoredUserData(JSON.parse(storedUserData));
        }
    }, []);
    return (
        <section className="navigation position-relative mb-0 mt-1">
            <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md">
                <div className="container-fluid mx-5">
                    <a href="/" className='navbar-brand'><img src="/src/assets/images/logo.png" alt="logo" className='mx-2' /></a>
                    <a href="/" className='navbar-brand'><h1 id="LogoTitle" className='d-md-block'>Appoint<span id="LogoSubTitle">Care</span></h1></a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navLinks">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navLinks">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink exact="true" to="/" className="nav-new">Home</NavLink></li>
                            <li className="nav-item"><NavLink to="/Service" className="nav-new">Service</NavLink></li>
                            <li className="nav-item"><NavLink to="/TopDoctors" className="nav-new">Find Doctor</NavLink></li>
                            <li className="nav-item"><NavLink to="/Contact" className="nav-new">Contact Us</NavLink></li>
                            {userData && <li className="nav-item"><NavLink to="/PatientInformation" className="nav-new">User Info</NavLink></li>}
                        </ul>
                    </div>

                    <div className='collapse navbar-collapse justify-content-end'>
                        {storedUserData ? (
                            <div className='userData-Name'>
                                {storedUserData.Fname} {storedUserData.Lname}
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                    alt="patient-image" />
                            </div>
                        ) : userData && userData.response.user ? (
                            <div className='userData-Name'>
                                {userData.response.user.Fname} {userData.response.user.Lname}
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                    alt="patient-image" />
                            </div>
                        ) : (
                            <div id="login">
                                <NavLink to="/Signup" className="linker">Sign Up</NavLink>
                                <NavLink to="/Login" className="login">Login</NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navigation;
