import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var donationEndDate = new Date('July 31, 2018 23:59:59'); 

ReactDOM.render(<App goalAmount={1000} donationEndDate={donationEndDate}/>, document.getElementById('root'));
registerServiceWorker();
