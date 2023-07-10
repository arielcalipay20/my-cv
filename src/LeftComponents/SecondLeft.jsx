import React from 'react';
import ProgressBarStatus from '../ProgressBar';

const Language = () => {
    return (
        <div>
            <ProgressBarStatus name={'Filipino'} status={100} />
            <ProgressBarStatus name={'English'} status={70} />
        </div>
    );
}

export default Language;