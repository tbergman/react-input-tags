import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { InputTags } from '../src/InputTags.jsx';
import { noop, tabKeyCode, commaKeyCode, backspaceKeyCode, aKeyCode, emptyString, nonEmptyString } from './util';
import { defaultSuggestionListClassName } from '../src/default.jsx';

describe('InputTags', () => {
  let inputTagsWrapper;
  let tags;
  let handleInsert;
  let handleRemove;

  describe('create token manually', () => {
    beforeEach(() => {
      tags = [];
      handleInsert = sinon.stub();
      handleRemove = sinon.stub();

      inputTagsWrapper = mount(
        <InputTags
          tags={tags}
          handleInsert={handleInsert}
          handleRemove={handleRemove}
        />
      );
    });

    context('when input field is changed to non empty string', () => {
      const inputValue = nonEmptyString;

      beforeEach(() => {
        inputTagsWrapper.find('input').simulate('change', { target: { value: inputValue } });
      });

      context('when focus leaves input field', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('blur');
        });

        it('should insert typed string as token', () => {
          expect(handleInsert).to.have.been.calledWith(tags, inputValue);
        });
      });

      context('when `tab` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: tabKeyCode });
        });

        it('should insert typed string as token', () => {
          expect(handleInsert).to.have.been.calledWith(tags, inputValue);
        });
      });

      context('when `comma` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: commaKeyCode });
        });

        it('should insert typed string as token', () => {
          expect(handleInsert).to.have.been.calledWith(tags, inputValue);
        });
      });

      context('when `a` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: aKeyCode });
        });

        it('should *not* insert typed string as token', () => {
          expect(handleInsert).to.not.have.been.called();
        });
      });
    });

    context('when input field is changed to empty string', () => {
      const inputValue = emptyString;

      beforeEach(() => {
        inputTagsWrapper.find('input').simulate('change', { target: { value: inputValue } });
      });

      context('when focus leaves input field', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('blur');
        });

        it('should *not* insert typed string as token', () => {
          expect(handleInsert).to.not.have.been.called();
        });
      });

      context('when `tab` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: tabKeyCode });
        });

        it('should *not* insert typed string as token', () => {
          expect(handleInsert).to.not.have.been.called();
        });
      });

      context('when `comma` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: commaKeyCode });
        });

        it('should *not* insert typed string as token', () => {
          expect(handleInsert).to.not.have.been.called();
        });
      });
    });
  });

  describe('delete token', () => {
    context('when there is at least one tag', () => {
      beforeEach(() => {
        tags = ['delete me'];
        handleInsert = sinon.stub();
        handleRemove = sinon.stub();

        inputTagsWrapper = mount(
          <InputTags
            tags={tags}
            handleInsert={handleInsert}
            handleRemove={handleRemove}
          />
        );
      });

      context('when `x` button is clicked', () => {
        beforeEach(() => {
          inputTagsWrapper.find('button').simulate('click');
        });

        it('should remove token', () => {
          expect(handleRemove).to.have.been.calledWith(tags, tags.length - 1);
        });
      });

      context('when `backspace` key is pressed', () => {
        context('when input field has not been changed', () => {
          beforeEach(() => {
            inputTagsWrapper.find('input').simulate('keydown', { keyCode: backspaceKeyCode });
          });

          it('should remove token', () => {
            expect(handleRemove).to.have.been.calledWith(tags, tags.length - 1);
          });
        });

        context('when input field has been changed to empty string', () => {
          const inputValue = emptyString;

          beforeEach(() => {
            inputTagsWrapper.find('input').simulate('change', { target: { value: inputValue } });
            inputTagsWrapper.find('input').simulate('keydown', { keyCode: backspaceKeyCode });
          });

          it('should remove token', () => {
            expect(handleRemove).to.have.been.calledWith(tags, tags.length - 1);
          });
        });

        context('when input field has been changed to non empty string', () => {
          const inputValue = nonEmptyString;

          beforeEach(() => {
            inputTagsWrapper.find('input').simulate('change', { target: { value: inputValue } });
            inputTagsWrapper.find('input').simulate('keydown', { keyCode: backspaceKeyCode });
          });

          it('should *not* remove token', () => {
            expect(handleRemove).to.not.have.been.called();
          });
        });
      });
    });

    context('when there are no tags', () => {
      beforeEach(() => {
        tags = [];
        handleInsert = sinon.stub();
        handleRemove = sinon.stub();

        inputTagsWrapper = mount(
          <InputTags
            tags={tags}
            handleInsert={handleInsert}
            handleRemove={handleRemove}
          />
        );
      });

      context('when `backspace` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: backspaceKeyCode });
        });

        it('should *not* remove token', () => {
          expect(handleRemove).to.not.have.been.called();
        });
      });
    });
  });
});

describe('<InputTags />', () => {
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

        beforeEach(() => {
          onBlurTags = [];
          onBlurHandleInsert = sinon.stub();
          onBlurWrapper = mount(
            <InputTags
              tags={onBlurTags}
              handleInsert={onBlurHandleInsert}
              handleRemove={noop}
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

        beforeEach(() => {
          onBlurTags = [];
          onBlurHandleInsert = sinon.stub();
          onBlurWrapper = mount(
            <InputTags
              tags={onBlurTags}
              handleInsert={onBlurHandleInsert}
              handleRemove={noop}
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
            onKeyDownWrapper.find('input').simulate('keydown', { keyCode: tabKeyCode });
          });

          // TODO
          // find input, props, onKeyDown
          it('should cancel the event by calling preventDefault()');

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
            onKeyDownWrapper.find('input').simulate('keydown', { keyCode: tabKeyCode });
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

  describe('<SuggestionList />', () => {
    context('when input value is empty string', () => {
      const emptyInputValue = '';
      let suggestionListWrapper;

      beforeEach(() => {
        suggestionListWrapper = mount(
          <InputTags
            tags={[]}
            handleInsert={noop}
            handleRemove={noop}
          />
        );

        suggestionListWrapper.find('input').simulate('change', { target: { value: emptyInputValue } });
      });

      it('should * not * be displayed', () => {
        expect(suggestionListWrapper.find(`.${defaultSuggestionListClassName}`)).to.have.length(0);
      });
    });
    context('when input value is * not * an empty string', () => {
      const nonEmptyInputValue = 'a';
      let suggestionListWrapper;

      beforeEach(() => {
        suggestionListWrapper = mount(
          <InputTags
            tags={[]}
            handleInsert={noop}
            handleRemove={noop}
          />
        );

        suggestionListWrapper.find('input').simulate('change', { target: { value: nonEmptyInputValue } });
      });

      it('should be displayed', () => {
        expect(suggestionListWrapper.find(`.${defaultSuggestionListClassName}`)).to.have.length(1);
      });
    });
  });
});
