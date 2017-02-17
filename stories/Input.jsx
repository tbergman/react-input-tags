import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Input } from '../src/interface/Input.jsx';

import { noop } from '../test/util';
import { emptyString, nonEmptyPlaceholder } from '../test/mock';

storiesOf('Input', module)
  .add('with empty placeholder', () => {
    return (
      <Input
        value={emptyString}
        placeholder={emptyString}
        handleOnChange={noop}
        handleOnBlur={noop}
        handleOnKeyDown={noop}
      />
    )
  })
  .add('with non empty placeholder', () => {
    return (
      <Input
        value={emptyString}
        placeholder={nonEmptyPlaceholder}
        handleOnChange={noop}
        handleOnBlur={noop}
        handleOnKeyDown={noop}
      />
    )
  })
  .add('handle change by typing in input', () => {
    return (
      <Input
        value={emptyString}
        placeholder={emptyString}
        handleOnChange={action('handleOnChange')}
        handleOnBlur={noop}
        handleOnKeyDown={noop}
      />
    )
  })
  .add('handle blur by clicking on input and clicking something else', () => {
    return (
      <Input
        value={emptyString}
        placeholder={emptyString}
        handleOnChange={noop}
        handleOnBlur={action('handleOnBlur')}
        handleOnKeyDown={noop}
      />
    )
  })
  .add('handle keydown by typing in input', () => {
    return (
      <Input
        value={emptyString}
        placeholder={emptyString}
        handleOnChange={noop}
        handleOnBlur={noop}
        handleOnKeyDown={action('handleOnKeyDown')}
      />
    )
  });
