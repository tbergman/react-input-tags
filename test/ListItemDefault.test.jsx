import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import { ListItemDefault } from '../src/implementation/ListItemDefault.jsx';

import { noop } from './util';
import { item } from './mock';

describe('<ListItemDefault />', () => {
  let listItemWrapper;
  let handleHighlight;
  let handleSelect;
  let focusElement;

  describe('highlight item', () => {
    beforeEach(() => {
      handleHighlight = sinon.stub();

      listItemWrapper = shallow(
        <ListItemDefault
          value={item}
          isHighlighted={false}
          handleHighlight={handleHighlight}
          handleSelect={noop}
        />
      );
    });

    context('when item is moused over', () => {
      beforeEach(() => {
        listItemWrapper.find('li').simulate('mouseover');
      });

      it('should highlight the item', () => {
        expect(handleHighlight).to.have.been.called();
      });
    });
  });

  describe('select item', () => {
    beforeEach(() => {
      handleSelect = sinon.stub();

      listItemWrapper = shallow(
        <ListItemDefault
          value={item}
          isHighlighted={false}
          handleHighlight={noop}
          handleSelect={handleSelect}
        />
      );
    });

    context('when item is clicked', () => {
      beforeEach(() => {
        listItemWrapper.find('li').simulate('click');
      });

      it('should select the item', () => {
        expect(handleSelect).to.have.been.called();
      });
    });
  });
});
