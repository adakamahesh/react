import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import "./index.css";
import App from './App';
import EventHandling from './event-handling/EventHandling';
import  UseState  from './use-state-hooks/UseState';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
  root.render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <EventHandling /> */}
      <UseState/>
    </React.StrictMode>
  );
},1000)

