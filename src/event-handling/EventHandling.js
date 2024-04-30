import React from 'react'

const EventHandling = () => {

    // const ClickHandle =(e) =>{
    //     console.log(e);
    // };

    function ClickHandle(e,firstname) {
        console.log("Mahesh",e ,firstname);
    }

  return (
    <main className='container'>
        <button className='button' onClick={(e) => ClickHandle(e,'Babu')}>click me</button>
    </main>
  );
};

export default EventHandling