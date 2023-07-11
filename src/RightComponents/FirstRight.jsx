import React from 'react';

const bg = {
    level1: {
        study: 'PRIMARY',
        school: 'Sauyo Elementary School',
        year: '2007 - 2013'
    },
    level2: {
        study: 'SECONDARY',
        school: 'Sauyo High School',
        year: '2013 - 2017'
    },
    level3: {
        study: 'SENIOR HIGH',
        school: 'Access Computer College',
        year: '2017 - 2019'
    },
    level4: {
        study: 'TERTIARY',
        school: 'Quezon City University',
        year: '2019 - 2023'
    },
}

const Education = () => {
    return (
        <>
            <FirstRightComponent main={bg.level1.study} sub={bg.level1.school} text={bg.level1.year} />
            <FirstRightComponent main={bg.level2.study} sub={bg.level2.school} text={bg.level2.year} />
            <FirstRightComponent main={bg.level3.study} sub={bg.level3.school} text={bg.level3.year} />
            <FirstRightComponent main={bg.level4.study} sub={bg.level4.school} text={bg.level4.year} />
        </>
    );
}

const FirstRightComponent = (props) => {
    return (
        <div className='first-right-component'>
            <h2>{props.main}</h2>
            <h3>{props.sub}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default Education;