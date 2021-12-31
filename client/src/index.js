import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';


ReactDOM.render(
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10em'
}}><Login /></div>,
  document.getElementById('root')
);

