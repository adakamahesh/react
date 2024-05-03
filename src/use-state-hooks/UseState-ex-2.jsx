import React, { useState } from 'react'

const Index = () => {
    const [firstName,setfirstName]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    // const changeFirstName =(e)=>{
    //     setfirstName(e.target.value)
    // }
    // const changeEmail =(e)=>{
    //     setemail(e.target.value)
    // }
    // const changePassword =(e)=>{
    //     setpassword(e.target.value)
    // }
    
    const handleInputchange =(e,name)=>{
        console.log(e.target.value,name);
        if(name==="firstName"){
            setfirstName(e.target.value)
        }else if(name==="email"){
            setemail(e.target.value)
        }else if(name==="password"){
            setpassword(e.target.value)
        }
    }

    const handlesubmit =(e)=>{
        e.preventDefault()
        let userObj ={
            firstName:firstName,
            email:email,
            password:password,
        };
        console.log(userObj);
    };


  return (
    <div>
        <form onSubmit={handlesubmit}>
            <div className="form-content">
                <input 
                  type="text"
                  name='firstname'
                  id='firstname'
                  value={firstName}
                  placeholder='enter first name'
                  onChange={(e)=>handleInputchange(e,"firstName")}
                />
            </div>
            <div className="form-content">
                <input 
                  type="email"
                  name='email'
                  id='email'
                  value={email}
                  placeholder='enter your email'
                  onChange={(e) =>handleInputchange(e,"email")}
                />
            </div>
            <div className="form-content">
                <input 
                  type="password"
                  name='password'
                  id='password'
                  value={password}
                  placeholder='enter your password'
                  onChange={(e)=>handleInputchange(e,"password")}
                />
            </div>
            <div className="form-content">
                <button type='submit'>submit</button>
            </div>
        </form>
     </div>
  )
}

export default Index