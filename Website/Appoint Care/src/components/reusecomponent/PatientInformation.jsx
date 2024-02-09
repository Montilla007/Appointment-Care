import React from 'react'
import '../../css/PatientInformation.css'

const PatientInformation = () => {
  return (
    <section>
        <div className="container patient-page">
            <div className="row patient-infos">
                <div className="col-4"><h2>Patient Information</h2></div>
                <div className="col-4"><h2>Prescription</h2></div>
                <div className="col-4"><h2>Lab Test</h2></div>
            </div>
            <div className="row">
                <div className="main-2">

                </div>
            </div>
        </div>
    </section>
  )
}

export default PatientInformation