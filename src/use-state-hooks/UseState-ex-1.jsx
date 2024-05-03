import React,{useState} from 'react'

const Index = () => {
    const [showData,setshowData]=useState(false);
    
    const handlechange =() =>{
        setshowData(!showData);
    }
  return (
    <div>
        <button onClick={handlechange}>{showData?"Hide":'show'}</button>
        {showData &&(
            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit perferendis, vitae doloremque tempora animi delectus repellendus. Provident, numquam exercitationem.
            </div>
        )}
    </div>
  )
}

export default Index;