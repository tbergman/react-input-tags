import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { InputTags } from '../src/interface/InputTags.jsx';

import { noop } from '../test/util';
import { items } from '../test/mock';

storiesOf('InputTags', module)
  .add('create token by typing non empty string and pressing tab', () => {
    return (
      <InputTags
        tags={['insert another']}
        handleInsert={action('handleInsert')}
        handleEdit={noop}
        handleRemove={noop}
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
      />
    )
  })
  .add('show suggestions list by typing non empty string', () => {
    return (
      <InputTags
        tags={[]}
        handleInsert={action('insert')}
        handleEdit={noop}
        handleRemove={noop}
        suggestions={items}
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
        suggestions={items}
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
        suggestions={items}
      />
    )
  })
  .add('hide suggestions list by pressing escape', () => {
    return (
      <InputTags
        tags={[]}
        handleInsert={noop}
        handleEdit={noop}
        handleRemove={noop}
        suggestions={items}
      />
    )
  });
