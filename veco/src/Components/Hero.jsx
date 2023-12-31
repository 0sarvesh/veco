import React from 'react'
import '../styles/Hero.scss'
import vid from '../assets/vid.mp4'
function Hero() {
  return (
    <>
    <div className='section0'>
      <div className="container1">
        <div className="border">
        <h1>Eco friendly solutions</h1>
        <h3>for any Buisness</h3>
        </div>
      </div>
      <div className="container2">
        <div className='border1'>
         <p className="slogan1">We're dedicated to <span className='light'>eliminate plastic pollution</span> by transforming waste management practices </p>
         <p className='slogan'>and fostering a sustainable ecosystem.</p>
         </div>
      </div>
    </div>
    <div className="vcont">
    <div className="videos">
    <video src={vid} autoPlay loop muted className='video'></video>
    </div>

    </div>
    
    </>
  )
}

export default Hero
