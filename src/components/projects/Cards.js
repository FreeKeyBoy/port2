import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  constructor(props) {
    super(props);
     this.state = {
      cards: props.cards
    }
  }
  
  render() {  
    return (
      <div className="cards-container">
        {this.props.cards.map((card, index) => <Card key = {index} card = {card} />)}
      </div>
    )
  }
}

export default Cards;