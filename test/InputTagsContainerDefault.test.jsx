import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import {
  InputTagsContainerDefault,
  handleInsertDefault,
  handleRemoveDefault,
} from '../src/implementation/InputTagsContainerDefault.jsx';

import { noop } from './util';
import { emptyString, nonEmptyString, item, items } from './mock';

describe('<InputTagsContainerDefault />', () => {
  let inputTagsContainerWrapper;
  let tags;
  let handleUpdateTags;
  let suggestions;
  let handleUpdateSuggestions;

  describe('update tags', () => {
    beforeEach(() => {
      tags = items;
      handleUpdateTags = sinon.stub();

      inputTagsContainerWrapper = mount(
        <InputTagsContainerDefault
          tags={tags}
          handleUpdateTags={handleUpdateTags}
        />
      );
    });

    describe('create tag', () => {
      context('when input has non empty string', () => {
        beforeEach(() => {
          inputTagsContainerWrapper.find('input').simulate('change', { target: { value: item }});
        });

        context('when input loses focus', () => {
          beforeEach(() => {
            inputTagsContainerWrapper.find('input').simulate('blur');
          });

          it('should update tags', () => {
            expect(handleUpdateTags).to.have.been.called();
            // expect(handleUpdateTags).to.have.been.calledWith(handleInsertDefault(tags, tags.length, item));
          });
        });
      });
    });

    describe('edit tag', () => {
      context('when click tag', () => {
        const editTagIndex = 0;
        const newValue = 'cool';

        beforeEach(() => {
          inputTagsContainerWrapper.find('span').at(editTagIndex).childAt(0).simulate('click');
          // inputTagsContainerWrapper.find('span').at(editTagIndex).simulate('click');
        });

        context('when text area is changed to non empty string', () => {
          beforeEach(() => {
            inputTagsContainerWrapper.find('textarea').simulate('change', { target: { value: newValue }});
          });

          it('should update tags', () => {
            expect(handleUpdateTags).to.have.been.calledWith(handleEditDefault(tags, editTagIndex, newValue));
          });
        });
      });
    });

    describe('delete tag', () => {
      context('when click delete button', () => {
        const deleteTagIndex = 0;

        beforeEach(() => {
          inputTagsContainerWrapper.find('button').at(deleteTagIndex).simulate('click');
        });

        it('should update tags', () => {
          expect(handleUpdateTags).to.have.been.calledWith(handleRemoveDefault(tags, deleteTagIndex));
        });
      });
    });
  });

  describe('update suggestions', () => {
    beforeEach(() => {
      tags = [];
      suggestions = items;
      handleUpdateSuggestions = sinon.stub();

      inputTagsContainerWrapper = mount(
        <InputTagsContainerDefault
          tags={tags}
          handleUpdateTags={noop}
          suggestions={suggestions}
          handleUpdateSuggestions={handleUpdateSuggestions}
        />
      );
    });

    context('when input is changed', () => {
      const newInputValue = 'warm';

      beforeEach(() => {
        inputTagsContainerWrapper.find('input').simulate('change', { target: { value: newInputValue }});
      });

      it('should update suggestions', () => {
        expect(handleUpdateSuggestions).to.have.been.calledWith(newInputValue);
      });
    });
  });
});

describe('handleInsertDefault()', () => {
  describe('insert tag at end of tags', () => {
    const newTags = handleInsertDefault(items, items.length, item);
    const expectedNewTags = [...items, item];

    it('should add the new tag at the end of the array', () => {
      expect(newTags).to.deep.equal(expectedNewTags);
    });
  });

  describe('insert tag in between tags', () => {
    const newTags = handleInsertDefault(items, 1, item);
    const expectedNewTags = [items[0], item, items[1], items[2]];

    it('should add the new tag at the specified index', () => {
      expect(newTags).to.deep.equal(expectedNewTags);
    });
  });
});

describe('handleRemoveDefault()', () => {
  const currentTags = items;
  const removeTagIndex = 0;

  const newTags = handleRemoveDefault(currentTags, removeTagIndex);
  const expectedNewTags = [items[1], items[2]];

  it('should remove the tag at the specified index', () => {
    expect(newTags).to.deep.equal(expectedNewTags);
  });
});
