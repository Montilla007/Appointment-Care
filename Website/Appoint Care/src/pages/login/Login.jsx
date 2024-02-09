import React from 'react'
import WelcomeDesign from '../../components/reusecomponent/WelcomeDesign'
import '../../css/Login.css'

const Login = () => {
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
                                <form action="" className='login-form mx-auto'>
                                    <h2 style={{ color: '#6EAB36' }}>Log In</h2>
                                    <label className="d-block" htmlFor="">Email *</label>
                                    <input type="text" placeholder="Enter your Email or Username" required />
                                    <label className="d-block" htmlFor="">Password *</label>
                                    <input type="text" placeholder="Enter your Email or Username" required />
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
    )
}

export default Login