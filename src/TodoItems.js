import React, { Component } from 'react';

class TodoItems extends Component {
  createTasks = item => {
    return (
      <div key={item.key} className='toDoItemContainer'>
        <li className='itemToDo'>
          {item.text}
          <button
            onClick={() => this.props.doneItem(item.key)}
            className='doneItemButton'
          >
            Done
          </button>
          <button
            onClick={() => this.props.deleteItem(item.key)}
            className='deleteItemButton'
          >
            Delete
          </button>
        </li>
      </div>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return <ul className='theList'>{listItems}</ul>;
  }
}

export default TodoItems;
