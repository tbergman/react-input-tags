import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Tag } from '../src/interface/Tag.jsx';
import { noop } from '../test/util';
import { item } from '../test/mock';

storiesOf('Tag', module)
  .add('edit item by clicking text', () => {
    return (
      <Tag
        value={item}
        handleEdit={action('handleEdit')}
        handleRemove={noop}
      />
    )
  })
  .add('remove item by clicking button', () => {
    return (
      <Tag
        value={item}
        handleEdit={noop}
        handleRemove={action('handleRemove')}
      />
    )
  });
