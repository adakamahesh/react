import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import "./index.css";
import App from './App';
import EventHandling from './event-handling/EventHandling';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
  root.render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <EventHandling /> */}
      <EventHandling />
    </React.StrictMode>
  );
},1000)

