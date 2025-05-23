import exp from 'constants'
import React from 'react'

const StateSubscription=() => {
  const [state, setState] = React.useState({
    message : 'Welcome to State Subscription',
    btnInnerText : 'Subscribe'
  });

  const changeMessage = () => {
    setState({
      message : 'Congratulations! You have subscribed to the state',
      btnInnerText : 'Unsubscrib'
    });
  }
  return (    
    <div>
      <h2>State Subscription</h2>
      <div>
        <p>State subscription is a pattern used in state management libraries like Redux, MobX, and others. It allows components to subscribe to specific parts of the application state, so they can re-render only when the relevant state changes. This can help improve performance by avoiding unnecessary re-renders of components that are not affected by certain state changes.</p>
        <p>In a typical state subscription pattern, components can subscribe to the state store and specify which parts of the state they are interested in. When the state changes, the store notifies only those components that are subscribed to the changed state, allowing them to update accordingly.</p>
        <p>For example, in a Redux application, you can use the connect function from the react-redux library to connect a component to the Redux store. The connect function allows you to specify which parts of the state you want to subscribe to, and it will automatically re-render the component when those parts of the state change.</p>
        <p>State subscription is a powerful pattern that can help improve the performance and maintainability of your application by ensuring that components only re-render when necessary.</p>

        <p>In React, you can also use the useSelector hook from react-redux to achieve a similar effect. The useSelector hook allows you to select specific parts of the state and subscribe to them, so your component will re-render only when those parts change.</p>
        <p>Overall, state subscription is a key concept in modern state management libraries and is essential for building efficient and responsive applications.</p>
      </div>
      
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-inline-block">
              <div className='card'>
                <div className="card-body">
                  <h5 className="card-title">{state.message}</h5>
                  <button className="btn btn-primary" onClick ={()=>changeMessage()}>{state.btnInnerText}</button>
                </div>
              </div>
            </div>          
          </div>
        </div>
      </div>   
    </div>


  );
}

export default StateSubscription;