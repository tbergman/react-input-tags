import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { ListItem } from '../src/ListItem.jsx';
// import * as ListItemExports from '../src/ListItem.jsx';

// const ListItem = ListItemExports.ListItem;

describe.only('<ListItem />', () => {
  /*
  describe('set focus to list item', () => {
    beforeEach(() => {
      item = { value: 'apple' };
      focusElement = sinon.stub();

      // focusElement = sinon.spy(ListItemExports, 'focusElement');
      // focusElement = sinon.stub(ListItemExports, 'focusElement');
    });

    afterEach(() => {
      // focusElement.restore();
    });

    context('when list item receives prop `isFocused: true`', () => {
      beforeEach(() => {
        listItemWrapper = shallow(
          <ListItem
            item={item}
            isFocused={true}
            focusElement={focusElement}
          />, { lifecycleExperimental: true }
        );
      });

      it('should call focusElement', () => {
        expect(focusElement).to.not.have.been.called();
        // expect(focus).to.have.been.calledWith(listItemWrapper);
      });
    });

    context('when list item receives prop `isFocused: false`', () => {
      beforeEach(() => {
        listItemWrapper = mount(
          <ListItem
            item={item}
            isFocused={false}
            focusElement={focusElement}
          />
        );
      });

      it('should *not* call focusElement', () => {
        expect(focusElement).to.have.been.called();
      });
    });
  });
  */
  let listItemWrapper;
  let item;
  let focusElement;

  describe('highlight item', () => {

  });

  describe('select item', () => {

  });
});
