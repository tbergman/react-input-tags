import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { List } from '../src/interface/List.jsx';
import { noop } from '../test/util';
import { items, highlightedIndex } from '../test/mock';

storiesOf('List', module)
  .add('show highlighted item by rendering', () => (
    <List
      items={items}
      highlightedIndex={highlightedIndex}
      getListItemValue={noop}
      handleHighlight={noop}
      handleSelect={noop}
    />
  ))
  .add('highlight item by mousing over item', () => (
    <List
      items={items}
      highlightedIndex={highlightedIndex}
      getListItemValue={noop}
      handleHighlight={action('handleHighlight')}
      handleSelect={noop}
    />
  ))
  .add('select item by clicking item', () => (
    <List
      items={items}
      highlightedIndex={highlightedIndex}
      getListItemValue={action('getListItemValue')}
      handleHighlight={noop}
      handleSelect={action('handleSelect')}
    />
  ));
