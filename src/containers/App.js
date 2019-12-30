import React, { Component } from 'react';
import EnterItemBox from '../components/EnterItemBox.js';
import ItemEntryList from '../components/ItemEntryList.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      textField: ''
    }
  }

  updateTextField = (event) => {
    this.setState({ textField: event.target.value});
  }

  enterItem = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      let changedItemList = this.state.items;
      changedItemList.push(event.target.value);
      this.setState({ items: changedItemList});
      this.setState({ textField: '' })
    }
  }

  deleteItem = (event) => {
    let currentItems = this.state.items;
    let filteredItems = currentItems.filter((item, i) => {
      let id = String(i);
      return id !== event.currentTarget.id;
    })
    this.setState({ items: filteredItems});
  }

  resetItems = (event) => {
    this.setState({ items: []});
  }

  addItemClick = (event) => {
    if (this.state.textField !== '') {
      let changedItemList = this.state.items;
      changedItemList.push(this.state.textField);
      this.setState({ items: changedItemList});
      this.setState({ textField: '' })
    }
  }

  render() {
    return (
      <div className="tc bg-near-white pa4">
        <h1>Shopping List App</h1>
        <EnterItemBox 
          enteredItem={this.enterItem} 
          resetClick={this.resetItems} 
          addClick={this.addItemClick} 
          textValue={this.state.textField} 
          onTextChange={this.updateTextField}
        />
        <div className="pa3"></div>
        <div className="f4">
          <ItemEntryList 
            items={this.state.items}
            itemClicked={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default App;