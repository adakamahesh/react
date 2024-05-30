import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import "./index.css";
// import App from './App';
// import EventHandling from './event-handling/EventHandling';
// import  UseState  from './use-state-hooks/UseState';
// import UseState2 from './use-state-hooks/UseState2'
// import UseStateex1 from './use-state-hooks/UseState-ex-1'
// import UseStateex2 from './use-state-hooks/UseState-ex-2'
// import UseStateex3 from './use-state-hooks/UseState-ex-3'
import UseEffect from './useEffect-hooks/useeffect'

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
  root.render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <EventHandling /> */}
      {/* <UseState/> */}
      {/* <UseState2/> */}
      {/* <UseStateex1/> */}
      {/* <UseStateex2/> */}
      {/* <UseStateex3/> */}
      <UseEffect/>  
    </React.StrictMode>
  );
},1000)

