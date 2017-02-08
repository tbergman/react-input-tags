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

storiesOf('ExampleTags', module)
  .add('blank', () => (
    <Example
      handleInsert={action('handleInsert')}
      handleRemove={action('handleRemove')}
      handleInputChange={action('handleInputChange')}
    />
  ))
  .add('with onFocus and onBlur', () => (
    <Example
      handleInsert={action('handleInsert')}
      handleRemove={action('handleRemove')}
      handleInputChange={action('handleInputChange')}
      onFocus={() => {
        console.log('onFocus');
      }}
      onBlur={() => {
        console.log('onBlur');
      }}
    />
  ));
