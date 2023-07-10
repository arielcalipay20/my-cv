import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBarStatus = (props) => {
    return (
        <div>
            <div className='language-container'>
                <p>{props.name}</p>
                <div className='progress-container'>
                    <ProgressBar completed={props.status} bgColor="rgb(48, 47, 47)" animateOnRender={true} />
                </div>
            </div>
        </div>
    );
}

export default ProgressBarStatus;