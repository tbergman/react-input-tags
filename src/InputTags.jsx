import React from 'react';

import { Input } from './Input.jsx';
import { Tag } from './Tag.jsx';
import { SuggestionList } from './SuggestionList.jsx';

import {
  defaultInsertKeyCodes,
  defaultRemoveKeyCodes,
  defaultRenderTag,
  defaultInputPlaceholder,
  defaultSuggestions,
  defaultRenderSuggestion,
  defaultHandleInputChange,
  defaultInputTagsClassName,
  defaultTagsInputClassName,
  defaultSuggestionListClassName,
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
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any),
    renderSuggestion: React.PropTypes.func,
    handleInputChange: React.PropTypes.func,
    className: React.PropTypes.string,
    tagsInputClassName: React.PropTypes.string,
    suggestionListClassName: React.PropTypes.string,
  };

  static defaultProps = {
    insertKeyCodes: defaultInsertKeyCodes,
    removeKeyCodes: defaultRemoveKeyCodes,
    renderTag: defaultRenderTag,
    inputPlaceholder: defaultInputPlaceholder,
    suggestions: defaultSuggestions,
    renderSuggestion: defaultRenderSuggestion,
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
      renderTag,
      inputPlaceholder,
      suggestions,
      renderSuggestion,
      className,
      tagsInputClassName,
      suggestionListClassName,
    } = this.props;
    const { inputValue } = this.state;
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
              handleRemove={() => this.removeTag(tags, index)}
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
        <SuggestionList
          className={suggestionListClassName}
          suggestions={suggestions}
          renderSuggestion={renderSuggestion}
        />
      </div>
    );
  }
}
