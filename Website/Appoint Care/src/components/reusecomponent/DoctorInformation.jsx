import React from 'react'
import '../../css/DoctorInformation.css'

const DoctorInformation = () => {
    return (
        <section className='doctor-information'>
            <div className="doctor-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="cards-2">
                                <div className="img1-2">
                                    <h2>Physician Sarlito Tayag, PA</h2>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <h4>255 |</h4>
                                    <i className="fa-regular fa-pen-to-square"></i>
                                    <h4>Leave a Review</h4>
                                </div>
                                <div className="img2-2"><img src="https://i.pinimg.com/1200x/37/4d/35/374d35674b81a4fc01f08436e29be877.jpg" alt="Doctor Eye Specialist" /></div>
                                <div className="card-body-2">
                                    <div className="container">
                                        <div className="row doctor-subtitle">
                                            <div className="col-2"></div>
                                            <div className="col-2">
                                                <h4><span>• </span>Family Medicine</h4>
                                            </div>
                                            <div className="col-2">
                                                <h4><span>• </span> Primary Care</h4>
                                            </div>
                                            <div className="col-6"></div>
                                            <div className="col-2"></div>
                                            <div className="col-2">
                                                <h4><i className="fa-solid fa-check right"></i> Accepting New Patients</h4>
                                            </div>
                                            <div className="col-8"></div>
                                            <div className="col-2"></div>
                                            <div className="col-2">
                                                <h4><i className="fa-solid fa-video right"></i> Virtual Visit Available</h4>
                                            </div>
                                            <div className="col-8"></div>
                                            <div className="col-2"></div>
                                            <div className="col-2">
                                                <h4><i className="fa-solid fa-location-dot right"></i> San Fabian, Pangasinan</h4>
                                            </div>
                                            <div className="col-8"></div>
                                            <div className="col-2"></div>
                                            <div className="col-2">
                                                <div className="socials-2">
                                                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                                                    <a href=""><i className="fa-brands fa-google-plus"></i></a>
                                                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                            <div className="col-8"></div>
                                            <div className="col-2"></div>
                                            <div className="col-2">
                                                <button className='mx-auto' id="doctor-phone">+63-9477402202</button>
                                            </div>
                                            <div className="col-2">
                                                <button className='mx-auto'>Book Online</button>
                                            </div>
                                            <div className="col-2">
                                                <button className='mx-auto'>Virtual Visit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 overview">
                        <div className="overview-content">
                            <h3>overview</h3>
                            <h3>Rating & Reviews</h3>
                            <h3>Locations</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoctorInformation