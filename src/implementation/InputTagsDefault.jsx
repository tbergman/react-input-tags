import React from 'react';

import { Input } from '../interface/Input.jsx';
import { Tag } from '../interface/Tag.jsx';
import { List } from '../interface/List.jsx';

import {
  tabKeyCode,
  enterKeyCode,
  commaKeyCode,
  backspaceKeyCode,
} from '../keyCodes';

export const SuggestionList = ({
  suggestions,
  handleSelect,
  handleClose,
  showSuggestions,
}) => {
  if (!showSuggestions) return null;
  return (
    <List
      items={suggestions}
      handleSelect={handleSelect}
      handleClose={handleClose}
    />
  );
};

SuggestionList.propTypes = {
  suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  handleSelect: React.PropTypes.func.isRequired,
  handleClose: React.PropTypes.func.isRequired,
  showSuggestions: React.PropTypes.bool.isRequired,
};

export const inputPlaceholderDefault = '';

export const suggestionsDefault = [];

export const handleUpdateSuggestionsDefault = () => {};


export const insertKeyCodesDefault = [
  tabKeyCode,
  enterKeyCode,
  commaKeyCode,
];

export const removeKeyCodesDefault = [
  backspaceKeyCode,
];

export class InputTagsDefault extends React.Component {
  static propTypes = {
    tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleInsert: React.PropTypes.func.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    inputPlaceholder: React.PropTypes.string.isRequired,
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleUpdateSuggestions: React.PropTypes.func.isRequired,
    insertKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    removeKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  };

  static defaultProps = {
    inputPlaceholder: inputPlaceholderDefault,
    suggestions: suggestionsDefault,
    handleUpdateSuggestions: handleUpdateSuggestionsDefault,
    insertKeyCodes: insertKeyCodesDefault,
    removeKeyCodes: removeKeyCodesDefault,
  };

  state = {
    inputValue: '',
    showSuggestions: false,
  }

  insertTag = (tags, inputValue) => {
    const { handleInsert } = this.props;
    this.setState({ inputValue: '', showSuggestions: false });
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

  handleInputOnChange = (event) => {
    const { handleUpdateSuggestions } = this.props;
    const inputValue = event.target.value;
    const showSuggestions = inputValue.length > 0;
    this.setState({ inputValue, showSuggestions });
    handleUpdateSuggestions(inputValue);
  }

  handleInputOnBlur = () => {
    const { inputValue } = this.state;
    const { tags } = this.props;

    if (inputValue.length > 0) {
      this.insertTag(tags, inputValue);
    }
  }

  handleInputOnKeyDown = (event) => {
    const { keyCode } = event;
    const { inputValue } = this.state;
    const { tags, insertKeyCodes, removeKeyCodes } = this.props;

    if (insertKeyCodes.includes(keyCode) && inputValue.length > 0) {
      // cancels the event since insert key codes can cause undesired default behavior
      // for example, typing `,` would enter a comma in the input
      // or typing `tab` would set the focus not on the input
      event.preventDefault();
      this.insertTag(tags, inputValue);
    }

    if (removeKeyCodes.includes(keyCode) && inputValue.length === 0 && tags.length > 0) {
      this.removeTag(tags, tags.length - 1);
    }
  }

  setShowSuggestions = (showSuggestions) => {
    this.setState({ showSuggestions });
  }

  render() {
    const {
      tags,
      inputPlaceholder,
      suggestions,
    } = this.props;
    const { inputValue, showSuggestions } = this.state;
    return (
      <div>
        <div>
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
            placeholder={inputPlaceholder}
            handleOnChange={this.handleInputOnChange}
            handleOnBlur={this.handleInputOnBlur}
            handleOnKeyDown={this.handleInputOnKeyDown}
          />
        </div>
        <SuggestionList
          suggestions={suggestions}
          handleSelect={suggestion => this.insertTag(tags, suggestion)} // TODO: test
          handleClose={() => this.setShowSuggestions(false)} // TODO: test
          showSuggestions={showSuggestions}
        />
      </div>
    );
  }
}
