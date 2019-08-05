import React from 'react'
import './Footer.css'
import Card from './Card.js'

let cards = [
  {
    image: './images/icon1.png',
    title: 'Declarative',
    description: "React amkes it painless to create interactive UIs."
  },
  {
    image: './images/icon2.png',
    title: 'Components',
    description: "Build encapsulated components that manage their state."
  },
  {

    image: './images/icon3.png',
    title: 'Single-way',
    description: "A set of immutable values are passed to the components"
  },
  {

    image: './images/icon4.png',
    title: 'JSX',
    description: "Statically-typed, designed to run on modern browsers"
  }
  
]

function Footer(props) {
  let cardComponents = cards.map((card, index) => {
    return ( //key is needed
      <Card
        key={index}
        image={card.image}
        title={card.title}
        description={card.description} />
    )
  })
  return (
    <footer className="Footer">
      {cardComponents}
    </footer>
  )
}
export default Footer;