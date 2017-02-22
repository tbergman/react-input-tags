import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { TagDefault, TagEdit, TagRead } from '../src/implementation/TagDefault.jsx';
import { enterKeyCode, tabKeyCode } from '../src/keyCodes';

import { noop } from './util';
import { item, nonEmptyString, emptyString } from './mock';

describe('<TagDefault />', () => {
  let tagWrapper;

  beforeEach(() => {
    tagWrapper = mount(
      <TagDefault
        value={item}
        handleEdit={noop}
        handleRemove={noop}
      />
    );
  });

  describe('enter edit mode', () => {
    context('when tag is clicked', () => {
      beforeEach(() => {
        tagWrapper.childAt(0).simulate('click');
      });

      it('should set isEditing state to true', () => {
        expect(tagWrapper.state().isEditing).to.equal(true);
      });
    });
  });

  describe('exit edit mode', () => {
    beforeEach(() => {
      tagWrapper.childAt(0).simulate('click');
    });

    context('when focus leaves textarea', () => {
      beforeEach(() => {
        tagWrapper.find('textarea').simulate('blur');
      });

      it('should set isEditing state to false', () => {
        expect(tagWrapper.state().isEditing).to.equal(false);
      });
    });
  });

  describe('remove should not enter edit mode', () => {
    beforeEach(() => {
      tagWrapper.find('button').simulate('click');
    });

    it('should not set isEditing state to true', () => {
      expect(tagWrapper.state().isEditing).to.not.equal(true);
    });
  });
});

describe('<TagEdit />', () => {
  let tagEditWrapper;
  let handleEdit;
  let handleRemove;
  let handleDoneEditing;
  let setIsEditing;
  let focusElement;
  let selectElement;

  beforeEach(() => {
    handleEdit = sinon.stub();
    handleRemove = sinon.stub();
    handleDoneEditing = sinon.stub();
    setIsEditing = sinon.stub();
    focusElement = sinon.stub();
    selectElement = sinon.stub();

    tagEditWrapper = mount(
      <TagEdit
        value={item}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
        handleDoneEditing={handleDoneEditing}
        setIsEditing={setIsEditing}
        focusElement={focusElement}
        selectElement={selectElement}
      />
    );
  });

  describe('auto focus and select text', () => {
    context('when component mounts', () => {
      it('should set focus to the textarea', () => {
        expect(focusElement).to.have.been.called();
      });

      it('and select the text in the textarea', () => {
        expect(selectElement).to.have.been.called();
      });
    });
  });

  describe('edit tag', () => {
    context('when textarea is changed to non empty string', () => {
      const inputValue = nonEmptyString;

      beforeEach(() => {
        tagEditWrapper.find('textarea').simulate('change', { target: { value: inputValue } });
      });

      it('should edit the token', () => {
        expect(handleEdit).to.have.been.called();
      });
    });
  });

  describe('remove tag', () => {
    context('when textarea is changed to empty string', () => {
      const inputValue = emptyString;

      beforeEach(() => {
        tagEditWrapper.find('textarea').simulate('change', { target: { value: inputValue } });
      });

      it('should remove the token', () => {
        expect(handleRemove).to.have.been.called();
      });
    });
  });

  describe('exit edit mode', () => {
    context('when focus leaves textarea', () => {
      beforeEach(() => {
        tagEditWrapper.find('textarea').simulate('blur');
      });

      it('should set isEditing state to false', () => {
        expect(setIsEditing).to.have.been.calledWith(false);
      });

      it('should handle done editing', () => {
        expect(handleDoneEditing).to.have.been.called();
      });
    });

    context('when enter is pressed', () => {
      beforeEach(() => {
        tagEditWrapper.find('textarea').simulate('keydown', { keyCode: enterKeyCode });
      });

      it('should set isEditing state to false', () => {
        expect(setIsEditing).to.have.been.calledWith(false);
      });

      it('should handle done editing', () => {
        expect(handleDoneEditing).to.have.been.called();
      });
    });

    context('when tab is pressed', () => {
      beforeEach(() => {
        tagEditWrapper.find('textarea').simulate('keydown', { keyCode: tabKeyCode });
      });

      it('should set isEditing state to false', () => {
        expect(setIsEditing).to.have.been.calledWith(false);
      });

      it('should handle done editing', () => {
        expect(handleDoneEditing).to.have.been.called();
      });
    });
  });
});

describe('<TagRead />', () => {
  let tagReadWrapper;
  let handleRemove;
  let setIsEditing;

  beforeEach(() => {
    handleRemove = sinon.stub();
    setIsEditing = sinon.stub();

    tagReadWrapper = shallow(
      <TagRead
        value={item}
        handleRemove={handleRemove}
        setIsEditing={setIsEditing}
      />
    );
  });

  describe('remove tag', () => {
    context('when remove button is clicked', () => {
      beforeEach(() => {
        tagReadWrapper.find('button').simulate('click');
      });

      it('should remove the tag', () => {
        expect(handleRemove).to.have.been.called();
      });
    });
  });

  describe('enter edit mode', () => {
    context('when tag is clicked', () => {
      beforeEach(() => {
        tagReadWrapper.childAt(0).simulate('click');
      });

      it('should set isEditing state to true', () => {
        expect(setIsEditing).to.have.been.calledWith(true);
      });
    });
  });
});
