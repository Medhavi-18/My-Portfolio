import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Medhavi Tuppekar</b> and I am from Nanded, India.
            I'm a <b>Android Developer</b> and a final year college student pursuing <b>BTech in CSE</b>. <br/><br/>
            I have done one month internship as a <b>Full Stack AI Developer</b> at GenAIkit.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
      <Skills skill='Java' />
        <Skills skill='C' />
        <Skills skill='C++' />
        <Skills skill='Python' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Javascript' />
        <Skills skill='Bootstrap' />
        <Skills skill='Android' />
        <Skills skill='Figma' />
        <Skills skill='React' />
        <Skills skill='Github' />
      </div>
    </>
  )
}

export default About