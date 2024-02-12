import React, { useState } from 'react';
import '../../css/Patientsignup.css';
import WelcomeDesign from '../../components/reusecomponent/WelcomeDesign';
import axios from 'axios';

const Patientsignup = () => {
    const [form, setForm] = useState({
        task: "",
        Fname: "",
        Lname: "",
        age: "",
        number: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/api/v1/Auth/SignUp",
                form
            );
            console.log(response.data);
        } catch (error) {
            console.error("Registration failed:", error.response.data);
        }
    };
    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
    const passwordsMatch = form.password === form.confirmPassword;

    return (
        <section className='patient-signup'>
            <div className='container flex-column text-center align-item-center justify-content-center'>
                <div className="container">
                    <WelcomeDesign />
                    <hr />
                    <div className='signup flex-column justify-content-center align-items-center'>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4">
                                <form onSubmit={handleSubmit} className='form signup-form mx-auto'>
                                    <h2 style={{ color: '#6EAB36' }}>Sign up</h2>
                                    <h4>Please complete the following details to proceed</h4>
                                    <div className="input-control">
                                        <label className="d-block" htmlFor="firstName-patient">First Name *</label>
                                        <input
                                            className={`form-control ${form.Fname ? 'is-valid' : 'is-invalid'}`}
                                            type="text"
                                            placeholder="Enter your First name"
                                            id="firstName-patient"
                                            required
                                            onChange={handleChange}
                                            name="Fname"
                                            value={form.Fname}
                                        />
                                        <div className={`error ${form.Fname ? 'valid-feedback' : 'invalid-feedback'}`}>
                                            {form.Fname ? "Looks Good" : "Please Provide A First Name"}
                                        </div>
                                    </div>
                                    <div className="input-control">
                                        <label className="d-block" htmlFor="lastName-patient">Last Name *</label>
                                        <input
                                            className={`form-control ${form.Lname ? 'is-valid' : 'is-invalid'}`}
                                            type="text"
                                            placeholder="Enter your Last Name"
                                            id="lastName-patient"
                                            required
                                            onChange={handleChange}
                                            name="Lname"
                                            value={form.Lname}
                                        />
                                        <div className={`error ${form.Lname ? 'valid-feedback' : 'invalid-feedback'}`}>
                                            {form.Lname ? "Looks Good" : "Please Provide A Last Name"}
                                        </div>
                                    </div>
                                    <div className="input-control">
                                        <label className="d-block" htmlFor="age-patient">Age *</label>
                                        <input
                                            className={`form-control ${form.age ? 'is-valid' : 'is-invalid'}`}
                                            type="number"
                                            placeholder="Enter your Age"
                                            id="age-patient"
                                            required
                                            onChange={handleChange}
                                            name="age"
                                            value={form.age}
                                        />
                                        <div className={`error ${form.age ? 'valid-feedback' : 'invalid-feedback'}`}>
                                            {form.age ? "Looks Good" : "Please Provide An Age"}
                                        </div>
                                    </div>
                                    <div className="input-control">
                                        <label className="d-block" htmlFor="phonenumber-patient">Phone Number *</label>
                                        <input
                                            className={`form-control ${form.number ? 'is-valid' : 'is-invalid'}`}
                                            type="text"
                                            placeholder="Enter your Phone Number"
                                            id="phonenumber-patient"
                                            required
                                            onChange={handleChange}
                                            name="number"
                                            value={form.number}
                                        />
                                        <div className={`error ${form.number ? 'valid-feedback' : 'invalid-feedback'}`}>
                                            {form.number ? "Looks Good" : "Please Provide A Phone Number"}
                                        </div>
                                    </div>
                                    <div className="input-control">
                                        <label className="d-block" htmlFor="email-patient">Email *</label>
                                        <input
                                            className={`form-control ${form.email && isValidEmail(form.email) ? 'is-valid' : 'is-invalid'}`}
                                            type="email"
                                            placeholder="Enter your Email"
                                            id="email-patient"
                                            required
                                            onChange={handleChange}
                                            name="email"
                                            value={form.email}
                                            autoComplete="email"
                                        />
                                        <div className={`error ${form.email && isValidEmail(form.email) ? 'valid-feedback' : 'invalid-feedback'}`}>
                                            {form.email ? (isValidEmail(form.email) ? "Looks Good" : "Please Provide a Valid Email") : "Please Provide An Email"}
                                        </div>
                                    </div>
                                    <div className="input-control">
                                        <label className="d-block" htmlFor="password-patient">Password *</label>
                                        <input
                                            type="password"
                                            placeholder="Enter password"
                                            id="password-patient"
                                            required
                                            onChange={handleChange}
                                            name="password"
                                            value={form.password}
                                            autoComplete="new-password"
                                            pattern=".{8,}" // Pattern for at least 8 characters
                                            className={`form-control ${form.password && form.password.length >= 8 ? 'is-valid' : 'is-invalid'}`}
                                        />
                                        <div className={`error ${form.password && form.password.length >= 8 ? 'valid-feedback' : 'invalid-feedback'}`}>
                                            {form.password && form.password.length >= 8 ? "Looks Good" : "Password must be at least 8 characters long"}
                                        </div>
                                    </div>
                                    <div className="input-control">
                                        <label className="d-block" htmlFor="confirmPassword-patient">Confirm Password *</label>
                                        <input
                                            type="password"
                                            placeholder="Confirm password"
                                            id="confirmPassword-patient"
                                            autoComplete="new-password"
                                            required
                                            onChange={handleChange}
                                            name="confirmPassword"
                                            value={form.confirmPassword}
                                            pattern={form.password}
                                            className={`form-control ${passwordsMatch ? 'is-valid' : 'is-invalid'}`}
                                        />
                                        <div className={`error ${passwordsMatch ? 'valid-feedback' : 'invalid-feedback'}`}>
                                            {passwordsMatch ? "Passwords match" : "Passwords do not match"}
                                        </div>
                                    </div>
                                    <div className='input-control'>
                                        <label className='d-block radio-button-text'>Select your Gender:</label>
                                        <div className='row align-items-center'>
                                            <div className="col-4 p-0">
                                                <input className='radio-button' type="radio" id="male" name="gender" value="Male" onChange={handleChange} checked={form.gender === "Male"} />
                                                <label id="FemaleLabel" className='radio-button-text' htmlFor="male">Female</label>
                                            </div>
                                            <div className="col-4 p-0">
                                                <input className='radio-button' type="radio" id="female" name="gender" value="Female" onChange={handleChange} checked={form.gender === "Female"} />
                                                <label id="MaleLabel" className='radio-button-text' htmlFor="female">Male</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                    </div>
                                    <div className='input-control'>
                                        <label className='d-block radio-button-text'>Patient or Doctor: </label>
                                        <div className='row align-items-center'>
                                            <div className="col-4 p-0">
                                                <input className='radio-button' type="radio" id="Patient" name="task" value="Patient" onChange={handleChange} checked={form.task === "Patient"} />
                                                <label id="PatientLabel" className='radio-button-text' htmlFor="Patient">Patient</label>
                                            </div>
                                            <div className="col-4 p-0">
                                                <input className='radio-button' type="radio" id="Doctor" name="task" value="Doctor" onChange={handleChange} checked={form.task === "Doctor"} />
                                                <label id="DoctorLabel" className='radio-button-text' htmlFor="Doctor">Doctor</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='upload mt-4'>
                                        <label htmlFor="inputGroupFile01">Upload a Profile Picture <i class="fa-solid fa-camera"></i> </label>
                                        <div>
                                            <input type="file" class="custom-file-input" id="inputGroupFile01" onChange={handleChange} value={form.image} name='image' />
                                        </div>
                                    </div>
                                    <button className=" d-block mx-auto submit-signup">Submit</button>
                                </form>
                            </div>
                            <div className="col-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Patientsignup;
