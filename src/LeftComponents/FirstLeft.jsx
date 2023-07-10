import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="flex-icon-container">
            {/* <div className="icon-container">
                <FontAwesomeIcon className="icon-props" icon={faLocationDot} />
                <p>14 B Chico St. Old Cabuyao, Sauyo Quezon City</p>
            </div>
            <div className="icon-container">
                <FontAwesomeIcon className="icon-props" icon={faEnvelope} />
                <p>arielcalipay2@gmail.com</p>
            </div>
            <div className="icon-container">
                <FontAwesomeIcon className="icon-props" icon={faFacebook} />
                <p>https://www.facebook.com/ ariel16calipay/</p>
            </div>
            <div className="icon-container">
                <FontAwesomeIcon className="icon-props" icon={faPhone} />
                <p>+639279938252</p>
            </div> */}
            <div className="icon-container">
                <FontAwesomeIcon className="icon-props" icon={faLocationDot} />
                <FontAwesomeIcon className="icon-props" icon={faEnvelope} />
                <FontAwesomeIcon className="icon-props" icon={faFacebook} />
                <FontAwesomeIcon className="icon-props" icon={faPhone} />
            </div>
            <div className="icon-text-container">
                <p>14 B Chico St. Old Cabuyao, Sauyo Quezon City</p>
                <p>arielcalipay2@gmail.com</p>
                <p>https://www.facebook.com/ ariel16calipay/</p>
                <p>+639279938252</p>
            </div>

        </div>
    );
}

export default Contact;