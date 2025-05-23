import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type ChildComponentProps = {
  greetHandler: (childProp : any) => void;
};

const ChildComponent: React.FC<ChildComponentProps> = ({ greetHandler}) => {
  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded border border-primary backgroundColor-#808080 text-center">
      <div className='shadow-lg p-1 mb-2 bg-body rounded border border-secondary'>
        <h2>Child Component</h2>
        <div className="d-flex justify-content-center gap-5">
          <button className='btn btn-primary mb-2' onClick={greetHandler}>Click Me</button>
          <button className='btn btn-primary mb-2' onClick={() => greetHandler('and hello from Child Component')}>More Details..</button>
      
        </div>
       </div>
    </div>
  );
};

export default ChildComponent;
/*
This code defines a functional component called ChildComponent that takes a prop called greetHandler,
 which is a function. The component renders a button that, when clicked, calls the greetHandler function.
*/