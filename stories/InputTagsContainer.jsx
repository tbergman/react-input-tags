import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { InputTagsContainer } from '../src/index';

import { noop } from '../test/util';
import { items, item, emptyString } from '../test/mock';

storiesOf('InputTagsContainer', module)
  .add('show tags by rendering', () => (
    <InputTagsContainer
      tags={items}
      handleUpdateTags={noop}
      inputPlaceholder={emptyString}
      suggestions={[]}
      handleUpdateSuggestions={noop}
    />
  ))
  .add('update tags by creating, editing and deleting', () => (
    <InputTagsContainer
      tags={[item]}
      handleUpdateTags={action('handleUpdateTags')}
      inputPlaceholder={emptyString}
      suggestions={[]}
      handleUpdateSuggestions={noop}
    />
  ))
  .add('show placeholder by rendering', () => (
    <InputTagsContainer
      tags={[]}
      handleUpdateTags={noop}
      inputPlaceholder={'Add Tag'}
      suggestions={[]}
      handleUpdateSuggestions={noop}
    />
  ))
  .add('update suggestions by typing in input', () => (
    <InputTagsContainer
      tags={[]}
      handleUpdateTags={noop}
      inputPlaceholder={emptyString}
      suggestions={items}
      handleUpdateSuggestions={action('handleUpdateSuggestions')}
    />
  ))
  ;
