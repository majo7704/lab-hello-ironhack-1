import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.image} alt="feature"/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Card;