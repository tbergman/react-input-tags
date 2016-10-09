import React from 'react';

export const defaultInsertKeyCodes = {
  13: 'enter',
  9: 'tab',
  188: 'comma',
};

export const defaultRemoveKeyCodes = {
  8: 'backspace / delete',
};

export const defaultInputPlaceholder = '';

const defaultTagStyle = {
  display: 'flex',
};

export const defaultRenderTag = ({ value, handleRemove }) =>
  <div style={defaultTagStyle}>
    <span>
      {value}
    </span>
    <button
      onClick={handleRemove}
    >
      {'X'}
    </button>
  </div>;

defaultRenderTag.propTypes = {
  value: React.PropTypes.string.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
};

export const defaultInputTagsStyle = {
  display: 'flex',
};

export const defaultTagListStyle = {
  display: 'flex',
};
