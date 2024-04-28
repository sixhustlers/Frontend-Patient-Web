import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MedicalRecord1 from './screens/MedicalRecord1';
import MedicalRecord2 from './screens/MedicalRecord2';
import MedicalRecord3 from './screens/MedicalRecord3';
import MedicalRecordDates from './screens/MedicalRecordDates';
import Hospitals from './screens/Hospitals';
import Doctors from './screens/Doctors';
import PatientDetails from './screens/RegisterForm';

function App() {

  return (
    <BrowserRouter basename='/'>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/detailsForm" element={<PatientDetails />} />
        <Route path="/*" element={<h1>Not Found 404</h1>} />
        <Route path="/medicalRecord1" element={<MedicalRecord1 />} />
        <Route path="/medicalRecord2" element={<MedicalRecord2 />} />
        <Route path="/medicalRecord3" element={<MedicalRecord3 />} />
        <Route path="/medicalRecordDates" element={<MedicalRecordDates />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
