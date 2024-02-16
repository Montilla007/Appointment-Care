import Navigation from "./components/navigation/Navigation";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Service from "./pages/service/Service";
import Login from './pages/login/Login';
import Signup from './pages/testfolder/signup/Signup';
import Patientsignup from "./pages/patientsignup/Patientsignup";
import DoctorInformation from "./components/reusecomponent/DoctorInformation";
import DoctorPage from "./pages/doctorpage/DoctorPage";
import PatientInformation from "./components/reusecomponent/PatientInformation";
import TopDoctors from './pages/topdoctors/TopDoctors';
import DoctorProfile from "./pages/doctorprofile/DoctorProfile";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/TopDoctors' element={<TopDoctors />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/PatientSignup' element={<Patientsignup />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/PatientInformation' element={<PatientInformation />} />
            <Route path='/DoctorProfile/:id' element={<DoctorProfile />} />
            {/* <Route path='/Auth/Signup' element={<Signup />} /> */}
            <Route path='/DoctorInformation' element={<DoctorInformation />} />
          </Route>
          <Route path='/DoctorPage' element={<DoctorPage />} />
          <Route path='/Admin' element={<Admin/>}></Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
