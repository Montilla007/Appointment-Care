import React from 'react'
import '../../css/Patientsignup.css'
import WelcomeDesign from '../../components/reusecomponent/WelcomeDesign'
const Patientsignup = () => {
    return (
        <section className='patient-signup'>
            <div className='container flex-column text-center align-item-center justify-content-center'>
                <div className="container">
                    <WelcomeDesign/>
                    <hr />
                    <div className='signup flex-column justify-content-center align-items-center'>
                        <div className="row">
                            <div className="col-4">
                            </div>
                            <div className="col-4">
                                <form action="" className='signup-form mx-auto'>
                                    <h2 style={{ color: '#6EAB36' }}>Sign up</h2>
                                    <h4>Please complete the following details to proceed</h4>
                                    <label className="d-block" htmlFor="">First Name *</label>
                                    <input type="text" placeholder="Enter your First name" />
                                    <label className="d-block" htmlFor="">Middle Name *</label>
                                    <input type="text" placeholder="Enter your Middle name" />
                                    <label className="d-block" htmlFor="">Last Name *</label>
                                    <input type="text" placeholder="Enter your Last Name" />
                                    <label htmlFor="datepicker" className="d-block">Select a Date:</label>
                                    <input type="date" id="datepicker" name="datepicker"></input>
                                    <label className="d-block" htmlFor="">Email *</label>
                                    <input type="text" placeholder="Enter your Email" />
                                    <button className=" d-block mx-auto submit-signup">Submit</button>
                                </form>
                            </div>
                            <div className="col-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Patientsignup