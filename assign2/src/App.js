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

  // Shuffle function
  const shuffle = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setSelectOne(null)
    setSelectTwo(null)
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
        setCards(prevCard => {
          // return new array
          return prevCard.map(card => {
            // Does the matched image(src) match them
            if (card.src === selectOne.src) {
              // They're a match!
              return {...card, match: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        // give it some time
        setTimeout(() => resetTurn(), 800)
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
  
  // Starting Game 
  useEffect(() => {
    shuffle()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="container"></div>
      {/* {cardValues.map((item,idx)=>(<Card key={idx} cardText={item}/>))} */}
      <button onClick={shuffle}>New Game</button>

      <p>Turns: {turns}</p>

      <div className="card-grid">
        {cards.map(card => (
          <Card key={card.id} 
                card={card}
                handleChoice={handleChoice} 
                // Flipping the first card, second card, and if theyre a match
                flipped={card === selectOne || card === selectTwo || card.match}
          />
        ))}
      </div>

    </div>
  );
}

export default App;