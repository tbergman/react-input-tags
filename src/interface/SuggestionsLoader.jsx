import React from 'react';

import { SuggestionsLoaderDefault } from '../implementation/SuggestionsLoaderDefault.jsx';

export const SuggestionsLoader = ({
  SuggestionsLoaderImplementation,
  suggestionsAreLoading,
  SuggestionsLoaderClassName,
}) =>
  <SuggestionsLoaderImplementation
    suggestionsAreLoading={suggestionsAreLoading}
    SuggestionsLoaderClassName={SuggestionsLoaderClassName}
  />;

SuggestionsLoader.propTypes = {
  SuggestionsLoaderImplementation: React.PropTypes.func.isRequired,
  suggestionsAreLoading: React.PropTypes.bool.isRequired,
  SuggestionsLoaderClassName: React.PropTypes.string,
};

SuggestionsLoader.defaultProps = {
  SuggestionsLoaderImplementation: SuggestionsLoaderDefault,
};
