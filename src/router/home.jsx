import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate =useNavigate();
  const navigateToSuccesPage = ()=>{
    navigate('/succes')
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={navigateToSuccesPage}>Submit Form</button>
    </div>     
  )
}

export default Home