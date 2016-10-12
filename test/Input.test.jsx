import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { Input } from '../src/Input.jsx';
import { noop } from './util';

describe('<Input />', () => {
  describe('componentDidMount()', () => {
    // TODO
    // test that styles are copied to mirrored element
    // and that width is updated
  });

  describe('componentDidUpdate()', () => {
    // TODO
    // test that when the component updates, the width is updated
  });

  describe('onChange()', () => {
    const newInputValue = 'a';
    let onChangeWrapper;
    let handleOnChange;

    beforeEach(() => {
      handleOnChange = sinon.stub();
      onChangeWrapper = shallow(
        <Input
          value={''}
          onChange={handleOnChange}
          onBlur={noop}
          onKeyDown={noop}
          placeholder={''}
        />
      );

      onChangeWrapper.find('input').simulate('change', { target: { value: newInputValue } });
    });

    it('should handle the change', () => {
      expect(handleOnChange).to.have.been.called();
    });
  });

  describe('onBlur()', () => {
    let onBlurWrapper;
    let handleOnBlur;

    beforeEach(() => {
      handleOnBlur = sinon.stub();
      onBlurWrapper = shallow(
        <Input
          value={''}
          onChange={noop}
          onBlur={handleOnBlur}
          onKeyDown={noop}
          placeholder={''}
        />
      );

      onBlurWrapper.find('input').simulate('blur');
    });

    it('should handle the blur', () => {
      expect(handleOnBlur).to.have.been.called();
    });
  });

  describe('onKeyDown()', () => {
    const newKeyCode = 65;
    let onKeyDownWrapper;
    let handleOnKeyDown;

    beforeEach(() => {
      handleOnKeyDown = sinon.stub();
      onKeyDownWrapper = shallow(
        <Input
          value={''}
          onChange={noop}
          onBlur={noop}
          onKeyDown={handleOnKeyDown}
          placeholder={''}
        />
      );

      onKeyDownWrapper.find('input').simulate('keydown', { keyCode: newKeyCode });
    });

    it('should handle the keydown', () => {
      expect(handleOnKeyDown).to.have.been.called();
    });
  });
});
