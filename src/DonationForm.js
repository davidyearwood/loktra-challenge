import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const DonationForm = props => {
    return (
        <form onSubmit={props.onSubmit} className="donation-form">
            <label className="donation-form__label" htmlFor="donation-number-field">
                <span className="donation-form__icon">$</span>
                <input type="number" min="1" max={props.max} className="donation-form__number-field" value={props.value} onChange={props.onChange} id="donation-number-field" aria-label="The amount you want to donate"/> 
            </label>
            <Button innerText="Give Now" className={props.donationButtonClassName} onClick={props.onClick} />
        </form>  
    );
}

DonationForm.defaultProps = {
    donationButtonClassName: "btn btn--donate"
};

export default DonationForm; 