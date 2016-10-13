import React from 'react';

import { Input } from './Input.jsx';
import { Tag } from './Tag.jsx';

import {
  defaultInsertKeyCodes,
  defaultRemoveKeyCodes,
  defaultInputPlaceholder,
  defaultRenderTag,
  defaultInputTagsClassName,
} from './default.jsx';

export class InputTags extends React.Component {
  static propTypes = {
    tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleInsert: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    insertKeyCodes: React.PropTypes.object,
    removeKeyCodes: React.PropTypes.object,
    renderTag: React.PropTypes.func,
    inputPlaceholder: React.PropTypes.string,
    className: React.PropTypes.string,
  };

  static defaultProps = {
    insertKeyCodes: defaultInsertKeyCodes,
    removeKeyCodes: defaultRemoveKeyCodes,
    renderTag: defaultRenderTag,
    inputPlaceholder: defaultInputPlaceholder,
    className: defaultInputTagsClassName,
  };

  state = {
    inputValue: '',
  }

  insertTag = (tags, inputValue) => {
    const { handleInsert } = this.props;
    this.setState({ inputValue: '' });
    handleInsert(tags, inputValue);
  }

  removeTag = (tags, removeTagIndex) => {
    const { handleRemove } = this.props;
    handleRemove(tags, removeTagIndex);
  }

  handleOnChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  }

  handleOnBlur = () => {
    const { inputValue } = this.state;
    const { tags } = this.props;

    if (inputValue.length > 0) {
      this.insertTag(tags, inputValue);
    }
  }

  handleOnKeyDown = (event) => {
    const { keyCode } = event;
    const { inputValue } = this.state;
    const { tags, insertKeyCodes, removeKeyCodes } = this.props;

    if (insertKeyCodes.hasOwnProperty(keyCode) && inputValue.length > 0) {
      event.preventDefault();
      this.insertTag(tags, inputValue);
    }

    if (removeKeyCodes.hasOwnProperty(keyCode) && inputValue.length === 0 && tags.length > 0) {
      this.removeTag(tags, tags.length - 1);
    }
  }

  render() {
    const {
      tags,
      handleRemove,
      renderTag,
      inputPlaceholder,
      className,
    } = this.props;
    const { inputValue } = this.state;
    return (
      <div
        className={className}
      >
        {tags.map((tag, index) =>
          <Tag
            key={index}
            value={tag}
            handleRemove={() => handleRemove(tags, index)}
            renderTag={renderTag}
          />
        )}
        <Input
          value={inputValue}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          onKeyDown={this.handleOnKeyDown}
          placeholder={inputPlaceholder}
        />
      </div>
    );
  }
}
