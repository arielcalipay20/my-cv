import React from 'react';
import Profile from './img/My_Profile.jpg';
import TitleBar from './TitleBar';
import Contact from './LeftComponents/FirstLeft';

const title = {
    title1: "CONTACT ME",
    title2: "LANGUAGE",
    title3: "SKILLS",
    title4: "CERTIFICATES"
}
const LeftCv = () => {
    return (
        <div className='left-main-container'>
            <div className="left-container">
                <div className='main-img-box'>
                    <div className='img-box'>
                        <img className='img' src={Profile} alt={'Profile'} />
                    </div>
                </div>

            </div>
            <div>
                <TitleBar title={title.title1} />
                <Contact />
            </div>

        </div>

    );
}

export default LeftCv;