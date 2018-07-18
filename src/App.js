import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import SpeechBubble from './SpeechBubble';
import DonationContainer from './DonationContainer';


class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      donationAmount: 0, 
      progress: 0 
    };
    
    this.donate = this.donate.bind(this);
    this.updateDonationAmount = this.updateDonationAmount.bind(this);
  }
  
  update(stateName, e) {
    this.setState({
      [stateName]: e.target.value
    });
  }
  
  updateDonationAmount(e) {
    if (e.target.value > 0) {
      this.update('donationAmount', e); 
    }
  }
  
  donate(e) {
    e.preventDefault();
    let x = (this.state.donationAmount / this.props.goal) * 100;
    
    this.setState({
      'progress': this.state.progress + x
    });
  }
  render() {
    return (
      <div className="App">
        <SpeechBubble>
          <p className="speech-bubble__msg"><span>$167</span> still needed for this project</p>
        </SpeechBubble>
        <DonationContainer 
          value={this.state.donationAmount} 
          onSubmit={this.donate} 
          onChange={this.updateDonationAmount}
          width={this.state.progress}
          />
        <div className="btn-container">
          <Button innerText="Save for later"/>
          <Button innerText="Tell your friends"/>
        </div>
      </div>
    );
  }
}

export default App;
