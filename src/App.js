import React from 'react';
import ReactDOM from 'react-dom';
import { runInThisContext } from 'vm';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>To do list</h1>
      </div>
    );
  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  getInputValue = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  showInputValue = () => {
    this.setState({
      inputValue: this.state.inputValue
    });
    console.log(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            id='newToDoItem'
            value={this.state.inputValue}
            onChange={this.getInputValue}
          />
          <button onClick={this.showInputValue}>Add</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ToDoList />
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
