import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';
import { BrowserRouter } from "react-router-dom";
import './style.css';
import '@trendmicro/react-radio/dist/react-radio.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));