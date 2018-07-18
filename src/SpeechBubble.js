import React from 'react';

const SpeechBubble = props => {
  return (
    <div className={props.containerClassName}>
        {props.children}
    </div>
  );  
};

SpeechBubble.defaultProps = {
    containerClassName: 'speech-bubble'
}

export default SpeechBubble; 