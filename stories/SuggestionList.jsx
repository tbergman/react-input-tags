import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { SuggestionList } from '../src/interface/SuggestionList.jsx';
import { noop } from '../test/util';
import { items, highlightedIndex } from '../test/mock';

storiesOf('SuggestionList', module)
  .add('show highlighted suggestion by rendering', () => (
    <SuggestionList
      suggestions={items}
      highlightedIndex={highlightedIndex}
      handleHighlight={noop}
      handleSelect={noop}
      getSuggestionValue={noop}
    />
  ))
  .add('highlight suggestion by mousing over suggestion', () => (
    <SuggestionList
      suggestions={items}
      highlightedIndex={highlightedIndex}
      handleHighlight={action('handleHighlight')}
      handleSelect={noop}
      getSuggestionValue={noop}
    />
  ))
  .add('select suggestion by clicking suggestion', () => (
    <SuggestionList
      suggestions={items}
      highlightedIndex={highlightedIndex}
      handleHighlight={noop}
      handleSelect={action('handleSelect')}
      getSuggestionValue={action('getSuggestionValue')}
    />
  ));
