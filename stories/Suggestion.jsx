import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Suggestion } from '../src/interface/Suggestion.jsx';
import { noop } from '../test/util';
import { item } from '../test/mock';

storiesOf('Suggestion', module)
  .add('highlight suggestion by mousing over suggestion', () => {
    return (
      <Suggestion
        value={item}
        isHighlighted={false}
        handleHighlight={action('handleHighlight')}
        handleSelect={noop}
      />
    )
  })
  .add('select suggestion by clicking suggestion', () => {
    return (
      <Suggestion
        value={item}
        isHighlighted={true}
        handleHighlight={noop}
        handleSelect={action('handleSelect')}
      />
    )
  });
