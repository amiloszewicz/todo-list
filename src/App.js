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
  render() {
    return (
      <div>
        <input></input>
        <button>Add</button>
      </div>
    )
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
        <checkbox/>
        <span></span>
        <button>del</button>
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
