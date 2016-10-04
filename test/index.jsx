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
        const originalInputValue = '';

        beforeEach(() => {
          wrapper.setState({ inputValue: originalInputValue });
          wrapper.find('input').simulate('blur');
        });

        it('should * not * clear the state `inputValue`', () => {
          expect(wrapper.state().inputValue).to.equal(originalInputValue);
        });

        it('should * not * insert the tag', () => {
          expect(handleInsert).to.not.have.been.called();
        });
      });
    });

    describe('onKeyDown()', () => {
      context('when event `keyCode` is in `insertKeyCodes`', () => {
        const enterKeyCode = 13;

        context('when state `inputValue` has length greater than `0`', () => {
          const newInputValue = 'abraham@lincoln.gov';

          beforeEach(() => {
            wrapper.setState({ inputValue: newInputValue });
            wrapper.find('input').simulate('keydown', { keyCode: enterKeyCode });
          });

          it('should clear the state `inputValue`', () => {
            expect(wrapper.state().inputValue).to.equal('');
          });

          it('should insert the tag', () => {
            expect(handleInsert).to.have.been.calledWith(tags, newInputValue);
          });
        });

        context('when state `inputValue` has length of `0`', () => {
          const originalInputValue = '';

          beforeEach(() => {
            wrapper.setState({ inputValue: originalInputValue });
            wrapper.find('input').simulate('keydown', { keyCode: enterKeyCode });
          });

          it('should clear the state `inputValue`', () => {
            expect(wrapper.state().inputValue).to.equal(originalInputValue);
          });

          it('should insert the tag', () => {
            expect(handleInsert).to.not.have.been.called();
          });
        });
      });

      context('when event `keyCode` is in `removeKeyCodes`', () => {
        const removeKeyCode = 8;

        context('when state `inputValue` has length of `0`', () => {

          context('when ', () => {

          });
        });

        /*
        context('when state `inputValue` has length of `0`', () => {
          const originalInputValue = '';

          beforeEach(() => {
            wrapper.setState({ inputValue: originalInputValue });
            wrapper.find('input').simulate('keydown', { keyCode: enterKeyCode });
          });

          it('should clear the state `inputValue`', () => {
            expect(wrapper.state().inputValue).to.equal(originalInputValue);
          });

          it('should insert the tag', () => {
            expect(handleInsert).to.not.have.been.called();
          });
        });
        */
      });

      context('when event `keyCode` is * not * found', () => {
        beforeEach(() => {
          wrapper.find('input').simulate('onkeydown', { keyCode: 65 });
        });

        it('should * not * insert the tag', () => {
          expect(handleInsert).to.not.have.been.called();
        });

        it('should * not * remove the tag', () => {
          expect(handleRemove).to.not.have.been.called();
        });
      });
    });
  });
});
