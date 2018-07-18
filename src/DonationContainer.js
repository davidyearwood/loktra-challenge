import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import DonationForm from './DonationForm';

const DonationContainer = props => {
    return (
        <div className="donation">
            <ProgressBar width={props.width} />
            <div className="donation__information">
                <p className="donation__text">Only 3 days left to fund this project.</p>
                <p className="donation__text">Join the 42 other donors who have already supported this project. Every dollar helps.</p>
            </div>
            <DonationForm onSubmit={props.onSubmit} onChange={props.onChange}/>
            <p className="donation__text"><a href="#" className="italic">Why give $50</a></p>
        </div>
    );
}

export default DonationContainer;