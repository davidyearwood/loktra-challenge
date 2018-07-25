import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Button from './Button';
import SpeechBubble from './SpeechBubble';
import DonationContainer from './DonationContainer';
import DialogBox from './DialogBox';
import millisecondsToDays from './millisecondsToDays';
import ProgressBar from './ProgressBar'; 
import Overlay from './Overlay'; 

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
    
    if (this.state.donorsAmount > 0) {
      this.setState((prevState, props) => ({
        amountDonated: Number(prevState.amountDonated) + Number(this.state.donorsAmount), 
        numberOfDonors: prevState.numberOfDonors + 1
      })); 
    }
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
    let amountDonatedInPercent = ((this.state.amountDonated / this.props.goalAmount) * 100), 
        currentDate = Date.now(),
        untilDonationEnd = Date.parse(this.props.donationEndDate) - currentDate,
        daysUntilDonationEnd = millisecondsToDays(untilDonationEnd),
        amountLeftToReachGoal = this.props.goalAmount - this.state.amountDonated; 
    
    let message = (amountLeftToReachGoal >= 0) ? 
                  <p className="speech-bubble__msg"><span>${amountLeftToReachGoal}</span> still needed for this project</p> :
                  <p className="speech-bubble__msg">We've have reached our goal! But donations are still welcomed!</p>; 
    
    return (
      <div className="App">
        <SpeechBubble className="speech-bubble ws-top-20">
          {message}
        </SpeechBubble>
        <div className="donation-container ws-top-20">
          <ProgressBar width={amountDonatedInPercent || 0} />
          <DonationContainer 
            value={this.state.donorsAmount} 
            onSubmit={this.donate} 
            onChange={this.updateDonorsAmount}
            numberOfDonors={this.state.numberOfDonors}
            daysLeft={daysUntilDonationEnd}
            max={parseInt(this.props.goalAmount, 10) * 500000}
            donationFormClassName="donation-form flex--desktop-row flex-space-btw"
            donationButtonClassName="btn btn--donate flex-basis-48-desktop"
            />
        </div>
        <div className="btn-container flex--desktop-row flex-space-btw">
          <Button innerText="Save for later" onClick={this.save} className="btn ws-top-20"/>
          <Button innerText="Tell your friends" onClick={this.shareOnSocialMedia} className="btn ws-top-20"/>
        </div>
        
        
        <Overlay className={!this.state.isShared ? 'overlay center--children hidden' : 'overlay center--children'}>
          <DialogBox classNameContainer={!this.state.isShared ? 'dialog-box dialog-box--hidden' : 'dialog-box'} classNameButton="btn" onClick={this.closeSharedBox}>
            <p className="dialog-box__text">Yay, I donated</p>
          </DialogBox>
        </Overlay>
        <Overlay className={!this.state.isSaved ? 'overlay center--children hidden' : 'overlay center--children'}>
          <DialogBox classNameContainer={!this.state.isSaved ? 'dialog-box dialog-box--hidden' : 'dialog-box'} classNameButton="btn" onClick={this.closeSaveBox} >
            <p className="dialog-box__text">Saved</p>
          </DialogBox>
        </Overlay>
      </div>
    );
  }
}

export default App;
