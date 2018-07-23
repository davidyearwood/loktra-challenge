import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const DonationForm = props => {
    return (
        <form onSubmit={props.onSubmit} className="donation-form">
            <input type="number" min="1" max="1000" className="donation-form__number-field" value={props.value} onChange={props.onChange}/> 
            <Button innerText="Give Now" className={props.donationButtonClassName} onClick={props.onClick} />
        </form>  
    );
}

DonationForm.defaultProps = {
    donationButtonClassName: "btn btn--donate"
};

export default DonationForm; 