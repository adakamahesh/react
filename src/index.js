import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import "./index.css";
import {BrowserRouter} from "react-router-dom"
// import App from './App';
// import EventHandling from './event-handling/EventHandling';
// import  UseState  from './use-state-hooks/UseState';
// import UseState2 from './use-state-hooks/UseState2'
// import UseStateex1 from './use-state-hooks/UseState-ex-1'
// import UseStateex2 from './use-state-hooks/UseState-ex-2'
// import UseStateex3 from './use-state-hooks/UseState-ex-3'
// import UseEffect from './useEffect-hooks/useeffect'
// import UseEffectex1 from './useEffect-hooks/useeffect-ex-1'
// import UseEffectex2 from './useEffect-hooks/useeffect-ex-2'
import Router from './router/Router';

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
      {/* <UseEffect/>   */}
      {/* <UseEffectex1/> */}
      {/* <UseEffectex2/> */}
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </React.StrictMode>
  );
})

