import React from 'react'
import '../../css/ServiceProvider.css'

const ServiceProvider = () => {
  return (
    <section className='provider mb-5'>
      <div className="container">
        <div className='text-center service-provide'>
          <h2>Services we Provide</h2>
          <p>Lorem ipsum dolor sit amet consectetur ad
            ipisicing elit. Eaque fugit et vel veniam esse
            facere eligendi consequuntur rerum iusto necessitatibus?</p>
        </div>
        <div className="row justify-content-center align-items-center provide">
          <div className="col-3">
            <div className="card-2-img" style={{ width: "25rem" }}>
              <img src="diagnosis.png" className='card-img-top' alt="" />
              <div className="card-body1">
                <h5 className="card-title">Diagnosis</h5>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card-2-img" style={{ width: "25rem" }}>
              <img src="injury.png" className='card-img-top' alt="" />
              <div className="card-body1">
                <h5 className="card-title">Fractures and Injury</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card-2-img" style={{ width: "25rem" }}>
              <img src="teeth.png" className='card-img-top' alt="" />
              <div className="card-body1">
                <h5 className="card-title">Xray Checkup</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card-2-img" style={{ width: "25rem" }}>
              <img src="special.png" className='card-img-top' alt="" />
              <div className="card-body1">
                <h5 className="card-title">Specialist Consultations</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card-2-img" style={{ width: "25rem" }}>
              <img src="treatment.png" className='card-img-top' alt="" />
              <div className="card-body1">
                <h5 className="card-title">Eye Care</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card-2-img" style={{ width: "25rem" }}>
              <img src="eyecare.png" className='card-img-top' alt="" />
              <div className="card-body1">
                <h5 className="card-title">Treatments</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProvider