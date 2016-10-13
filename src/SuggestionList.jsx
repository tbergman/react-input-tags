import React from 'react';

import { Suggestion } from './Suggestion.jsx';

export const SuggestionList = ({ suggestions, renderSuggestion, className }) =>
  <div className={className}>
    {suggestions.map((suggestion, index) =>
      <Suggestion
        key={index}
        value={suggestion}
        renderSuggestion={renderSuggestion}
      />
    )}
  </div>;

SuggestionList.propTypes = {
  suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  renderSuggestion: React.PropTypes.func.isRequired,
  className: React.PropTypes.string.isRequired,
};
