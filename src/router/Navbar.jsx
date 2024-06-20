import React from 'react'
import {NavLink} from 'react-router-dom'
import { useAuth } from './auth'

function Navbar() {
  
  const {user,logout}=useAuth();
  return (
    <div>
        <nav className='primary-nav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/Projects'>Projects</NavLink> 
            <NavLink to='/Users'>Users</NavLink>
            {
              user ?
              <NavLink to='/logout' onClick={logout}>Logout</NavLink>
              :
              <NavLink to='/login'>Login</NavLink>
            }
        </nav>
    </div>
  )
}

export default Navbar