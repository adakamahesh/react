import React from 'react'
import UsersData from './UserData'
import { Link } from 'react-router-dom'

function Users() {
  return (
    <div>
        <h1>Users</h1>
        <div className='card-container'>
        {
          UsersData.map((eachUser)=>{
            const {id,name,email}=eachUser
            return(
              <Link to={'/Users/{id}'} key={id}>
                <article className='card'>
                  <h3>{name}</h3>
                  <h3>{email}</h3>
                </article>
              </Link>
            )
          })
        }
        </div>
    </div>
  )
}

export default Users