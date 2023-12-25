// src/popup.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Popup from './components/PopupComponent.js';
 

// This would find the root element in the HTML and render the Popup component inside it
const rootElement = document.getElementById('root');
ReactDOM.render(<Popup />, rootElement);
