import React from 'react';

const ProgressBar = props => {
    let width = props.width; 
    
    if (width > 100) {
        width = 100 + '%';
    } else if (width <= 0) {
        width = 0;
    } else {
        width = width + '%';
    }
    
    const style = {
        width: width
    }; 
    
    return (
        <div className="progress-bar">
            <div className="progress" style={style}></div>
        </div>
    );
}

export default ProgressBar; 