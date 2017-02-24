import React from 'react';

import { defaultClassNamePrefix } from './util';

export const suggestionsAreLoadingDefault = false;

export const SuggestionsLoaderClassNameDefault = `${defaultClassNamePrefix}-suggestions-loader`;

/* eslint-disable react/prefer-stateless-function */
export class SuggestionsLoaderDefault extends React.Component {
  static propTypes = {
    suggestionsAreLoading: React.PropTypes.bool,
    SuggestionsLoaderClassName: React.PropTypes.string,
  }

  static defaultProps = {
    suggestionsAreLoading: suggestionsAreLoadingDefault,
    SuggestionsLoaderClassName: SuggestionsLoaderClassNameDefault,
  }

  render() {
    const { suggestionsAreLoading, SuggestionsLoaderClassName } = this.props;
    if (!suggestionsAreLoading) return null;
    return (
      <div
        className={SuggestionsLoaderClassName}
      />
    );
  }
}
