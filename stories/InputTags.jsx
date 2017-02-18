import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { InputTags } from '../src/interface/InputTags.jsx';

import { noop } from '../test/util';
import { items, emptyString } from '../test/mock';

storiesOf('InputTags', module)
  .add('create token by typing non empty string and pressing tab', () => {
    return (
      <InputTags
        tags={['insert another']}
        handleInsert={action('handleInsert')}
        handleEdit={noop}
        handleRemove={noop}
        inputPlaceholder={emptyString}
        suggestions={[]}
        handleUpdateSuggestions={noop}
      />
    )
  })
  .add('create token by typing non empty string and pressing comma', () => {
    return (
      <InputTags
        tags={['insert another']}
        handleInsert={action('handleInsert')}
        handleEdit={noop}
        handleRemove={noop}
        inputPlaceholder={emptyString}
        suggestions={[]}
        handleUpdateSuggestions={noop}
      />
    )
  })
  .add('create token by typing non empty string and pressing enter', () => {
    return (
      <InputTags
        tags={['insert another']}
        handleInsert={action('handleInsert')}
        handleEdit={noop}
        handleRemove={noop}
        inputPlaceholder={emptyString}
        suggestions={[]}
        handleUpdateSuggestions={noop}
      />
    )
  })
  .add('edit token by double clicking on tag and typing', () => {
    return (
      <InputTags
        tags={['edit me']}
        handleInsert={noop}
        handleEdit={action('handleEdit')}
        handleRemove={noop}
        inputPlaceholder={emptyString}
        suggestions={[]}
        handleUpdateSuggestions={noop}
      />
    )
  })
  .add('delete token by clicking delete button', () => {
    return (
      <InputTags
        tags={['delete me']}
        handleInsert={noop}
        handleEdit={noop}
        handleRemove={action('handleRemove')}
        inputPlaceholder={emptyString}
        suggestions={[]}
        handleUpdateSuggestions={noop}
      />
    )
  })
  .add('delete token by backspacing when input is empty', () => {
    return (
      <InputTags
        tags={['delete me']}
        handleInsert={noop}
        handleEdit={noop}
        handleRemove={action('handleRemove')}
        inputPlaceholder={emptyString}
        suggestions={[]}
        handleUpdateSuggestions={noop}
      />
    )
  })
  .add('show input placeholder by rendering', () => {
    return (
      <InputTags
        tags={[]}
        handleInsert={noop}
        handleEdit={noop}
        handleRemove={noop}
        inputPlaceholder={'Add Tag'}
        suggestions={[]}
        handleUpdateSuggestions={noop}
      />
    )
  })
  .add('show suggestions list by typing non empty string', () => {
    return (
      <InputTags
        tags={[]}
        handleInsert={noop}
        handleEdit={noop}
        handleRemove={noop}
        inputPlaceholder={emptyString}
        suggestions={items}
        handleUpdateSuggestions={noop}
      />
    )
  })
  .add('create token by typing non empty string and clicking suggestion', () => {
    return (
      <InputTags
        tags={[]}
        handleInsert={action('handleInsert')}
        handleEdit={noop}
        handleRemove={noop}
        inputPlaceholder={emptyString}
        suggestions={items}
        handleUpdateSuggestions={noop}
      />
    )
  })
  .add('create token by typing non empty string and pressing enter for highlighted suggestion', () => {
    return (
      <InputTags
        tags={[]}
        handleInsert={action('handleInsert')}
        handleEdit={noop}
        handleRemove={noop}
        inputPlaceholder={emptyString}
        suggestions={items}
        handleUpdateSuggestions={noop}
      />
    )
  })
  .add('highlight next suggestion by typing non empty string and pressing down', () => {
    return (
      <InputTags
        tags={[]}
        handleInsert={noop}
        handleEdit={noop}
        handleRemove={noop}
        inputPlaceholder={emptyString}
        suggestions={items}
        handleUpdateSuggestions={noop}
      />
    )
  })
  .add('highlight previous suggestion by typing non empty string and pressing up', () => {
    return (
      <InputTags
        tags={[]}
        handleInsert={noop}
        handleEdit={noop}
        handleRemove={noop}
        inputPlaceholder={emptyString}
        suggestions={items}
        handleUpdateSuggestions={noop}
      />
    )
  })
  .add('hide suggestions list by typing non empty string and pressing escape', () => {
    return (
      <InputTags
        tags={[]}
        handleInsert={noop}
        handleEdit={noop}
        handleRemove={noop}
        inputPlaceholder={emptyString}
        suggestions={items}
        handleUpdateSuggestions={noop}
      />
    )
  });
