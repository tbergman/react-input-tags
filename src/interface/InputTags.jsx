import React from 'react';

import { InputTagsDefault } from '../implementation/InputTagsDefault.jsx';

export const InputTags = ({
  InputTagsImplementation,
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
