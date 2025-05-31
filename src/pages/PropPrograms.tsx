import React from 'react';
import Greetings from '../Components/Greetings';

export default function PropPrograms() {
  return (
    <div>
      
      <Greetings user="Dhoni"/>
      <Greetings user="Virat" />
      <Greetings user="Rohit">
        <p>Welcome to the cricket world!</p>
        <button className='btn btn-primary'>Click Me</button>
      </Greetings>
     
    </div>
  )
}
