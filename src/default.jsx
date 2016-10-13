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

export const defaultTagsInputClassName = 'react-input-tags-tagsinput';

/* Input */
export const defaultInputPlaceholder = '';

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

export const defaultRenderSuggestion = ({ value }) =>
  <div
    className={defaultSuggestionClassName}
  >
    {value}
  </div>;

defaultRenderSuggestion.propTypes = {
  value: React.PropTypes.string.isRequired,
};
