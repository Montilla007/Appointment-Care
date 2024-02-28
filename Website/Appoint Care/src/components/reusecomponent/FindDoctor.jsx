import React from 'react'
import '../../css/FindDoctor.css'
import { NavLink } from 'react-router-dom'

const FindDoctor = () => {
  return (
    <section className="finder">
      <div className="container MainContent2 p-5">
        <h2 className='d-inline-block findp'>Find a Doctor book your next visit</h2>
        <input type="text" name="" id="search" placeholder='Search for Speciality, Hospital name, or your Doctor name...' /><button id="find">Search</button>
        <div className='helpdiv'>
          <NavLink className="text-decoration-none help" to="/Contact">Need Help?</NavLink>
        </div>
      </div>
    </section>
  )
}

export default FindDoctor