import React from 'react';

import { SuggestionDefault } from '../implementation/SuggestionDefault.jsx';

export const Suggestion = ({
  SuggestionImplementation,
  value,
  isHighlighted,
  handleHighlight,
  handleSelect,
  SuggestionClassName,
}) =>
  <SuggestionImplementation
    value={value}
    isHighlighted={isHighlighted}
    handleHighlight={handleHighlight}
    handleSelect={handleSelect}
    SuggestionClassName={SuggestionClassName}
  />;

Suggestion.propTypes = {
  SuggestionImplementation: React.PropTypes.func.isRequired,
  value: React.PropTypes.any.isRequired,
  isHighlighted: React.PropTypes.bool.isRequired,
  handleHighlight: React.PropTypes.func.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
  SuggestionClassName: React.PropTypes.string,
};

Suggestion.defaultProps = {
  SuggestionImplementation: SuggestionDefault,
};
