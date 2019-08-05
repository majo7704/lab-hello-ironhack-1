import React from 'react'
import Nav from './Nav.js'
import Content from './Content.js'
import Button from './Button.js'
import './Nav.css'
import './Content.css'
import './Hero.css';

function Hero() {
  return (
    <header className="Hero">
      <Nav />
      <Content />
      <Button />
    </header>
  );
}

export default Hero;