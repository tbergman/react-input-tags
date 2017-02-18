import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { ListDefault } from '../src/implementation/ListDefault.jsx';

import { noop } from './util';
import { items } from './mock';

describe('<ListDefault />', () => {
  let listWrapper;
  let highlightedIndex;
  let getListItemValue;
  let handleHighlight;
  let handleSelect;

  describe('highlight item', () => {
    highlightedIndex = 0;
    handleHighlight = sinon.stub();

    beforeEach(() => {
      listWrapper = mount(
        <ListDefault
          items={items}
          highlightedIndex={highlightedIndex}
          getListItemValue={noop}
          handleHighlight={handleHighlight}
          handleSelect={noop}
        />
      );
    });

    context('when item is moused over', () => {
      const newHighlightedIndex = 1;

      beforeEach(() => {
        listWrapper.find('ul').childAt(newHighlightedIndex).simulate('mouseover');
      });

      it('should highlight the item', () => {
        expect(handleHighlight).to.have.been.calledWith(newHighlightedIndex);
      });
    });
  });

  describe('select item', () => {
    highlightedIndex = 0;
    getListItemValue = sinon.stub();
    handleSelect = sinon.stub();

    beforeEach(() => {
      listWrapper = mount(
        <ListDefault
          items={items}
          highlightedIndex={highlightedIndex}
          getListItemValue={getListItemValue}
          handleHighlight={noop}
          handleSelect={handleSelect}
        />
      );
    });

    context('when item is clicked', () => {
      beforeEach(() => {
        listWrapper.find('ul').childAt(highlightedIndex).simulate('click');
      });

      it('should get the list item value', () => {
        expect(getListItemValue).to.have.been.calledWith(items[highlightedIndex]);
      });

      it('should select the item', () => {
        expect(handleSelect).to.have.been.calledWith(handleSelect(items[highlightedIndex]));
      });
    });
  });
});
