import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { Suggestion } from '../src/Suggestion.jsx';
import { defaultRenderSuggestion, defaultSuggestionClassName } from '../src/default.jsx';

describe('<Suggestion />', () => {
  describe('onClick()', () => {
    let onClickWrapper;
    let onClickHandleInsert;

    beforeEach(() => {
      onClickHandleInsert = sinon.stub();
      onClickWrapper = shallow(
        <Suggestion
          value={'one'}
          handleInsert={onClickHandleInsert}
          renderSuggestion={defaultRenderSuggestion}
        />
      );

      onClickWrapper.find(`.${defaultSuggestionClassName}`).simulate('click');
    });

    // TODO
    it('should cancel the event by calling preventDefault()');

    it('should insert the tag', () => {
      expect(onClickHandleInsert).to.have.been.called();
    });
  });
});
