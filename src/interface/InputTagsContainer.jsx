import React from 'react';

import { InputTagsContainerDefault } from '../implementation/InputTagsContainerDefault.jsx';

export const InputTagsContainer = ({
  InputTagsContainerImplementation,
  InputTagsImplementation,
  InputImplementation,
  TagImplementation,
  SuggestionListImplementation,
  SuggestionImplementation,
  tags,
  handleUpdateTags,
  inputPlaceholder,
  suggestions,
  handleUpdateSuggestions,
  getSuggestionValue,
  InputTagsClassName,
  InputClassName,
  TagClassName,
  SuggestionListClassName,
  SuggestionClassName,
}) =>
  <InputTagsContainerImplementation
    InputTagsImplementation={InputTagsImplementation}
    InputImplementation={InputImplementation}
    TagImplementation={TagImplementation}
    SuggestionListImplementation={SuggestionListImplementation}
    SuggestionImplementation={SuggestionImplementation}
    tags={tags}
    handleUpdateTags={handleUpdateTags}
    inputPlaceholder={inputPlaceholder}
    suggestions={suggestions}
    handleUpdateSuggestions={handleUpdateSuggestions}
    getSuggestionValue={getSuggestionValue}
    InputTagsClassName={InputTagsClassName}
    InputClassName={InputClassName}
    TagClassName={TagClassName}
    SuggestionListClassName={SuggestionListClassName}
    SuggestionClassName={SuggestionClassName}
  />;

InputTagsContainer.propTypes = {
  InputTagsContainerImplementation: React.PropTypes.func.isRequired,
  InputTagsImplementation: React.PropTypes.func,
  InputImplementation: React.PropTypes.func,
  TagImplementation: React.PropTypes.func,
  SuggestionListImplementation: React.PropTypes.func,
  SuggestionImplementation: React.PropTypes.func,
  tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  handleUpdateTags: React.PropTypes.func.isRequired,
  inputPlaceholder: React.PropTypes.string,
  suggestions: React.PropTypes.arrayOf(React.PropTypes.any),
  handleUpdateSuggestions: React.PropTypes.func,
  getSuggestionValue: React.PropTypes.func,
  InputTagsClassName: React.PropTypes.string,
  InputClassName: React.PropTypes.string,
  TagClassName: React.PropTypes.string,
  SuggestionListClassName: React.PropTypes.string,
  SuggestionClassName: React.PropTypes.string,
};

InputTagsContainer.defaultProps = {
  InputTagsContainerImplementation: InputTagsContainerDefault,
};
