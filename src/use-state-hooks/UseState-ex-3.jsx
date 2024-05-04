import React, { useState } from 'react'

const Index = () => {
    const [list,setlist]=useState([]);
    const [message,setmessage]=useState({
        text:"",
        id:"",
    });

    const changemessage = (e) => {
        setmessage({
            ...message,
            text:e.target.value
        });
    };
    const handelsubmit = (e) =>{
        e.preventDefault();
    }

  return (
    <div>
        <form>
            <input type="text" 
              name='message' 
              id='message'
              placeholder='enter some text' 
              value={message.text}
              onChange={changemessage}
            />
            <button onClick={handelsubmit} type='submit'>add</button>
        </form>
        <hr/>
        <ul>
            {
                list.map((eachItem) =>{
                    const {text,id}=eachItem;
                    return <li key={id}>
                        <span>{text}</span>
                        <button>edit</button>
                        <button>Delete</button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Index