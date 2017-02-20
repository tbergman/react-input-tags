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
      getSuggestionValue={noop}
      handleHighlight={noop}
      handleSelect={noop}
    />
  ))
  .add('highlight suggestion by mousing over suggestion', () => (
    <SuggestionList
      suggestions={items}
      highlightedIndex={highlightedIndex}
      getSuggestionValue={noop}
      handleHighlight={action('handleHighlight')}
      handleSelect={noop}
    />
  ))
  .add('select suggestion by clicking suggestion', () => (
    <SuggestionList
      suggestions={items}
      highlightedIndex={highlightedIndex}
      getSuggestionValue={action('getSuggestionValue')}
      handleHighlight={noop}
      handleSelect={action('handleSelect')}
    />
  ));
