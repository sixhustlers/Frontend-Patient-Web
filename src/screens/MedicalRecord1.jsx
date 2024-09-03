import '../css/MedicalRecord1.css'
import { useState, useEffect, useCallback } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import {
  useAppointments,
} from '../contexts/AppointmentsContext'
import MedicalRecordDates from './MedicalRecordDates'

function MedicalRecord1() {
  const { appointments, setAppointments } = useAppointments()
  const navigate = useNavigate()
  const patient_id = 222221 // fetch it from the cookies stored during the jwt-authentication
  const [isLoading, setIsLoading] = useState(true)

  const handleClick = (e, records) => {
    console.log(records)
    // Use navigate to move to the MedicalRecordDates page with the record data
    navigate('/medicalRecordDates', { state: { records: records } })
  }
  
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/patient/fetchAppointments/${patient_id}`
      )
      const data = response.data
      //  console.log(useAppointments.setAppointments(data))
      setAppointments(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchdata()
    return () => {
      console.log('cleanup')
    }
  }, [patient_id, setAppointments])

  const records = appointments
  // console.log(records)
  return (
    <div className="MedicalRecord1">
      <div className="MedicalRecord1-greet">
        <div className="MedicalRecord1-greet-img-div">
          <img
            className="MedicalRecord1-greet-img"
            src="MedicalRecord1/doctor.png"
            alt="greet-img"
          />
        </div>
        <div className="MedicalRecord1-greet-text">
          <h1 className="MedicalRecord1-greet-text-h1">Hi Avinash</h1>
          <p className="MedicalRecord1-greet-text-p">review you records</p>
        </div>
      </div>
      <div className="MedicalRecord1-search">
        <input
          className="MedicalRecord1-search-input"
          type="text"
          placeholder="Search for a record"
        />
      </div>
      {isLoading ? (
        <div>
          Loading...
          <br />
          Your Appointments
        </div>
      ) : records.length === 0 ? (
        <div>No Medical Records</div>
      ) : (
        <div className="MedicalRecord1-records-div">
          {records.map((record) => (
            <div
              className="MedicalRecord1-record"
              key={record[0].transaction_id}
              onClick={(e)=>{handleClick(e,record)}}
            >
              <div
                className="MedicalRecord1-record-date"
                key={record[0].transaction_id}
              >
                <img
                  className="MedicalRecord1-record-date-img"
                  src="FooterNav/calender.png"
                  alt="home"
                />
                {new Date(record[0].appointment_date).toDateString()}
              </div>
              <hr></hr>
              <div className="MedicalRecord1-record-name">
                {record[0].disease_name}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="MedicalRecord1-add-record">
        <img
          className="MedicalRecord1-add-record-img"
          src="MedicalRecord1/add.png"
          alt="add-record"
        />
      </div>
    </div>
  )
}

export default MedicalRecord1
