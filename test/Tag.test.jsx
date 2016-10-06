import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { Tag } from '../src';
import { defaultRenderTag } from '../src/default.jsx';

describe('<Tag />', () => {
  describe('onClick()', () => {
    let onClickWrapper;
    let onClickHandleRemove;

    beforeEach(() => {
      onClickHandleRemove = sinon.stub();
      onClickWrapper = shallow(
        <Tag
          value={'one'}
          handleRemove={onClickHandleRemove}
          renderTag={defaultRenderTag}
        />
      );

      onClickWrapper.find('button').simulate('click');
    });

    it('should remove the tag', () => {
      expect(onClickHandleRemove).to.have.been.called();
    });
  });
});
