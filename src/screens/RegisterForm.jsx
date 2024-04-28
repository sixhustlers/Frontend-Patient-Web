import '../css/RegisterForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function PatientDetails() {

   const [details, setDetails] = useState({
      skip: false,
      name: '',
      dob: '',
      profession: '',
      sex: '',
      bloodGroup: '',
      height: '',
      weight: '',
      profilePicture: "",
   });

   const handleskip = async() => {
      setDetails(() => ({
         skip: true
      }));
      console.log(details);
   await axios.post('http://localhost:5000/api/patient/patientDetails', {details}).then((res) => {
      console.log(res);
      alert('Please enter the details ASAP to get the best service');
      // save the token in local storage
      //localStorage.setItem('token', res.data.token);
      //window.sessionStorage.setItem("username", details.name);
      window.location.href = '/home';
   }).catch((err) => {
      alert(err.message);
   }
   );

   }

   const handleImage = async(e) => {
      const file=e.target.files[0];
      
      const base64=await convertToBase64(file)
      console.log(base64);
      const arr=details;
      details.profilePicture=base64;
      setDetails(arr);

      //changing the display of the image
      
      const image=document.querySelector('.add-image img');
      image.src=base64;
      image.style.width='100%';
      image.style.height='100%';
      image.style.borderRadius='50%';
      
   }

   const handleChange = (e) => {
      const { name, value } = e.target;
      //console.log(name, value);

      setDetails(() => ({
         ...details,
         [name]: value
      }));

      //console.log(details);
   }

   const handlesubmit = async(e) => {
      e.preventDefault();
      //console.log(e.target.className);
      //check if the user has entered all the details
      if (details.name === '' || details.dob === '' || details.profession === '' ||
         details.sex === '' || details.bloodGroup === '' || details.height === '' || details.weight === '' || details.profilePicture === '') {
         alert('Please enter all the details');
         return;
      }

      await axios.post('http://localhost:5000/api/patient/patientDetails', {details}).then((res) => {
         console.log(res);
         alert('Patient details saved successfully');
         // save the token in local storage
         // localStorage.setItem('token', res.data.token);
         // window.sessionStorage.setItem("username", e.target[0].value);
         window.location.href = '/home';
      }).catch((err) => {
         alert(err.message);
      }
      );

   }

   return (
      <>
         <div className="details-form-page">
            <div className="details-form">
               <div className="greeting">
                  <h1>Namaste... </h1>
                  <button className='skip' onClick={handleskip}>skip</button>
               </div>
               <div className="message">
                  <p>
                     We want to offer the best service in everything we do.
                     It would really help us if you could give us the right information about yourself.
                     Don't worry, your details are kept private and will help us give you the right kind of help.
                  </p>
               </div>
            </div>
            <div className="add-image">
               <label htmlFor="profilePicture">
               <img src="FormPage/add-image.png" alt="profile-picture" style={{cursor:'pointer'}}/>
               </label>
               <input type="file" id="profilePicture" name='profilePicture' label="image" onChange={handleImage} style={{ display: 'none'}} accept='.jpeg ,.jpg, .png' />
               <h5 className='add-image-text'>Add image</h5>
            </div>
            <div className="form-section">
               <form className="form">

                  <div className="name">
                     <label className='form-label' htmlFor="name">Name :-</label>
                     <input className='input-field' onChange={handleChange} type="text" placeholder="Your Name" name='name' />
                  </div>
                  <div className="name">
                     <label className='form-label' htmlFor="dob">Date of Birth :-</label>
                     <input className='input-field' onChange={handleChange} type="date" name='dob' />
                  </div>
                  <div className="name">
                     <label className='form-label' htmlFor="profession">Profession :-</label>
                     <input className='input-field' onChange={handleChange} type="text" placeholder="Mention your Profession" name='profession' />
                  </div>
                  <div className="sex-blood-group">
                     <div className="sex">
                        <label className='sex-blood-group-form-label' htmlFor="sex">Sex :-</label>
                        <select className='sex-input-field' onChange={handleChange} name="sex" id="">
                           <option value="">Select</option>
                           <option value="Male">Male</option>
                           <option value="Female">Female</option>
                           <option value="Other">Other</option>
                        </select>
                     </div>

                     <div className="blood-group">
                        <label className='sex-blood-group-form-label' htmlFor="blood_group">Blood :-</label>
                        <select className='blood-group-input-field' onChange={handleChange} name="bloodGroup" id="">
                           <option value="">Select</option>
                           <option value="A+">A+</option>
                           <option value="A-">A-</option>
                           <option value="B+">B+</option>
                           <option value="B-">B-</option>
                           <option value="AB+">AB+</option>
                           <option value="AB-">AB-</option>
                           <option value="O+">O+</option>
                           <option value="O-">O-</option>
                        </select>
                     </div>
                  </div>

                  <div className="sex-blood-group">
                     <div className="sex">
                        <label className='sex-blood-group-form-label' htmlFor="height">Height :-</label>
                        <input style={{ width: '95px' }} className='sex-input-field' onChange={handleChange} type="text" name="height" placeholder='in cm' id="" />
                     </div>

                     <div className="blood-group">
                        <label className='sex-blood-group-form-label' htmlFor="weight">Weight :-</label>
                        <input style={{ width: '95px' }} className='sex-input-field' onChange={handleChange} type="text" name="weight" placeholder='in kg' id="" />
                     </div>
                  </div>
               </form>
            </div>
            <div className="button-section">
               <button className='submit-button' onClick={handlesubmit}>Submit</button>
            </div>
         </div>
      </>
   )
}

function convertToBase64(file){
   return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
         resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
         reject(error);
      }
   });
}

export default PatientDetails;