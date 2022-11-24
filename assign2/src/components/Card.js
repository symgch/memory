import React from 'react';
import './Card.css'

export default function Card({ card, handleChoice, flipped }) {

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="card">
      <div className={flipped ? "isFlipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/img/question-1.jpg" onClick={handleClick} alt="card back" />
      </div>
    </div>
  )
}

