import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import InputTags from '../src/index';
import { Example } from './example.jsx';
import './example.css';

// TODO: import stories from files representing other files
storiesOf('ExampleTags', module)
  // .add('remove item by deleting all text in edit mode', () => {
  .add('tags', () => (
    // TODO: disable suggestions
    <Example />
  ))
  .add('local suggestions', () => (
    // TODO: enable suggestions
    // enable local
    <Example />
  ))
  .add('hide suggestions list when escape is pressed', () => (
    <Example />
  ))
  .add('fetching suggestions', () => (
    // TODO: enable suggestions
    // enable fetching asynchronously
    // show a loader
    <Example />
  ));
