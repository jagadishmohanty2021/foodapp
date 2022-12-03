import React from 'react'
import './footer.css'
import googleplay from '../../../../assets/images/googleplay.jpg'
import appstore from '../../../../assets/images/appstore.jpg'
import {FaFacebook,FaLinkedin ,FaYoutube,FaInstagram,FaTwitter} from 'react-icons/fa';
import {GrLanguage} from 'react-icons/gr';
import {GiIndiaGate} from 'react-icons/gi'
import { RiArrowDownSLine } from 'react-icons/ri'
const Footer = () => {
    return (
        <>
            <div className="footer_main">
                <div className="footer_content_main">
                    <div className="footer_first_content">
                        <h1>zomato</h1>
                        <button><span><GiIndiaGate/></span>India <span><RiArrowDownSLine/></span></button>
                        <button><span><GrLanguage/></span>English <span><RiArrowDownSLine/></span></button>
                    </div>
                    <div className="footer_second_content">
                        <div className="footer_about_zomato">
                            <h4>ABOUT ZOMATO</h4>
                            <ul>
                                <li>Who We Are</li>
                                <li>Blog</li>
                                <li>Work With Us</li>
                                <li>Investor Relations</li>
                                <li>Report Fraud</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="footer_zomaverse">
                            <h4>ZOMAVERSE</h4>
                            <ul>
                                <li>Zomato</li>
                                <li>Blinkit</li>
                                <li>Feeding India</li>
                                <li>Hyperpure</li>
                                <li>Zomaland</li>
                            </ul>
                        </div>
                        <div className="footer_for">
                            <div className='restaurants'>
                                <h4>FOR RESTAURANTS</h4>
                                <ul>
                                    <li>Partner With Us</li>
                                    <li>Apps For You</li>

                                </ul>
                            </div>
                            <div className='enterprises'>
                                <h4>FOR ENTERPRISES</h4>
                                <ul>
                                    <li>Zomato For Work</li>

                                </ul>
                            </div>
                        </div>
                        <div className="footer_learn_more">
                            <h4>LEARN MORE</h4>
                            <ul>
                                <li>Privacy</li>
                                <li>Security</li>
                                <li>Terms</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                        <div className="footer_social">
                            <h4>SOCIAL LINKS</h4>
                            <ul className='social_links'>
                                <li><FaLinkedin/></li>
                                <li><FaInstagram/></li>
                                <li><FaTwitter/></li>
                                <li><FaYoutube/></li>
                                <li><FaFacebook/></li>
                            </ul>
                            <div className='footer_icon'>
                                <span className='googleplay'><img src={googleplay} alt="googleplay" /></span>
                                <span className='appstore'><img src={appstore} alt="appstore" /></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer