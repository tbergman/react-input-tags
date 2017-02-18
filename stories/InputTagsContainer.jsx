import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { InputTagsContainer } from '../src/index';

import { noop } from '../test/util';
import { items, emptyString } from '../test/mock';

storiesOf('InputTagsContainer', module)
  .add('tags', () => (
    <InputTagsContainer />
  ))
  .add('local suggestions', () => (
    <InputTagsContainer />
  ))
  .add('remote suggestions', () => (
    <InputTagsContainer />
  ));
