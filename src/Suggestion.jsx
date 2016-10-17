import React from 'react';

// TODO: add classname to suggestion, but not controlling the rendering
export const Suggestion = ({ value, handleInsert, renderSuggestion }) =>
  <div
    onMouseDown={event => event.preventDefault()}
  >
    {renderSuggestion({ value, handleInsert })}
  </div>;

Suggestion.propTypes = {
  value: React.PropTypes.any.isRequired,
  handleInsert: React.PropTypes.func.isRequired,
  renderSuggestion: React.PropTypes.func.isRequired,
};
