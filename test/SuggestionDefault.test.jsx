import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import { SuggestionDefault } from '../src/implementation/SuggestionDefault.jsx';

import { noop } from './util';
import { suggestion } from './mock';

describe('<SuggestionDefault />', () => {
  let suggestionWrapper;
  let handleHighlight;
  let handleSelect;
  let focusElement;

  describe('highlight suggestion', () => {
    beforeEach(() => {
      handleHighlight = sinon.stub();

      suggestionWrapper = shallow(
        <SuggestionDefault
          value={suggestion}
          isHighlighted={false}
          handleHighlight={handleHighlight}
          handleSelect={noop}
        />
      );
    });

    context('when suggestion is moused over', () => {
      beforeEach(() => {
        suggestionWrapper.find('li').simulate('mouseover');
      });

      it('should highlight the suggestion', () => {
        expect(handleHighlight).to.have.been.called();
      });
    });
  });

  describe('select suggestion', () => {
    beforeEach(() => {
      handleSelect = sinon.stub();

      suggestionWrapper = shallow(
        <SuggestionDefault
          value={suggestion}
          isHighlighted={false}
          handleHighlight={noop}
          handleSelect={handleSelect}
        />
      );
    });

    context('when suggestion is clicked', () => {
      beforeEach(() => {
        suggestionWrapper.find('li').simulate('click');
      });

      it('should select the suggestion', () => {
        expect(handleSelect).to.have.been.called();
      });
    });
  });
});
