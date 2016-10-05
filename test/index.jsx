import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { TagsInput } from '../src';

describe('<TagsInput />', () => {
  describe('<input />', () => {
    let inputWrapper;

    before(() => {
      inputWrapper = shallow(
        <TagsInput
          tags={[]}
          handleInsert={() => {}}
          handleRemove={() => {}}
        />
      );
    });

    it('should render the input', () => {
      expect(inputWrapper.find('input')).to.have.length(1);
    });

    describe('onChange()', () => {
      let onChangeWrapper;
      const nonEmptyInputValue = 'a';

      before(() => {
        onChangeWrapper = shallow(
          <TagsInput
            tags={[]}
            handleInsert={() => {}}
            handleRemove={() => {}}
          />
        );

        onChangeWrapper.find('input').simulate('change', { target: { value: nonEmptyInputValue } });
      });

      it('should set the state `inputValue`', () => {
        expect(onChangeWrapper.state().inputValue).to.equal(nonEmptyInputValue);
      });
    });

    describe('onBlur()', () => {
      context('when state `inputValue` has length greater than `0`', () => {
        let onBlurWrapper;
        let onBlurTags;
        let onBlurHandleInsert;
        let onBlurHandleRemove;
        const nonEmptyInputValue = 'ken@ferguson.com';

        beforeEach(() => {
          onBlurTags = [];
          onBlurHandleInsert = sinon.stub();
          onBlurHandleRemove = sinon.stub();
          onBlurWrapper = shallow(
            <TagsInput
              tags={onBlurTags}
              handleInsert={onBlurHandleInsert}
              handleRemove={onBlurHandleRemove}
            />
          );

          onBlurWrapper.setState({ inputValue: nonEmptyInputValue });
          onBlurWrapper.find('input').simulate('blur');
        });

        it('should clear the state `inputValue`', () => {
          expect(onBlurWrapper.state().inputValue).to.equal('');
        });

        it('should insert the tag', () => {
          expect(onBlurHandleInsert).to.have.been.calledWith(onBlurTags, nonEmptyInputValue);
        });
      });

      context('when state `inputValue` has length of `0`', () => {
        let onBlurWrapper;
        let onBlurTags;
        let onBlurHandleInsert;
        let onBlurHandleRemove;
        const emptyInputValue = '';

        beforeEach(() => {
          onBlurTags = [];
          onBlurHandleInsert = sinon.stub();
          onBlurHandleRemove = sinon.stub();
          onBlurWrapper = shallow(
            <TagsInput
              tags={onBlurTags}
              handleInsert={onBlurHandleInsert}
              handleRemove={onBlurHandleRemove}
            />
          );

          onBlurWrapper.setState({ inputValue: emptyInputValue });
          onBlurWrapper.find('input').simulate('blur');
        });

        it('should * not * clear the state `inputValue`', () => {
          expect(onBlurWrapper.state().inputValue).to.equal(emptyInputValue);
        });

        it('should * not * insert the tag', () => {
          expect(onBlurHandleInsert).to.not.have.been.called();
        });
      });
    });

    /*
    describe('onKeyDown()', () => {
      context('when event `keyCode` is in `insertKeyCodes`', () => {
        const enterKeyCode = 13;

        context('when state `inputValue` has length greater than `0`', () => {
          const nonEmptyInputValue = 'abraham@lincoln.gov';

          beforeEach(() => {
            wrapper.setState({ inputValue: nonEmptyInputValue });
            wrapper.find('input').simulate('keydown', { keyCode: enterKeyCode });
          });

          it('should clear the state `inputValue`', () => {
            expect(wrapper.state().inputValue).to.equal('');
          });

          it('should insert the tag', () => {
            expect(handleInsert).to.have.been.calledWith(tags, nonEmptyInputValue);
          });
        });

        context('when state `inputValue` has length of `0`', () => {
          const emptyInputValue = '';

          beforeEach(() => {
            wrapper.setState({ inputValue: emptyInputValue });
            wrapper.find('input').simulate('keydown', { keyCode: enterKeyCode });
          });

          it('should clear the state `inputValue`', () => {
            expect(wrapper.state().inputValue).to.equal(emptyInputValue);
          });

          it('should * not * insert the tag', () => {
            expect(handleInsert).to.not.have.been.called();
          });
        });
      });

      context('when event `keyCode` is in `removeKeyCodes`', () => {
        const removeKeyCode = 8;

        context('when state `inputValue` has length of `0`', () => {
          const emptyInputValue = '';

          beforeEach(() => {
            wrapper.setState({ inputValue: emptyInputValue });
          });

          context('when prop `tags` has length greater than `0`', () => {
            let removeTags;

            beforeEach(() => {
              removeTags = ['one', 'two'];
              const removeWrapper = shallow(
                <TagsInput
                  tags={removeTags}
                  handleInsert={handleInsert}
                  handleRemove={handleRemove}
                />
              );
              removeWrapper.find('input').simulate('keydown', { keyCode: removeKeyCode });
            });

            it('should remove the last tag', () => {
              expect(handleRemove).to.have.been.calledWith(removeTags, removeTags.length - 1);
            });
          });

          context('when prop `tags` has length of `0`', () => {
            let removeTags;

            beforeEach(() => {
              removeTags = [];
              const removeWrapper = shallow(
                <TagsInput
                  tags={removeTags}
                  handleInsert={handleInsert}
                  handleRemove={handleRemove}
                />
              );
              removeWrapper.find('input').simulate('keydown', { keyCode: removeKeyCode });
            });

            it('should * not * remove the last tag', () => {
              expect(handleRemove).to.not.have.been.called();
            });
          });
        });

        context('when state `inputValue` has length greater than `0`', () => {
          const nonEmptyInputValue = 'user@domain.tld';

          beforeEach(() => {
            wrapper.setState({ inputValue: nonEmptyInputValue });
            wrapper.find('input').simulate('keydown', { keyCode: removeKeyCode });
          });

          it('should * not * remove the last tag', () => {
            expect(handleRemove).to.not.have.been.called();
          });
        });
      });

      context('when event `keyCode` is * not * found', () => {
        beforeEach(() => {
          wrapper.find('input').simulate('onkeydown', { keyCode: 65 });
        });

        it('should * not * insert the tag', () => {
          expect(handleInsert).to.not.have.been.called();
        });

        it('should * not * remove the tag', () => {
          expect(handleRemove).to.not.have.been.called();
        });
      });
    });
    */
  });
});
