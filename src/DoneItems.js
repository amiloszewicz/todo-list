import React, { Component } from 'react';
import style from './main.css';

class DoneItems extends Component {
  doneItem = item => {
    return (
      <li key={item.key} className='doneItem'>
        <s>{item.text}</s>
      </li>
    );
  };
  render() {
    const doneEntries = this.props.doneEntries;
    const doneListItems = doneEntries.map(this.doneItem);

    return (
      <ul
        className='doneItemsList'
        style={{ display: this.props.displayDoneList }}
      >
        {doneListItems}
      </ul>
    );
  }
}

export default DoneItems;
