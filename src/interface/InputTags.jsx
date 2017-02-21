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
};

InputTags.defaultProps = {
  InputTagsImplementation: InputTagsDefault,
};
