import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // take a copy of current state
    const fishes = { ...this.state.fishes };
    // add new data to copy with unique key
    fishes[`fish${Date.now()}`] = fish;
    // update state
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
