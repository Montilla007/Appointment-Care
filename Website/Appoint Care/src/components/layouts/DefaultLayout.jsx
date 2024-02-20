import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
const DefaultLayout = ({ userData }) => {
  return (
    <div>
      <Navigation userData={userData} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default DefaultLayout