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
        <input
          id='newToDoItem'
          value={this.state.inputValue}
          onChange={this.getInputValue}
        />
        <button onClick={this.props.showInputValue}>Add</button>
      </div>
    );
  }
}
