import React, { useEffect } from 'react'

const UserEffectCounter = () => {
    const [count, setCount] = React.useState(0);
    const [countSec, setCountSec] = React.useState(0);
   /* useEffect(() => {
        //useEffect without dependency array
        console.log("useEffect called");
        document.title = `${count} New Messages!`;
     //[count]); // useEffect with dependency array, it will run only when count changes    
    }); */
    
    useEffect(() => {
        //useEffect with an array
        console.log("useEffect called");
        document.title = `${count} New Messages!`;
     //[]); // runs only when our components rendered for the first time or when count changes 
     //[count]); // runs only when our components rendered when count changes 
    }, [countSec]) // runs only when our components rendered when countSec changes
    // useEffect with no dependency array, it will run on every render
  return (
    
    <div>
      <p> {count} New Messages!</p>
      <button onClick={()=> setCount(count+1)}> Increment</button>
       <button onClick={()=> setCountSec(countSec+5)}> Increment5</button>
            
    </div>
  );
}

export default UserEffectCounter;
// This component is a simple counter that displays the number of new messages.