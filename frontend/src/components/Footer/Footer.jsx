import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-lift">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quidem magni modi! Aut perferendis non ut earum expedita quidem explicabo assumenda unde deserunt, cum nulla maiores. Autem a quia assumenda.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                    </div>
                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+91 9876543210</li>
                            <li>contact@tomato.com</li>
                        </ul>
                    </div>
                 
                    </div>
                    <hr/>
                <p className="footer-copyright">copyright 2024 @  T SATHISH KUMAR - All Right Reserved</p>
           
           
        </div>
    )
}

export default Footer