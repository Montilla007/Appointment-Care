import React from 'react';
import axios from 'axios'; // Import axios
import { NavLink } from 'react-router-dom';
import '../../css/Admin.css';

const Admin = () => {
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


  const updateStatus = async (id, status) => {
    try {
      await axios.put(`https://appointment-care-api.vercel.app/api/v1/person/users/${id}`, { status });
      const response = await axios.get('https://appointment-care-api.vercel.app/api/v1/person/users');
      setDoctorData(response.data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const displayDoctorPending = doctorData.map(x => {
    if (x.role === "Doctor" && x.status === "Pending") {
      return (
        <tr key={x._id}>
          <td scope="row">{x._id}</td>
          <td>{x.Fname} {x.Lname}</td>
          <td>{x.number}</td>
          <td>{x.gender}</td>
          <td>{x.age}</td>
          <td>{x.email}</td>
          <td>{x.status}</td>
          <td className="td-button">
            <button type="button" className="btn btn-primary admin-button" onClick={() => updateStatus(x._id, "Accepted")}>Accept</button>
            <button type="button" className="btn btn-danger admin-button" onClick={() => updateStatus(x._id, "Rejected")}>Reject</button>
          </td>
        </tr>
      );
    }
    return null;
  });

  const displayDoctorAccepted = doctorData.map(x => {
    if (x.role === "Doctor" && x.status === "Accepted") {
      return (
        <tr key={x._id}>
          <td scope="row">{x._id}</td>
          <td>{x.Fname} {x.Lname}</td>
          <td>{x.number}</td>
          <td>{x.gender}</td>
          <td>{x.age}</td>
          <td>{x.email}</td>
          <td>{x.status}</td>
          <td className="td-button">
            <button type="button" className="btn btn-primary admin-button" onClick={() => updateStatus(x._id, "Accepted")}>Accept</button>
            <button type="button" className="btn btn-danger admin-button" onClick={() => updateStatus(x._id, "Rejected")}>Reject</button>
          </td>
        </tr>
      );
    }
    return null;
  });

  const displayDoctorRejected = doctorData.map(x => {
    if (x.role === "Doctor" && x.status === "Rejected") {
      return (
        <tr key={x._id}>
          <td scope="row">{x._id}</td>
          <td>{x.Fname} {x.Lname}</td>
          <td>{x.number}</td>
          <td>{x.gender}</td>
          <td>{x.age}</td>
          <td>{x.email}</td>
          <td>{x.status}</td>
          <td className="td-button">
            <button type="button" className="btn btn-primary admin-button" onClick={() => updateStatus(x._id, "Accepted")}>Accept</button>
            <button type="button" className="btn btn-danger admin-button" onClick={() => updateStatus(x._id, "Rejected")}>Reject</button>
          </td>
        </tr>
      );
    }
    return null;
  });

  return (
    <div>
      <h2 className='refresh'>Doctor Admin | <button onClick={refreshPage}>Refresh</button></h2>
      <div className="p-4">
        <h2 className='applicants'>Doctor AppointCare Pending</h2>
        <table className="p-4 text-center">
          <tbody>
            <tr>
              <th className="th-color" scope="col">ID</th>
              <th className="th-color" scope="col">Doctor's Name</th>
              <th className="th-color" scope="col">Phone Number</th>
              <th className="th-color" scope="col">Gender</th>
              <th className="th-color" scope="col">Age</th>
              <th className="th-color" scope="col">Email</th>
              <th className="th-color" scope="col">Status</th>
              <th className="th-color" scope="col">Actions</th>
            </tr>
            {displayDoctorPending}
          </tbody>
        </table >
        <h2 className='applicants-2'>Doctor AppointCare Accepted</h2>
        <table className="p-4 text-center">
          <tbody>
            <tr>
              <th className="th-color" scope="col">ID</th>
              <th className="th-color" scope="col">Doctor's Name</th>
              <th className="th-color" scope="col">Phone Number</th>
              <th className="th-color" scope="col">Gender</th>
              <th className="th-color" scope="col">Age</th>
              <th className="th-color" scope="col">Email</th>
              <th className="th-color" scope="col">Status</th>
              <th className="th-color" scope="col">Actions</th>
            </tr>
            {displayDoctorAccepted}
          </tbody>
        </table >
        <h2 className='applicants-2'>Doctor AppointCare Rejected</h2>
        <table className="p-4 text-center ">
          <tbody>
            <tr>
              <th className="th-color" scope="col">ID</th>
              <th className="th-color" scope="col">Doctor's Name</th>
              <th className="th-color" scope="col">Phone Number</th>
              <th className="th-color" scope="col">Gender</th>
              <th className="th-color" scope="col">Age</th>
              <th className="th-color" scope="col">Email</th>
              <th className="th-color" scope="col">Status</th>
              <th className="th-color" scope="col">Actions</th>
            </tr>
            {displayDoctorRejected}
          </tbody>
        </table >
      </div >
    </div>
  );
};

export default Admin;
