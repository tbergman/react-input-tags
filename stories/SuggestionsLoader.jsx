import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { SuggestionsLoader } from '../src/interface/SuggestionsLoader.jsx';

storiesOf('SuggestionsLoader', module)
  .add('hide loader by rendering', () => {
    return (
      <SuggestionsLoader
        suggestionsAreLoading={false}
      />
    )
  })
  .add('show loader by rendering', () => {
    return (
      <SuggestionsLoader
        suggestionsAreLoading={true}
      />
    )
  });
