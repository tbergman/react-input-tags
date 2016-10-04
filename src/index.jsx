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
    const { inputValue } = this.state;
    const { tags, handleInsert, handleRemove } = this.props;

    if (insertKeyCodes.hasOwnProperty(keyCode)) {
      this.setState({ inputValue: '' });
      handleInsert(tags, inputValue);
    }

    if (removeKeyCodes.hasOwnProperty(keyCode)) {
      if (inputValue === '' && tags.length > 0) {
        handleRemove(tags, tags.length - 1);
      }
    }
  }

  render() {
    const { tags, renderTag } = this.props;
    const { inputValue } = this.state;
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleOnChange}
          onKeyDown={this.handleOnKeyDown}
        />
        <ul>
          {tags.map((tag, index) =>
            <div key={index}>
              {renderTag(tag)}
            </div>
          )}
        </ul>
      </div>
    );
  }
}

ReactTagging.propTypes = {
  tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  handleInsert: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
  renderTag: React.PropTypes.func,
};

export default ReactTagging;
