import './App.css'
import FooterNav from './components/FooterNav';
import MedicalRecord1 from './screens/MedicalRecord1';
import MedicalRecord2 from './screens/MedicalRecord2';
import MedicalRecord3 from './screens/MedicalRecord3';
import MedicalRecordDates from './screens/MedicalRecordDates';
import Hospitals from './screens/Hospitals';
import Doctors from './screens/Doctors';

function App() {

  return (
    <div className='App'>
    <MedicalRecord2 />
    <FooterNav />
    </div>
  )
}

export default App
