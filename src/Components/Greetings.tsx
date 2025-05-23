
import React from 'react';

type GreetingsProps = { user: string , children?: React.ReactNode };

const Greetings: React.FC<GreetingsProps> = (props) => {
  return (
    <div className='card w-25 m-4 d-inline-block'>
        <div className='card-body'>
            <h5 className='card-title'>Hello, {props.user}!</h5>
            {props.children}
            
        </div>
      
    </div>
  )
}

export default Greetings;
