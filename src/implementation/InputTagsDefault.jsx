import React from 'react';

import { Input } from '../interface/Input.jsx';
import { Tag } from '../interface/Tag.jsx';
import { SuggestionList } from '../interface/SuggestionList.jsx';
import { SuggestionsLoader } from '../interface/SuggestionsLoader.jsx';
import { focusElement, selectElement, defaultClassNamePrefix } from './util';

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
  suggestions,
  highlightedSuggestionIndex,
  handleHighlight,
  handleSelect,
  getSuggestionValue,
  ...otherProps
}) => {
  if (!showSuggestions) return null;
  return (
    <SuggestionList
      suggestions={suggestions}
      highlightedSuggestionIndex={highlightedSuggestionIndex}
      handleHighlight={handleHighlight}
      handleSelect={handleSelect}
      getSuggestionValue={getSuggestionValue}
      {...otherProps}
    />
  );
};

SuggestionListContainer.propTypes = {
  showSuggestions: React.PropTypes.bool.isRequired,
  suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  highlightedSuggestionIndex: React.PropTypes.number.isRequired,
  handleHighlight: React.PropTypes.func.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
  getSuggestionValue: React.PropTypes.func.isRequired,
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

export const MIRROR_STYLES = [
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'wordSpacing',
];

export const INPUT_WIDTH_EXTRA = 2;

export class InputTagsDefault extends React.Component {
  static propTypes = {
    tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleInsert: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any),
    handleUpdateSuggestions: React.PropTypes.func,
    getSuggestionValue: React.PropTypes.func,
    InputTagsClassName: React.PropTypes.string,
    focusElement: React.PropTypes.func.isRequired,
    selectElement: React.PropTypes.func.isRequired,
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
    focusElement,
    selectElement,
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
    inputIndex: 0,
    inputIsEditing: false,
    showSuggestions: false,
    highlightedSuggestionIndex: 0,
  }

  insertTag = (tags, insertTagIndex, inputValue) => {
    const { handleInsert } = this.props;
    this.setState({
      inputValue: '',
      inputIndex: tags.length + 1,
      inputIsEditing: false,
      showSuggestions: false,
    });
    handleInsert(tags, insertTagIndex, inputValue);
  }

  editTag = (tags, editTagIndex) => {
    this.removeTag(tags, editTagIndex);
    const editValue = tags[editTagIndex];
    this.setState({ inputValue: editValue, inputIndex: editTagIndex, inputIsEditing: true });
  }

  removeTag = (tags, removeTagIndex) => {
    const { handleRemove } = this.props;
    this.setState({ inputIndex: tags.length - 1 });
    handleRemove(tags, removeTagIndex);
  }

  handleInputOnChange = (event) => {
    const { handleUpdateSuggestions } = this.props;
    const inputValue = event.target.value;
    const showSuggestions = inputValue.length > 0;
    this.setState({ inputValue, showSuggestions });
    handleUpdateSuggestions(inputValue);
  }

  focusOnInput = () => {
    const element = this.inputNode;
    this.props.focusElement(element);
    this.props.selectElement(element);
  }

  mirrorInputStyle = () => {
    const inputNode = this.inputNode;
    const mirrorNode = this.mirrorNode;
    if (!inputNode || !mirrorNode) return;
    const inputStyle = window.getComputedStyle(inputNode);
    MIRROR_STYLES.forEach((mStyle) => {
      mirrorNode.style[mStyle] = inputStyle[mStyle];
    });
  }

  updateInputWidth = () => {
    const inputNode = this.inputNode;
    const mirrorNode = this.mirrorNode;
    if (!inputNode || !mirrorNode) return;
    let newInputWidth = mirrorNode.offsetWidth + INPUT_WIDTH_EXTRA;
    if (newInputWidth > 195) newInputWidth = 195;
    // TODO: inputMaxWidth prop
    inputNode.style.width = `${newInputWidth}px`;
  }

  handleInputOnBlur = () => {
    const { inputValue, inputIndex } = this.state;
    const { tags } = this.props;

    if (inputValue.length > 0) {
      this.insertTag(tags, inputIndex, inputValue);
    }
  }

  handleInputOnKeyDown = (event) => {
    const { keyCode } = event;
    const { inputValue, inputIndex, showSuggestions, highlightedSuggestionIndex } = this.state;
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
        this.insertTag(tags, inputIndex, getSuggestionValue(suggestions[highlightedSuggestionIndex]));
      } else {
        this.insertTag(tags, inputIndex, inputValue);
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
      suggestions,
      getSuggestionValue,
      InputTagsClassName,
      ...otherProps
    } = this.props;
    const {
      inputValue,
      inputIndex,
      inputIsEditing,
      showSuggestions,
      highlightedSuggestionIndex,
    } = this.state;
    // TODO: Tags+Input Component
    return (
      <div
        className={InputTagsClassName}
      >
        <div>
          {tags.slice(0, inputIndex).map((tag, index) =>
            <Tag
              key={index}
              value={tag}
              handleEdit={() => this.editTag(tags, index)}
              handleRemove={() => this.removeTag(tags, index)}
              {...otherProps}
            />
          )}
          <Input
            value={inputValue}
            handleOnChange={this.handleInputOnChange}
            handleOnBlur={this.handleInputOnBlur}
            handleOnKeyDown={this.handleInputOnKeyDown}
            inputRef={(node) => { this.inputNode = node; }}
            mirrorRef={(node) => { this.mirrorNode = node; }}
            mirrorInputStyle={this.mirrorInputStyle}
            updateInputWidth={this.updateInputWidth}
            isEditing={inputIsEditing}
            handleEdit={this.focusOnInput}
            {...otherProps}
          />
          {tags.slice(inputIndex).map((tag, index) =>
            <Tag
              key={index}
              value={tag}
              handleEdit={() => this.editTag(tags, index)}
              handleRemove={() => this.removeTag(tags, index)}
              {...otherProps}
            />
          )}
          <SuggestionsLoader
            {...otherProps}
          />
        </div>
        <SuggestionListContainer
          showSuggestions={showSuggestions}
          suggestions={suggestions}
          highlightedSuggestionIndex={highlightedSuggestionIndex}
          handleHighlight={this.setHighlightedSuggestionIndex}
          handleSelect={suggestion => {
            console.log(suggestion);
            this.insertTag(tags, inputIndex, suggestion);
          }}
          getSuggestionValue={getSuggestionValue}
          {...otherProps}
        />
      </div>
    );
  }
}
