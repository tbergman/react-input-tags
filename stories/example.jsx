import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { TagsExample } from '../src/example/TagsExample.jsx';
import { LocalSuggestionsExample } from '../src/example/LocalSuggestionsExample.jsx';

storiesOf('Example', module)
  .add('no suggestions', () => (
    <TagsExample />
  ))
  .add('local suggestions', () => (
    <LocalSuggestionsExample />
  ))
  .add('remote suggestions', () => (
    // TODO: RemoteSuggestionsExample
    <LocalSuggestionsExample />
  ));
