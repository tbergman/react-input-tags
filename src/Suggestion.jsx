import React from 'react';

export const Suggestion = ({ value, renderSuggestion }) =>
  renderSuggestion({ value });

Suggestion.propTypes = {
  value: React.PropTypes.string.isRequired,
  renderSuggestion: React.PropTypes.func.isRequired,
};
