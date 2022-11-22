import './App.css';
import Card from './Card'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function App() {
  const cardValues = ["Card1", "Card2", "Card3", "Card4", "Card5", "Card6", "Card7", "Card8"];
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className='container'></div>
      {cardValues.map((item,idx)=>(<Card key={idx} cardText={item}/>))}
      <button>New Game</button>
    </div>
  );
}

export default App;