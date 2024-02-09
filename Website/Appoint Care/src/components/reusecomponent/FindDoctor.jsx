import React from 'react'
import '../../css/FindDoctor.css'

const FindDoctor = () => {
  return (
    <section className="finder">
    <div className="container MainContent2 p-5">
      <h2 className='d-inline-block findp'>Find a Doctor/Provider and book your next visit</h2>
      <select className='d-inline-block' placeholder="Select Location">
          <option value="">Select Location</option>
          <option value="SanFabian">San Fabian</option>
          <option value="Dagupan">Dagupan</option>
          <option value="Calasiao">Calasiao</option>
          <option value="SanCarlos">San Carlos</option>
      </select>
      <input type="text" name="" id="search" placeholder='Search for Speciality, Hospital name, or your Doctor name...'/>
      <button id="find">Search</button>
      <div className='helpdiv'>
        <a className='text-decoration-none help'>Need Help?</a>
      </div>
    </div>
  </section>
  )
}

export default FindDoctor