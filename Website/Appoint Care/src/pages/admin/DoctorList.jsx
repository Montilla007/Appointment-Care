import React from 'react'
import axios from 'axios'; // Import axios

const DoctorList = () => {
  const [doctorData, setDoctorData] = React.useState([]);

  const refreshPage = () => {
    window.location.reload();
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users`);
        setDoctorData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://appointment-care-api.vercel.app/api/v1/person/users/${id}`);
      const response = await axios.get('https://appointment-care-api.vercel.app/api/v1/person/users');
      setDoctorData(response.data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
  const displayDoctor = doctorData.map(x => {
    if (x.role === "Doctor") {
      return (
        <tr key={x._id}>
          <th scope="row">{x._id}</th>
          <td>{x.Fname} {x.Lname}</td>
          <td>{x.number}</td>
          <td>{x.gender}</td>
          <td>{x.age}</td>
          <td>{x.email}</td>
          <td>{x.status}</td>
          <td className="td-button"><button type="button" className="btn btn-danger admin-button" onClick={() => handleDelete(x._id)}>Delete</button></td>
        </tr>
      );
    }
    return null;
  });
  return (
    <div>
      <h2 className='refresh'>Doctor List Admin | <button onClick={refreshPage}>Refresh</button></h2>
      <div className="p-4">
        <h2 className='applicants'>Doctor AppointCare Applicants</h2>
        <table className="p-4 text-center">
          <tr>
            <th className='th-color' scope="col">ID</th>
            <th className='th-color' scope="col">Doctor's Name</th>
            <th className='th-color' scope="col">Phone Number</th>
            <th className='th-color' scope="col">Gender</th>
            <th className='th-color' scope="col">Age</th>
            <th className='th-color' scope="col">Email</th>
            <th className='th-color' scope="col">Status</th>
            <th className='th-color' scope="col">Actions</th>
          </tr>
          <tbody>
            {displayDoctor}
          </tbody>
        </table >
      </div >
    </div>
  )
}

export default DoctorList