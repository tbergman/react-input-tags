import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import InputTags from '../src/index';
import { Example } from './example.jsx';
import './example.css';

storiesOf('ExampleTags', module)
  // .add('remove item by deleting all text in edit mode', () => {
  .add('tags', () => (
    <Example />
  ))
  .add('local suggestions', () => (
    // enable local
    <Example />
  ))
  .add('hide suggestions list when escape is pressed', () => (
    <Example />
  ))
  .add('fetching suggestions', () => (
    // enable fetching asynchronously
    // show a loader
    <Example />
  ));
