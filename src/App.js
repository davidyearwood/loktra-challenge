import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import SpeechBubble from './SpeechBubble';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button innerText="Dog"/>
        <SpeechBubble>
          <p className="speech-bubble__msg"><span>$167</span> still needed for this project</p>
        </SpeechBubble>
      </div>
    );
  }
}

export default App;
