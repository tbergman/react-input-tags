import React from 'react';

const insertKeyCodes = {
  13: 'enter',
  9: 'tab',
};

const removeKeyCodes = {
  8: 'backspace / delete',
};

class ReactTagging extends React.Component {
  state = {
    inputValue: '',
  }

  handleOnChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  }

  handleOnKeyDown = (event) => {
    const { keyCode } = event;

    // check if code matches any of the ones above

    // if an insert key code, then insert inputValue as a tag
    if (insertKeyCodes.hasOwnProperty(keyCode)) {
      console.log('insert tag into array of tags');
    }

    if (removeKeyCodes.hasOwnProperty(keyCode)) {
      console.log('remove tag from array of tags');
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleOnChange}
          onKeyDown={this.handleOnKeyDown}
        />
        <div>{this.state.inputValue}</div>
      </div>
    );
  }
}

export default ReactTagging;
