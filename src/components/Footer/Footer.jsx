import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <a href="https://www.instagram.com/sharma_vijay28/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/vijay-sharma-7a4391317/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Vijay-sharma28" target='_blank'><i className="fa-brands fa-github"></i></a>
            </div>
            <p className='foot-data'>All Rights-Reserved &copy; 2025 | Vijay Sharma</p>
        </div>
    )
}

export default Footer
