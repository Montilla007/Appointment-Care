//App JSx
import React, { useState } from 'react'; // Import useState from React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Service from "./pages/service/Service";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Patientsignup from "./pages/patientsignup/Patientsignup";
import DoctorInformation from "./components/reusecomponent/DoctorInformation";
import TopDoctors from './pages/topdoctors/TopDoctors';
import DoctorProfile from "./pages/doctorprofile/DoctorProfile";
import DefaultLayout from "./components/layouts/defaultlayout/DefaultLayout";
import Admin from './pages/admin/Admin';
import DoctorSignup from './pages/doctorsignup/DoctorSignup';
import AdminLayout from './components/layouts/adminlayout/AdminLayout';
import PatientList from './pages/admin/PatientList';
import DoctorList from './pages/admin/DoctorList'
import ProfileLayout from './components/layouts/profilelayout/ProfileLayout';
import PatientInformation from "./pages/profile/PatientInformation";
import ProfileChangePassword from './pages/profile/ProfileChangePassword';
import ProfilePrescription from './pages/profile/ProfilePrescription';
import ProfileSchedule from './pages/profile/ProfileSchedule';
import Overview from './pages/doctorprofile/Overview';
import DoctorPageLayout from './components/layouts/doctorpagelayout/DoctorPageLayout';
import DoctorHomePage from './pages/doctorpage/DoctorHomePage';
import Signuplayout from './components/layouts/signuplayout/Signuplayout';
import DoctorPatients from './pages/doctorpage/DoctorPatients'
import DoctorAcceptReject from './pages/doctorpage/DoctorAcceptReject'
import DoctorUserProfile from './pages/doctorpage/doctorprofilepage/DoctorUserProfile';
import AdminLogin from './pages/admin/AdminLogin';
import AdminRegister from './pages/admin/AdminRegister';
import DoctorProfileLayout from './components/layouts/doctorprofilelayout/DoctorProfileLayout'
import Appointment from './pages/appointment/Appointment';
import PatientAppointment from './pages/patientappointment/PatientAppointment';
function App() {
  const [userData, setUserData] = useState(null);
  const [adminData, setAdminData] = useState(null);
  React.useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  React.useEffect(() => {
    const storedUserData = localStorage.getItem('adminData');
    if (storedUserData) {
      setAdminData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout userData={userData} />} >
            <Route index element={<Home />} />
            <Route path='Service' element={<Service />} />
            <Route path='TopDoctors' element={<TopDoctors />} />
            <Route path='Signup' element={<Signup />} />
            <Route path='PatienAppointment' element={<PatientAppointment userData={userData} />} />
            <Route path='Login' element={<Login setUserData={setUserData} />} />
            <Route path='/Appointment/:id' element={<Appointment userData={userData} />} />
            {/* <Route path="SignUpLayout" element={<Signuplayout />}> */}
            {/* </Route> */}
            <Route path='Signup' element={<DoctorSignup />} />
            <Route path='PatientSignup' element={<Patientsignup />} />
            <Route path='DoctorSignup' element={<DoctorSignup />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='DoctorProfile/:id' element={<DoctorProfile />} >
              <Route index element={<Overview />} />
            </Route>
            <Route path='DoctorInformation' element={<DoctorInformation />} />
            <Route path="ProfileLayout" element={<ProfileLayout />}>
              <Route index element={<PatientInformation userData={userData} />} />
              <Route path='ProfileChangePassword' element={<ProfileChangePassword userData={userData} />} />
              <Route path='ProfilePrescription' element={<ProfilePrescription userData={userData} />} />
              <Route path='ProfileSchedule' element={<ProfileSchedule userData={userData} />} >
              </Route>
            </Route>
          </Route>
          <Route path='/DoctorPage' element={<DoctorPageLayout userData={userData} />} >
            <Route index element={<DoctorHomePage userData={userData} />} />
            <Route path='DoctorPatient' element={<DoctorPatients userData={userData} />} />
            <Route path='DoctorAcceptReject' element={<DoctorAcceptReject userData={userData} />} />
            <Route path='DoctorUserProfile' element={<DoctorProfileLayout />} >
              <Route index element={<DoctorUserProfile userData={userData} />} />
            </Route>
          </Route>
          <Route path="/Admin" element={<AdminLayout adminData={adminData} />}>
            <Route index element={<Admin />}></Route>
            <Route path='PatientList' element={<PatientList />}></Route>
            <Route path='DoctorList' element={<DoctorList />}></Route>
          </Route>
          <Route path='AdminLogin' element={<AdminLogin setAdminData={setAdminData} />} />
          <Route path='AdminRegister' element={<AdminRegister />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
