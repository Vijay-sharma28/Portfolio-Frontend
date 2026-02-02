import React from 'react'
import './Home.css'
import Button from '../Button/Button'

const Home = () => {
    return (
        <>
            <div id='home'>
                <div className="blank"></div>
                <h4>Hello here</h4>
                <h1 className='slide-left'>I am Vijay</h1>
                <h2>Frontend Developer | MERN Stack Learner</h2>
                <p>I build responsive and user-friendly web applications. <br />
                    Passionate about learning modern web technologies and <br />
                    turning ideas into real-world projects.
                </p>
                <div className="btns">
                    <Button text="Hire Me" bgColor="black" textColor="white" className="slide-left" link="#contact" />
                    <Button text="My work" bgColor="white" textColor="black" className="ml-20 slide-right" link="#projects" />
                </div>
            </div>
        </>
    )
}

export default Home
