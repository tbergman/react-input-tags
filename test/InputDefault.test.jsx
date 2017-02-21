import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { InputDefault, MIRROR_STYLES } from '../src/implementation/InputDefault.jsx';
import { aKeyCode } from '../src/keyCodes';

import { noop } from './util';
import { emptyString, nonEmptyString } from './mock';

describe('<InputDefault />', () => {
  let inputWrapper;
  let handleOnChange;
  let handleOnBlur;
  let handleOnKeyDown;

  beforeEach(() => {
    handleOnChange = sinon.stub();
    handleOnBlur = sinon.stub();
    handleOnKeyDown = sinon.stub();

    inputWrapper = mount(
      <InputDefault
        value={emptyString}
        handleOnChange={handleOnChange}
        handleOnBlur={handleOnBlur}
        handleOnKeyDown={handleOnKeyDown}
      />
    )
  });

  context('when component mounts', () => {
    it('should copy the font styling from the input to the mirror element', () => {
      const inputStyles = window.getComputedStyle(inputWrapper.find('#inputNode').node);
      const mirrorStyles = inputWrapper.find('#mirrorNode').node.style;
      MIRROR_STYLES.forEach((mStyle) => {
        expect(mirrorStyles[mStyle]).to.equal(inputStyles[mStyle]);
      });
    });

    // Note: jsdom does not implement browser box model so we can * not * test the following
    it('should set the input width with the mirror width');
    // const inputWidth = wrapper.find('#inputNode').node.style.width;
    // const mirrorWidth = wrapper.find('#mirrorNode').node.style.width;
    // expect(inputWidth).to.equal(mirrorWidth);
  });

  context('when component updates', () => {

    // Note: jsdom does not implement browser box model so we can * not * test the following
    it('should update the input width with the mirror width');
    // wrapper.find('input').simulate('change', { target: { value: 'a' }})
    // const inputWidth = wrapper.find('#inputNode').node.style.width;
    // const mirrorWidth = wrapper.find('#mirrorNode').node.style.width;
    // expect(inputWidth).to.equal(mirrorWidth);
  });

  context('when input value changes', () => {
    beforeEach(() => {
      inputWrapper.find('input').simulate('change', { target: { value: nonEmptyString }});
    });

    it('should handle the change', () => {
      expect(handleOnChange).to.have.been.called();
    });
  });

  context('when focus leaves input value', () => {
    beforeEach(() => {
      inputWrapper.find('input').simulate('blur');
    });

    it('should handle the blur', () => {
      expect(handleOnBlur).to.have.been.called();
    });
  });

  context('when input is typed in', () => {
    beforeEach(() => {
      inputWrapper.find('input').simulate('keydown', { keyCode: aKeyCode });
    });

    it('should handle the keydown', () => {
      expect(handleOnKeyDown).to.have.been.called();
    });
  });
});
