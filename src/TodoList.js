import React, { Component } from 'react';

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

  render() {
    return (
      <div className='todoListMain'>
        <input
          placeholder='New task'
          ref={this.props.inputElement}
          value={this.props.currentItem.text}
          onChange={this.props.handleInput}
        />
        <button onClick={this.props.addItem}>Add</button>
      </div>
    );
  }
}

export default TodoList;
