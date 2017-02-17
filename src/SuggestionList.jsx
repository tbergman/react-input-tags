import React from 'react';

// TODO: remove

import { Suggestion } from './Suggestion.jsx';

export const SuggestionList = ({
  className,
  tags,
  suggestions,
  handleInsert,
  renderSuggestion,
  getSuggestionValue,
}) =>
  <div className={className}>
    {suggestions.map((suggestion, index) =>
      <Suggestion
        key={index}
        value={suggestion}
        handleInsert={() => handleInsert(tags, getSuggestionValue(suggestion))}
        renderSuggestion={renderSuggestion}
      />
    )}
  </div>;

SuggestionList.propTypes = {
  tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  handleInsert: React.PropTypes.func.isRequired,
  renderSuggestion: React.PropTypes.func.isRequired,
  getSuggestionValue: React.PropTypes.func.isRequired,
  className: React.PropTypes.string.isRequired,
};
