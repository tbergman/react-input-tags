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
  let handleEdit;
  let handleRemove;

  describe('create token manually', () => {
    beforeEach(() => {
      tags = [];
      handleInsert = sinon.stub();

      inputTagsWrapper = mount(
        <InputTags
          tags={tags}
          handleInsert={handleInsert}
          handleEdit={noop}
          handleRemove={noop}
        />
      );
    });

    context('when input field is changed to non empty string', () => {
      const inputValue = nonEmptyString;

      beforeEach(() => {
        inputTagsWrapper.find('input').simulate('change', { target: { value: inputValue } });
      });

      it('should set the state `inputValue`', () => {
        expect(inputTagsWrapper.state().inputValue).to.equal('');
      });

      context('when focus leaves input field', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('blur');
        });

        it('should insert typed string as token', () => {
          expect(handleInsert).to.have.been.calledWith(tags, inputValue);
        });

        it('should clear the state `inputValue`', () => {
          expect(inputTagsWrapper.state().inputValue).to.equal(nonEmptyString);
        });
      });

      context('when `tab` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: tabKeyCode });
        });

        it('should insert typed string as token', () => {
          expect(handleInsert).to.have.been.calledWith(tags, inputValue);
        });

        it('should clear the state `inputValue`', () => {
          expect(inputTagsWrapper.state().inputValue).to.equal(nonEmptyString);
        });
      });

      context('when `comma` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: commaKeyCode });
        });

        it('should insert typed string as token', () => {
          expect(handleInsert).to.have.been.calledWith(tags, inputValue);
        });

        it('should clear the state `inputValue`', () => {
          expect(inputTagsWrapper.state().inputValue).to.equal(nonEmptyString);
        });
      });

      context('when `a` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: aKeyCode });
        });

        it('should *not* insert typed string as token', () => {
          expect(handleInsert).to.not.have.been.called();
        });

        it('should *not* clear the state `inputValue`', () => {
          expect(inputTagsWrapper.state().inputValue).to.equal('');
        });
      });
    });

    context('when input field is changed to empty string', () => {
      const inputValue = emptyString;

      beforeEach(() => {
        inputTagsWrapper.find('input').simulate('change', { target: { value: inputValue } });
      });

      it('should set the state `inputValue`', () => {
        expect(inputTagsWrapper.state().inputValue).to.equal('a');
      });

      context('when focus leaves input field', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('blur');
        });

        it('should *not* insert typed string as token', () => {
          expect(handleInsert).to.not.have.been.called();
        });

        it('should *not* clear the state `inputValue`', () => {
          expect(inputTagsWrapper.state().inputValue).to.equal('');
        });
      });

      context('when `tab` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: tabKeyCode });
        });

        it('should *not* insert typed string as token', () => {
          expect(handleInsert).to.not.have.been.called();
        });

        it('should *not* clear the state `inputValue`', () => {
          expect(inputTagsWrapper.state().inputValue).to.equal('');
        });
      });

      context('when `comma` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: commaKeyCode });
        });

        it('should *not* insert typed string as token', () => {
          expect(handleInsert).to.not.have.been.called();
        });

        it('should *not* clear the state `inputValue`', () => {
          expect(inputTagsWrapper.state().inputValue).to.equal('');
        });
      });
    });
  });

  describe('edit token', () => {
    context('when there is at least one tag', () => {
      beforeEach(() => {
        tags = ['edit me'];
        handleEdit = sinon.stub();
        handleRemove = sinon.stub();

        inputTagsWrapper = mount(
          <InputTags
            tags={tags}
            handleInsert={noop}
            handleEdit={handleEdit}
            handleRemove={handleRemove}
          />
        );
      });

      context('when token is double clicked', () => {
        beforeEach(() => {
          inputTagsWrapper.find('button').simulate('dblclick');
        });

        it('should render a textarea', () => {
          expect(inputTagsWrapper.find('textarea')).to.have.length(1);
        });

        context('when textarea is changed to non empty string', () => {
          const inputValue = nonEmptyString;

          beforeEach(() => {
            inputTagsWrapper.find('textarea').simulate('change', { target: { value: inputValue } });
          });

          it('should edit the token', () => {
            expect(handleEdit).to.have.been.calledWith(tags, tags.length - 1, nonEmptyString);
          });
        });

        context('when textarea is changed to empty string', () => {
          const inputValue = emptyString;

          beforeEach(() => {
            inputTagsWrapper.find('textarea').simulate('change', { target: { value: inputValue } });
          });

          it('should remove the token', () => {
            expect(handleRemove).to.have.been.calledWith(tags, tags.length - 1);
          });
        });

        context('when focus leaves textarea', () => {
          beforeEach(() => {
            inputTagsWrapper.find('textarea').simulate('blur');
          });

          it('should *not* render a textarea', () => {
            expect(inputTagsWrapper.find('textarea')).to.have.length(0);
          });
        });
      });
    });
  });

  describe('delete token', () => {
    context('when there is at least one tag', () => {
      beforeEach(() => {
        tags = ['delete me'];
        handleRemove = sinon.stub();

        inputTagsWrapper = mount(
          <InputTags
            tags={tags}
            handleInsert={noop}
            handleEdit={noop}
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
        handleRemove = sinon.stub();

        inputTagsWrapper = mount(
          <InputTags
            tags={tags}
            handleInsert={noop}
            handleEdit={noop}
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

/* TODO: make this a story */
describe('<SuggestionList />', () => {
  context('when input value is empty string', () => {
    const emptyInputValue = '';
    let suggestionListWrapper;

    beforeEach(() => {
      suggestionListWrapper = mount(
        <InputTags
          tags={[]}
          handleInsert={noop}
          handleEdit={noop}
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
          handleEdit={noop}
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
