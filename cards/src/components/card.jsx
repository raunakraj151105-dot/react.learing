import React from 'react'

const Card = (props) => {
  return (
    console.log(props),
    <div className='cards'>
     <img src = {props.img} alt="image1"/>
     <h1>{props.username}</h1>
     <p>{props.about}</p>
     <button>view profile</button>
    </div>
  )
}

export default Card
