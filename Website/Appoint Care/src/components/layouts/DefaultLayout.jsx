import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
const DefaultLayout = () => {
  return (
    <div>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default DefaultLayout