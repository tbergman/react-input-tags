import React from 'react';

/* TODO: split up these defaults into a defaul folder with components */

/* InputTags */
export const defaultInsertKeyCodes = {
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

/* SuggestionList */
// TODO: remove this
export const defaultSuggestionListClassName = 'react-input-tags-suggestionlist';

export const defaultGetSuggestionValue = suggestion => suggestion;

/* Suggestion */
export const defaultSuggestionClassName = 'react-input-tags-suggestion';

/* eslint-disable jsx-a11y/no-static-element-interactions */
export const defaultRenderSuggestion = ({ value, handleInsert }) =>
  <div
    className={defaultSuggestionClassName}
    onClick={handleInsert}
    onMouseDown={event => event.preventDefault()}
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
