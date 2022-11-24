import './App.css';
import Card from './components/Card'
import { useState } from 'react'

function App() {
  const cardImages = [
    { "src": "/img/bulb-1.jpg" },
    { "src": "/img/city-1.jpg" },
    { "src": "/img/horizon-1.jpg" },
    { "src": "/img/hotair-1.jpg" },
    { "src": "/img/parrot-1.jpg" },
    { "src": "/img/snow-1.jpg" }
  ]

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffle = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

  // const cardValues = ["Card1", "Card2", "Card3", "Card4", "Card5", "Card6", "Card7", "Card8"];

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="container"></div>
      {/* {cardValues.map((item,idx)=>(<Card key={idx} cardText={item}/>))} */}
      <button onClick={shuffle}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <Card key={card.id} card={card}/>
        ))}
      </div>

    </div>
  );
}

export default App;