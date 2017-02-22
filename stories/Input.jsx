import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Input } from '../src/interface/Input.jsx';

import { noop } from '../test/util';
import { emptyString, nonEmptyString } from '../test/mock';

storiesOf('Input', module)
  .add('show empty placeholder by rendering', () => {
    return (
      <Input
        value={emptyString}
        handleOnChange={noop}
        handleOnBlur={noop}
        handleOnKeyDown={noop}
        placeholder={emptyString}
      />
    )
  })
  .add('show non empty placeholder by rendering', () => {
    return (
      <Input
        value={emptyString}
        handleOnChange={noop}
        handleOnBlur={noop}
        handleOnKeyDown={noop}
        placeholder={nonEmptyString}
      />
    )
  })
  .add('disable tabbing to input by rendering', () => {
    return (
      <Input
        value={emptyString}
        handleOnChange={noop}
        handleOnBlur={noop}
        handleOnKeyDown={noop}
        tabIndex={-1}
      />
    )
  })
  .add('handle change by typing in input', () => {
    return (
      <Input
        value={emptyString}
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
        handleOnChange={noop}
        handleOnBlur={noop}
        handleOnKeyDown={action('handleOnKeyDown')}
      />
    )
  });
