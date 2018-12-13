import React, { Component } from 'react';
import style from './main.css';

class DoneItems extends Component {
  doneItem = item => {
    return <li key={item.key}>{item.text}</li>;
  };
  render() {
    const doneEntries = this.props.doneEntries;
    const doneListItems = doneEntries.map(this.doneItem);

    return <ul className='doneItemsList'>{doneListItems}</ul>;
  }
}

export default DoneItems;
