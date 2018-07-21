import React from 'react';

const DialogBox = props => {
    return (
        <div className={props.classNameContainer}> 
            {props.children}
            <button onClick={props.onClick} className={props.classNameButton}>close</button>
        </div>
    );
}


DialogBox.propsDefault = {
    classNameContainer: 'dialog-box', 
    classNameButton: 'btn',
};

export default DialogBox; 

