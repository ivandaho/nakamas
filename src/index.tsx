import 'react-calendar/dist/Calendar.css';
import './schedule.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Schedule from './pages/Schedule';

ReactDOM.render(
  <React.StrictMode>
    <div className="root_container">
      <Schedule week={-1} />
      <Schedule />
      <Schedule week={1} />
      <div className="notes">
        <div>group 1: bathroom - sink, countertop, mirror</div>
        <div>group 2: kitchen - sink, countertop, stove, drying mat</div>
        <div>group 3: others - mop</div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
