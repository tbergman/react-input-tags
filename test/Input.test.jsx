import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { Input, MIRROR_STYLES } from '../src/Input.jsx';
import { noop } from './util';

describe('<Input />', () => {
  describe('componentDidMount()', () => {
    let componentDidMountWrapper;

    beforeEach(() => {
      componentDidMountWrapper = mount(
        <Input
          value={''}
          onChange={noop}
          onBlur={noop}
          onKeyDown={noop}
          placeholder={'type here'}
        />
      );
    });

    it('should copy the font styling from the input to the mirror element', () => {
      const inputStyles = window.getComputedStyle(componentDidMountWrapper.find('#inputNode').node);
      const mirrorStyles = componentDidMountWrapper.find('#mirrorNode').node.style;
      MIRROR_STYLES.forEach((mStyle) => {
        expect(mirrorStyles[mStyle]).to.equal(inputStyles[mStyle]);
      });
    });

    /*
    Note: jsdom does not implement browser box model so we can * not * test the following

    it('should set the input width with the mirror width', () => {
      const inputWidth = wrapper.find('#inputNode').node.style.width;
      const mirrorWidth = wrapper.find('#mirrorNode').node.style.width;
      expect(inputWidth).to.equal(mirrorWidth);
    });
    */
  });

  /*
  Note: jsdom does not implement browser box model so we can * not * test the following

  describe('componentDidUpdate()', () => {
    it('should update the input width with the mirror width', () => {
      wrapper.find('input').simulate('change', { target: { value: 'a' }})
      const inputWidth = wrapper.find('#inputNode').node.style.width;
      const mirrorWidth = wrapper.find('#mirrorNode').node.style.width;
      expect(inputWidth).to.equal(mirrorWidth);
    });
  });
  */

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
