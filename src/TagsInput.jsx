import React from 'react';
import { Tag } from './Tag.jsx';

// move to utils folder
const defaultInsertKeyCodes = {
  13: 'enter',
  9: 'tab',
  188: 'comma',
};

const defaultRemoveKeyCodes = {
  8: 'backspace / delete',
};

export class TagsInput extends React.Component {
  static propTypes = {
    tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleInsert: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    insertKeyCodes: React.PropTypes.object,
    removeKeyCodes: React.PropTypes.object,
  };

  static defaultProps = {
    insertKeyCodes: defaultInsertKeyCodes,
    removeKeyCodes: defaultRemoveKeyCodes,
  };

  state = {
    inputValue: '',
  }

  handleOnChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  }

  handleOnBlur = () => {
    const { inputValue } = this.state;
    const { tags, handleInsert } = this.props;

    if (inputValue.length > 0) {
      this.setState({ inputValue: '' });
      handleInsert(tags, inputValue);
    }
  }

  handleOnKeyDown = (event) => {
    const { keyCode } = event;
    const { inputValue } = this.state;
    const { tags, handleInsert, handleRemove, insertKeyCodes, removeKeyCodes } = this.props;

    if (insertKeyCodes.hasOwnProperty(keyCode) && inputValue.length > 0) {
      this.setState({ inputValue: '' });
      handleInsert(tags, inputValue);
    }

    if (removeKeyCodes.hasOwnProperty(keyCode) && inputValue.length === 0 && tags.length > 0) {
      handleRemove(tags, tags.length - 1);
    }
  }

  render() {
    const { tags } = this.props;
    const { inputValue } = this.state;
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          onKeyDown={this.handleOnKeyDown}
        />
        <ul>
          {tags.map((tag, index) =>
            <Tag
              key={index}
              value={tag}
            />
          )}
        </ul>
      </div>
    );
  }
}
