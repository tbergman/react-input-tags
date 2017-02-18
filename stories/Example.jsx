import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { TagsExample } from '../src/example/TagsExample.jsx';
import { LocalSuggestionsExample } from '../src/example/LocalSuggestionsExample.jsx';

storiesOf('Example', module)
  .add('no suggestions', () => {
    return (
      <TagsExample />
    )
  })
  .add('local suggestions', () => {
    return (
      <LocalSuggestionsExample />
    )
  })
  .add('remote suggestions', () => {
    return (
      <div>{'TODO'}</div>
    )
  });
