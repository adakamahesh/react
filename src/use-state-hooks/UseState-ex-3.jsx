import React, { useState } from 'react'

const Index = () => {
    const [list,setlist]=useState([]);
    const [message,setmessage]=useState({
        text:"",
        id:"",
    });
    const [editingItem,seteditingItem]=useState({
        id:"",
        isEditing:false
    });

    const changemessage = (e) => {
        setmessage({
            ...message,
            text:e.target.value
        });
    };
    const handelSubmit = (e) =>{
        e.preventDefault();
        let newTodo ={
            text:message.text,
            id:new Date().getTime().toString()
        }
        setlist([...list,newTodo]);//this is used to display the add element
        setmessage({
            text:"",
            id:""
        });
    };

    const handleDelete = (id) =>{
        let newTodo =list.filter((eachItem)=>{
            return eachItem.id !== id
        });
        setlist(newTodo);
    };
    const changeEditState=(id)=>{

        seteditingItem({
            ...editingItem,
            id:id,
            isEditing:true
        });
        let editableItem=list.find((eachItem)=>eachItem.id===id)
        setmessage({
            ...message,
            text:editableItem.text,
            id:editableItem.id
        });
        console.log(editableItem);
    };
    const handelEdit=(e)=>{
        e.preventDefault();
        let newTodos=list.map((eachItem)=>{
            if(eachItem.id===editingItem.id){
                return{
                    text:message.text,
                    id:editingItem.id
                };
            } else{
                return eachItem;
            }
        });
        setlist(newTodos);
        setmessage({
            text:"",
            id:"",
        });
        seteditingItem({
            id:"",
            isEditing:false,
        });
    };

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
            {
                editingItem.isEditing?<button onClick={handelEdit} type='submit'>edit</button>:<button onClick={handelSubmit} type='submit'>add</button>
            }
        </form>
        <hr/>
        {
            list.length === 0 && <h3>There is no items in the list</h3>
        }
        <ul>
            {
                list.map((eachItem) =>{
                    const {text,id}=eachItem;
                    return <li key={id}>
                        <span>{text}</span>
                        <button onClick={()=>changeEditState(id)}>edit</button>
                        <button onClick={()=> handleDelete(id)}>Delete</button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Index