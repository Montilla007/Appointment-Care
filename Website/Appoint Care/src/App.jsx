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
import DefaultLayout from "./components/layouts/DefaultLayout";
import PatientInformation from "./pages/patientinformation/PatientInformation";
import Admin from './pages/admin/Admin';
import DoctorSignup from './pages/doctorsignup/DoctorSignup';
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
          <Route element={<DefaultLayout userData={userData} />} > {/* Fix Route element syntax */}
            <Route path='/' element={<Home />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/TopDoctors' element={<TopDoctors />} />
            <Route path='/Login' element={<Login setUserData={setUserData} />} /> {/* Pass setUserData as prop */}
            <Route path='/PatientSignup' element={<Patientsignup />} />
            <Route path='/DoctorSignup' element={<DoctorSignup />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/PatientInformation' element={<PatientInformation userData={userData} />} /> {/* Pass userData as prop */}
            <Route path='/DoctorProfile/:id' element={<DoctorProfile />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/DoctorInformation' element={<DoctorInformation />} />
          </Route>
          <Route path='/DoctorPage' element={<DoctorPage />} />
          <Route path='/Admin' element={<Admin />}></Route>

        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
