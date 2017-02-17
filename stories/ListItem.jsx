import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { ListItem } from '../src/interface/ListItem.jsx';
import { noop } from '../test/util';
import { item } from '../test/mock';

storiesOf('ListItem', module)
  .add('auto focus highlighted item by rendering', () => {
    return (
      <ListItem
        value={item}
        isHighlighted={true}
        handleHighlight={noop}
        handleSelect={noop}
      />
    )
  })
  .add('highlight item by mousing over item', () => {
    return (
      <ListItem
        value={item}
        isHighlighted={false}
        handleHighlight={action('handleHighlightItem')}
        handleSelect={noop}
      />
    )
  })
  .add('select item by clicking item', () => {
    return (
      <ListItem
        value={item}
        isHighlighted={true}
        handleHighlight={noop}
        handleSelect={action('handleSelectItem')}
      />
    )
  });
