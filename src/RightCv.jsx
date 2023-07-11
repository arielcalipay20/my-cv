import React from 'react';
import TitleBar from './TitleBar';
import Education from './RightComponents/FirstRight';
import Reference from './RightComponents/SecondRight';

const title = {
    title1: 'EDUCATION',
    title2: 'REFERENCE',
}
const RightCv = () => {
    return (
        <div className='right-main-container'>
            <p className='right-text-container'>ARIEL</p>
            <p className='right-text-container'>CALIPAY</p>
            <p className='right-text-container1'>Web Developer</p>
            <div>
                <TitleBar title={title.title1} />
                <Education />
                <TitleBar title={title.title2} />
                <Reference />
            </div>
        </div>
    );
}

export default RightCv;