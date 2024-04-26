import '../css/MedicalRecord3.css';

function MedicalRecord3(){

    const records = [
        {
            id: 1,
            date:"2 months old",
            name:"Common cold",
            date2:"Feb 2024"
        },{
            id: 1,
            date:"2 months old",
            name:"Common cold",
            date2:"Feb 2024"
        },{
            id: 1,
            date:"2 months old",
            name:"Common cold",
            date2:"Feb 2024"
        },{
            id: 1,
            date:"2 months old",
            name:"Common cold",
            date2:"Feb 2024"
        },{
            id: 1,
            date:"2 months old",
            name:"Common cold",
            date2:"Feb 2024"
        }
    ]

    return (
        <div className="MedicalRecord3">
            <div className='MedicalRecord3-greet'>
                <div className='MedicalRecord3-greet-img-div'>
                    <img className='MedicalRecord3-greet-img' src='MedicalRecord1/doctor.png' alt='greet-img' />
                </div>
                <div className='MedicalRecord3-greet-text'>
                    <h1 className='MedicalRecord3-greet-text-h1'>Hi Avinash</h1>
                    <p className='MedicalRecord3-greet-text-p'>review you records</p>
                </div>
            </div>
            <div className="MedicalRecord3-search">
                <input className="MedicalRecord3-search-input" type="text" placeholder="Search for a record" />
            </div>
            <div className="MedicalRecord3-records-div">
                {
                    records.map((record) => (
                        <div className="MedicalRecord3-record" key={record.id}>
                            <div className="MedicalRecord3-record-date">
                            <div><img  className="MedicalRecord3-record-date-img" src='FooterNav/calender.png' alt='home' />
                            {record.date}</div>
                            <div className="MedicalRecord3-record-name">{record.name}</div>
                            </div>
                            <hr></hr>
                            <div className="MedicalRecord3-record-date2">{record.date2}</div>
                        </div>
                    ))
                }
            </div>
            <div className="MedicalRecord3-add-record">
                <img className="MedicalRecord3-add-record-img" src='MedicalRecord1/add.png' alt='add-record' />
            </div>
        </div>
    );

}

export default MedicalRecord3;