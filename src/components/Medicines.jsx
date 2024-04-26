function Medicines({MedicinesList}) {

    return <>
        <div className='MedicalRecord2-qr-div'>
            <img className='MedicalRecord2-qr' src='MedicalRecord2/Qrcode.png' alt='qr' />
            Show Qr to Medical Store
        </div>
        <div className="MedicalRecord2-info-div">
            {
                MedicinesList.map((record) => {
                    return (
                        <div className="MedicalRecord2-info">
                            <div className="MedicalRecord2-info-name-div">
                                <p className='MedicalRecord2-info-name'>{record.medicine_name}</p>
                            </div>
                            <hr></hr>
                            <div className="MedicalRecord2-info-times">
                                {record.medicine_times.map((time) => {
                                    if (time) {
                                        return (
                                            <div className="MedicalRecord2-info-time">
                                                <p className='MedicalRecord2-info-time-p'>{time.time}</p>
                                                <p className='MedicalRecord2-info-time-p'>{time.food}</p>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className="MedicalRecord2-info-time">
                                                <p className='MedicalRecord2-info-time-p'>------</p>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>


}

export default Medicines;