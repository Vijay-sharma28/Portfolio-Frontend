import React from 'react'
import "./About.css"
import "../../universal.css"
import AboutData from '../AboutData/AboutData'
import Heading from '../Heading/Heading'

const About = () => {
  return (
    <div id='about'>
      <Heading data="About" />
      <div className='all-about'>
        <div className="hero-content">
          <h2 className='about-heading'>Hello, I am Vijay</h2>
          <p className='about-content'>I am a Frontend Developer skilled in HTML, CSS, JavaScript, and React, focused on building responsive and modern web applications.
            I have experience designing clean UI layouts and integrating frontend interfaces with backend services.
            I am currently exploring the MERN stack and continuously improving my problem-solving and development skills through hands-on projects.
            My goal is to contribute to impactful projects while growing as a full-stack developer.</p>
          <div className="data-grid">
            <AboutData heading="Name" data="Vijay" />
            <AboutData heading="Degree" data="B.Tech Computer Science" />
            <AboutData heading="Email" data="vijaysharma6402@gmail.com" />
            <AboutData heading="City" data="Gurugram" />
          </div>
        </div>
        <img src="resourses/about-img.jpg" alt="" />

      </div>
    </div>
  )
}

export default About
