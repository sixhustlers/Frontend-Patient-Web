function GeneralReports({GeneralReportsList}) {

    return <>
        <div className='MedicalRecord2-qr-div'>
            <img className='MedicalRecord2-qr' src='MedicalRecord2/Qrcode.png' alt='qr' />
            Show Qr to Lab
        </div>
        <div className="MedicalRecord2-info-div">
            {
                GeneralReportsList.map((record) => {
                    return (
                        <div className="MedicalRecord2-info">
                            <div className="MedicalRecord2-info-name-div">
                                <p className='MedicalRecord2-info-name'>{record.report_name}</p>
                            </div>
                            <hr></hr>
                            <div className="MedicalRecord2-info-times">
                                <p className='MedicalRecord2-info-time-p'>{record.report_date}</p>
                                <p className='MedicalRecord2-info-time-p'>Download</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>


}

export default GeneralReports;