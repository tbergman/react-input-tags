import React from 'react';

/* InputTags */
export const defaultInsertKeyCodes = {
  13: 'enter',
  9: 'tab',
  188: 'comma',
};

export const defaultRemoveKeyCodes = {
  8: 'backspace / delete',
};

export const defaultSuggestions = [];

export const defaultHandleInputChange = () => {};

export const defaultInputTagsClassName = 'react-input-tags';

/* Input */
export const defaultInputPlaceholder = '';

/* TagList */
export const defaultTagListClassName = 'react-input-tags-taglist';

/* Tag */
export const defaultTagClassName = 'react-input-tags-tag';

export const defaultRenderTag = ({ value, handleRemove }) =>
  <span
    className={defaultTagClassName}
  >
    <span>
      {value}
    </span>
    <button
      type={'button'}
      onClick={handleRemove}
    >
      {'x'}
    </button>
  </span>;

defaultRenderTag.propTypes = {
  value: React.PropTypes.string.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
};

/* SuggestionList */
export const defaultSuggestionListClassName = 'react-input-tags-suggestionlist';

/* Suggestion */
export const defaultSuggestionClassName = 'react-input-tags-suggestion';

// TODO: add onClick handler that adds the value as a tag
export const defaultRenderSuggestion = ({ value }) =>
  <span
    className={defaultSuggestionClassName}
  >
    {value}
  </span>;

defaultRenderSuggestion.propTypes = {
  value: React.PropTypes.string.isRequired,
};
