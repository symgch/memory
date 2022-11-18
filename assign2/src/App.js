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
  const cardValues = ["Card1", "Card2", "Card3", "Card4"];
  return (
    <div className="App">
      {cardValues.map((item,idx)=>(<Card key={idx} cardText={item}/>))}
    </div>
  );
}

export default App;