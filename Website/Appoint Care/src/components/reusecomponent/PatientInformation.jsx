import React from 'react'
import '../../css/PatientInformation.css'
import axios from 'axios';

const PatientInformation = () => {
  // const [info, setInfo] = React.useState([])

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3001/api/v1/auth/users');
  //       setInfo(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const display = info.map(x => {
  //   return (
  //     <div key={x._id}>
  //       <h1>{x.Fname} {x.Lname}</h1>
  //       <h2>{x.age}</h2>
  //       <h3>{x.task}</h3>
  //       <h3>{x.email}</h3>
  //       <button>Delete</button>
  //     </div>
  //   );
  // });
  return (
    <section>
      <div className="container patient-page">
        <div className="row patient-infos">
          <div className="col-4"><h2>Patient Information</h2></div>
          <div className="col-4"><h2>Prescription</h2></div>
          <div className="col-4"><h2>Schedule</h2></div>
        </div>
        <div className="row">
          <div className="main-2">
            {/* {display} */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientInformation