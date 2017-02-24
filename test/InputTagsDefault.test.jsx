import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { InputTagsDefault, SuggestionList, calcNextIndexDefault, calcPreviousIndexDefault } from '../src/implementation/InputTagsDefault.jsx';
import {
  enterKeyCode,
  tabKeyCode,
  commaKeyCode,
  backspaceKeyCode,
  downKeyCode,
  upKeyCode,
  escapeKeyCode,
  aKeyCode,
} from '../src/keyCodes';

import { noop } from './util';
import { emptyString, nonEmptyString, items } from './mock';

// TODO: input mount
/*
it('should copy the font styling from the input to the mirror element', () => {
  const inputStyles = window.getComputedStyle(inputWrapper.find('#inputNode').node);
  const mirrorStyles = inputWrapper.find('#mirrorNode').node.style;
  MIRROR_STYLES.forEach((mStyle) => {
    expect(mirrorStyles[mStyle]).to.equal(inputStyles[mStyle]);
  });
})
*/;

describe('<InputTagsDefault />', () => {
  let inputTagsWrapper;
  let tags;
  let handleInsert;
  let handleEdit;
  let handleRemove;
  let suggestions;
  let handleUpdateSuggestions;
  let getSuggestionValue;

  describe('create token manually', () => {
    beforeEach(() => {
      tags = [];
      handleInsert = sinon.stub();

      inputTagsWrapper = mount(
        <InputTagsDefault
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
        expect(inputTagsWrapper.state().inputValue).to.equal(inputValue);
      });

      it('should set the state `showSuggestions` to be true', () => {
        expect(inputTagsWrapper.state().showSuggestions).to.equal(true);
      });

      context('when focus leaves input field', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('blur');
        });

        it('should insert typed string as token', () => {
          expect(handleInsert).to.have.been.calledWith(tags, inputValue);
        });

        it('should clear the state `inputValue`', () => {
          expect(inputTagsWrapper.state().inputValue).to.equal(emptyString);
        });

        it('should set the state `showSuggestions` to be false', () => {
          expect(inputTagsWrapper.state().showSuggestions).to.equal(false);
        });
      });

      context('when `enter` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: enterKeyCode });
        });

        it('should insert typed string as token', () => {
          expect(handleInsert).to.have.been.calledWith(tags, inputValue);
        });

        it('should clear the state `inputValue`', () => {
          expect(inputTagsWrapper.state().inputValue).to.equal(emptyString);
        });

        it('should set the state `showSuggestions` to be false', () => {
          expect(inputTagsWrapper.state().showSuggestions).to.equal(false);
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
          expect(inputTagsWrapper.state().inputValue).to.equal(emptyString);
        });

        it('should set the state `showSuggestions` to be false', () => {
          expect(inputTagsWrapper.state().showSuggestions).to.equal(false);
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
          expect(inputTagsWrapper.state().inputValue).to.equal(emptyString);
        });

        it('should set the state `showSuggestions` to be false', () => {
          expect(inputTagsWrapper.state().showSuggestions).to.equal(false);
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
          expect(inputTagsWrapper.state().inputValue).to.equal(inputValue);
        });

        it('should *not* set the state `showSuggestions` to be false', () => {
          expect(inputTagsWrapper.state().showSuggestions).to.not.equal(false);
        });
      });
    });

    context('when input field is changed to empty string', () => {
      const inputValue = emptyString;

      beforeEach(() => {
        inputTagsWrapper.find('input').simulate('change', { target: { value: inputValue } });
      });

      it('should set the state `inputValue`', () => {
        expect(inputTagsWrapper.state().inputValue).to.equal(inputValue);
      });

      it('should set the state `showSuggestions` to false', () => {
        expect(inputTagsWrapper.state().showSuggestions).to.equal(false);
      })

      context('when focus leaves input field', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('blur');
        });

        it('should *not* insert typed string as token', () => {
          expect(handleInsert).to.not.have.been.called();
        });
      });

      context('when `enter` key is pressed', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('keydown', { keyCode: enterKeyCode });
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

  describe('edit token', () => {
    context('when there is at least one tag', () => {
      beforeEach(() => {
        tags = ['edit me'];
        handleEdit = sinon.stub();
        handleRemove = sinon.stub();

        inputTagsWrapper = mount(
          <InputTagsDefault
            tags={tags}
            handleInsert={noop}
            handleEdit={handleEdit}
            handleRemove={handleRemove}
          />
        );
      });

      context('when token is clicked', () => {
        beforeEach(() => {
          inputTagsWrapper.find('button').parent().childAt(0).simulate('click');
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
          <InputTagsDefault
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
          <InputTagsDefault
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

  describe('suggestions', () => {
    beforeEach(() => {
      tags = [];
      handleInsert = sinon.stub();
      suggestions = items;
      handleUpdateSuggestions = sinon.stub();
      getSuggestionValue = sinon.stub();

      inputTagsWrapper = mount(
        <InputTagsDefault
          tags={tags}
          handleInsert={handleInsert}
          handleEdit={noop}
          handleRemove={noop}
          suggestions={suggestions}
          handleUpdateSuggestions={handleUpdateSuggestions}
          getSuggestionValue={getSuggestionValue}
        />
      );
    });

    describe('show suggestions', () => {
      context('when inputValue is non empty string', () => {
        const newInputValue = nonEmptyString;

        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('change', { target: { value: newInputValue }});
        });

        it('should update the suggestions', () => {
          expect(handleUpdateSuggestions).to.have.been.calledWith(newInputValue);
        });
      });
    })

    describe('highlight suggestion', () => {
      context('when inputValue is non empty string', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('change', { target: { value: nonEmptyString }});
        });

        it('first item should be highlighted', () => {
          expect(inputTagsWrapper.state().highlightedSuggestionIndex).to.equal(0);
        });

        context('when suggestion is moused over', () => {
          const newHighlightedIndex = 1;

          beforeEach(() => {
            inputTagsWrapper.find('ul').childAt(newHighlightedIndex).simulate('mouseover');
          });

          it('should highlight the item', () => {
            expect(inputTagsWrapper.state().highlightedSuggestionIndex).to.equal(newHighlightedIndex);
          });
        });

        context('when down key is pressed', () => {
          const oldHighlightedIndex = 0; // first item is highlighted by default
          const numItems = items.length;
          const newHighlightedIndex = calcNextIndexDefault(oldHighlightedIndex, numItems);

          beforeEach(() => {
            inputTagsWrapper.find('input').simulate('keydown', { keyCode: downKeyCode });
          });

          it('should highlight the next item', () => {
            expect(inputTagsWrapper.state().highlightedSuggestionIndex).to.equal(newHighlightedIndex);
          });
        });

        context('when up key is pressed', () => {
          const oldHighlightedIndex = 0; // first item is highlighted by default
          const numItems = items.length;
          const newHighlightedIndex = calcPreviousIndexDefault(oldHighlightedIndex, numItems);

          beforeEach(() => {
            inputTagsWrapper.find('input').simulate('keydown', { keyCode: upKeyCode });
          });

          it('should highlight the previous item', () => {
            expect(inputTagsWrapper.state().highlightedSuggestionIndex).to.equal(newHighlightedIndex);
          });
        });
      });
    });

    describe('select suggestion', () => {
      context('when inputValue is non empty string', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('change', { target: { value: nonEmptyString }});
        });

        context('when suggestion is clicked', () => {
          const suggestionsIndex = 0;

          beforeEach(() => {
            inputTagsWrapper.find('ul').childAt(suggestionsIndex).simulate('click');
          });

          it('should get the suggestion value', () => {
            expect(getSuggestionValue).to.have.been.calledWith(suggestions[suggestionsIndex]);
          });

          it('should insert the suggestion as token', () => {
            expect(handleInsert).to.have.been.calledWith(tags, getSuggestionValue(suggestions[suggestionsIndex]));
          });
        });

        context('when suggestion is highlighted and enter key is pressed', () => {
          const suggestionsIndex = 0; // first suggestion is highlighted by default

          beforeEach(() => {
            inputTagsWrapper.find('input').simulate('keydown', { keyCode: enterKeyCode });
          });

          it('should get the suggestion value', () => {
            expect(getSuggestionValue).to.have.been.calledWith(suggestions[suggestionsIndex]);
          });

          it('should insert the suggestion as token', () => {
            expect(handleInsert).to.have.been.calledWith(tags, getSuggestionValue(suggestions[suggestionsIndex]));
          });
        });

        context('when suggestion is highlighted and tab key is pressed', () => {
          const suggestionsIndex = 0; // first suggestion is highlighted by default

          beforeEach(() => {
            inputTagsWrapper.find('input').simulate('keydown', { keyCode: tabKeyCode });
          });

          it('should get the suggestion value', () => {
            expect(getSuggestionValue).to.have.been.calledWith(suggestions[suggestionsIndex]);
          });

          it('should insert the suggestion as token', () => {
            expect(handleInsert).to.have.been.calledWith(tags, getSuggestionValue(suggestions[suggestionsIndex]));
          });
        });

        context('when suggestion is highlighted and comma key is pressed', () => {
          const suggestionsIndex = 0; // first suggestion is highlighted by default

          beforeEach(() => {
            inputTagsWrapper.find('input').simulate('keydown', { keyCode: commaKeyCode });
          });

          it('should get the suggestion value', () => {
            expect(getSuggestionValue).to.have.been.calledWith(suggestions[suggestionsIndex]);
          });

          it('should insert the suggestion as token', () => {
            expect(handleInsert).to.have.been.calledWith(tags, getSuggestionValue(suggestions[suggestionsIndex]));
          });
        });
      });
    });

    describe('close suggestions', () => {
      context('when inputValue is non empty string', () => {
        beforeEach(() => {
          inputTagsWrapper.find('input').simulate('change', { target: { value: nonEmptyString }});
        });

        context('when escape key is pressed', () => {
          beforeEach(() => {
            inputTagsWrapper.find('input').simulate('keydown', { keyCode: escapeKeyCode });
          });

          it('should close the suggestion list', () => {
            expect(inputTagsWrapper.state().showSuggestions).to.equal(false);
          });
        });
      });
    });
  });
});

describe('calcNextIndexDefault()', () => {
  context('when numItems is one', () => {
    const numItems = 1;

    context('when oldIndex is start of list', () => {
      const oldIndex = 0;

      it('should return oldIndex', () => {
        expect(calcNextIndexDefault(oldIndex, numItems)).to.equal(oldIndex);
      });
    });
  });

  context('when numItems is greater than one', () => {
    const numItems = 2;

    context('when oldIndex is start of list', () => {
      const oldIndex = 0;

      it('should return oldIndex + 1', () => {
        expect(calcNextIndexDefault(oldIndex, numItems)).to.equal(oldIndex + 1);
      });
    });

    context('when oldIndex is end of list', () => {
      const oldIndex = numItems - 1;

      it('should return start of list', () => {
        expect(calcNextIndexDefault(oldIndex, numItems)).to.equal(0);
      });
    });
  });
});

describe('calcPreviousIndexDefault()', () => {
  context('when numItems is one', () => {
    const numItems = 1;

    context('when oldIndex is start of list', () => {
      const oldIndex = 0;

      it('should return oldIndex', () => {
        expect(calcPreviousIndexDefault(oldIndex, numItems)).to.equal(oldIndex);
      });
    });
  });

  context('when numItems is greater than one', () => {
    const numItems = 2;

    context('when oldIndex is start of list', () => {
      const oldIndex = 0;

      it('should return end of list', () => {
        expect(calcPreviousIndexDefault(oldIndex, numItems)).to.equal(numItems - 1);
      });
    });

    context('when oldIndex is end of list', () => {
      const oldIndex = numItems - 1;

      it('should return oldIndex - 1', () => {
        expect(calcNextIndexDefault(oldIndex, numItems)).to.equal(oldIndex - 1);
      });
    });
  });
});
