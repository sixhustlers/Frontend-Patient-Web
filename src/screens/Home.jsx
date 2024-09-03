import React from 'react'
import '../css/Home.css'
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-greet-bar">
          <div className="home-greet-bar-img-text">
            <img
              className="home-greet-bar-img"
              src="MedicalRecord1/doctor.png"
              alt="greet-img"
            />
            <div className="home-greet-bar-text">
              <h3 className="home-greet-bar-img-text-h1">Namaste</h3>
              <p className="home-greet-bar-img-text-p">Avinash!</p>
            </div>
          </div>
          <img
            className="home-greet-bar-img"
            src="Home/ambulance.png"
            alt="greet-img"
          />
        </div>
      </div>
    </>
  )
}

export default Home
