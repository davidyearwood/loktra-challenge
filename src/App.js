import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import SpeechBubble from './SpeechBubble';
import DonationContainer from './DonationContainer';
import DialogBox from './DialogBox';


class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      donationAmount: 0, 
      progress: 0, 
      isSaved: false, 
      isShared: false
    };
    
    this.save = this.save.bind(this);
    this.donate = this.donate.bind(this);
    this.closeSaveBox = this.closeSaveBox.bind(this);
    this.closeSharedBox = this.closeSharedBox.bind(this);
    this.shareOnSocialMedia = this.shareOnSocialMedia.bind(this);
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
  
  save(e) {
    e.preventDefault();
    
    this.setState({
      isSaved: true
    });
  }
  
  shareOnSocialMedia(e) {
    e.preventDefault(); 
    
    this.setState({
      isShared: true
    });
  }
  closeSaveBox(e) {
    e.preventDefault();
    this.setState({
      isSaved: false
    });
  }
  
  closeSharedBox(e) {
    e.preventDefault();
    this.setState({
      isShared: false
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
          <Button innerText="Save for later" onClick={this.save}/>
          <Button innerText="Tell your friends" onClick={this.shareOnSocialMedia}/>
        </div>
        
        <DialogBox classNameContainer={!this.state.isShared ? 'dialog-box dialog-box--hidden' : 'dialog-box'} onClick={this.closeSharedBox}>
          <p>Yay, I donated</p>
        </DialogBox>
        
        <DialogBox classNameContainer={!this.state.isSaved ? 'dialog-box dialog-box--hidden' : 'dialog-box'} onClick={this.closeSaveBox} >
          <p>Saved</p>
        </DialogBox>
      </div>
    );
  }
}

export default App;
