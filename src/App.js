import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import DoneItems from './DoneItems.js';
import ShowHideButton from './ShowHideButton.js';

import { runInThisContext } from 'vm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentItem: { text: '', key: '' },
      toDoItems: [],
      doneItems: [],
      showDoneList: { status: false, name: 'show' }
    };
    this.inputElement = React.createRef();
  }

  handleInput = e => {
    const toDoItemText = e.target.value;
    const currentItem = { text: toDoItemText, key: Date.now() };

    this.setState({
      currentItem
    });
  };

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text !== '') {
      // 3 x dots are merging arrays in one with ES6 Array spread
      const toDoItemsWithNewItem = [newItem, ...this.state.toDoItems];

      //  'e' is as a form tag for this function;
      //  targets input tag and cleans it value to none;
      e.target[0].value = '';

      this.setState({
        toDoItems: toDoItemsWithNewItem,
        currentItem: { text: '', key: '' }
      });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.toDoItems.filter(item => {
      return item.key !== key;
    });

    this.setState({
      toDoItems: filteredItems
    });
  };

  doneItem = key => {
    //  returns new array, with only 1 item, which will be set as done
    const filteredDoneItem = this.state.toDoItems.filter(item => {
      return item.key === key;
    });

    //  returns new array, with items which aren't done;
    //  everything what is not equal to item.key clicked via 'done' button;
    const filteredNotDoneItems = this.state.toDoItems.filter(item => {
      return item.key !== key;
    });

    // filteredItems and filteredDoneItem function returns array (even if it's array with 1 elem)
    // so we enter first index to get text & key from object;
    const doneItemText = filteredDoneItem[0].text;
    const doneItemKey = filteredDoneItem[0].key;

    const doneItem = { text: doneItemText, key: doneItemKey };
    // 3 x dots are merging arrays in one with ES6 Array spread
    const doneItems = [doneItem, ...this.state.doneItems];

    this.setState({
      toDoItems: filteredNotDoneItems,
      doneItems: doneItems
    });
  };

  showHideDoneItemsList = () => {
    const showDoneListStatus = this.state.showDoneList.status;

    if (showDoneListStatus === false) {
      this.setState({
        showDoneList: { status: !showDoneListStatus, name: 'hide' }
      });
    } else {
      this.setState({
        showDoneList: { status: !showDoneListStatus, name: 'show' }
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem.text}
        />
        <TodoItems
          entries={this.state.toDoItems}
          deleteItem={this.deleteItem}
          doneItem={this.doneItem}
        />
        <ShowHideButton
          showDoneList={this.state.showDoneList}
          showHideDoneItemsList={this.showHideDoneItemsList}
        />
        {this.state.showDoneList.status ? (
          <DoneItems doneEntries={this.state.doneItems} />
        ) : null}
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
