import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import InputTags from '../src/index';
import { Example } from './example.jsx';
import './example.css';
import { noop } from './util';
import { List } from '../src/List.jsx';

storiesOf('InputTags', module)
  .add('create token', () => {
    return (
      <InputTags
        tags={['insert another']}
        handleInsert={action('handleInsert')}
        handleEdit={noop}
        handleRemove={noop}
      />
    )
  })
  .add('edit token', () => {
    return (
      <InputTags
        tags={['edit me']}
        handleInsert={noop}
        handleEdit={action('handleEdit')}
        handleRemove={noop}
      />
    )
  })
  .add('delete token', () => {
    return (
      <InputTags
        tags={['delete me']}
        handleInsert={noop}
        handleEdit={noop}
        handleRemove={action('handleRemove')}
      />
    )
  });
  // TODO: show suggestions list when input value greater than zero

const items = [{ value: 'apple'}, { value: 'banana' }, { value: 'cherry' }];
storiesOf('List', module)
  .add('auto focus first item', () => (
    <List
      items={items}
    />
  ))
  .add('navigate items', () => (
    <List
      items={items}
    />
  ))
  .add('highlight item', () => (
    <List
      items={items}
    />
  ))
  .add('select item', () => (
    <List
      items={items}
    />
  ))
  .add('close list', () => (
    <List
      items={items}
    />
  ));

storiesOf('ExampleTags', module)
  .add('tags', () => (
    // TODO: disable suggestions
    <Example />
  ))
  .add('local suggestions', () => (
    // TODO: enable suggestions
    // enable local
    <Example />
  ))
  .add('fetching suggestions', () => (
    // TODO: enable suggestions
    // enable fetching asynchronously
    // show a loader
    <Example />
  ));
