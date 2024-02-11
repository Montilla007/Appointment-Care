import React from 'react'
import '../../css/PatientInformation.css'

const PatientInformation = () => {
  const [info, setInfo] = React.useState([])
  React.useEffect(() => {
    const res = fetch(`http://localhost:3001/api/v1/auth/users?fbclid=IwAR0qF66AZT0pB60K6KGwZvbm3SnZuogabxTkZZcmtemHG7eq4dgpoLXjKVQ`)
      .then((res) => res.json())
      .then(data => setInfo(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [])
  const display = info.map(x => {
    return (
      <div key={x._id}>
        <h1>{x.Fname} {x.Lname}</h1>
        <h2>{x.age}</h2>
      </div>
    )
  })
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
            {display}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientInformation