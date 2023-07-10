import React from 'react';

const Certificate = () => {
    return (
        <div>
            <Description name={'HTML'} description={' - I take a HTML course and get a certificate at the SoloLearn website.'} />
            <Description name={'CSS'} description={' - I take a CSS course and get a certificate at the SoloLearn website.'} />
            <Description name={'JAVASCRIPT'} description={' - I take a JAVASCRIPT course and get a certificate at the SoloLearn website.'} />
            <Description name={'BOOTSTRAP'} description={'  - I take a BOOTSTRAP course and get a certificate at the SoloLearn website.'} />
            <Description name={'REACT'} description={' - I take a REACT course and get a certificate at the SoloLearn website.'} />
            <Description name={'RESPONSIVE WEB DESIGN'} description={' - I take a RWD course and get a certificate at the SoloLearn website.'} />
        </div>
    );
}

const Description = (props) => {
    return (
        <div className='certificate-container'>
            <p><strong>{props.name}</strong>{props.description}</p>
        </div>
    );
}

export default Certificate;