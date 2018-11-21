import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

import { runInThisContext } from 'vm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { text: '', key: '' }
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
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: '', key: '' }
      });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
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
        <TodoItems entries={this.state.items}
        deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
