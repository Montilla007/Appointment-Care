import React, { useState } from 'react';
import axios from 'axios';
import "../../css/AdminLogin.css";

const AdminLogin = ({ setAdminData }) => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://appointment-care-api.vercel.app/api/v1/admin/login", loginForm);
            localStorage.setItem('tokenAdmin', response.data.token);
            localStorage.setItem('adminData', JSON.stringify(response.data.admin));
            const token = response.data.token;
            const homeResponse = await axios.get('https://appointment-care-api.vercel.app/api/v1/admin-panel/Accepted', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setAdminData({ response: response.data.admin, homeResponse: homeResponse.data });
            setErrorMessage("Login Successfully");
            window.location.href = "/Admin"
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.error("Unauthorized: Incorrect email or password");
                setErrorMessage("Incorrect email or password");
            } else {
                console.error("Login Error:", error);
            }
        }
    };

    return (
        <section>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="row border rounded-5 p-3 bg-white shadow box-area">
                    <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box bg-black">
                        <div className="featured-image mb-3">
                            <img src="login.png" alt="Login" className="img-fluid login_image" />
                        </div>
                        <p className="text-white fs-2">Login as Admin</p>
                        <small className="text-white text-wrap text-center">Only Admin of AppointCare can join!</small>
                    </div>

                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2>Admin Login</h2>
                                <p>Go login to see the Admin Page</p>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Email" name="email" value={loginForm.email} onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" name="password" value={loginForm.password} onChange={handleChange} />
                            </div>
                            <div className="input-group mb-5 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="formCheck" />
                                    <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                                </div>
                                <div className="forgot">
                                    <small><a href=''>Forgot Password?</a></small>
                                </div>
                            </div>
                            {errorMessage && <div className="error-message">{errorMessage}</div>}
                            <div className="input-group mb-3">
                                <button className="btn btn-lg btn-primary w-100 fs-6" onClick={handleSubmit}>Login</button>
                            </div>
                            <div className="row">
                                <small>Don't have an account? <a href="/AdminRegister">Sign Up</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminLogin;
