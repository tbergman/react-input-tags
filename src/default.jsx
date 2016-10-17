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

export const defaultGetSuggestionValue = suggestion => suggestion;

/* Suggestion */
export const defaultSuggestionClassName = 'react-input-tags-suggestion';

export const defaultRenderSuggestion = ({ value, handleInsert }) =>
  <div
    className={defaultSuggestionClassName}
    onClick={handleInsert}
    onMouseDown={() => { console.log('suggestion mouse down'); }}
    // cancels the event since clicking a suggestion can lead to undesired behavior
    // for example, clicking on a suggestion after typing in the input causes an onblur event
    // onMouseDown={event => event.preventDefault()}
  >
    {value}
  </div>;

defaultRenderSuggestion.propTypes = {
  value: React.PropTypes.string.isRequired,
  handleInsert: React.PropTypes.func.isRequired,
};
