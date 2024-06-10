import React from 'react'
import {useNavigate} from 'react-router-dom'

function Succes() {
    const navigate=useNavigate();

  return (
    <div>
        <h1>Successfully submitted</h1>
        <button onClick={()=>navigate('/')}>Back TO Home </button>
    </div>
  )
}

export default Succes