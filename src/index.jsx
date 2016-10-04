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
    const { tags, handleInsert } = this.props;

    if (insertKeyCodes.hasOwnProperty(keyCode)) {
      handleInsert(tags, inputValue);
    }

    if (removeKeyCodes.hasOwnProperty(keyCode)) {
      console.log('remove tag from array of tags');
    }
  }

  render() {
    const { tags, renderTag } = this.props;
    return (
      <div>
        <input
          type="text"
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
  tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  handleInsert: React.PropTypes.func.isRequired,
  renderTag: React.PropTypes.func.isRequired,
};

export default ReactTagging;
