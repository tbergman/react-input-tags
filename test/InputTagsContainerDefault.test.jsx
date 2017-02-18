import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import {
  handleInsertDefault,
  handleEditDefault,
  handleRemoveDefault,
} from '../src/implementation/InputTagsContainerDefault.jsx';

import { noop } from './util';
import { emptyString, item, items } from './mock';

describe('<InputTagsContainerDefault />', () => {
});

describe('handleInsertDefault()', () => {
  const currentTags = items;
  const newTag = item;

  const newTags = handleInsertDefault(currentTags, newTag);
  const expectedNewTags = [...items, item];

  it('should add the new tag to currentTags', () => {
    expect(newTags).to.deep.equal(expectedNewTags);
  });
});

describe('handleEditDefault()', () => {
  const currentTags = items;
  const editTagIndex = 1;
  const newValue = item;

  const newTags = handleEditDefault(currentTags, editTagIndex, newValue);
  const expectedNewTags = [items[0], newValue, items[2]];

  it('should edit the tag at the specified index', () => {
    expect(newTags).to.deep.equal(expectedNewTags);
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
