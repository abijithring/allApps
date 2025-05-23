import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    let parentName = "Parent Component";

    const greetParent = (childProp: any) => {
        alert(`Hello from ${parentName} from Child Component ${childProp}`);
    }
  return (
    
    <div style={{ backgroundColor: 'grey', padding: '20px', borderRadius: '10px' }}>
      <h2>Parent Component</h2>
      <ChildComponent greetHandler = {greetParent}/> // Passing the greetParent function as a prop to ChildComponent
    </div>
  // The ParentComponent renders a ChildComponent and passes the greetParent function as a prop.
  );
}
