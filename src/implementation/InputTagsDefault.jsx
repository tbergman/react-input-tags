import React from 'react';

import { Input } from '../interface/Input.jsx';
import { Tag } from '../interface/Tag.jsx';
import { SuggestionList } from '../interface/SuggestionList.jsx';

import {
  tabKeyCode,
  enterKeyCode,
  commaKeyCode,
  backspaceKeyCode,
  downKeyCode,
  upKeyCode,
  escapeKeyCode,
} from '../keyCodes';

export const SuggestionListContainer = ({
  showSuggestions,
  highlightedSuggestionIndex,
  handleHighlight,
  handleSelect,
  suggestions,
  getSuggestionValue,
}) => {
  if (!showSuggestions) return null;
  return (
    <SuggestionList
      suggestions={suggestions}
      handleSelect={handleSelect}
      getSuggestionValue={getSuggestionValue}
      highlightedIndex={highlightedSuggestionIndex}
      handleHighlight={handleHighlight}
    />
  );
};

SuggestionListContainer.propTypes = {
  showSuggestions: React.PropTypes.bool.isRequired,
  highlightedSuggestionIndex: React.PropTypes.number.isRequired,
  handleHighlight: React.PropTypes.func.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
  suggestions: React.PropTypes.arrayOf(React.PropTypes.any),
  getSuggestionValue: React.PropTypes.func,
};

export const handleUpdateSuggestionsDefault = () => {};

export const calcNextIndexDefault = (oldIndex, numItems) =>
  (oldIndex + 1) % numItems;

export const calcPreviousIndexDefault = (oldIndex, numItems) =>
  ((oldIndex - 1) + numItems) % numItems;

export const insertKeyCodesDefault = [
  tabKeyCode,
  enterKeyCode,
  commaKeyCode,
];

export const removeKeyCodesDefault = [
  backspaceKeyCode,
];

export const nextKeyCodesDefault = [
  downKeyCode,
];

export const previousKeyCodesDefault = [
  upKeyCode,
];

export const closeKeyCodesDefault = [
  escapeKeyCode,
];

export class InputTagsDefault extends React.Component {
  static propTypes = {
    tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleInsert: React.PropTypes.func.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    inputPlaceholder: React.PropTypes.string,
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any),
    handleUpdateSuggestions: React.PropTypes.func,
    getSuggestionValue: React.PropTypes.func,
    calcNextIndex: React.PropTypes.func.isRequired,
    calcPreviousIndex: React.PropTypes.func.isRequired,
    insertKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    removeKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    nextKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    previousKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    closeKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  };

  static defaultProps = {
    handleUpdateSuggestions: handleUpdateSuggestionsDefault,
    calcNextIndex: calcNextIndexDefault,
    calcPreviousIndex: calcPreviousIndexDefault,
    insertKeyCodes: insertKeyCodesDefault,
    removeKeyCodes: removeKeyCodesDefault,
    nextKeyCodes: nextKeyCodesDefault,
    previousKeyCodes: previousKeyCodesDefault,
    closeKeyCodes: closeKeyCodesDefault,
  };

  state = {
    inputValue: '',
    showSuggestions: false,
    highlightedSuggestionIndex: 0,
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
    const { inputValue, showSuggestions, highlightedSuggestionIndex } = this.state;
    const {
      tags,
      suggestions,
      getSuggestionValue,
      calcNextIndex,
      calcPreviousIndex,
      insertKeyCodes,
      removeKeyCodes,
      nextKeyCodes,
      previousKeyCodes,
      closeKeyCodes,
    } = this.props;

    if (insertKeyCodes.includes(keyCode) && inputValue.length > 0) {
      // prevents typing comma from entering `,` in the input
      // prevents typing tab from setting the focus on something other than the input
      event.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        this.insertTag(tags, getSuggestionValue(suggestions[highlightedSuggestionIndex]));
      } else {
        this.insertTag(tags, inputValue);
      }
    }

    if (removeKeyCodes.includes(keyCode) && inputValue.length === 0 && tags.length > 0) {
      this.removeTag(tags, tags.length - 1);
    }

    if (closeKeyCodes.includes(keyCode)) {
      this.setShowSuggestions(false);
    }

    const oldHighlightedIndex = highlightedSuggestionIndex;
    const numSuggestions = suggestions.length;

    if (nextKeyCodes.includes(keyCode)) {
      const newHighlightedIndex = calcNextIndex(oldHighlightedIndex, numSuggestions);
      this.setHighlightedSuggestionIndex(newHighlightedIndex);
    }

    if (previousKeyCodes.includes(keyCode)) {
      const newHighlightedIndex = calcPreviousIndex(oldHighlightedIndex, numSuggestions);
      this.setHighlightedSuggestionIndex(newHighlightedIndex);
    }
  }

  setShowSuggestions = (showSuggestions) => {
    this.setState({ showSuggestions });
  }

  setHighlightedSuggestionIndex = (highlightedSuggestionIndex) => {
    this.setState({ highlightedSuggestionIndex });
  }

  render() {
    const {
      tags,
      inputPlaceholder,
      suggestions,
      getSuggestionValue,
    } = this.props;
    const { inputValue, showSuggestions, highlightedSuggestionIndex } = this.state;
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
        <SuggestionListContainer
          suggestions={suggestions}
          showSuggestions={showSuggestions}
          highlightedSuggestionIndex={highlightedSuggestionIndex}
          getSuggestionValue={getSuggestionValue}
          handleHighlight={this.setHighlightedSuggestionIndex}
          handleSelect={suggestion => this.insertTag(tags, suggestion)}
        />
      </div>
    );
  }
}
