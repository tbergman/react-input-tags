import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import InputTags from '../src/index';
import { Example } from './example.jsx';
import './example.css';
import { handleInsert, handleRemove } from 'util';

storiesOf('InputTags', module)
  .add('create token manually', () => {
    return (
      <InputTags
        tags={[]}
        handleInsert={action('handleInsert')}
        handleRemove={action('handleRemove')}
      />
    )
  });

/*
storiesOf('ExampleTags', module)
  .addDecorator(() => (
    <Example
      handleInsert={action('handleInsert')}
      handleRemove={action('handleRemove')}
      handleInputChange={action('handleInputChange')}
    />
  ))
  .add('blank', () => (
    <ExampleTags />
  ))
*/
