//App JSx

import React, { useState } from 'react'; // Import useState from React
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Service from "./pages/service/Service";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Patientsignup from "./pages/patientsignup/Patientsignup";
import DoctorInformation from "./components/reusecomponent/DoctorInformation";
import DoctorPage from "./pages/doctorpage/DoctorPage";
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

function App() {
  const [userData, setUserData] = useState(null);


  React.useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
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
            <Route path='Login' element={<Login setUserData={setUserData} />} />
            <Route path='Signup/PatientSignup' element={<Patientsignup />} />
            <Route path='Signup/DoctorSignup' element={<DoctorSignup />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='DoctorProfile/:id' element={<DoctorProfile />} />
            <Route path='Signup' element={<Signup />} />
            <Route path='DoctorInformation' element={<DoctorInformation />} />
            <Route path="ProfileLayout" element={<ProfileLayout />}>
              <Route index element={<PatientInformation userData={userData} />} />
              <Route path='ProfileChangePassword' element={<ProfileChangePassword userData={userData} />} />
              <Route path='ProfilePrescription' element={<ProfilePrescription userData={userData} />} />
              <Route path='ProfileSchedule' element={<ProfileSchedule userData={userData} />} />

            </Route>
          </Route>
          <Route path='/DoctorPage' element={<DoctorPage />} />
          <Route path="/Admin" element={<AdminLayout />}>
            <Route index element={<Admin />}></Route>
            <Route path='PatientList' element={<PatientList />}></Route>
            <Route path='DoctorList' element={<DoctorList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
