import React from 'react'
import './formSection.css'
import mobileImg from '../../../../assets/images/mobile.jpg'
import googleplay from '../../../../assets/images/googleplay.jpg'
import appstore from '../../../../assets/images/appstore.jpg'
const FormSection = () => {
    return (
        <>
            <div className="main_form">
                <div className="main_content">
                    <div className="mobile_icon">
                        <img src={mobileImg} alt="mobile" />
                    </div>
                    <div className="form_section">
                        <div className="form_heading">Get the Zomato app</div>
                        <div className="form_content">We will send you a link, open it on your phone to download the app</div>
                        <div className="form_radio">
                            <span><input type="radio" defaultChecked name="type" id="email" value="email" /></span><span>Email</span>
                            <span><input type="radio" name="type" id="phone" value="phone" /></span><span>Phone</span>
                        </div>
                        <div className="form_input">
                            <input type="text" name="email" id="emailId" />
                            <button>Share App Link</button>
                        </div>
                        <div className="download_app">
                            <p>Download app from</p>
                            <div className='download_icon'>
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

export default FormSection