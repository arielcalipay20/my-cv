import React from 'react';

const info = {
    name: 'Jade Oloroso',
    position: 'Web Developer',
    info: 'Phone: +639057028879',
    info1: 'Email: jade.delima.oloroso@gmail.com'
}
const Reference = () => {
    return (
        <>
            <SecondRightComponent name={info.name} position={info.position} info={info.info} info1={info.info1} />
        </>
    );
}

const SecondRightComponent = (props) => {
    return (
        <div className='second-right-component'>
            <div className='second-right-component1'>
                <h2>{props.name}</h2>
                <p>{props.position}</p>
            </div>
            <div className='second-right-component2'>
                <p>{props.info}</p>
                <p>{props.info1}</p>
            </div>
        </div>
    );
}

export default Reference;