import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { SuggestionListDefault } from '../src/implementation/SuggestionListDefault.jsx';

import { noop } from './util';
import { items } from './mock';

describe('<SuggestionListDefault />', () => {
  let suggestionListWrapper;
  let highlightedSuggestionIndex;
  let getSuggestionValue;
  let handleHighlight;
  let handleSelect;

  describe('highlight suggestion', () => {
    highlightedSuggestionIndex = 0;
    handleHighlight = sinon.stub();

    beforeEach(() => {
      suggestionListWrapper = mount(
        <SuggestionListDefault
          suggestions={items}
          highlightedSuggestionIndex={highlightedSuggestionIndex}
          getSuggestionValue={noop}
          handleHighlight={handleHighlight}
          handleSelect={noop}
        />
      );
    });

    context('when item is moused over', () => {
      const newHighlightedIndex = 1;

      beforeEach(() => {
        suggestionListWrapper.find('ul').childAt(newHighlightedIndex).simulate('mouseover');
      });

      it('should highlight the item', () => {
        expect(handleHighlight).to.have.been.calledWith(newHighlightedIndex);
      });
    });
  });

  describe('select item', () => {
    highlightedSuggestionIndex = 0;
    getSuggestionValue = sinon.stub();
    handleSelect = sinon.stub();

    beforeEach(() => {
      suggestionListWrapper = mount(
        <SuggestionListDefault
          suggestions={items}
          highlightedSuggestionIndex={highlightedSuggestionIndex}
          getSuggestionValue={getSuggestionValue}
          handleHighlight={noop}
          handleSelect={handleSelect}
        />
      );
    });

    context('when item is clicked', () => {
      beforeEach(() => {
        suggestionListWrapper.find('ul').childAt(highlightedSuggestionIndex).simulate('click');
      });

      it('should get the list item value', () => {
        expect(getSuggestionValue).to.have.been.calledWith(items[highlightedSuggestionIndex]);
      });

      it('should select the item', () => {
        expect(handleSelect).to.have.been.calledWith(handleSelect(items[highlightedSuggestionIndex]));
      });
    });
  });
});
