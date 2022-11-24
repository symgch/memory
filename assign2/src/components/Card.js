import React from 'react';
import './Card.css'

export default function Card({ card }) {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/img/question-1.jpg" alt="card back" />
      </div>
    </div>
  )
}


// class Card extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isFlipped: false}
//   }

//   handleClick = () => {
//     this.setState(state => ({isFlipped: !state.isFlipped}));
//   }
  
//   render() {
//     if(this.state.isFlipped === false) {
//       return (
//         <div style={{height:'100px', width:'75px', backgroundColor:'black', borderStyle:'solid', borderColor:'red'}}
//              onClick={this.handleClick}></div>
//       );
// 		}
//     return (
//       <div style={{height:'100px', width:'75px', backgroundColor:'lightblue', borderStyle:'solid', borderColor:'red'}}
//            onClick={this.handleClick}>{this.props.cardText}</div>
//     );
//   }
// }

// export default Card;