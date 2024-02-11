import React from 'react';
import '../../css/Patientsignup.css';
import WelcomeDesign from '../../components/reusecomponent/WelcomeDesign';
import axios from 'axios';

const Patientsignup = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Fix typo: 'preventDefault' instead of 'preventdefault'
        axios.post('https://jsonplaceholder.typicode.com/posts', { post: form }) // Use 'form' instead of undefined 'post'
            .then(response => console.log(response))
            .catch(err => console.error(err));
    };

    const [form, setForm] = React.useState({
        task: "",
        Fname: "",
        Lname: "",
        number: "",
        email: "",
        password: "",
        ConfirmPassword: "",
        gender: "",
    });

    function handleClick(event) {
        const { name, value, type, checked } = event.target;
        setForm(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    console.log(form);

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
                                <form onSubmit={handleSubmit} className='signup-form mx-auto'>
                                    <h2 style={{ color: '#6EAB36' }}>Sign up</h2>
                                    <h4>Please complete the following details to proceed</h4>
                                    <label className="d-block" htmlFor="firstName-patient">First Name *</label>
                                    <input type="text" placeholder="Enter your First name" id="firstName-patient" required onChange={handleClick} name="Fname" />
                                    <label className="d-block" htmlFor="lastName-patient">Last Name *</label>
                                    <input type="text" placeholder="Enter your Last Name" id="lastName-patient" required onChange={handleClick} name="Lname" />
                                    <label className="d-block" htmlFor="phonenumber-patient">Phone Number *</label>
                                    <input type="text" placeholder="Enter your Phone Number" id="phonenumber-patient" required onChange={handleClick} name="number" />
                                    <label className="d-block" htmlFor="email-patient">Email *</label>
                                    <input type="email" placeholder="Enter your Email" id="email-patient" required onChange={handleClick} name="email" />
                                    <label className="d-block" htmlFor="password-patient">Password *</label>
                                    <input type="password" placeholder="Enter password" id="password-patient" required onChange={handleClick} name="password" />
                                    <label className="d-block" htmlFor="confirmpassword-patient">Confirm password *</label>
                                    <input type="password" placeholder="Confirm password" id="confirmpassword-patient" required onChange={handleClick} name="ConfirmPassword" />
                                    <div className=''>
                                        <label className='d-block radio-button-text'>Select your Gender:</label>
                                        <div className='row align-items-center'>
                                            <div className="col-4">
                                                <input className='radio-button' type="radio" id="male" name="gender" value="Male" onChange={handleClick} checked={form.gender === "Male"} />
                                                <label className='radio-button-text' htmlFor="male">Male</label>
                                            </div>
                                            <div className="col-4">
                                                <input className='radio-button' type="radio" id="female" name="gender" value="Female" onChange={handleClick} checked={form.gender === "Female"} />
                                                <label className='radio-button-text' htmlFor="female">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <label className='d-block radio-button-text'>Patient or Doctor: </label>
                                        <div className='row align-items-center'>
                                            <div className="col-4">
                                                <input className='radio-button' type="radio" id="Patient" name="task" value="Patient" onChange={handleClick} checked={form.task === "Patient"} />
                                                <label className='radio-button-text' htmlFor="Patient">Patient</label>
                                            </div>
                                            <div className="col-4">
                                                <input className='radio-button' type="radio" id="Doctor" name="task" value="Doctor" onChange={handleClick} checked={form.task === "Doctor"} />
                                                <label className='radio-button-text' htmlFor="Doctor">Doctor</label>
                                            </div>
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

export default Patientsignup