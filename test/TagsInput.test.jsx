import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { InputTags } from '../src/InputTags.jsx';
import { noop } from './util';

describe('<InputTags />', () => {
  // TODO: test that classname appears
  // TODO: test that style appears
  describe('<Input />', () => {
    let inputWrapper;

    before(() => {
      inputWrapper = mount(
        <InputTags
          tags={[]}
          handleInsert={noop}
          handleRemove={noop}
        />
      );
    });

    it('should render the input', () => {
      expect(inputWrapper.find('input')).to.have.length(1);
    });

    describe('onChange()', () => {
      const nonEmptyInputValue = 'a';
      let onChangeWrapper;

      before(() => {
        onChangeWrapper = mount(
          <InputTags
            tags={[]}
            handleInsert={noop}
            handleRemove={noop}
          />
        );

        onChangeWrapper.find('input').simulate('change', { target: { value: nonEmptyInputValue } });
      });

      it('should set the state `inputValue`', () => {
        expect(onChangeWrapper.state().inputValue).to.equal(nonEmptyInputValue);
      });
    });

    describe('onBlur()', () => {
      context('when state `inputValue` has length greater than `0`', () => {
        const nonEmptyInputValue = 'ken@ferguson.com';
        let onBlurWrapper;
        let onBlurTags;
        let onBlurHandleInsert;
        let onBlurHandleRemove;

        beforeEach(() => {
          onBlurTags = [];
          onBlurHandleInsert = sinon.stub();
          onBlurHandleRemove = sinon.stub();
          onBlurWrapper = mount(
            <InputTags
              tags={onBlurTags}
              handleInsert={onBlurHandleInsert}
              handleRemove={onBlurHandleRemove}
            />
          );

          onBlurWrapper.setState({ inputValue: nonEmptyInputValue });
          onBlurWrapper.find('input').simulate('blur');
        });

        it('should clear the state `inputValue`', () => {
          expect(onBlurWrapper.state().inputValue).to.equal('');
        });

        it('should insert the tag', () => {
          expect(onBlurHandleInsert).to.have.been.calledWith(onBlurTags, nonEmptyInputValue);
        });
      });

      context('when state `inputValue` has length of `0`', () => {
        const emptyInputValue = '';
        let onBlurWrapper;
        let onBlurTags;
        let onBlurHandleInsert;
        let onBlurHandleRemove;

        beforeEach(() => {
          onBlurTags = [];
          onBlurHandleInsert = sinon.stub();
          onBlurHandleRemove = sinon.stub();
          onBlurWrapper = mount(
            <InputTags
              tags={onBlurTags}
              handleInsert={onBlurHandleInsert}
              handleRemove={onBlurHandleRemove}
            />
          );

          onBlurWrapper.setState({ inputValue: emptyInputValue });
          onBlurWrapper.find('input').simulate('blur');
        });

        it('should * not * clear the state `inputValue`', () => {
          expect(onBlurWrapper.state().inputValue).to.equal(emptyInputValue);
        });

        it('should * not * insert the tag', () => {
          expect(onBlurHandleInsert).to.not.have.been.called();
        });
      });
    });

    describe('onKeyDown', () => {
      context('when event `keyCode` is in `insertKeyCodes`', () => {
        const enterKeyCode = 13;

        context('when state `inputValue` has length greater than `0`', () => {
          const nonEmptyInputValue = 'abraham@lincoln.gov';
          let onKeyDownWrapper;
          let onKeyDownTags;
          let onKeyDownHandleInsert;
          let onKeyDownHandleRemove;

          beforeEach(() => {
            onKeyDownTags = [];
            onKeyDownHandleInsert = sinon.stub();
            onKeyDownHandleRemove = sinon.stub();
            onKeyDownWrapper = mount(
              <InputTags
                tags={onKeyDownTags}
                handleInsert={onKeyDownHandleInsert}
                handleRemove={onKeyDownHandleRemove}
              />
            );

            onKeyDownWrapper.setState({ inputValue: nonEmptyInputValue });
            onKeyDownWrapper.find('input').simulate('keydown', { keyCode: enterKeyCode });
          });

          it('should clear the state `inputValue`', () => {
            expect(onKeyDownWrapper.state().inputValue).to.equal('');
          });

          it('should insert the tag', () => {
            expect(onKeyDownHandleInsert).to.have.been.calledWith(
              onKeyDownTags, nonEmptyInputValue);
          });
        });

        context('when state `inputValue` has length of `0`', () => {
          const emptyInputValue = '';
          let onKeyDownWrapper;
          let onKeyDownTags;
          let onKeyDownHandleInsert;
          let onKeyDownHandleRemove;

          beforeEach(() => {
            onKeyDownTags = [];
            onKeyDownHandleInsert = sinon.stub();
            onKeyDownHandleRemove = sinon.stub();
            onKeyDownWrapper = mount(
              <InputTags
                tags={onKeyDownTags}
                handleInsert={onKeyDownHandleInsert}
                handleRemove={onKeyDownHandleRemove}
              />
            );

            onKeyDownWrapper.setState({ inputValue: emptyInputValue });
            onKeyDownWrapper.find('input').simulate('keydown', { keyCode: enterKeyCode });
          });

          it('should * not * clear the state `inputValue`', () => {
            expect(onKeyDownWrapper.state().inputValue).to.equal(emptyInputValue);
          });

          it('should * not * insert the tag', () => {
            expect(onKeyDownHandleInsert).to.not.have.been.called();
          });
        });
      });

      context('when event `keyCode` is in `removeKeyCodes`', () => {
        const removeKeyCode = 8;

        context('when state `inputValue` has length of `0`', () => {
          const emptyInputValue = '';

          context('when prop `tags` has length greater than `0`', () => {
            let onKeyDownWrapper;
            let onKeyDownTags;
            let onKeyDownHandleInsert;
            let onKeyDownHandleRemove;

            beforeEach(() => {
              onKeyDownTags = ['one', 'two'];
              onKeyDownHandleInsert = sinon.stub();
              onKeyDownHandleRemove = sinon.stub();
              onKeyDownWrapper = mount(
                <InputTags
                  tags={onKeyDownTags}
                  handleInsert={onKeyDownHandleInsert}
                  handleRemove={onKeyDownHandleRemove}
                />
              );

              onKeyDownWrapper.setState({ inputValue: emptyInputValue });
              onKeyDownWrapper.find('input').simulate('keydown', { keyCode: removeKeyCode });
            });

            it('should remove the last tag', () => {
              expect(onKeyDownHandleRemove).to.have.been.calledWith(
                onKeyDownTags, onKeyDownTags.length - 1);
            });
          });

          context('when prop `tags` has length of `0`', () => {
            let onKeyDownWrapper;
            let onKeyDownTags;
            let onKeyDownHandleInsert;
            let onKeyDownHandleRemove;

            beforeEach(() => {
              onKeyDownTags = [];
              onKeyDownHandleInsert = sinon.stub();
              onKeyDownHandleRemove = sinon.stub();
              onKeyDownWrapper = mount(
                <InputTags
                  tags={onKeyDownTags}
                  handleInsert={onKeyDownHandleInsert}
                  handleRemove={onKeyDownHandleRemove}
                />
              );

              onKeyDownWrapper.setState({ inputValue: emptyInputValue });
              onKeyDownWrapper.find('input').simulate('keydown', { keyCode: removeKeyCode });
            });

            it('should * not * remove the last tag', () => {
              expect(onKeyDownHandleRemove).to.not.have.been.called();
            });
          });
        });

        context('when state `inputValue` has length greater than `0`', () => {
          const nonEmptyInputValue = 'user@domain.tld';
          let onKeyDownWrapper;
          let onKeyDownTags;
          let onKeyDownHandleInsert;
          let onKeyDownHandleRemove;

          beforeEach(() => {
            onKeyDownTags = [];
            onKeyDownHandleInsert = sinon.stub();
            onKeyDownHandleRemove = sinon.stub();
            onKeyDownWrapper = mount(
              <InputTags
                tags={onKeyDownTags}
                handleInsert={onKeyDownHandleInsert}
                handleRemove={onKeyDownHandleRemove}
              />
            );

            onKeyDownWrapper.setState({ inputValue: nonEmptyInputValue });
            onKeyDownWrapper.find('input').simulate('keydown', { keyCode: removeKeyCode });
          });

          it('should * not * remove the last tag', () => {
            expect(onKeyDownHandleRemove).to.not.have.been.called();
          });
        });
      });

      context('when event `keyCode` is * not * found', () => {
        const notFoundKeyCode = 65;
        let onKeyDownWrapper;
        let onKeyDownTags;
        let onKeyDownHandleInsert;
        let onKeyDownHandleRemove;

        beforeEach(() => {
          onKeyDownTags = [];
          onKeyDownHandleInsert = sinon.stub();
          onKeyDownHandleRemove = sinon.stub();
          onKeyDownWrapper = mount(
            <InputTags
              tags={onKeyDownTags}
              handleInsert={onKeyDownHandleInsert}
              handleRemove={onKeyDownHandleRemove}
            />
          );

          onKeyDownWrapper.find('input').simulate('keydown', { keyCode: notFoundKeyCode });
        });

        it('should * not * insert the tag', () => {
          expect(onKeyDownHandleInsert).to.not.have.been.called();
        });

        it('should * not * remove the tag', () => {
          expect(onKeyDownHandleRemove).to.not.have.been.called();
        });
      });
    });
  });
});
