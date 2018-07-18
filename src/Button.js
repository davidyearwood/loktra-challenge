import React from 'react';
import PropTypes from 'prop-types';

// if we want button to be a link we must specifiy it is a button 
const Button = props => {
    return (
        <button onClick={props.onClick} className={props.className} type="submit">{props.innerText}</button>    
    ); 
};

Button.defaultProps = {
    className: 'btn'
};

Button.propTypes = {
    innerText: PropTypes.string.isRequired
};

export default Button;
