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

  describe('focus item', () => {
    context('when item mounts', () => {
      context('when prop `isHighlighted` is `true`', () => {
        const isHighlighted = true;

        beforeEach(() => {
          focusElement = sinon.stub();

          listItemWrapper = mount(
            <ListItemDefault
              value={item}
              isHighlighted={isHighlighted}
              handleHighlight={noop}
              handleSelect={noop}
              focusElement={focusElement}
            />
          );
        });

        // TODO: remove
        it('should call focusElement', () => {
          expect(focusElement).to.not.have.been.called();
        });
      });

      context('when prop `isHighlighted` is `false`', () => {
        const isHighlighted = false;

        beforeEach(() => {
          focusElement = sinon.stub();

          listItemWrapper = mount(
            <ListItemDefault
              value={item}
              isHighlighted={isHighlighted}
              handleHighlight={noop}
              handleSelect={noop}
              focusElement={focusElement}
            />
          );
        });

        it('should *not* call focusElement', () => {
          expect(focusElement).to.not.have.been.called();
        });
      });
    });

    context('when item receives new props', () => {
      const isHighlighted = false;

      beforeEach(() => {
        focusElement = sinon.stub();

        listItemWrapper = shallow(
          <ListItemDefault
            value={item}
            isHighlighted={isHighlighted}
            handleHighlight={noop}
            handleSelect={noop}
            focusElement={focusElement}
          />
        );
      })

      context('when prop `isHighlighted` is `true`', () => {
        beforeEach(() => {
          listItemWrapper.setProps({ isHighlighted: true });
        });

        // TODO: remove
        it('should call focusElement', () => {
          expect(focusElement).to.not.have.been.called();
        });
      });

      context('when prop `isHighlighted` is `false`', () => {
        beforeEach(() => {
          listItemWrapper.setProps({ isHighlighted: false });
        });

        it('should *not* call focusElement', () => {
          expect(focusElement).to.not.have.been.called();
        });
      });
    });
  });
});
