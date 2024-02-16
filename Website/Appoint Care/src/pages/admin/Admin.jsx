import React from 'react';
import axios from 'axios'; // Import axios

import { NavLink } from 'react-router-dom';
import '../../css/Admin.css';

const Admin = () => {
  const [doctorData, setDoctorData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/auth/users');
        setDoctorData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/auth/users/${id}`)
      const response = await axios.get('http://localhost:3001/api/v1/auth/users');
      setDoctorData(response.data);
    } catch {
      console.error('Error deleting user:', error);
    }
  }

  const displayDoctor = doctorData.map(x => {
    if (x.task === "Doctor") {
      return (
        <tr key={x._id}>
          <th scope="row">{x._id}</th>
          <td>{x.Fname} {x.Lname}</td>
          <td>{x.number}</td>
          <td>{x.gender}</td>
          <td>{x.age}</td>
          <td>{x.email}</td>
          <td className="td-button"><button type="button" className="btn btn-primary admin-button">Update</button></td>
          <td className="td-button"><button type="button" className="btn btn-danger admin-button"  onClick={() => handleDelete(x._id)}>Delete</button></td>
        </tr>
      );
    }
    return null;
  });
  const displayPatient = doctorData.map(x => {
    if (x.task === "Patient") {
      return (
        <tr key={x._id}>
          <th scope="row">{x._id}</th>
          <td>{x.Fname} {x.Lname}</td>
          <td>{x.number}</td>
          <td>{x.gender}</td>
          <td>{x.age}</td>
          <td>{x.email}</td>
          <td className="td-button"><button type="button" className="btn btn-primary admin-button">Update</button></td>
          <td className="td-button"><button type="button" className="btn btn-danger admin-button">Delete</button></td>
        </tr>
      );
    }
    return null;
  });

  return (
    <nav>
      <div className="p-5">
        <h2>DOCTOR ADMIN PANEL</h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayDoctor}
          </tbody>
        </table>
      </div>

      <div className="p-5">
        <h2>PATIENT ADMIN PANEL</h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayPatient}
          </tbody>
        </table>
      </div>
    </nav>
  );
};

export default Admin;
