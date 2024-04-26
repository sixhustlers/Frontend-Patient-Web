import '../css/Hospitals.css';

function Hospitals() {

    const hospitals = [
        {
            id: 1,
            hospital_img: 'Hospitals/Hospital.png',
            hospital_name: 'Apollo Hospital',
            hospital_dis:"3.4 km",
            hospital_no: '9876543210',
            hospital_rating: 4.5,
            hospital_website: 'apollo.com',
        },{
            id: 1,
            hospital_img: 'Hospitals/Hospital.png',
            hospital_name: 'Apollo Hospital',
            hospital_dis:"3.4 km",
            hospital_no: '9876543210',
            hospital_rating: 4.5,
            hospital_website: 'apollo.com',
        }
    ]

    return (
        <div className="Hospitals">
            <div className='Hospitals-greet'>
                <div className='Hospitals-greet-img-div'>
                    <img className='Hospitals-greet-img' src='MedicalRecord1/doctor.png' alt='greet-img' />
                </div>
                <div className='Hospitals-greet-text'>
                    <h1 className='Hospitals-greet-text-h1'>Hospitals</h1>
                    <p className='Hospitals-greet-text-p'>nearby !</p>
                </div>
            </div>
            <div className="Hospitals-search">
                <input className="Hospitals-search-input" type="text" placeholder="Search for a hospital" />
            </div>
            <div className="Hospitals-info-div">
                {
                    hospitals.map((hospital) => (
                        <div className="Hospital" key={hospital.id}>
                            <div className="Hospitals-img-div">
                                <img className="Hospitals-img" src={hospital.hospital_img} alt="hospital-img" />
                            </div>
                            <div className='Hospitals-details'>
                            <div className="Hospitals-div1">
                                {hospital.hospital_name}
                            </div>
                            <div className='Hospitals-div2'>
                                <p>{hospital.hospital_dis}</p>
                                <p>{hospital.hospital_no}</p>
                            </div>
                            <div className='Hospitals-div3'>
                                <p>⭐{hospital.hospital_rating}</p>
                                <p>{hospital.hospital_website}</p>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );

}

export default Hospitals;