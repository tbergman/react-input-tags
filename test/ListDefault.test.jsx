import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import {
  ListDefault,
  getListItemValueDefault,
  calcNextIndexDefault,
  calcPreviousIndexDefault,
} from '../src/implementation/ListDefault.jsx';
import { downKeyCode, upKeyCode, enterKeyCode, escapeKeyCode } from '../src/keyCodes';

import { noop } from './util';
import { items } from './mock';

describe('<ListDefault />', () => {
  let listWrapper;
  let handleSelect;
  let handleClose;

  describe('highlight next item', () => {
    beforeEach(() => {
      listWrapper = shallow(
        <ListDefault
          items={items}
          handleSelect={noop}
          handleClose={noop}
        />
      );
    });

    context('when list has focus', () => {
      context('when down key is pressed', () => {
        const oldHighlightedIndex = 0; // first item is highlighted by default
        const numItems = items.length;
        const newHighlightedIndex = calcNextIndexDefault(oldHighlightedIndex, numItems);

        beforeEach(() => {
          listWrapper.find('ul').simulate('keydown', { keyCode: downKeyCode });
        });

        it('should highlight the next item', () => {
          expect(listWrapper.state().highlightedIndex).to.equal(newHighlightedIndex);
        });
      });
    });
  });

  describe('highlight previous item', () => {
    beforeEach(() => {
      listWrapper = shallow(
        <ListDefault
          items={items}
          handleSelect={noop}
          handleClose={noop}
        />
      );
    });

    context('when list has focus', () => {
      context('when up key is pressed', () => {
        const oldHighlightedIndex = 0; // first item is highlighted by default
        const numItems = items.length;
        const newHighlightedIndex = calcPreviousIndexDefault(oldHighlightedIndex, numItems);

        beforeEach(() => {
          listWrapper.find('ul').simulate('keydown', { keyCode: upKeyCode });
        });

        it('should highlight the previous item', () => {
          expect(listWrapper.state().highlightedIndex).to.equal(newHighlightedIndex);
        });
      });
    });
  });

  describe('highlight item', () => {
    beforeEach(() => {
      listWrapper = mount(
        <ListDefault
          items={items}
          handleSelect={noop}
          handleClose={noop}
        />
      );
    });

    context('when component mounts', () => {
      const startHighlightedIndex = 0;

      it('first item should be highlighted', () => {
        expect(listWrapper.state().highlightedIndex).to.equal(startHighlightedIndex);
      });
    });

    context('when item is moused over', () => {
      const newHighlightedIndex = 1;

      beforeEach(() => {
        listWrapper.find('ul').childAt(newHighlightedIndex).simulate('mouseover');
      });

      it('should highlight the item', () => {
        expect(listWrapper.state().highlightedIndex).to.equal(newHighlightedIndex);
      });
    });
  });

  describe('select item', () => {
    beforeEach(() => {
      handleSelect = sinon.stub();

      listWrapper = shallow(
        <ListDefault
          items={items}
          handleSelect={handleSelect}
          handleClose={noop}
        />
      );
    });

    context('when list has focus', () => {
      context('when item is highlighted', () => {
        const highlightedIndex = 0; // first item is highlighted by default

        context('when enter key is pressed', () => {
          const value = getListItemValueDefault(items[highlightedIndex]);

          beforeEach(() => {
            listWrapper.find('ul').simulate('keydown', { keyCode: enterKeyCode });
          });

          it('should select the item', () => {
            expect(handleSelect).to.have.been.calledWith(value);
          });
        });
      });
    });
  });

  describe('close list', () => {
    beforeEach(() => {
      handleClose = sinon.stub();

      listWrapper = shallow(
        <ListDefault
          items={items}
          handleSelect={noop}
          handleClose={handleClose}
        />
      );
    });

    context('when list has focus', () => {
      context('when escape key is pressed', () => {
        beforeEach(() => {
          listWrapper.find('ul').simulate('keydown', { keyCode: escapeKeyCode });
        });

        it('should close the list', () => {
          expect(handleClose).to.have.been.called();
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
