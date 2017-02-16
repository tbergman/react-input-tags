import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { List } from '../src/interface/List.jsx';
import { noop } from '../test/util';
import { items } from '../test/mock';

storiesOf('List', module)
  .add('auto focus first item', () => (
    <List
      items={items}
      handleSelect={noop}
      handleClose={noop}
    />
  ))
  .add('highlight next item', () => (
    <List
      items={items}
      handleSelect={noop}
      handleClose={noop}
    />
  ))
  .add('highlight previous item', () => (
    <List
      items={items}
      handleSelect={noop}
      handleClose={noop}
    />
  ))
  .add('highlight item', () => (
    <List
      items={items}
      handleSelect={noop}
      handleClose={noop}
    />
  ))
  .add('select item', () => (
    <List
      items={items}
      handleSelect={action('handleSelect')}
      handleClose={noop}
    />
  ))
  .add('close list', () => (
    <List
      items={items}
      handleSelect={noop}
      handleClose={action('handleClose')}
    />
  ));
