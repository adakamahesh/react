import React from 'react'
import Home from './home';
// import About from './about';
import Contact from './contact';
import Navbar from './Navbar';
import {Routes,Route} from 'react-router-dom';
import Succes from './succes';
import NotFound from './NotFound';
import Projects from './Projects';
import FeaturedProjects from './FeaturedProjects'
import NewProjects from './NewProjects';
import Users from './Users';
import UserDetails from './UserDetails';
import { AuthProvider } from './auth';
import Login from './Login';
import Logout from './Logout';
import PrivateRoute from './PrivateRoute';

const LazyAbout =React.lazy(()=>import('./about'));

function Router() {
  return (
    <AuthProvider className='Router'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<React.Suspense fallback="Loading..."><LazyAbout/></React.Suspense>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/succes' element={<Succes/>}/>
        <Route path='Projects' element={<Projects/>}>
          <Route path='featured' element={<FeaturedProjects/>}/>
          <Route path='new' element={<NewProjects/>}/>
        </Route>
        <Route path='/Users' element={
        <PrivateRoute>
          <Users/>
        </PrivateRoute>}/>
        <Route path='/Users/:UserId' element={<UserDetails/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='logout' element={<Logout/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>  
    </AuthProvider>
  );
};

export default Router