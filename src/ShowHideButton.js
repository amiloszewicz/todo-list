import React, { Component } from 'react';

class ShowHideButton extends Component {
  render() {
    return (
      <div className='showHideDoneListButton'>
        <h1 className='doneListTitle'>Done list</h1>
        <button
          onClick={this.props.showHideDoneItemsList}
          className='showHidedoneListButton'
        >
          {this.props.showDoneList.name}
        </button>
      </div>
    );
  }
}

export default ShowHideButton;
