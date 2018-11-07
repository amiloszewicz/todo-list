import React from "react";
import ReactDOM from "react-dom";
import { runInThisContext } from "vm";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>To do list</h1>
      </div>
    )
  }
}

class NewToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.getInputValue = this.getInputValue.bind(this);
    this.showInputValue = this.showInputValue.bind(this);
  }

  render() {
    return (
      <div>
        <input id="newToDoItem" value={ this.state.inputValue } onChange={ this.getInputValue }></input>
        <button onClick={ this.showInputValue }>Add</button>
      </div>
    )
  }

  getInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  showInputValue(event) {
    console.log(this.state.inputValue);
    event.preventDefault();
  }
}

class ToDoList extends React.Component {
  render() {
    return (
      <ToDoItem />
    )
  }
}

class ToDoItem extends React.Component {
  render() {
    return (
      <div>
        <span></span>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewToDo />
        <ToDoList />
      </div>
    )
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
