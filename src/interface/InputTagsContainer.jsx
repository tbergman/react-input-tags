import React from 'react';

import { InputTagsContainerDefault } from '../implementation/InputTagsContainerDefault.jsx';

export const InputTagsContainer = ({
  InputTagsContainerImplementation,
  InputTagsImplementation,
  InputImplementation,
  TagImplementation,
  SuggestionListImplementation,
  SuggestionImplementation,
  SuggestionsLoaderImplementation,
  tags,
  handleUpdateTags,
  handleDoneEditing,
  inputPlaceholder,
  inputTabIndex,
  suggestions,
  handleUpdateSuggestions,
  getSuggestionValue,
  suggestionsAreLoading,
  InputTagsClassName,
  InputClassName,
  TagClassName,
  SuggestionListClassName,
  SuggestionClassName,
  SuggestionsLoaderClassName,
}) =>
  <InputTagsContainerImplementation
    InputTagsImplementation={InputTagsImplementation}
    InputImplementation={InputImplementation}
    TagImplementation={TagImplementation}
    SuggestionListImplementation={SuggestionListImplementation}
    SuggestionImplementation={SuggestionImplementation}
    SuggestionsLoaderImplementation={SuggestionsLoaderImplementation}
    tags={tags}
    handleUpdateTags={handleUpdateTags}
    handleDoneEditing={handleDoneEditing}
    inputPlaceholder={inputPlaceholder}
    inputTabIndex={inputTabIndex}
    suggestions={suggestions}
    handleUpdateSuggestions={handleUpdateSuggestions}
    getSuggestionValue={getSuggestionValue}
    suggestionsAreLoading={suggestionsAreLoading}
    InputTagsClassName={InputTagsClassName}
    InputClassName={InputClassName}
    TagClassName={TagClassName}
    SuggestionListClassName={SuggestionListClassName}
    SuggestionClassName={SuggestionClassName}
    SuggestionsLoaderClassName={SuggestionsLoaderClassName}
  />;

InputTagsContainer.propTypes = {
  InputTagsContainerImplementation: React.PropTypes.func.isRequired,
  InputTagsImplementation: React.PropTypes.func,
  InputImplementation: React.PropTypes.func,
  TagImplementation: React.PropTypes.func,
  SuggestionListImplementation: React.PropTypes.func,
  SuggestionImplementation: React.PropTypes.func,
  SuggestionsLoaderImplementation: React.PropTypes.func,
  tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  handleUpdateTags: React.PropTypes.func.isRequired,
  handleDoneEditing: React.PropTypes.func,
  inputPlaceholder: React.PropTypes.string,
  inputTabIndex: React.PropTypes.number,
  suggestions: React.PropTypes.arrayOf(React.PropTypes.any),
  handleUpdateSuggestions: React.PropTypes.func,
  getSuggestionValue: React.PropTypes.func,
  suggestionsAreLoading: React.PropTypes.bool,
  InputTagsClassName: React.PropTypes.string,
  InputClassName: React.PropTypes.string,
  TagClassName: React.PropTypes.string,
  SuggestionListClassName: React.PropTypes.string,
  SuggestionClassName: React.PropTypes.string,
  SuggestionsLoaderClassName: React.PropTypes.string,
};

InputTagsContainer.defaultProps = {
  InputTagsContainerImplementation: InputTagsContainerDefault,
};
