import React from 'react';

import { Input } from './Input.jsx';
import { Tag } from './Tag.jsx';
import { SuggestionList } from './SuggestionList.jsx';

import {
  defaultInsertKeyCodes,
  defaultRemoveKeyCodes,
  DefaultRenderTag,
  defaultInputPlaceholder,
  defaultSuggestions,
  defaultRenderSuggestion,
  defaultHandleInputChange,
  defaultGetSuggestionValue,
  defaultInputTagsClassName,
  defaultTagsInputClassName,
  defaultSuggestionListClassName,
} from './default.jsx';

export class InputTags extends React.Component {
  static propTypes = {
    tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleInsert: React.PropTypes.func.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    insertKeyCodes: React.PropTypes.object,
    removeKeyCodes: React.PropTypes.object,
    RenderTag: React.PropTypes.element,
    // renderTag: React.PropTypes.func,
    inputPlaceholder: React.PropTypes.string,
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any),
    renderSuggestion: React.PropTypes.func,
    getSuggestionValue: React.PropTypes.func,
    handleInputChange: React.PropTypes.func,
    // TODO: better naming? better solution with event delegation
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    className: React.PropTypes.string,
    tagsInputClassName: React.PropTypes.string,
    suggestionListClassName: React.PropTypes.string,
  };

  static defaultProps = {
    insertKeyCodes: defaultInsertKeyCodes,
    removeKeyCodes: defaultRemoveKeyCodes,
    RenderTag: DefaultRenderTag,
    inputPlaceholder: defaultInputPlaceholder,
    suggestions: defaultSuggestions,
    renderSuggestion: defaultRenderSuggestion,
    getSuggestionValue: defaultGetSuggestionValue,
    handleInputChange: defaultHandleInputChange,
    className: defaultInputTagsClassName,
    tagsInputClassName: defaultTagsInputClassName,
    suggestionListClassName: defaultSuggestionListClassName,
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
      RenderTag,
      inputPlaceholder,
      suggestions,
      renderSuggestion,
      getSuggestionValue,
      className,
      tagsInputClassName,
      suggestionListClassName,
    } = this.props;
    const { inputValue } = this.state;
    const suggestionsElement = inputValue.length > 0 ?
    (
      <SuggestionList
        className={suggestionListClassName}
        tags={tags}
        suggestions={suggestions}
        handleInsert={this.insertTag}
        renderSuggestion={renderSuggestion}
        getSuggestionValue={getSuggestionValue}
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
              RenderTag={RenderTag}
            />
          )}
          <Input
            // TODO: should this be a textarea?
            value={inputValue}
            onChange={this.handleOnChange}
            onFocus={this.props.onFocus}
            onBlur={(event) => {
              this.handleOnBlur(event);
              if (this.props.onBlur) {
                this.props.onBlur();
              }
            }}
            onKeyDown={this.handleOnKeyDown}
            placeholder={inputPlaceholder}
          />
        </div>
        {suggestionsElement}
      </div>
    );
  }
}
