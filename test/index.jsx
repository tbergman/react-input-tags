import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { TagsInput } from '../src';

describe('<TagsInput />', () => {
  let wrapper;
  let tags;
  let handleInsert;
  let handleRemove;

  beforeEach(() => {
    tags = [];
    handleInsert = sinon.stub();
    handleRemove = sinon.stub();

    wrapper = shallow(
      <TagsInput
        tags={tags}
        handleInsert={handleInsert}
        handleRemove={handleRemove}
      />
    );
  });

  describe('<input />', () => {
    it('should render the input', () => {
      expect(wrapper.find('input')).to.have.length(1);
    });

    describe('onChange()', () => {
      const newInputValue = 'a';

      beforeEach(() => {
        wrapper.find('input').simulate('change', { target: { value: newInputValue } });
      });

      it('should set the state `inputValue`', () => {
        expect(wrapper.state().inputValue).to.equal(newInputValue);
      });
    });

    describe('onBlur()', () => {
      context('when state `inputValue` has length greater than `0`', () => {
        const newInputValue = 'ken@ferguson.com';

        beforeEach(() => {
          wrapper.setState({ inputValue: newInputValue });
          wrapper.find('input').simulate('blur');
        });

        it('should clear the state `inputValue`', () => {
          expect(wrapper.state().inputValue).to.equal('');
        });

        it('should insert the tag', () => {
          expect(handleInsert).to.have.been.calledWith(tags, newInputValue);
        });
      });

      context('when state `inputValue` has length of `0`', () => {
        const emptyInputValue = '';

        beforeEach(() => {
          wrapper.setState({ inputValue: emptyInputValue });
          wrapper.find('input').simulate('onblur');
        });

        it('should * not * clear the state `inputValue`', () => {
          expect(wrapper.state().inputValue).to.equal(emptyInputValue);
        });

        it('should * not * insert the tag', () => {
          expect(handleInsert).to.not.have.been.called();
        });
      });
    });
  });
});
