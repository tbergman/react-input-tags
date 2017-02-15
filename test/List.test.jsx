import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { List } from '../src/List.jsx';

describe('List', () => {
  let listWrapper;
  let items;

  describe('auto focus first item', () => {
    beforeEach(() => {
      items = ['apple'];

      listWrapper = shallow(
        <List
          items={items}
        />
      );
    });

    context('component mounts', () => {
      it('should auto focus the first item');
    });
  });
});
