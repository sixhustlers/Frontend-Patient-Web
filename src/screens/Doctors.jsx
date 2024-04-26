import '../css/Doctors.css';

function Doctors() {

    const Doctors = [
        {
            id: 1,
            Doctor_img: 'Doctors/Doctor.png',
            Doctor_name: 'Apollo Doctor',
            Doctor_dis:"General Physician",
            Doctor_rating: 4.5,
        },{
            id: 1,
            Doctor_img: 'Doctors/Doctor.png',
            Doctor_name: 'Apollo Doctor',
            Doctor_dis:"General Physician",
            Doctor_rating: 4.5,
        }
    ]

    return (
        <div className="Doctors">
            <div className='Doctors-greet'>
                <div className='Doctors-greet-img-div'>
                    <img className='Doctors-greet-img' src='MedicalRecord1/doctor.png' alt='greet-img' />
                </div>
                <div className='Doctors-greet-text'>
                    <h1 className='Doctors-greet-text-h1'>Doctors</h1>
                    <p className='Doctors-greet-text-p'>nearby !</p>
                </div>
            </div>
            <div className="Doctors-search">
                <input className="Doctors-search-input" type="text" placeholder="Search for a Doctor" />
            </div>
            <div className="Doctors-filter">
                {Doctors.map((Doctor) => (
                    <p className="Doctors-filter-item"> {Doctor.Doctor_dis}</p>
                    ))
                }
            </div>
            <div className="Doctors-info-div">
                {
                    Doctors.map((Doctor) => (
                        <div className="Doctor" key={Doctor.id}>
                            <div className="Doctors-img-div">
                                <img className="Doctors-img" src={Doctor.Doctor_img} alt="Doctor-img" />
                            </div>
                            <div className='Doctors-details'>
                            <div className="Doctors-div1">
                                {Doctor.Doctor_name}
                            </div>
                            <div className='Doctors-div2'>
                                <p>{Doctor.Doctor_dis}</p>
                            </div>
                            <div className='Doctors-div3'>
                                <p>⭐{Doctor.Doctor_rating}</p>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );

}

export default Doctors;