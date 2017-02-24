import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { TagDefault } from '../src/implementation/TagDefault.jsx';

import { noop } from './util';
import { item } from './mock';

describe('<TagDefault />', () => {
  let tagWrapper;
  let handleEdit;
  let handleRemove;

  beforeEach(() => {
    handleEdit = sinon.stub();
    handleRemove = sinon.stub();

    tagWrapper = shallow(
      <TagDefault
        value={item}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
      />
    );
  });

  describe('edit tag', () => {
    context('when tag is clicked', () => {
      beforeEach(() => {
        tagWrapper.childAt(0).simulate('click');
      });

      it('should edit the tag', () => {
        expect(handleEdit).to.have.been.called();
      });
    });
  });

  describe('remove tag', () => {
    context('when button is clicked', () => {
      beforeEach(() => {
        tagWrapper.find('button').simulate('click');
      });

      it('should remove the tag', () => {
        expect(handleRemove).to.have.been.called();
      });
    });
  });
});
