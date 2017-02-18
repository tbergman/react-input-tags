import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Example } from '../src/implementation/Example.jsx';

import { items } from '../test/mock';

storiesOf('Example', module)
  .add('no suggestions', () => (
    <Example />
  ))
  .add('local suggestions', () => (
    <Example />
  ))
  .add('remote suggestions', () => (
    <Example />
  ));
