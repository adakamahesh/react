import React from 'react'

const EventHandling = () => {

    const ClickHandle =() =>{
        console.log('mahesh');
    };
  return (
    <main className='container'>
        <button className='button' onClick={ClickHandle}>click me</button>
    </main>
  );
};

export default EventHandling