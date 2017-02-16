import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { ListItem } from '../src/interface/ListItem.jsx';
import { noop } from './util';
import { item } from '../test/mock';

storiesOf('ListItem', module)
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
