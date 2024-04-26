import '../css/MedicalRecord1.css';

function MedicalRecord1() {

    const records = [
        {
            id: 1,
            date:"2 months old",
            name:"Common cold"
        },{
            id: 1,
            date:"2 months old",
            name:"Common cold"
        },{
            id: 1,
            date:"2 months old",
            name:"Common cold"
        },{
            id: 1,
            date:"2 months old",
            name:"Common cold"
        },{
            id: 1,
            date:"2 months old",
            name:"Common cold"
        }
    ]

    return (
        <div className="MedicalRecord1">
            <div className='MedicalRecord1-greet'>
                <div className='MedicalRecord1-greet-img-div'>
                    <img className='MedicalRecord1-greet-img' src='MedicalRecord1/doctor.png' alt='greet-img' />
                </div>
                <div className='MedicalRecord1-greet-text'>
                    <h1 className='MedicalRecord1-greet-text-h1'>Hi Avinash</h1>
                    <p className='MedicalRecord1-greet-text-p'>review you records</p>
                </div>
            </div>
            <div className="MedicalRecord1-search">
                <input className="MedicalRecord1-search-input" type="text" placeholder="Search for a record" />
            </div>
            <div className="MedicalRecord1-records-div">
                {
                    records.map((record) => (
                        <div className="MedicalRecord1-record" key={record.id}>
                            <div className="MedicalRecord1-record-date">
                            <img  className="MedicalRecord1-record-date-img" src='FooterNav/calender.png' alt='home' />
                            {record.date}
                            </div>
                            <hr></hr>
                            <div className="MedicalRecord1-record-name">{record.name}</div>
                        </div>
                    ))
                }
            </div>
            <div className="MedicalRecord1-add-record">
                <img className="MedicalRecord1-add-record-img" src='MedicalRecord1/add.png' alt='add-record' />
            </div>
        </div>
    );

}

export default MedicalRecord1;