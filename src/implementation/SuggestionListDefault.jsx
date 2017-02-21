import React from 'react';

import { Suggestion } from '../interface/Suggestion.jsx';

/* eslint-disable react/prefer-stateless-function */
export class SuggestionListDefault extends React.Component {
  static propTypes = {
    SuggestionImplementation: React.PropTypes.func,
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    highlightedIndex: React.PropTypes.number.isRequired,
    handleHighlight: React.PropTypes.func.isRequired,
    handleSelect: React.PropTypes.func.isRequired,
    getSuggestionValue: React.PropTypes.func.isRequired,
  }

  render() {
    const {
      SuggestionImplementation,
      suggestions,
      highlightedIndex,
      getSuggestionValue,
      handleHighlight,
      handleSelect,
    } = this.props;
    return (
      <ul>
        {suggestions.map((suggestion, index) => {
          const isHighlighted = highlightedIndex === index;
          return (
            <Suggestion
              SuggestionImplementation={SuggestionImplementation}
              key={index}
              value={suggestion}
              isHighlighted={isHighlighted}
              handleHighlight={() => handleHighlight(index)}
              handleSelect={() => handleSelect(getSuggestionValue(suggestion))}
            />
          );
        })}
      </ul>
    );
  }
}
