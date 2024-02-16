import React from 'react'
import '../../css/WelcomeDesign.css'

const WelcomeDesign = () => {
  return (
    <div>
      <h3 id="welcome">WELCOME TO</h3>
      <div className='flex-row align-items-center serving-logo'>
        <img className='' src="/src/assets/images/logo.png" alt="logo" />
        <h2 className='d-inline-block'>APPOINT <span style={{ color: "#007E85" }}>CARE</span></h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="three-design">
              <img className="mini-picture" src="/src/assets/images/schedule.png" alt="schedule" />
              <h4 className='d-inline-block'>Book</h4>
              <p>Easily connect with your doctors</p>
            </div>
          </div>
          <div className="col-4">
            <div className="three-design">
              <img className="mini-picture" src="/src/assets/images/consult.png" alt="consult" />
              <h4 className='d-inline-block' >Consult</h4>
              <p>Visit your doctor or consult online</p>
            </div>
          </div>
          <div className="col-4">
            <div className="three-design">
              <img className="mini-picture" src="/src/assets/images/takeyourmedicine.png" alt="take your medicine" />
              <h4 className='d-inline-block' >Prescription</h4>
              <p>You can take your medicine or prescription</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeDesign