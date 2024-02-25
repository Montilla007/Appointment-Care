import React from 'react';
import "../../../css/DoctorPageLayout.css";
import { NavLink, Outlet } from "react-router-dom";
import "../../../css/DoctorPageLayout.css";

const DoctorPageLayout = ({ userData }) => {
    const [storedUserData, setStoredUserData] = React.useState(null);
    console.log(userData);

    React.useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        console.log('Stored User Data:', storedUserData);
        if (storedUserData) {
            setStoredUserData(JSON.parse(storedUserData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userData');
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <section className='doctor-page'>
            {(storedUserData && storedUserData.role === "Doctor") || (userData && userData.role === "Doctor") ? (
                <div className="wrapper">
                    <aside id="sidebar">
                        <div className="d-flex"></div>
                        <ul className="sidebar-nav">
                            <li className="sidebar-item">
                                <NavLink exact={true} end className={({ isActive }) => isActive ? "doctor-link-active" : "sidebar-link"} to="/doctorpage">
                                    <i className='lni lni-grid-alt'></i>
                                </NavLink>
                            </li>
                            {/* Other sidebar items */}
                            <li className="sidebar-item">
                                <NavLink to="DoctorAcceptReject" className={({ isActive }) => isActive ? "doctor-link-active" : "sidebar-link"}>
                                    <i className="fa-solid fa-list-check"></i>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="DoctorPatient" className={({ isActive }) => isActive ? "doctor-link-active" : "sidebar-link"}>
                                    <i className="fa-solid fa-person"></i>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="DoctorUserProfile" className={({ isActive }) => isActive ? "doctor-link-active" : "sidebar-link"}>
                                    <i className="fa-solid fa-user"></i>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="/" onClick={handleLogout} className="sidebar-link"><i className="fa-solid fa-right-from-bracket"></i></NavLink>
                            </li>
                        </ul>
                    </aside>
                    <div className='main p-3'>
                        <Outlet />
                    </div>
                </div>
            ) : (
                <div className='denied bg-danger'>Access Denied! Please go back!</div>
            )}
        </section>
    );
};

export default DoctorPageLayout;
