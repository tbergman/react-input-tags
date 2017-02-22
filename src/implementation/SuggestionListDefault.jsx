import React from 'react';

import { Suggestion } from '../interface/Suggestion.jsx';
import { defaultClassNamePrefix } from './util';

export const SuggestionListClassNameDefault = `${defaultClassNamePrefix}-suggestion-list`;

/* eslint-disable react/prefer-stateless-function */
export class SuggestionListDefault extends React.Component {
  static propTypes = {
    SuggestionImplementation: React.PropTypes.func,
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    highlightedIndex: React.PropTypes.number.isRequired,
    handleHighlight: React.PropTypes.func.isRequired,
    handleSelect: React.PropTypes.func.isRequired,
    getSuggestionValue: React.PropTypes.func.isRequired,
    SuggestionListClassName: React.PropTypes.string,
    SuggestionClassName: React.PropTypes.string,
  }

  render() {
    const {
      SuggestionImplementation,
      suggestions,
      highlightedIndex,
      getSuggestionValue,
      handleHighlight,
      handleSelect,
      SuggestionListClassName,
      SuggestionClassName,
    } = this.props;
    return (
      <ul className={SuggestionListClassName}>
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
              SuggestionClassName={SuggestionClassName}
            />
          );
        })}
      </ul>
    );
  }
}
