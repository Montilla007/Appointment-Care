import React, { useState } from 'react';
import WelcomeDesign from '../../reusecomponent/WelcomeDesign';
import { NavLink, Outlet } from 'react-router-dom';

const Signuplayout = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <section className='patient-doctor'>
            <div className='container flex-column text-center align-item-center justify-content-center'>
                <div className="container">
                    <WelcomeDesign pic1="schedule.png" pic2="consult.png" pic="takeyourmedicine.png" />
                    <hr />
                    <div className='flex-column justify-content-center align-items-center'>
                        {(activeLink !== 'PatientSignup' && activeLink !== 'DoctorSignup') && (
                            <NavLink to='PatientSignup' className="registeras" onClick={() => handleNavLinkClick('PatientSignup')}>
                                Register as Patient
                            </NavLink>
                        )}
                        {(activeLink !== 'PatientSignup' && activeLink !== 'DoctorSignup') && (
                            <NavLink to='DoctorSignup' className="registeras" onClick={() => handleNavLinkClick('DoctorSignup')}>
                                Register as Doctor
                            </NavLink>
                        )}
                    </div>
                    {(activeLink === 'PatientSignup' || activeLink === 'DoctorSignup') && <Outlet />}
                </div>
            </div>
        </section>
    )
}

export default Signuplayout;
