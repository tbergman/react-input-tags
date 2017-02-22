import React from 'react';

import { InputTagsDefault } from '../implementation/InputTagsDefault.jsx';

export const InputTags = ({
  InputTagsImplementation,
  InputImplementation,
  TagImplementation,
  SuggestionListImplementation,
  SuggestionImplementation,
  tags,
  handleInsert,
  handleEdit,
  handleRemove,
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
  <InputTagsImplementation
    InputImplementation={InputImplementation}
    TagImplementation={TagImplementation}
    SuggestionListImplementation={SuggestionListImplementation}
    SuggestionImplementation={SuggestionImplementation}
    tags={tags}
    handleInsert={handleInsert}
    handleEdit={handleEdit}
    handleRemove={handleRemove}
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

InputTags.propTypes = {
  InputTagsImplementation: React.PropTypes.func.isRequired,
  InputImplementation: React.PropTypes.func,
  TagImplementation: React.PropTypes.func,
  SuggestionListImplementation: React.PropTypes.func,
  SuggestionImplementation: React.PropTypes.func,
  tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  handleInsert: React.PropTypes.func.isRequired,
  handleEdit: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
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

InputTags.defaultProps = {
  InputTagsImplementation: InputTagsDefault,
};
