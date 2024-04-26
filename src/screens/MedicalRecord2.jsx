import '../css/MedicalRecord2.css';
import Medicines from '../components/Medicines';
import LabRecords from '../components/LabRecords';
import GeneralReports from '../components/GeneralReports';
import { useState } from 'react';

function MedicalRecord2() {

    const [tab, settab] = useState('Medicines')
    const da = ['Medicines','Lab Records','General Reports']

    const MedicinesList = [
        {
            id: 1,
            medicine_name: 'Paracetamol',
            medicine_times:[{time:'🌅',food:'Before Food'},{time:'🌞',food:'After food'},{time:'🌙',food:'After food'}]
        },{
            id: 2,
            medicine_name: 'Da Da',
            medicine_times:[{time:'🌅',food:'After Food'},false,{time:'🌙',food:'After food'}]
        }
    ]

    const LabRecordsList = [
        {
            id: 1,
            lab_name: 'Blood Test',
            lab_date: '12/12/2021',
        },{
            id: 2,
            lab_name: 'Urine Test',
            lab_date: '12/12/2021',
        }
    ]

    const GeneralReportsList = [
        {
            id: 1,
            report_name:"hello",
            report_date:"12/12/2021"
        },{
            id: 2,
            report_name:"hello",
            report_date:"12/12/2021"
        }
    ]

    const Filters=({settab})=>{
        return da.map((da1) => (
            <p className="MedicalRecord2-filter-item" key={da1} onClick={()=>{settab(da1)}}>{da1}</p>
        ))
    }
    const Display=({tab,MedicinesList,LabRecordsList,GeneralReportsList})=>{

        if (tab === 'Medicines'){
            return <Medicines MedicinesList={MedicinesList} />
        }
        else if (tab === 'Lab Records'){
            return <LabRecords LabRecordsList={LabRecordsList} />
        }
        else if (tab === 'General Reports'){
            return <GeneralReports GeneralReportsList={GeneralReportsList} />
        }
    }

    return (
        <div className="MedicalRecord2">
            <div className='MedicalRecord2-greet'>
                <div className='MedicalRecord2-greet-img-div'>
                    <img className='MedicalRecord2-greet-img' src='MedicalRecord1/doctor.png' alt='greet-img' />
                </div>
                <div className='MedicalRecord2-greet-text'>
                    <h1 className='MedicalRecord2-greet-text-h1'>Medical Records</h1>
                </div>
            </div>
            <div className="MedicalRecord2-search">
                <input className="MedicalRecord2-search-input" type="text" placeholder="Search for a Record" />
            </div>
            <div className="MedicalRecord2-filter">
            <Filters settab={settab}/>
            </div>
            <Display tab={tab} MedicinesList={MedicinesList} LabRecordsList={LabRecordsList} GeneralReportsList={GeneralReportsList}/>
        </div>
    );

}

export default MedicalRecord2;