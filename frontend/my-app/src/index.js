import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import App from './components/App';
import { Router, Route, Switch } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);


