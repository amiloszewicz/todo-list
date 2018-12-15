import React, { Component } from 'react';

class ShowHideButton extends Component {
  render() {
    return (
      <div className='showHideDoneListButton'>
        <button onClick={this.props.showHideDoneItemsList}>{this.props.showDoneList.name}</button>
      </div>
    );
  }
}

export default ShowHideButton;
