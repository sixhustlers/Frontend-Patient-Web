import '../css/MedicalRecordDates.css';
import { useLocation } from 'react-router-dom';

function MedicalRecordDates(props){

    // const records = [
    //     {
    //         id: 1,
    //         date:"14 Feb 2024",
    //         name:"Common cold",
    //         location:"bellary"
    //     },{
    //         id: 1,
    //         date:"14 Feb 2024",
    //         name:"Common cold",
    //         location:"bellary"
    //     },{
    //         id: 1,
    //         date:"14 Feb 2024",
    //         name:"Common cold",
    //         location:"bellary"
    //     }
    // ]

    const location = useLocation()
    const { records } = location.state || {}
    console.log(records)

    return (
      <div className="MedicalRecordDates">
        <div className="MedicalRecordDates-greet">
          <div className="MedicalRecordDates-greet-img-div">
            <img
              className="MedicalRecordDates-greet-img"
              src="MedicalRecord1/doctor.png"
              alt="greet-img"
            />
          </div>
          <div className="MedicalRecordDates-greet-text">
            <h1 className="MedicalRecordDates-greet-text-h1">Hi Avinash</h1>
            <p className="MedicalRecordDates-greet-text-p">
              review you records
            </p>
          </div>
        </div>
        <div className="MedicalRecordDates-search">
          <input
            className="MedicalRecordDates-search-input"
            type="text"
            placeholder="Search for a record"
          />
        </div>
        <div className="MedicalRecordDates-records-div">
          {records.map((record) => (
            <div className="MedicalRecordDates-record" key={record._id}>
              <div className="MedicalRecordDates-record-date">
                <div>
                  <img
                    className="MedicalRecordDates-record-date-img"
                    src="FooterNav/calender.png"
                    alt="home"
                  />
                  {new Date(record.appointment_date).toDateString()}
                </div>
                <div className="MedicalRecordDates-record-name">
                  {record.disease_name}
                </div>
              </div>
              <div className="MedicalRecordDates-record-docotor">
                <img
                  className="MedicalRecordDates-record-docotor-img"
                  src="MedicalRecordDates/doctor2.png"
                  alt="doctor"
                />
                <div className="MedicalRecordDates-record-docotor-name">
                  {record.doctor_name}
                </div>
              </div>
              <hr></hr>
              <div className="MedicalRecordDates-record-location">
                {record.hospital_name}
              </div>
            </div>
          ))}
        </div>
        <div className="MedicalRecordDates-add-record">
          <img
            className="MedicalRecordDates-add-record-img"
            src="MedicalRecord1/add.png"
            alt="add-record"
          />
        </div>
      </div>
    )

}

export default MedicalRecordDates;