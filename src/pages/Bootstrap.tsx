import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import MessageCard from './MessageCard';
import TopicsCard from './TopicsCard';
import Greetings from '../Components/Greetings';

export default function Bootstrap() {
  return (
    <div>
         
        <Navbar expand="lg" variant="dark" bg="dark">
          
            <h1 className="text-white bg-dark p-3">This is  Bootstrap Programs</h1>          
          
        </Navbar>
      
      <div className="container">
        <br />
        <MessageCard/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tech Courses</h5>
                <p className="card-text">This is card 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">This is card 2.</p>
              </div>
            </div>
          </div>
        </div>
      </div>    
              
        
    </div>
  );
}
