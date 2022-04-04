import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InputForm from './components/InputForm/InputForm';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <InputForm/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
