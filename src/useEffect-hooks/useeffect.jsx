import React,{useEffect,useState} from 'react'

const Final = () => {
    const [count,setcount]=useState(0);
    const [toggle,settoggle]=useState(true);
    const [pagewidth,setpagewidth]=useState(window.innerWidth);

    useEffect(() => {
    //   first
    const resizeHandler= ()=>{
      setpagewidth(window.innerWidth)
    };
    window.addEventListener('resize',resizeHandler)
    console.log("Hello I am coming from useeffect",count);
    return ()=>{
      console.log("i am removing");
      window.removeEventListener('resize',resizeHandler);
    };
    });
    
  return (
    <div>
        <h1>Learn UseEffect Hello</h1>
        <h1 onClick={()=> settoggle(!toggle)}>{toggle ? "open" :"close"}</h1>
        <h1>{pagewidth}</h1>
        <h1>{count}</h1>
        <button onClick={()=>{
            setcount(count+1);
        }}>+</button>
    </div>
  );
};

export default Final