import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // Stop form from submitting
    event.preventDefault();
    // Get text from input
    const storeName = this.myInput.current.value;
    // Update page url, using props from Router
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
