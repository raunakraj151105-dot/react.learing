import React from 'react'
import { Bookmark } from 'lucide-react'
const Cards = (props) => {
  return (
      
      <div className="card">
        <div className="top">

          <img src={props.logo} alt="" />
          <button>Save <Bookmark size = {18} /></button>
        </div>
        <div className="centre">
              <h3>{props.company} <span>{props.time}</span></h3>
              <h2>{props.role}</h2>
              <div>
                <h4>{props.tag1}</h4>
                <h4>{props.tag2}</h4>
              </div>
        </div>
        <div className="bottom">
          <div>
            <p>{props.pay}</p>
            <h3>{props.location}</h3>
          </div>
          <button>Apply now</button>
        </div>

      </div>
    
  )
}

export default Cards
