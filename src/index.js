import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import "./index.css";
import App from './App';
import EventHandling from './event-handling/EventHandling';
import  UseState  from './use-state-hooks/UseState';
import UseState2 from './use-state-hooks/UseState2'

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
  root.render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <EventHandling /> */}
      {/* <UseState/> */}
      <UseState2/>
    </React.StrictMode>
  );
},1000)

