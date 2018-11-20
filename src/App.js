import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';
import Header from './Header';

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
    console.log(`hello input`);
  };
  addItem = () => {
    console.log(`hello add item`);
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
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
