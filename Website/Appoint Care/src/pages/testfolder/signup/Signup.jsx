import React from 'react';
import WelcomeDesign from '../../../components/reusecomponent/WelcomeDesign';
import { NavLink } from 'react-router-dom';
// import '../../css/Signup.css';

const Signup = () => {
  return (
    <section className='patient-doctor'>
      <div className='container flex-column text-center align-item-center justify-content-center'>
        <div className="container">
          <WelcomeDesign />
          <hr />
          <div className='flex-column justify-content-center align-items-center'>
            <NavLink to='/PatientSignup' className="registeras">Register as Patient </NavLink>
            <NavLink to='/PatientSignup' className="registeras">Register as Doctor</NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;