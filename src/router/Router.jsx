import React from 'react'
import Home from './home';
import About from './about';
import Contact from './contact';
import Navbar from './Navbar';
import {Routes,Route} from 'react-router-dom';
import Succes from './succes';

function Router() {
  return (
    <div className='Router'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/succes' element={<Succes/>}/>
      </Routes>  
    </div>
  );
};

export default Router