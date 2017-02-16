import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { ListItem } from '../src/interface/ListItem.jsx';
import { noop } from '../test/util';
import { item } from '../test/mock';

storiesOf('ListItem', module)
  .add('focus item', () => {
    return (
      <ListItem
        value={item}
        isHighlighted={true}
        handleHighlight={noop}
        handleSelect={noop}
      />
    )
  })
  .add('highlight item', () => {
    return (
      <ListItem
        value={item}
        isHighlighted={false}
        handleHighlight={action('handleHighlightItem')}
        handleSelect={noop}
      />
    )
  })
  .add('select item', () => {
    return (
      <ListItem
        value={item}
        isHighlighted={true}
        handleHighlight={noop}
        handleSelect={action('handleSelectItem')}
      />
    )
  });
