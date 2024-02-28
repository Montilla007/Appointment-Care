import React from 'react';
import axios from 'axios';

const Schedule = ({ userData }) => {
  const [storedUserData, setStoredUserData] = React.useState(null);
  const [editAppointment, setEditAppointment] = React.useState({
    patientId: '',
    f2f: true,
    online: false,
    date: '',
    time: '',
    status: 'Request',
  });

  React.useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setStoredUserData(parsedUserData);
      setEditAppointment(prevState => ({
        ...prevState,
        patientId: parsedUserData._id 
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'f2f') {
      setEditAppointment((prevState) => ({
        ...prevState,
        f2f: true,
        online: false,
      }));
    } else if (id === 'online') {
      setEditAppointment((prevState) => ({
        ...prevState,
        f2f: false,
        online: true,
      }));
    } else {
      setEditAppointment((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://appointment-care-api.vercel.app/api/v1/appoint/edit/${storedUserData._id}`,
        editAppointment
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error editing appointment:', error);
    }
  };

  return (
    <div className="col-7 mx-5 mt-3 mb-5">
      <div className="row align-items-center mb-3">
        <div className="col-5">
          <h2 className="mb-3">Edit Schedule</h2>
        </div>
      </div>
      <div className="row info-input">
        <form onSubmit={handleSubmit}>
          <div className="col-12 px-0">
            <label htmlFor="schedule-date">Date</label>
            <br />
            <input
              type="date"
              className="form-control"
              id="date"
              value={editAppointment.date}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 px-0">
            <label htmlFor="schedule-time">Time</label>
            <br />
            <input
              type="time"
              className="form-control"
              id="time"
              value={editAppointment.time}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 px-0">
            <label htmlFor="schedule-status">Status</label>
            <br />
            <select
              className="form-control"
              id="status"
              value={editAppointment.status}
              onChange={handleChange}
            >
              <option value="Request">Request</option>
              <option value="Canceled">Cancel</option>
            </select>
          </div>
          <div className="col-12 px-0 my-3">
            <label>Consultation Type</label>
            <br />
            <div className="mx-auto appointment-f2f">
              <div>
                <input
                  type="radio"
                  id="f2f"
                  name="consultationType"
                  value="f2f"
                  checked={editAppointment.f2f}
                  onChange={handleChange}
                />
                <label htmlFor="f2f">F2F</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="online"
                  name="consultationType"
                  value="online"
                  checked={editAppointment.online}
                  onChange={handleChange}
                />
                <label htmlFor="online">Online</label>
              </div>
            </div>
          </div>
          <div className="flex-row">
            <button className="save-changes" type="submit">
              Save Changes
            </button>
            <button className="cancel-changes mx-3">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Schedule;
