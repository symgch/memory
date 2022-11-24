import './App.css';
import Card from './components/Card'
import { useState, useEffect } from 'react'

function App() {
  const cardImages = [
    { "src": "/img/bulb-1.jpg", match: false },
    { "src": "/img/city-1.jpg", match: false },
    { "src": "/img/horizon-1.jpg", match: false },
    { "src": "/img/hotair-1.jpg", match: false },
    { "src": "/img/parrot-1.jpg", match: false },
    { "src": "/img/snow-1.jpg", match: false }
  ]

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [selectOne, setSelectOne] = useState(null)
  const [selectTwo, setSelectTwo] = useState(null)

  const shuffle = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setCards(shuffledCards)
    setTurns(0)
  }

  // Handling what the user decides to open
  const handleChoice = (card) => {
    // if selectOne has a value, update selectTwo (left side runs)
    // if selectOne is null, right side runs 
    selectOne ? setSelectTwo(card) : setSelectOne(card)
  }

  // Comparing the two selected cards
  useEffect(() => {
    // only run when both cards are selected, not just one of them
    if (selectOne && selectTwo) { 
      // do the pictures(src) match each other
      if (selectOne.src === selectTwo.src) {
        console.log("Match")
        resetTurn()
      } else {
        console.log("Not a Match")
        resetTurn()
      }
    }
  }, [selectOne, selectTwo])

  // reset and adding turns
  const resetTurn = () => {
    setSelectOne(null)
    setSelectTwo(null)
    // Adding up the turns using recursion
    setTurns(prevTurn => prevTurn + 1)
  }
  // const cardValues = ["Card1", "Card2", "Card3", "Card4", "Card5", "Card6", "Card7", "Card8"];

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="container"></div>
      {/* {cardValues.map((item,idx)=>(<Card key={idx} cardText={item}/>))} */}
      <button onClick={shuffle}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <Card key={card.id} 
                card={card}
                handleChoice={handleChoice} 
          />
        ))}
      </div>

    </div>
  );
}

export default App;