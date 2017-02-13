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

/* Tag */
export const defaultTagClassName = 'react-input-tags-tag';

export class DefaultRenderTag extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    isEditing: React.PropTypes.bool.isRequired,
    setIsEditing: React.PropTypes.func.isRequired,
  }

  render() {
    const { value, handleEdit, handleRemove, isEditing, setIsEditing } = this.props;
    if (isEditing) {
      return (
        <textarea
          ref={(textarea) => { this.tagTextArea = textarea; }}
          rows={1}
          onFocus={() => { this.tagTextArea.select(); }}
          onBlur={() => setIsEditing(false)}
          onChange={(event) => {
            const newValue = event.target.value;
            if (newValue.length > 0) {
              handleEdit(newValue);
            } else {
              handleRemove();
            }
          }}
          value={value}
        />
      );
    }
    return (
      <span
        className={defaultTagClassName}
        onDoubleClick={() => setIsEditing(true)}
      >
        <span>
          {value}
        </span>
        <button
          onClick={handleRemove}
          tabIndex="-1"
        >
          {'x'}
        </button>
      </span>
    );
  }
}

/*
export const defaultRenderTag = ({ value, handleEdit, handleRemove, isEditing, setIsEditing }) => {
  if (isEditing) {
    return (
      <textarea
        ref={(textarea) => { this.tagTextArea = textarea; }}
        rows={1}
        onFocus={() => { this.tagTextArea.select(); }}
        onBlur={() => setIsEditing(false)}
        onChange={(event) => {
          const newValue = event.target.value;
          if (newValue.length > 0) {
            handleEdit(newValue);
          } else {
            handleRemove();
          }
        }}
        value={value}
      />
    );
  }
  return (
    <span
      className={defaultTagClassName}
      onDoubleClick={() => setIsEditing(true)}
    >
      <span>
        {value}
      </span>
      <button
        onClick={handleRemove}
      >
        {'x'}
      </button>
    </span>
  );
};
*/

/*
defaultRenderTag.propTypes = {
  value: React.PropTypes.string.isRequired,
  handleEdit: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
  isEditing: React.PropTypes.bool.isRequired,
  setIsEditing: React.PropTypes.func.isRequired,
};
*/

/* SuggestionList */
// TODO: loader for async suggestions
// TODO: keyboard navigation for selecting suggestion
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

/* List */
export const defaultNextKeyCodes = {
  40: 'down',
};

export const defaultPreviousKeyCodes = {
  38: 'up',
};

export const defaultSelectKeyCodes = {
  13: 'enter',
  9: 'tab',
  188: 'comma',
};

export const defaultCloseKeyCodes = {
  27: 'escape',
};
