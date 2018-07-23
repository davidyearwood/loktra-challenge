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
      amountDonated: 0, 
      isSaved: false, 
      isShared: false,
      numberOfDonors: 0, 
      donorsAmount: 0
    };
    
    this.save = this.save.bind(this);
    this.donate = this.donate.bind(this);
    this.closeSaveBox = this.closeSaveBox.bind(this);
    this.closeSharedBox = this.closeSharedBox.bind(this);
    this.shareOnSocialMedia = this.shareOnSocialMedia.bind(this);
    this.updateAmountDonated = this.updateAmountDonated.bind(this);
    this.updateDonorsAmount = this.updateDonorsAmount.bind(this);
  }
  
  update(stateName, e) {
    this.setState({
      [stateName]: e.target.value
    });
  }
  
  updateAmountDonated(e) {
    if (e.target.value > 0) {
      this.update('amountDonated', e); 
    }
  }
  
  updateDonorsAmount(e) {
    if (Number(e.target.value) > 0) {
      this.setState({
        'donorsAmount': Number(e.target.value)
      });
    }
  }
  
  donate(e) {
    e.preventDefault();
    
    this.setState((prevState, props) => ({
      amountDonated: Number(prevState.amountDonated) + Number(this.state.donorsAmount)
    })); 
    
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
    let amountDonatedInPercent = (this.state.amountDonated / this.props.goalAmount) * 100; 

    return (
      <div className="App">
        <SpeechBubble>
          <p className="speech-bubble__msg"><span>${this.props.goalAmount - this.state.amountDonated}</span> still needed for this project</p>
        </SpeechBubble>
        <DonationContainer 
          value={this.state.donorsAmount} 
          onSubmit={this.donate} 
          onChange={this.updateDonorsAmount}
          width={amountDonatedInPercent || 0}
          />
        <div className="btn-container">
          <Button innerText="Save for later" onClick={this.save}/>
          <Button innerText="Tell your friends" onClick={this.shareOnSocialMedia}/>
        </div>
        
        <DialogBox classNameContainer={!this.state.isShared ? 'dialog-box dialog-box--hidden' : 'dialog-box'} classNameButton="btn" onClick={this.closeSharedBox}>
          <p className="dialog-box__text">Yay, I donated</p>
        </DialogBox>
        
        <DialogBox classNameContainer={!this.state.isSaved ? 'dialog-box dialog-box--hidden' : 'dialog-box'} classNameButton="btn" onClick={this.closeSaveBox} >
          <p className="dialog-box__text">Saved</p>
        </DialogBox>
      </div>
    );
  }
}

export default App;
