import React from 'react';

const Overlay = props => {
    return (
        <div className={props.className} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

Overlay.defaultProps = {
  className: 'Overlay'  
};

export default Overlay; 