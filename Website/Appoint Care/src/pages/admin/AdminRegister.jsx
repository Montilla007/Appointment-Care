import axios from 'axios';
import React, { useState } from 'react';

const AdminRegister = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        authentication: "",
        role: "Admin",
    });

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        authentication: "",
    });
    const [emailExists, setEmailExists] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleValidation = async (event) => {
        event.preventDefault();

        let newErrors = {};
        let isValid = true;

        if (!form.username.trim()) {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(form.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!form.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (form.password.length < 8) {
            newErrors.password = 'Password must be 8 characters long';
            isValid = false;
        } else {
            newErrors.password = '';
        }

        if (!form.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
            isValid = false;
        } else if (form.password !== form.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        } else {
            newErrors.confirmPassword = '';
        }

        if (!form.authentication.trim()) {
            newErrors.authentication = 'Secret Key is required';
            isValid = false;
        } else if (form.authentication.trim() !== "SECRET") {
            newErrors.authentication = 'Secret Key is Wrong';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            try {
                const response = await axios.post(
                    "https://appointment-care-api.vercel.app/api/v1/admin/register",
                    form
                );
                console.log(response.data);
                setEmailExists(false);
                window.location.href = "/AdminLogin";
            } catch (error) {
                if (error.response && error.response.status === 500) {
                    setEmailExists(true);
                } else {
                    console.error("Registration failed:", error.response.data);
                }
            }
        }
    };

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <section>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="row border rounded-5 p-3 bg-white shadow box-area">
                    <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box bg-black">
                        <div className="featured-image mb-3">
                            <img src="login.png" alt="Login" className="img-fluid login_image" />
                        </div>
                        <p className="text-white fs-2">Signup as Admin</p>
                        <small className="text-white text-wrap text-center">Only Admin of AppointCare can join!</small>
                    </div>
                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2>Admin Signup</h2>
                                <p>Go Signup to see the Admin Page</p>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className={`form-control form-control-lg bg-light fs-6 ${errors.username && 'is-invalid'}`} placeholder="Username" name="username" value={form.username} onChange={handleChange} />
                                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className={`form-control form-control-lg bg-light fs-6 ${errors.email && 'is-invalid'}`} placeholder="Email" name="email" value={form.email} onChange={handleChange} />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                            <div className="input-group mb-3">
                                <input placeholder='Enter your Password' autoComplete='new-password' type="password" className={`form-control form-control-lg bg-light fs-6 ${errors.password && 'is-invalid'}`} id="exampleInputPassword" name="password" value={form.password} onChange={handleChange} />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>
                            <div className="input-group mb-3">
                                <input placeholder='Enter your Confirm Password' autoComplete='new-password' type="password" className={`form-control form-control-lg bg-light fs-6 ${errors.confirmPassword && 'is-invalid'}`} id="exampleInputConfirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
                                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                            </div>
                            <div className="input-group mb-1">
                                <input type="text" className={`form-control form-control-lg bg-light fs-6 ${errors.authentication && 'is-invalid'}`} placeholder="Secret Key" name="authentication" value={form.authentication} onChange={handleChange} />
                                {errors.authentication && <div className="invalid-feedback">{errors.authentication}</div>}
                            </div>
                            <div className="input-group mb-5 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="formCheck" />
                                    <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <button className="btn btn-lg btn-primary w-100 fs-6" onClick={handleValidation}>Signup</button>
                                {emailExists && <div className="alert alert-danger alert-email" role="alert">Email already exists. Please use another email.</div>}

                            </div>
                            <div className="row">
                                <small>Already have an account? <a href="/AdminLogin">Login</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminRegister;
