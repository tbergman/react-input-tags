import React from 'react';
import { Tag } from './Tag.jsx';
import {
  defaultInsertKeyCodes,
  defaultRemoveKeyCodes,
  defaultInputPlaceholder,
} from './util';

export class TagsInput extends React.Component {
  static propTypes = {
    tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleInsert: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    insertKeyCodes: React.PropTypes.object,
    removeKeyCodes: React.PropTypes.object,
    inputPlaceholder: React.PropTypes.string,
  };

  static defaultProps = {
    insertKeyCodes: defaultInsertKeyCodes,
    removeKeyCodes: defaultRemoveKeyCodes,
    inputPlaceholder: defaultInputPlaceholder,
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
    const { tags, handleRemove, inputPlaceholder } = this.props;
    const { inputValue } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          onKeyDown={this.handleOnKeyDown}
        />
        <div>
          {tags.map((tag, index) =>
            <Tag
              key={index}
              value={tag}
              handleRemove={() => handleRemove(tags, index)}
            />
          )}
        </div>
      </div>
    );
  }
}
