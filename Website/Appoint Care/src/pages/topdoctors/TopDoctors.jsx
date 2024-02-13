import React from 'react'
import FindDoctor from '../../components/reusecomponent/FindDoctor'
import '../../css/TopDoctors.css'
import '../../css/Service.css';
import DoctorCard from '../../components/reusecomponent/DoctorCard';

const Topdoctors = () => {
  return (
    <section className='FindDoctor-Section'>
      <div>
        <FindDoctor />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </section >

  )
}

export default Topdoctors