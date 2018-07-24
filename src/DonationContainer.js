import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import DonationForm from './DonationForm';

const DonationContainer = props => {
    return (
        <div className="donation">
            <div className="donation__information">
                <p className="donation__text"><span className="highlight--orange">Only {props.daysLeft} days left</span> to fund this project.</p>
                <p className="donation__text">Join the <span className="bold-text">{props.numberOfDonors}</span> other donors who have already supported this project. Every dollar helps.</p>
            </div>
            <DonationForm onSubmit={props.onSubmit} onChange={props.onChange} max={props.max}/>
            <p className="donation__text"><a href="#" className="italic">Why give $50</a></p>
        </div>
    );
}

export default DonationContainer;