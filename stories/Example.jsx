import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { TagsExample } from '../src/example/TagsExample.jsx';
import { LocalSuggestionsExample } from '../src/example/LocalSuggestionsExample.jsx';
import { CustomTagExample } from '../src/example/CustomTagExample.jsx';
import { CustomSuggestionExample } from '../src/example/CustomSuggestionExample.jsx';

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
  })
  .add('custom tag', () => {
    return (
      <CustomTagExample />
    )
  })
  .add('custom suggestion', () => {
    return (
      <CustomSuggestionExample />
    )
  });
