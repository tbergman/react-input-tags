import { expect } from 'chai';

import * as utils from '../src/util';

describe('utils', () => {
  describe('arrayIncludes()', () => {
    const array = [1, 2, 3];
    it('should return `true` when the element is included in the array', () => {
      expect(utils.arrayIncludes(array, 2)).to.equal(true);
    });

    it('should return `false` when the element is not included in the array', () => {
      expect(utils.arrayIncludes(array, 4)).to.equal(false);
    });
  });
});
