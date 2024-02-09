import Navigation from "./components/header/Navigation"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import Service from "./pages/service/Service"
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Patientsignup from "./pages/patientsignup/Patientsignup"
import DoctorInformation from "./components/reusecomponent/DoctorInformation"
import DoctorPage from "./components/reusecomponent/DoctorPage"
import PatientInformation from "./components/reusecomponent/PatientInformation"
import TopDoctors from './pages/topdoctors/TopDoctors'
import './app.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/TopDoctors' element={<TopDoctors />} />
          <Route path='/Auth/Signup' element={<Signup />} />
          <Route path='/PatientSignup' element={<Patientsignup />} />
          <Route path='/DoctorInformation' element={<DoctorInformation />} />
          <Route path='/DoctorPage' element={<DoctorPage />} />
          <Route path='/PatientInformation' element={<PatientInformation />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
