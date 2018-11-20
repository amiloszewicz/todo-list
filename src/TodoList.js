import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <div>
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
