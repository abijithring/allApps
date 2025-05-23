import React, {Fragment} from 'react' ;
import HeaderTopic from './HeaderTopic';
import { Nav, Navbar } from 'react-bootstrap'
import "react-bootstrap/dist/react-bootstrap.min.js";

type TopicsCardProps = {
  lession1: string;
  lession2: string;
  children?: React.ReactNode;
};

const TopicsCard = (props: TopicsCardProps) => {
  return (
    <div>
             
        <div className='card w-25 m-4'   style={{width: '28rem', height:'10rem'}} text-center>        
            <div className='card-header container' >
                    <HeaderTopic/>
            </div> 
            <div className='card-body container'> 
                <p className='card-text fw-bolder'>{props.lession1}</p>
            </div>
            <div className='card-footer text-center'>
                <button className='btn btn-primary'>More Details..</button>
            </div>
        </div> 
        <div className='card w-25 m-4'   style={{width: '28rem', height:'10rem'}} text-center>        
            <div className='card-header container' >
                    <HeaderTopic/>
            </div> 
            <div className='card-body container'> 
                <p className='card-text fw-bolder '>{props.lession2}</p>
                {props.children}
            </div>
            <div className='card-footer text-center'>
                <button className='btn btn-primary'>More Details..</button>
            </div>
        </div> 
    </div>
  );
}

export default TopicsCard;
