import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <section className="navigation position-relative mb-0">
            <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md">
                <div className="container-fluid mx-5">
                    <a className='navbar-brand'><img src="logo.png" alt="logo" className='mx-2' /></a>
                    <a className='navbar-brand'><h1 id="LogoTitle" className='d-md-block'>Appoint<span id="LogoSubTitle">Care</span></h1></a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navLinks">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navLinks">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink exact to="/" className="nav-new">Home</NavLink></li>
                            <li className="nav-item"><NavLink to="/Service" className="nav-new">Service</NavLink></li>
                            <li className="nav-item"><NavLink to="/Contact" className="nav-new">Contact Us</NavLink></li>
                            <li className="nav-item"><NavLink to="/DoctorPage" className="nav-new">Doctor Page </NavLink></li>
                            <li className="nav-item"><NavLink to="/PatientInformation" className="nav-new">Patient Page(Files)</NavLink></li>
                        </ul>
                    </div>
                    <div className='collapse navbar-collapse justify-content-end' id="login">
                        <NavLink to="/SignUp" className="linker">Sign Up</NavLink>
                        <NavLink to="/Login" className="login">Login</NavLink>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navigation;
