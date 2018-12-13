import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import DoneItems from './doneItems.js';

import { runInThisContext } from 'vm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItems: [],
      currentItem: { text: '', key: '' },
      doneItems: []
    };
    this.inputElement = React.createRef();
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };

  addItem = e => {
    const newItem = this.state.currentItem;
    const itemText = e.target.value;
    console.log(itemText);

    if (newItem !== '') {
      console.log(newItem);
      const toDoItems = [...this.state.toDoItems, newItem];
      this.setState({
        toDoItems: toDoItems,
        currentItem: { text: '', key: '' }
      });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.toDoItems.filter(item => {
      return item.key !== key;
    });
    this.setState({
      toDoItems: filteredItems
    });
  };

  doneItem = key => {
    const filteredDoneItem = this.state.toDoItems.filter(item => {
      return item.key == key;
    });
    const filteredItems = this.state.toDoItems.filter(item => {
      return item.key !== key;
    });
    const doneItemText = filteredDoneItem[0].text;
    const doneItemKey = filteredDoneItem[0].key;
    const doneItem = { text: doneItemText, key: doneItemKey };
    const doneItems = [...this.state.doneItems, doneItem];
    this.setState({
      toDoItems: filteredItems,
      doneItems: doneItems
    });
  };

  render() {
    return (
      <div>
        <Header />
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem.text}
        />
        <TodoItems
          entries={this.state.toDoItems}
          deleteItem={this.deleteItem}
          doneItem={this.doneItem}
        />
        <DoneItems doneEntries={this.state.doneItems} />
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
