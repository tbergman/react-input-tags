import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import InputTags from '../src/index.js';
import { Example } from './example.jsx';
import './example.css';

storiesOf('ExampleTags', module)
  .addDecorator((story) => (
    <Example
      handleInsert={action('handleInsert')}
      handleRemove={action('handleRemove')}
      handleInputChange={action('handleInputChange')}
    />
  ))
  .add('blank', () => (
    <ExampleTags />
  ))
  .add('suggestions', () => (
    // pass in list of suggestions
    <ExampleTags />
  ))
