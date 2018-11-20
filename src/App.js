import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList'
import Header from './Header'

import { runInThisContext } from 'vm';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ToDoList addItem={this.showInputValue} />
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
