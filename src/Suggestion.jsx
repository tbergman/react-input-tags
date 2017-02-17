import React from 'react';

// TODO: remove

export const Suggestion = ({ value, handleInsert, renderSuggestion }) =>
  renderSuggestion({ value, handleInsert });

Suggestion.propTypes = {
  value: React.PropTypes.any.isRequired,
  handleInsert: React.PropTypes.func.isRequired,
  renderSuggestion: React.PropTypes.func.isRequired,
};
