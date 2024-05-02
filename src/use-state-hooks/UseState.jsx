import React,{useState} from "react";

const Index= () =>{
    const [Count,setCount]=useState(0);
    const incrementcount =()=>{
        setCount((prevcount)=>{
            return prevcount+1;
        });
        // setCount((prevcount)=>{
        //     return prevcount+1;
        // });
    };
    const decrementcount =()=>{
        setCount(Count-1)
    }
    return(
        <div>
            <button onClick={decrementcount}>-</button>
            <button>{Count}</button>
            <button onClick={incrementcount}>+</button>
        </div>
    );
};

export default Index;