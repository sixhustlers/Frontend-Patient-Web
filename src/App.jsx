import './App.css'
import FooterNav from './components/FooterNav';
import MedicalRecord1 from './screens/MedicalRecord1';
import MedicalRecord3 from './screens/MedicalRecord3';
import MedicalRecordDates from './screens/MedicalRecordDates';

function App() {

  return (
    <div className='App'>
    <MedicalRecordDates />
    <FooterNav />
    </div>
  )
}

export default App
