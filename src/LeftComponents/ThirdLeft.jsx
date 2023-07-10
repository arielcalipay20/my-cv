import React from 'react';
import ProgressBarStatus from '../ProgressBar';

const Skills = () => {
    return (
        <div>
            <ProgressBarStatus name={'HTML'} status={90} />
            <ProgressBarStatus name={'CSS'} status={90} />
            <ProgressBarStatus name={'JAVASCRIPT'} status={80} />
            <ProgressBarStatus name={'BOOTSTRAP'} status={70} />
            <ProgressBarStatus name={'REACT JS'} status={50} />
            <ProgressBarStatus name={'REACT NATIVE'} status={50} />
            <ProgressBarStatus name={'PHP'} status={30} />
            <ProgressBarStatus name={'LARAVEL'} status={40} />
            <ProgressBarStatus name={'JAVA'} status={40} />
            <ProgressBarStatus name={'VISUAL BASIC'} status={70} />
        </div>
    );
}

export default Skills;