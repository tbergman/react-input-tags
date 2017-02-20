import React from 'react';

import { SuggestionListDefault } from '../implementation/SuggestionListDefault.jsx';

export const SuggestionList = ({
  SuggestionListImplementation,
  suggestions,
  highlightedIndex,
  getSuggestionValue,
  handleSelect,
  handleHighlight,
}) =>
  <SuggestionListImplementation
    suggestions={suggestions}
    highlightedIndex={highlightedIndex}
    getSuggestionValue={getSuggestionValue}
    handleHighlight={handleHighlight}
    handleSelect={handleSelect}
  />;

SuggestionList.propTypes = {
  SuggestionListImplementation: React.PropTypes.func.isRequired,
  suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  highlightedIndex: React.PropTypes.number.isRequired,
  getSuggestionValue: React.PropTypes.func.isRequired,
  handleHighlight: React.PropTypes.func.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
};

SuggestionList.defaultProps = {
  SuggestionListImplementation: SuggestionListDefault,
};
