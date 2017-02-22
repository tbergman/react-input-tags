import React from 'react';

import { Input } from '../interface/Input.jsx';
import { Tag } from '../interface/Tag.jsx';
import { SuggestionList } from '../interface/SuggestionList.jsx';
import { SuggestionsLoader } from '../interface/SuggestionsLoader.jsx';
import { defaultClassNamePrefix } from './util';

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
  SuggestionListImplementation,
  SuggestionImplementation,
  suggestions,
  showSuggestions,
  highlightedSuggestionIndex,
  handleHighlight,
  handleSelect,
  getSuggestionValue,
  SuggestionListClassName,
  SuggestionClassName,
}) => {
  if (!showSuggestions) return null;
  return (
    <SuggestionList
      SuggestionListImplementation={SuggestionListImplementation}
      SuggestionImplementation={SuggestionImplementation}
      suggestions={suggestions}
      highlightedIndex={highlightedSuggestionIndex}
      handleHighlight={handleHighlight}
      handleSelect={handleSelect}
      getSuggestionValue={getSuggestionValue}
      SuggestionListClassName={SuggestionListClassName}
      SuggestionClassName={SuggestionClassName}
    />
  );
};

SuggestionListContainer.propTypes = {
  SuggestionListImplementation: React.PropTypes.func,
  SuggestionImplementation: React.PropTypes.func,
  suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  showSuggestions: React.PropTypes.bool.isRequired,
  highlightedSuggestionIndex: React.PropTypes.number.isRequired,
  handleHighlight: React.PropTypes.func.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
  getSuggestionValue: React.PropTypes.func.isRequired,
  SuggestionListClassName: React.PropTypes.string,
  SuggestionClassName: React.PropTypes.string,
};

export const suggestionsDefault = [];

export const handleUpdateSuggestionsDefault = () => {};

export const getSuggestionValueDefault = suggestion => suggestion;

export const InputTagsClassNameDefault = `${defaultClassNamePrefix}-input-tags`;

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
    InputImplementation: React.PropTypes.func,
    TagImplementation: React.PropTypes.func,
    SuggestionListImplementation: React.PropTypes.func,
    SuggestionImplementation: React.PropTypes.func,
    SuggestionsLoaderImplementation: React.PropTypes.func,
    tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleInsert: React.PropTypes.func.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    handleDoneEditing: React.PropTypes.func,
    inputPlaceholder: React.PropTypes.string,
    inputTabIndex: React.PropTypes.number,
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleUpdateSuggestions: React.PropTypes.func.isRequired,
    getSuggestionValue: React.PropTypes.func.isRequired,
    suggestionsAreLoading: React.PropTypes.bool,
    InputTagsClassName: React.PropTypes.string,
    InputClassName: React.PropTypes.string,
    TagClassName: React.PropTypes.string,
    SuggestionListClassName: React.PropTypes.string,
    SuggestionClassName: React.PropTypes.string,
    SuggestionsLoaderClassName: React.PropTypes.string,
    calcNextIndex: React.PropTypes.func.isRequired,
    calcPreviousIndex: React.PropTypes.func.isRequired,
    insertKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    removeKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    nextKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    previousKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    closeKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  };

  static defaultProps = {
    suggestions: suggestionsDefault,
    handleUpdateSuggestions: handleUpdateSuggestionsDefault,
    getSuggestionValue: getSuggestionValueDefault,
    InputTagsClassName: InputTagsClassNameDefault,
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
      InputImplementation,
      TagImplementation,
      SuggestionListImplementation,
      SuggestionImplementation,
      SuggestionsLoaderImplementation,
      tags,
      handleDoneEditing,
      inputPlaceholder,
      inputTabIndex,
      suggestions,
      getSuggestionValue,
      suggestionsAreLoading,
      InputTagsClassName,
      InputClassName,
      TagClassName,
      SuggestionListClassName,
      SuggestionClassName,
      SuggestionsLoaderClassName,
    } = this.props;
    const { inputValue, showSuggestions, highlightedSuggestionIndex } = this.state;
    return (
      <div
        className={InputTagsClassName}
      >
        <div>
          {tags.map((tag, index) =>
            <Tag
              TagImplementation={TagImplementation}
              key={index}
              value={tag}
              handleEdit={newValue => this.editTag(tags, index, newValue)}
              handleRemove={() => this.removeTag(tags, index)}
              handleDoneEditing={handleDoneEditing}
              TagClassName={TagClassName}
            />
          )}
          <Input
            InputImplementation={InputImplementation}
            value={inputValue}
            placeholder={inputPlaceholder}
            tabIndex={inputTabIndex}
            handleOnChange={this.handleInputOnChange}
            handleOnBlur={this.handleInputOnBlur}
            handleOnKeyDown={this.handleInputOnKeyDown}
            InputClassName={InputClassName}
          />
          <SuggestionsLoader
            SuggestionsLoaderImplementation={SuggestionsLoaderImplementation}
            suggestionsAreLoading={suggestionsAreLoading}
            SuggestionsLoaderClassName={SuggestionsLoaderClassName}
          />
        </div>
        <SuggestionListContainer
          SuggestionListImplementation={SuggestionListImplementation}
          SuggestionImplementation={SuggestionImplementation}
          suggestions={suggestions}
          showSuggestions={showSuggestions}
          highlightedSuggestionIndex={highlightedSuggestionIndex}
          handleHighlight={this.setHighlightedSuggestionIndex}
          handleSelect={suggestion => this.insertTag(tags, suggestion)}
          getSuggestionValue={getSuggestionValue}
          SuggestionListClassName={SuggestionListClassName}
          SuggestionClassName={SuggestionClassName}
        />
      </div>
    );
  }
}
