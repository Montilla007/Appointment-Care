
import React from 'react'
import axios from 'axios'; // Import axios


const PatientList = () => {
    const [patientData, setPatientData] = React.useState([]);

    const refreshPage = () => {
        window.location.reload();
      };

      
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://appointment-care-api.vercel.app/api/v1/person/users`);
                setPatientData(response.data);
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
            setPatientData(response.data);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
    const displayPatient = patientData.map(x => {
        if (x.role === "Patient") {
            return (
                <tr key={x._id}>
                    <th scope="row">{x._id}</th>
                    <td>{x.Fname} {x.Lname}</td>
                    <td>{x.number}</td>
                    <td>{x.gender}</td>
                    <td>{x.age}</td>
                    <td>{x.email}</td>
                    <td className="td-button">
                        <button type="button" className="btn btn-danger admin-button" onClick={() => handleDelete(x._id)}>Delete</button>
                    </td>
                </tr>
            );
        }
        return null;
    });
    return (
        <div>
            <h2 className='refresh'>Patient List Admin | <button onClick={refreshPage}>Refresh</button></h2>
            <div className="p-4">
                <h2 className='applicants'>Doctor AppointCare Applicants</h2>
                <table className="p-4 text-center">
                    <thead className="theads">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Doctor's Name</th>
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
                </table >
            </div >
        </div>
    )
}

export default PatientList