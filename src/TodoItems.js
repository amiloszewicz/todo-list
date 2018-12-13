import React, { Component } from 'react';

class TodoItems extends Component {
  createTasks = item => {
    return (
      <div key={item.key}>
        <li>
          <button onClick={() => this.props.doneItem(item.key)}>done</button>
          {item.text}
          <button onClick={() => this.props.deleteItem(item.key)}>del</button>
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
