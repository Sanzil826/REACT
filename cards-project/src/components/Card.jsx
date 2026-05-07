// import React from 'react
import {Bookmark} from 'lucide-react'


const Card = (props) => { 
    console.log(props);
       
  return (
         
      <div className="card">
        <div>
          <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className="center">
          <h3>{props.name}<span>{props.days}</span></h3>
          <h2>{props.position}</h2>
          <div className='tag'>
            <h4>{props.time}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
            <div>
              <h3>{props.rate}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          </div>

      </div>
      
  )
}

export default Card
