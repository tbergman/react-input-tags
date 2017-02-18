import React from 'react';

import { InputTagsContainerDefault } from '../implementation/InputTagsContainerDefault.jsx';

export const InputTagsContainer = ({
  InputTagsContainerImplementation,
  tags,
  onChange,
  inputPlaceholder,
  suggestions,
  filter,
}) =>
  <InputTagsContainerImplementation
    tags={tags}
    onChange={onChange}
    inputPlaceholder={inputPlaceholder}
    suggestions={suggestions}
    filter={filter}
  />;

InputTagsContainer.propTypes = {
  InputTagsContainerImplementation: React.PropTypes.func.isRequired,
  tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  onChange: React.PropTypes.func.isRequired,
  inputPlaceholder: React.PropTypes.string,
  suggestions: React.PropTypes.arrayOf(React.PropTypes.any),
  filter: React.PropTypes.func,
};

InputTagsContainer.defaultProps = {
  InputTagsContainerImplementation: InputTagsContainerDefault,
};
