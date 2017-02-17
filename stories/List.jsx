import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { List } from '../src/interface/List.jsx';
import { noop } from '../test/util';
import { items } from '../test/mock';

storiesOf('List', module)
  .add('auto focus first item by rendering', () => (
    <List
      items={items}
      handleSelect={noop}
      handleClose={noop}
    />
  ))
  .add('highlight next item by pressing down', () => (
    <List
      items={items}
      handleSelect={noop}
      handleClose={noop}
    />
  ))
  .add('highlight previous item by pressing up', () => (
    <List
      items={items}
      handleSelect={noop}
      handleClose={noop}
    />
  ))
  .add('highlight item by mousing over', () => (
    <List
      items={items}
      handleSelect={noop}
      handleClose={noop}
    />
  ))
  .add('select item by pressing enter when item is highlighted', () => (
    <List
      items={items}
      handleSelect={action('handleSelect')}
      handleClose={noop}
    />
  ))
  .add('close list by pressing escape', () => (
    <List
      items={items}
      handleSelect={noop}
      handleClose={action('handleClose')}
    />
  ));
