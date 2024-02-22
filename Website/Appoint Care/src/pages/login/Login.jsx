import React, { useState } from 'react';
import WelcomeDesign from '../../components/reusecomponent/WelcomeDesign';
import '../../css/Login.css';
import axios from 'axios';

const Login = ({ setUserData }) => {

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
      const response = await axios.post("https://appointment-care-api.vercel.app/api/v1/auth/login", loginForm);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userData', JSON.stringify(response.data.user));
      console.log(response.data.token)
      console.log(response.data)
      const token = response.data.token;
      const homeResponse = await axios.get('https://appointment-care-api.vercel.app/api/v1/home', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.data.user.role === "Doctor" && response.data.user.status === "Accepted") {
        setErrorMessage("Login Successfully");
        window.location.href = '/doctorpage';
        setUserData({ response: response.data, homeResponse: homeResponse.data });
      } else if (response.data.user.role === "Patient") {
        setErrorMessage("Login Successfully");
        window.location.href = '/'; 
        setUserData({ response: response.data, homeResponse: homeResponse.data });
      } else if (response.data.user.role === "Doctor" && response.data.user.status === "Pending") {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        setErrorMessage("Your Application is on Pending ");
      } else if (response.data.user.role === "Doctor" && response.data.user.status === "Rejected") {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        setErrorMessage("Your Application is Rejected ");
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized: Incorrect email or password");
        setErrorMessage("Incorrect email or password");
      } else {
        console.error("Login Error:", error);
      }
    }
  };

  const successMessageClass = errorMessage === "Login Successfully" ? "success-message" : "";

  return (
    <section className='login-section'>
      <div className='container flex-column text-center align-item-center justify-content-center'>
        <div className="container">
          <WelcomeDesign />
          <hr />
          <div className='signup flex-column justify-content-center align-items-center text-center'>
            <div className="row">
              <div className="col-4">
              </div>
              <div className="col-4">
                <form onSubmit={handleSubmit} className='login-form mx-auto'>
                  <h2 style={{ color: '#6EAB36' }}>Log In</h2>
                  <h4>Please complete the following details to proceed</h4>
                  <label className="d-block" htmlFor="emailLogin">Email *</label>
                  <input id='emailLogin' type="text" placeholder="Enter your Email" required onChange={handleChange} value={loginForm.email} name='email' />
                  <label className="d-block" htmlFor="passwordLogin">Password *</label>
                  <input id="passwordLogin" type="password" placeholder="Enter your Password" required onChange={handleChange} value={loginForm.password} name='password' />
                  {errorMessage && <span className={`d-block error-message ${successMessageClass}`}>{errorMessage}</span>}
                  <button className=" d-block mx-auto submit-login">Submit</button>
                </form>
              </div>
              <div className="col-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
