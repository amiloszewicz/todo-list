import React, { Component } from 'react';

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }

  render() {
    return (
      <div className='todoListMain'>
        <form onSubmit={this.props.addItem} className='todoForm'>
          <input
            placeholder='New task'
            ref={this.props.inputElement}
            value={this.props.currentItem.text}
            onChange={this.props.handleInput}
            className='todoInput'
          />
          <button type='submit' className='submitNewToDoItemBtn'>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default TodoList;
