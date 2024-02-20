import React, { useState } from 'react';
import WelcomeDesign from '../../components/reusecomponent/WelcomeDesign';
import axios from 'axios';

const DoctorSignup = () => {
  const [form, setForm] = useState({
    role: "Doctor",
    Fname: "",
    Lname: "",
    number: "",
    gender: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    imageData: null,
    status: "Pending",
    speciality: "",
    mdYear: "", // Renamed from age
    consultPrice: "", // New field for consultation price
    f2f: false,
    online: false,
  });

  const [errors, setErrors] = useState({
    Fname: '',
    Lname: '',
    age: '',
    number: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    speciality: '', // New field for speciality validation
    mdYear: '', // New field for MD year validation
    consultPrice: '', // New field for consultation price validation
  });

  const [emailExists, setEmailExists] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setForm({
      ...form,
      [name]: newValue
    });
  };
  console.log(form)

  const handleValidation = async (event) => {
    event.preventDefault();

    let newErrors = {};
    let isValid = true;

    // Validation rules
    if (!form.Fname) {
      newErrors.Fname = 'First Name is required';
      isValid = false;
    } else {
      newErrors.Fname = '';
    }

    if (!form.Lname) {
      newErrors.Lname = 'Last Name is required';
      isValid = false;
    } else {
      newErrors.Lname = '';
    }

    if (!form.age) {
      newErrors.age = 'Age is required';
      isValid = false;
    } else {
      newErrors.age = '';
    }

    if (!form.number) {
      newErrors.number = 'Phone Number is required';
      isValid = false;
    } else {
      newErrors.number = '';
    }

    if (!form.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    } else {
      newErrors.confirmPassword = '';
    }

    if (!form.gender) {
      newErrors.gender = 'Gender is required';
      isValid = false;
    } else {
      newErrors.gender = '';
    }

    if (!form.speciality) {
      newErrors.speciality = 'Speciality is required';
      isValid = false;
    } else {
      newErrors.speciality = '';
    }

    if (!form.mdYear) {
      newErrors.mdYear = 'MD Year is required';
      isValid = false;
    } else {
      newErrors.mdYear = '';
    }

    if (!form.consultPrice) {
      newErrors.consultPrice = 'Consultation Price is required';
      isValid = false;
    } else {
      newErrors.consultPrice = '';
    }

    setErrors(newErrors);

    if (isValid) {
      try {
        const formData = new FormData();
        for (let key in form) {
          formData.append(key, form[key]);
        }
        const response = await axios.post(
          "https://appointment-care-api.vercel.app/api/v1/auth/Signup",
          formData
        );
        console.log(response.data);
        setEmailExists(false);
        window.location.href = "/Login"; // Redirect after successful submission
      } catch (error) {
        if (error.response && error.response.status === 500) {
          setEmailExists(true);
        } else {
          console.error("Registration failed:", error.response.data);
        }
      }
    }
  };

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
                <form onSubmit={handleValidation} className='form signup-form mx-auto'>
                  <h2 style={{ color: '#6EAB36' }}>Signup as Doctor</h2>
                  <h4>Please complete the following details to proceed</h4>
                  <div className="input-control">
                    <label htmlFor="exampleInputFname" className="form-label d-block">First Name*</label>
                    <input placeholder='Enter your First Name' type="text" className={`form-control ${form.Fname && !errors.Fname ? 'is-valid' : ''} ${errors.Fname ? 'is-invalid' : ''}`} id="exampleInputFname" name="Fname" value={form.Fname} onChange={handleChange} />
                    {errors.Fname && <div className="error">{errors.Fname}</div>}
                  </div>
                  <div className="input-control">
                    <label htmlFor="exampleInputLname" className="form-label d-block">Last Name*</label>
                    <input placeholder='Enter your Last Name' type="text" className={`form-control ${form.Lname && !errors.Lname ? 'is-valid' : ''} ${errors.Lname ? 'is-invalid' : ''}`} id="exampleInputLname" name="Lname" value={form.Lname} onChange={handleChange} />
                    {errors.Lname && <div className="error">{errors.Lname}</div>}
                  </div>
                  <div className="input-control">
                    <label htmlFor="exampleInputAge" className="form-label d-block">Age*</label>
                    <input placeholder='Enter your Age' type="number" className={`form-control ${form.age && !errors.age ? 'is-valid' : ''} ${errors.age ? 'is-invalid' : ''}`} id="exampleInputAge" name="age" value={form.age} onChange={handleChange} />
                    {errors.age && <div className="error">{errors.age}</div>}
                  </div>
                  <div className="input-control">
                    <label htmlFor="exampleInputNumber" className="form-label d-block">Phone Number*</label>
                    <input placeholder='Enter your Phone Number' type="text" className={`form-control ${form.number && !errors.number ? 'is-valid' : ''} ${errors.number ? 'is-invalid' : ''}`} id="exampleInputNumber" name="number" value={form.number} onChange={handleChange} />
                    {errors.number && <div className="error">{errors.number}</div>}
                  </div>
                  <div className="input-control">
                    <label htmlFor="exampleInputSpeciality" className="form-label d-block">Speciality*</label>
                    <input placeholder='Enter your Speciality' type="text" className={`form-control ${form.speciality && !errors.speciality ? 'is-valid' : ''} ${errors.speciality ? 'is-invalid' : ''}`} id="exampleInputSpeciality" name="speciality" value={form.speciality} onChange={handleChange} />
                    {errors.speciality && <div className="error">{errors.speciality}</div>}
                  </div>
                  <div className="input-control">
                    <label htmlFor="exampleInputMdYear" className="form-label d-block">MD Year*</label>
                    <input placeholder='Enter your MD Year' type="number" className={`form-control ${form.mdYear && !errors.mdYear ? 'is-valid' : ''} ${errors.mdYear ? 'is-invalid' : ''}`} id="exampleInputMdYear" name="mdYear" value={form.mdYear} onChange={handleChange} />
                    {errors.mdYear && <div className="error">{errors.mdYear}</div>}
                  </div>
                  <div className="input-control">
                    <label htmlFor="exampleInputConsultPrice" className="form-label d-block">Consultation Price*</label>
                    <input placeholder='Enter your Consultation Price' type="number" className={`form-control ${form.consultPrice && !errors.consultPrice ? 'is-valid' : ''} ${errors.consultPrice ? 'is-invalid' : ''}`} id="exampleInputConsultPrice" name="consultPrice" value={form.consultPrice} onChange={handleChange} />
                    {errors.consultPrice && <div className="error">{errors.consultPrice}</div>}
                  </div>
                  <div className="input-control">
                    <label htmlFor="exampleInputEmail" className="form-label d-block">Email address*</label>
                    <input placeholder='Enter your Email' autoComplete='username' type="email" className={`form-control ${form.email && !errors.email ? 'is-valid' : ''} ${errors.email ? 'is-invalid' : ''}`} id="exampleInputEmail" name="email" value={form.email} onChange={handleChange} />
                    {errors.email && <div className="error">{errors.email}</div>}
                  </div>
                  <div className="input-control">
                    <label htmlFor="exampleInputPassword" className="form-label d-block">Password*</label>
                    <input placeholder='Enter your Password' autoComplete='new-password' type="password" className={`form-control ${form.password && !errors.password ? 'is-valid' : ''} ${errors.password ? 'is-invalid' : ''}`} id="exampleInputPassword" name="password" value={form.password} onChange={handleChange} />
                    {errors.password && <div className="error">{errors.password}</div>}
                  </div>
                  <div className="input-control">
                    <label htmlFor="exampleInputConfirmPassword" className="form-label d-block">Confirm Password*</label>
                    <input placeholder='Enter your Confirm Password' autoComplete='new-password' type="password" className={`form-control ${form.confirmPassword && !errors.confirmPassword ? 'is-valid' : ''} ${errors.confirmPassword ? 'is-invalid' : ''}`} id="exampleInputConfirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                  </div>
                  <div className="input-control">
                    <label htmlFor="exampleInputConfirmPassword" className="form-label d-block">Confirm Password*</label>
                    <input placeholder='Enter your Confirm Password' autoComplete='new-password' type="password"
                      className={`form-control ${form.confirmPassword && !errors.confirmPassword ? 'is-valid' : ''} ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      id="exampleInputConfirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
                  </div>
                  <div className="checkboxes">
                    <input type="checkbox" id="f2f" checked={form.f2f} onChange={handleChange} name="f2f" />
                    <label htmlFor="f2f">Face to Face Consultation</label>
                    <input type="checkbox" id="online" checked={form.online} onChange={handleChange} name="online" />
                    <label htmlFor="f2f">Online Consultation</label>
                  </div>
                  <div className="input-control">
                    <label className='d-block radio-button-text'>Select your Gender:</label>
                    <div className='row align-items-center'>
                      <div className="col-4 p-0">
                        <input className='radio-button' type="radio" id="female" name="gender" value="Female" onChange={handleChange} checked={form.gender === "Female"} />
                        <label id="FemaleLabel" className='radio-button-text' htmlFor="female">Female</label>
                      </div>
                      <div className="col-4 p-0">
                        <input className='radio-button' type="radio" id="male" name="gender" value="Male" onChange={handleChange} checked={form.gender === "Male"} />
                        <label id="MaleLabel" className='radio-button-text' htmlFor="male">Male</label>
                      </div>
                    </div>
                    {errors.gender && <div className="error">{errors.gender}</div>}
                  </div>
                  <div className='upload mt-4'>
                    <label htmlFor="inputGroupFile01">Upload a Profile Picture <i className="fa-solid fa-camera"></i> </label>
                    <div>
                      <input type="file" className="custom-file-input" id="inputGroupFile01" onChange={handleChange} name='imageData' />
                    </div>
                  </div>
                  <button type="submit" className=" d-block mx-auto submit-signup">Submit</button>
                  {emailExists && <div className="alert alert-danger alert-email" role="alert">Email already exists. Please use another email.</div>}
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

export default DoctorSignup;
