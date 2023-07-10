import React from 'react';
import Profile from './img/My_Profile.jpg';
import TitleBar from './TitleBar';
import Contact from './LeftComponents/FirstLeft';
import Language from './LeftComponents/SecondLeft';
import Skills from './LeftComponents/ThirdLeft';
import Certificate from './LeftComponents/FourthLeft';


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
                <TitleBar title={title.title2} />
                <Language />
                <TitleBar title={title.title3} />
                <Skills />
                <TitleBar title={title.title4} />
                <Certificate />
            </div>

        </div>

    );
}

export default LeftCv;