import React from 'react';

import { SuggestionDefault } from '../implementation/SuggestionDefault.jsx';

export const Suggestion = ({
  SuggestionImplementation,
  value,
  isHighlighted,
  handleHighlight,
  handleSelect,
}) =>
  <SuggestionImplementation
    value={value}
    isHighlighted={isHighlighted}
    handleHighlight={handleHighlight}
    handleSelect={handleSelect}
  />;

Suggestion.propTypes = {
  SuggestionImplementation: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  isHighlighted: React.PropTypes.bool.isRequired,
  handleHighlight: React.PropTypes.func.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
};

Suggestion.defaultProps = {
  SuggestionImplementation: SuggestionDefault,
};
