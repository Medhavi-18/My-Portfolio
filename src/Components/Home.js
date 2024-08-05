import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.jpg';


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>MEDHAVI TUPPEKAR</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Welcome to<b> My Portfolio!</b></h1>
          <p>
          I am passionate about transforming raw ideas into impactful websites and products. 
          I thrive on challenges that push my skills as a developer and am committed to creating 
          work that I can be proud of.
          <br /><br />
            
            I am fluent in <b>Java</b> and know a bit of <b>Python</b> and am working on a few 
            projects in the Generative AI.
            I plan to learn <b>Next.js</b>, <b>Three.js</b> and<b> Typescript</b> in the near future. <br /><br />
            
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home