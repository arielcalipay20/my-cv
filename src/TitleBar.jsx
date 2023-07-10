import React from 'react';

const TitleBar = (props) => {
    return (
        <div>
            <div className="title-bar-container">
                <p>{props.title}</p>
            </div>
            
        </div>
    );
}

export default TitleBar;