import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ReactTagging from './';

describe('<ReactTagging />', () => {
  const wrapper = shallow(<ReactTagging />);
  it('should render an input', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });
});
