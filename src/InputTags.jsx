import React from 'react';

import { Input } from './Input.jsx';
import { Tag } from './interface/Tag.jsx';
import { List } from './interface/List.jsx';

import {
  defaultInsertKeyCodes,
  defaultRemoveKeyCodes,
  defaultInputPlaceholder,
  defaultHandleInputChange,
  defaultInputTagsClassName,
  defaultTagsInputClassName,
} from './default.jsx';

// TODO: interface
export class InputTags extends React.Component {
  static propTypes = {
    tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleInsert: React.PropTypes.func.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    insertKeyCodes: React.PropTypes.object,
    removeKeyCodes: React.PropTypes.object,
    inputPlaceholder: React.PropTypes.string,
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any),
    handleInputChange: React.PropTypes.func,
    className: React.PropTypes.string,
    tagsInputClassName: React.PropTypes.string,
    tabIndex: React.PropTypes.number,
  };

  static defaultProps = {
    insertKeyCodes: defaultInsertKeyCodes,
    removeKeyCodes: defaultRemoveKeyCodes,
    inputPlaceholder: defaultInputPlaceholder,
    suggestions: [],
    handleInputChange: defaultHandleInputChange,
    className: defaultInputTagsClassName,
    tagsInputClassName: defaultTagsInputClassName,
  };

  state = {
    inputValue: '',
  }

  insertTag = (tags, inputValue) => {
    const { handleInsert } = this.props;
    this.setState({ inputValue: '' });
    handleInsert(tags, inputValue);
  }

  editTag = (tags, editTagIndex, newValue) => {
    const { handleEdit } = this.props;
    handleEdit(tags, editTagIndex, newValue);
  }

  removeTag = (tags, removeTagIndex) => {
    const { handleRemove } = this.props;
    handleRemove(tags, removeTagIndex);
  }

  handleOnChange = (event) => {
    const { handleInputChange } = this.props;
    const inputValue = event.target.value;
    this.setState({ inputValue });
    handleInputChange(inputValue);
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
      // cancels the event since insert key codes can cause undesired default behavior
      // for example, typing `,` would enter a comma in the input
      // or typing `tab` would set the focus not on the input
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
      inputPlaceholder,
      suggestions,
      className,
      tagsInputClassName,
      tabIndex,
    } = this.props;
    const { inputValue } = this.state;
    const suggestionsElement = inputValue.length > 0 ?
    (
      <List
        items={suggestions}
        // TODO: test
        handleSelect={suggestion => this.insertTag(tags, suggestion)}
        // TODO: have state for showing suggestions or not
        // then this can be a callback that setState
        // TODO: test
        handleClose={() => { console.log('close'); }}
      />
    ) : null;
    return (
      <div
        className={className}
      >
        <div
          className={tagsInputClassName}
        >
          {tags.map((tag, index) =>
            <Tag
              key={index}
              value={tag}
              handleEdit={newValue => this.editTag(tags, index, newValue)}
              handleRemove={() => this.removeTag(tags, index)}
            />
          )}
          <Input
            value={inputValue}
            onChange={this.handleOnChange}
            onBlur={this.handleOnBlur}
            onKeyDown={this.handleOnKeyDown}
            placeholder={inputPlaceholder}
            tabIndex={tabIndex}
          />
        </div>
        {suggestionsElement}
      </div>
    );
  }
}
