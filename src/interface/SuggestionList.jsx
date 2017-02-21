import React from 'react';

import { SuggestionListDefault } from '../implementation/SuggestionListDefault.jsx';

export const SuggestionList = ({
  SuggestionListImplementation,
  SuggestionImplementation,
  suggestions,
  highlightedIndex,
  getSuggestionValue,
  handleSelect,
  handleHighlight,
}) =>
  <SuggestionListImplementation
    SuggestionImplementation={SuggestionImplementation}
    suggestions={suggestions}
    highlightedIndex={highlightedIndex}
    handleHighlight={handleHighlight}
    handleSelect={handleSelect}
    getSuggestionValue={getSuggestionValue}
  />;

SuggestionList.propTypes = {
  SuggestionListImplementation: React.PropTypes.func.isRequired,
  SuggestionImplementation: React.PropTypes.func,
  suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  highlightedIndex: React.PropTypes.number.isRequired,
  handleHighlight: React.PropTypes.func.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
  getSuggestionValue: React.PropTypes.func.isRequired,
};

SuggestionList.defaultProps = {
  SuggestionListImplementation: SuggestionListDefault,
};
