import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import "../../../css/AdminLayout.css"
import logoImage from "/logo.png"


const AdminLayout = ({ adminData }) => {
    console.log(adminData)
    const handleLogout = () => {
        localStorage.removeItem('tokenAdmin');
        localStorage.removeItem('adminData');
        window.location.href = '/';
    };
    return (
        <section>
            {adminData ? <div className='wrapper'>
                <aside className='admin-aside'>
                    <div className='flex-column justify-content-center align-items-center'>
                        <div className='mb-4 mt-2 text-center'>
                            <img src={logoImage} alt="logo" />
                            <h2>Appoint Care Admin Panel</h2>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <NavLink exact="true" to="/Admin" className="admin-item">Doctor Status</NavLink>
                            <br />
                            <NavLink to="/Admin/PatientList" className="admin-item">Patient List</NavLink>
                            <br />
                            <NavLink to="/Admin/DoctorList" className="admin-item">Doctor List</NavLink>
                            <button onClick={handleLogout} className="btn btn-danger logout-button">Logout</button>
                        </ul>
                    </div>
                </aside>
                <div className='admin-outlet'>
                    <Outlet />
                </div>
            </div>
                : (
                    <div className='denied bg-danger'>Access Denied! Please go back!</div>
                )}
        </section>
    )
}

export default AdminLayout