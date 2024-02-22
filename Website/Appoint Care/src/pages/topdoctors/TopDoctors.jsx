import React from 'react'
import '../../css/TopDoctors.css'
import '../../css/Service.css';
import DoctorCard from '../../components/reusecomponent/DoctorCard';

const Topdoctors = () => {
  return (
    <section className='FindDoctor-Section'>

        <DoctorCard img="me.png" />
    </section >

  )
}

export default Topdoctors