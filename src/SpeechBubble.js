import React from 'react';
import PropTypes from 'prop-types';

const SpeechBubble = props => {
  return (
    <div className={props.className}>
        {props.children}
    </div>
  );  
};

SpeechBubble.defaultProps = {
    className: 'speech-bubble'
}

export default SpeechBubble; 