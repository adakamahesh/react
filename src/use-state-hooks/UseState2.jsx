import React,{useState} from 'react'

const Index = () => {
    const initialObj = {
        firstName:"Mahesh",
        lastName:"Babu",
        age:21,
    };

    const initialArray =[
        {
            id:"1",
            firstName:'Mahesh',
            lastName:'Babu',
            age:'21',
        },
        {
            id:'2',
            firstName:'jay',
            lastName:'A',
            age:19,
        }
    ]

    const [data, setData] = useState(initialObj);
    const [Data,setdata] = useState(initialArray);

    const handleDelet =(comingId) =>{
        const filterData=Data.filter((eachItem) => { 
            return eachItem.id !== comingId
        });
        setdata(filterData);
    };
    const ChangeFirstName =() =>{
        setData({
            ...data,//sprid operator
            firstName:'A.Mahesh'
        });
    };
  return (
    <div>
        <h1>My First Name is {data.firstName}</h1>
        <button onClick={ChangeFirstName}>Change firstName</button>
        <h1>My Last Name is {data.lastName}</h1>
        <h1>My age is {data.age}</h1>

        <ul>
            {
                Data.map((eachItem,index)=>{
                    const {firstName,lastName,age,id}=eachItem;
                    return <li key={index}>
                        <div>firstName:{firstName}</div>
                        <div>lastName:{lastName}</div>
                        <div>age:{age}</div>
                        <button onClick={() =>handleDelet(id)}>Deletme</button>
                    </li>
                })
            }
        </ul>
    </div>
    
  );
};

export default Index